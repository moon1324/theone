import React from "react";
import S from "./style";
import SuggestionBoard from "./SuggestionBoard";
import SuggestionPost from "./SuggestionPost";

const Suggestion = () => {
    return (
        <S.SuggestionContainer>
            <S.SuggestionTitle>건의사항</S.SuggestionTitle>
            <SuggestionBoard />
            {/* <SuggestionPost /> */}
        </S.SuggestionContainer>
    );
};

export default Suggestion;
