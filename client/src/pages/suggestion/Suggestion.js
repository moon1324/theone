import React from "react";
import S from "./style";

const Suggestion = () => {
    return (
        <S.SuggestionContainer>
            <S.SuggestionTitle>건의사항</S.SuggestionTitle>
            <S.SuggestionDescription>
                건의사항 게시판은 현재 더원공동체 페이지에 대한 피드백과, 앞으로 더원공동체 페이지에 대해 여러분의 의견을 공유하는 장소입니다.
            </S.SuggestionDescription>
            <S.SuggestionDescription>
                바꿨으면 하는 기능에 대한 부분이나, 추가했으면 하는 기능 또는 페이지에 대한 아이디어나 요청사항을 글로 남겨주세요!
            </S.SuggestionDescription>
            <S.SuggestionDescription>여러분의 의견을 기다려요!</S.SuggestionDescription>
            <S.SuggestionBox>
                <S.SuggestionBoxHeader>
                    <S.SelectDropdown></S.SelectDropdown>
                    <S.SearchBar></S.SearchBar>
                    <S.WriteButton></S.WriteButton>
                </S.SuggestionBoxHeader>
                <S.SuggestionBoxContent></S.SuggestionBoxContent>
            </S.SuggestionBox>
        </S.SuggestionContainer>
    );
};

export default Suggestion;
