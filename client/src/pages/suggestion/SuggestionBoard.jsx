import React from "react";
import S from "./style";

const SuggestionBoard = () => {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>건의사항 첫 게시글</th>
                            <th>문승현</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>여기 뭐하는데냐</th>
                            <th>이유비</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>Happy New Year~~</th>
                            <th>오푸른솔</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <th>모바일도 있었으면 좋겠어요~</th>
                            <th>김예찬</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <th>사진 저장소도 있었으면 좋겠다~</th>
                            <th>고요한</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>6</th>
                            <th>오빠파이팅</th>
                            <th>문지현</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>7</th>
                            <th>오빠파이팅2</th>
                            <th>문수현</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>8</th>
                            <th>신기하당^^</th>
                            <th>최성은</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>9</th>
                            <th>큐티나눔좀요</th>
                            <th>이하늘</th>
                            <th>2024.12.31</th>
                        </tr>
                        <tr>
                            <th>10</th>
                            <th>2025년도 화이팅</th>
                            <th>이시야</th>
                            <th>2024.12.31</th>
                        </tr>
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
