import React, { useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import TheoneButton from "../../components/button/TheoneButton";
import Dropdown from "../../components/dropdown/Dropdown";
import Input from "../../components/input/style";
import useInput from "../../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const SuggestionBoard = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dropdownItem, setDropdownItem] = useState("전체");
    const [searchValue, setSearchValue, handleSearchChange] = useInput("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const hasEmptyRows = suggestions.length < 10;

    const dropdownOptions = ["전체", "제목", "내용", "제목+내용", "작성자"];
    const navigate = useNavigate();

    // 한글 -> 영어 매핑 객체
    const searchTypeMapping = {
        전체: "all",
        제목: "title",
        내용: "content",
        "제목+내용": "all",
        작성자: "userName",
    };

    const getSuggestion = async (searchType = "all", searchValue = "", page = 1) => {
        setLoading(true);
        try {
            // 14.5.86.192:8090
            // 192.168.32.99:8090
            const response = await fetch(`http://14.5.86.192:8090/api/suggestion?page=${page}&searchType=${searchType}&searchValue=${searchValue}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Failed to fetch suggestions");
            }

            const result = await response.json();
            console.log(result);
            console.log(result.data);
            console.log(result.data.content);

            setSuggestions(result.data.content);
            setTotalPages(result.data.totalPages);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
        const searchType = searchTypeMapping[dropdownItem];
        getSuggestion(searchType, searchValue, page);
    };

    const handleSearchSubmit = () => {
        setCurrentPage(1);
        const searchType = searchTypeMapping[dropdownItem];
        getSuggestion(searchType, searchValue, 1);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearchSubmit();
        }
    };

    const onClickNavigateSuggestionWrite = () => {
        navigate(`/suggestion/write`);
    };

    useEffect(() => {
        getSuggestion();
    }, []);

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
                    <Dropdown data={dropdownOptions} onChange={(value) => setDropdownItem(value)} />
                    <S.SearchBar>
                        <Input
                            variant={"default"}
                            size={"default"}
                            border={"default"}
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyPress={handleKeyPress}
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" onClick={handleSearchSubmit} />
                    </S.SearchBar>
                    <TheoneButton
                        variant={"primary"}
                        shape={"default"}
                        size={"default"}
                        border={"default"}
                        color={"defalut"}
                        onClick={onClickNavigateSuggestionWrite}
                    >
                        글 쓰기
                    </TheoneButton>
                </S.SuggestionPostBoxHeader>
                <S.SuggestionPostTable hasEmptyRows={hasEmptyRows}>
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
                        {loading ? (
                            <tr>
                                <td colSpan="5">
                                    <S.SuggestionPostTableTdMessage>
                                        <S.SuggestionDescription>Loading...</S.SuggestionDescription>
                                    </S.SuggestionPostTableTdMessage>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan="5">{error}</td>
                            </tr>
                        ) : suggestions.length > 0 ? (
                            <>
                                {suggestions.map((suggestion, index) => (
                                    <tr key={suggestion.suggestionId} onClick={() => navigate(`/suggestion/${suggestion.suggestionId}`)}>
                                        <td>{index + 1 + (currentPage - 1) * 10}</td>
                                        <td>{suggestion.title}</td>
                                        <td>{suggestion.userName}</td>
                                        <td>{suggestion.createdAt}</td>
                                        <td>{suggestion.hits}</td>
                                    </tr>
                                ))}
                                {Array.from({ length: 10 - suggestions.length }).map((_, idx) => (
                                    <tr className="empty" key={`empty-${idx}`}>
                                        <td colSpan="5">&nbsp;</td>
                                    </tr>
                                ))}
                            </>
                        ) : searchValue ? (
                            <tr>
                                <td colSpan="5">
                                    <S.SuggestionPostTableTdMessage>
                                        <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
                                        <S.SuggestionDescription>'{searchValue}' 에 해당하는 검색 결과가 없습니다.</S.SuggestionDescription>
                                        <S.SuggestionDescription>다른 검색어를 시도해보세요!</S.SuggestionDescription>
                                    </S.SuggestionPostTableTdMessage>
                                </td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="5">
                                    <S.SuggestionPostTableTdMessage>
                                        <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
                                        <S.SuggestionDescription>게시된 글이 아직 없습니다.</S.SuggestionDescription>
                                        <S.SuggestionDescription>글을 작성해주세요!</S.SuggestionDescription>
                                    </S.SuggestionPostTableTdMessage>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </S.SuggestionPostTable>
                <S.SuggestionPagination>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <div key={i + 1} className={i + 1 === currentPage ? "active" : ""} onClick={() => handlePageClick(i + 1)}>
                            {i + 1}
                        </div>
                    ))}
                </S.SuggestionPagination>
            </S.SuggestionPostBox>
        </S.SuggestionBoardContainer>
    );
};

export default SuggestionBoard;
