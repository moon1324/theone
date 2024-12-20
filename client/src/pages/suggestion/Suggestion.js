import React from "react";
import S from "./style";
import SuggestionBoard from "./SuggestionBoard";

const Suggestion = () => {
    return (
        <S.SuggestionContainer>
            <S.SuggestionTitle>건의사항</S.SuggestionTitle>
            <SuggestionBoard />
        </S.SuggestionContainer>
    );
};

export default Suggestion;
