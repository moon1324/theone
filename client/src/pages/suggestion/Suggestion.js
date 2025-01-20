import React from "react";
import S from "./style";
import { Outlet } from "react-router-dom";

const Suggestion = () => {
    return (
        <S.SuggestionContainer>
            <S.SuggestionTitle>건의사항</S.SuggestionTitle>
            <Outlet />
        </S.SuggestionContainer>
    );
};

export default Suggestion;
