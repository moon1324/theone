import React from "react";
import S from "./style";

const Login = () => {
    return (
        <S.LoginContainer>
            <S.LoginLogoWrapper>
                <img src={process.env.PUBLIC_URL + "global/images/new_logo.png"} alt="logo" />
            </S.LoginLogoWrapper>
            <S.LoginBoxWrapper>
                <S.LoginDescriptionContainer>
                    <S.LoginDescriptionTitle>LOGIN / JOIN</S.LoginDescriptionTitle>
                    <S.LoginDescriptionContent>로그인 없이도 페이지에 접속 가능합니다!</S.LoginDescriptionContent>
                    <S.LoginDescriptionContent>글을 쓰기 원한다면 로그인 또는 회원가입을 진행해주세요!</S.LoginDescriptionContent>
                </S.LoginDescriptionContainer>
                <S.LoginButtonsContainer>
                    <S.LoginButton></S.LoginButton>
                    또는
                    <S.LoginButton></S.LoginButton>
                </S.LoginButtonsContainer>
            </S.LoginBoxWrapper>
        </S.LoginContainer>
    );
};

export default Login;
