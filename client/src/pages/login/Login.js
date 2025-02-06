import React from "react";
import { NavLink } from "react-router-dom";
import S from "./style";

const Login = () => {
    const REACT_APP_KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = `http://localhost:3000/oauth/kakao`;
    // const KAKAO_REDIRECT_URI = `http://theone.onl/oauth/kakao`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    // useEffect(() => {
    //     console.log(REACT_APP_KAKAO_REST_API_KEY);
    // }, []);

    const handleKakaoLogin = () => {
        //kakaoURL로 이동
        window.location.href = kakaoURL;
    };

    return (
        <S.LoginContainer>
            <S.LoginLogoWrapper>
                <NavLink to={"/"}>
                    <img src={process.env.PUBLIC_URL + "global/images/new_logo.png"} alt="logo" />
                </NavLink>
            </S.LoginLogoWrapper>
            <S.LoginDescriptionContainer>
                <S.LoginDescriptionTitle>LOGIN / JOIN</S.LoginDescriptionTitle>
                <S.LoginDescriptionContent>로그인 없이도 페이지에 접속 가능합니다!</S.LoginDescriptionContent>
                <S.LoginDescriptionContent>글을 쓰기 원한다면 로그인 또는 회원가입을 진행해주세요!</S.LoginDescriptionContent>
            </S.LoginDescriptionContainer>
            <S.LoginButtonsContainer>
                <S.LoginButton>
                    {/* 카카오 버튼을 눌렀을 때 회원가입 팝업, 완료된 후 로그인 상태로 home으로 이동 */}
                    <S.KakaoButton className="KakaoButton" onClick={handleKakaoLogin}>
                        <img src={process.env.PUBLIC_URL + "global/images/talk.svg"} alt="kakao-talk-icon" />
                        <span>카카오 로그인</span>
                        <div />
                    </S.KakaoButton>
                </S.LoginButton>
                <S.HomeButton>
                    <NavLink to={"/"}>홈으로 이동</NavLink>
                </S.HomeButton>
            </S.LoginButtonsContainer>
        </S.LoginContainer>
    );
};

export default Login;
