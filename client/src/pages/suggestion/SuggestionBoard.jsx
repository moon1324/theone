import React, {useEffect, useState} from "react";
import S from "./style";
import {useNavigate} from "react-router-dom";

const SuggestionBoard = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getSuggestion();
    }, []);

    const getSuggestion = async () => {
        try {
            const response = await fetch(`http://14.5.86.192:8090/api/suggestion`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) {
                throw new Error("Failed to get top ranking schedules");
            }

            const responseJson = await response.json();
            const suggestionList = responseJson.data;

            setSuggestions(suggestionList);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleDetailButtonClick = (commentId) => {
        navigate(`/schedules/${commentId}`);
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
                    <S.SelectDropdown></S.SelectDropdown>
                    <S.SearchBar></S.SearchBar>
                    <S.WriteButton>글 쓰기</S.WriteButton>
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
                        <tr key={suggestion.suggestionId}>
                            <td>{index + 1}</td>
                            <td>{suggestion.title}</td>
                            <td>{suggestion.userId}</td>
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
