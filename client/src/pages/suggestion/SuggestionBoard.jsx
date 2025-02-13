import React, { useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import TheoneButton from "../../components/button/TheoneButton";
import Dropdown from "../../components/dropdown/Dropdown";
import Input from "../../components/input/style";
import useInput from "../../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faMagnifyingGlass, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SuggestionBoard = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dropdownItem, setDropdownItem] = useState("전체");
    const [searchValue, setSearchValue, handleSearchChange] = useInput("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortByDate, setSortByDate] = useState("desc");
    const [sortByHits, setSortByHits] = useState("desc");
    const [sortByLike, setSortByLike] = useState("desc");

    const hasEmptyRows = suggestions.length < 10;

    const dropdownOptions = [
        "전체",
        "제목",
        "내용",
        // "댓글",
        "작성자",
    ];

    const navigate = useNavigate();

    const { isLogin } = useSelector((state) => state.login);

    // 한글 -> 영어 매핑 객체
    const searchTypeMapping = {
        전체: "all",
        제목: "title",
        내용: "content",
        // 댓글: "comment",
        작성자: "userName",
    };

    const getTimeAgo = (createdAt) => {
        const now = new Date();
        const createdTime = new Date(createdAt);
        const diffInMs = now - createdTime;
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInWeeks = Math.floor(diffInDays / 7);
        const diffInMonths = Math.floor(diffInWeeks / 4.345); // average weeks per month
        const diffInYears = Math.floor(diffInMonths / 12);

        if (diffInMinutes < 1) return "방금 전";
        if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
        if (diffInHours < 24) return `${diffInHours}시간 전`;
        if (diffInDays < 2) return `하루 전`;
        if (diffInDays < 7) return `${diffInDays}일 전`;
        if (diffInWeeks < 4) return `${diffInWeeks}주 전`;
        if (diffInMonths < 12) return `${diffInMonths}달 전`;
        return `${diffInYears}년 전`;
    };

    const getSuggestion = async (searchType = "all", searchValue = "", page = 1, sortBy = "date", sortType = "desc") => {
        setLoading(true);
        try {
            // 14.5.86.192:8090
            // 192.168.32.99:8090
            const response = await fetch(
                `http://14.5.86.192:8090/api/suggestion?page=${page}&searchType=${searchType}&searchValue=${searchValue}&sortBy=${sortBy}&sortType=${sortType}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch suggestions");
            }

            const result = await response.json();
            console.log(result);
            console.log(result.data);
            console.log(result.data.content);
            setSuggestions(result.data.content);

            // const sortedSuggestions = result.data.content.sort((a, b) => b.suggestionId - a.suggestionId);
            // setSuggestions(sortedSuggestions);
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
        if (!isLogin) {
            alert("글을 쓰기 원한다면 로그인 해주세요!");
            navigate("/login");
        } else {
            navigate("/suggestion/write");
        }
    };

    const handleSortByDate = () => {
        const direction = sortByDate === "asc" ? "desc" : "asc";
        setSortByDate(direction);
        setCurrentPage(1);
        const searchType = searchTypeMapping[dropdownItem];
        getSuggestion(searchType, searchValue, 1, "date", direction);
    };

    const handleSortByHits = () => {
        const direction = sortByHits === "asc" ? "desc" : "asc";
        setSortByHits(direction);
        setCurrentPage(1);
        const searchType = searchTypeMapping[dropdownItem];
        getSuggestion(searchType, searchValue, 1, "hits", direction);
    };

    const handleSortByLike = () => {
        const direction = sortByLike === "asc" ? "desc" : "asc";
        setSortByLike(direction);
        setCurrentPage(1);
        const searchType = searchTypeMapping[dropdownItem];
        getSuggestion(searchType, searchValue, 1, "like", direction);
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
                            <th>작성자</th>
                            <th>제목</th>
                            <th onClick={handleSortByDate}>작성일시</th>
                            <th onClick={handleSortByHits}>조회수</th>
                            <th onClick={handleSortByLike}>공감수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr className="cursor-default">
                                <td colSpan="5">
                                    <S.SuggestionPostTableTdMessage>
                                        <S.SuggestionDescription>Loading...</S.SuggestionDescription>
                                    </S.SuggestionPostTableTdMessage>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr className="cursor-default">
                                <td colSpan="5">{error}</td>
                            </tr>
                        ) : suggestions.length > 0 ? (
                            <>
                                {suggestions.map((suggestion, index) => (
                                    <tr key={suggestion.suggestionId} onClick={() => navigate(`/suggestion/${suggestion.suggestionId}`)}>
                                        <td>{suggestion.suggestionId}</td>
                                        <td>{suggestion.userName}</td>
                                        <td>{suggestion.title}</td>
                                        <td>{getTimeAgo(suggestion.createdAt)}</td>
                                        <td>{suggestion.hits}</td>
                                        <td>{suggestion.likeCount}</td>
                                    </tr>
                                ))}
                                {Array.from({ length: 10 - suggestions.length }).map((_, idx) => (
                                    <tr className="empty cursor-default" key={`empty-${idx}`}>
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
                    <S.PaginationArrowsContainer>
                        {currentPage > 2 && <FontAwesomeIcon icon={faAnglesLeft} onClick={() => handlePageClick(1)} />}
                        {currentPage > 1 && <FontAwesomeIcon icon={faAngleLeft} onClick={() => handlePageClick(currentPage - 1)} />}
                    </S.PaginationArrowsContainer>
                    <S.PaginationNumbersContainer>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1 + Math.floor((currentPage - 1) / 5) * 5)
                            .filter((page) => page <= totalPages)
                            .map((page) => (
                                <div key={page} className={page === currentPage ? "active" : ""} onClick={() => handlePageClick(page)}>
                                    {page}
                                </div>
                            ))}
                    </S.PaginationNumbersContainer>
                    <S.PaginationArrowsContainer>
                        {currentPage < totalPages && <FontAwesomeIcon icon={faAngleRight} onClick={() => handlePageClick(currentPage + 1)} />}
                        {currentPage + 1 < totalPages && <FontAwesomeIcon icon={faAnglesRight} onClick={() => handlePageClick(totalPages)} />}
                    </S.PaginationArrowsContainer>
                </S.SuggestionPagination>
            </S.SuggestionPostBox>
        </S.SuggestionBoardContainer>
    );
};

export default SuggestionBoard;
