import React, { useEffect, useRef, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/Dropdown";
import Input from "../../components/input/style";
import useInput from "../../hooks/useInput";

const SuggestionBoard = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useInput hook 사용
    const [searchValue, setSearchValue, handleSearchChange] = useInput("");
    const searchRef = useRef(null);

    // dropdown 리스트 목록
    const dropdownLi = { data: ["제목", "내용", "제목+내용", "작성자"] };

    const navigate = useNavigate();

    useEffect(() => {
        getSuggestion();
    }, []);

    const getSuggestion = async () => {
        try {
            const response = await fetch(`http://localhost:8090/api/suggestion`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error("Failed to get Suggestion");
            }

            const responseJson = await response.json();
            const suggestionList = responseJson.data;

            console.log("suggestionList : " + JSON.stringify(suggestionList));

            setSuggestions(suggestionList);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleDetailButtonClick = (suggestionId) => {
        navigate(`/suggestion/${suggestionId}`);
    };

    const handleWriteButtonClick = () => {
        navigate(`/suggestion/write`);
    };

    // search

    const handleSearchSubmit = async () => {
        // navigate(`/search?value=${searchValue}`);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchValue("");
            }
        };

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setSearchValue]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearchSubmit();
        }
    };

    return (
        <S.SuggestionBoardContainer>
            <S.SuggestionDescriptionContainer>
                <S.SuggestionDescription>
                    건의사항 게시판은 현재 더원공동체 페이지에 대한 피드백과, 앞으로 더원공동체 페이지에 대해 여러분의 의견을 공유하는 장소입니다.
                </S.SuggestionDescription>
                <S.SuggestionDescription>
                    바꿨으면 하는 기능에 대한 부분이나, 추가했으면 하는 기능 또는 페이지에 대한 아이디어나 요청사항을 글로 남겨주세요!
                </S.SuggestionDescription>
                <S.SuggestionDescription>여러분의 의견을 기다려요!</S.SuggestionDescription>
            </S.SuggestionDescriptionContainer>
            <S.SuggestionPostBox>
                <S.SuggestionPostBoxHeader>
                    {/* <S.SelectDropdown></S.SelectDropdown> */}
                    <Dropdown props={dropdownLi}></Dropdown>
                    <Input
                        // variant={"default"}
                        // size={"default"}
                        // border={"default"}
                        value={searchValue}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                    />
                    <S.WriteButton onClick={() => handleWriteButtonClick()}>글 쓰기</S.WriteButton>
                </S.SuggestionPostBoxHeader>
                <S.SuggestionPostTable>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>이름</th>
                            <th>날짜</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suggestions.map((suggestion, index) => (
                            <tr key={suggestion.suggestionId} onClick={() => handleDetailButtonClick(suggestion.suggestionId)}>
                                <td>{index + 1}</td>
                                <td>{suggestion.title}</td>
                                <td>{suggestion.userName}</td>
                                <td>{suggestion.createdAt}</td>
                                <td>{suggestion.hits}</td>
                            </tr>
                        ))}
                    </tbody>
                </S.SuggestionPostTable>
                <S.SuggestionPagination>
                    <div>1</div>
                    <div>2</div>
                </S.SuggestionPagination>
            </S.SuggestionPostBox>
        </S.SuggestionBoardContainer>
    );
};

export default SuggestionBoard;
