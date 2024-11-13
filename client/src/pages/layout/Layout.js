import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import S from "./style";

const Layout = () => {
    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderContainer>
                    <S.LogoWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/new_logo.png"} alt="logo" />
                    </S.LogoWrapper>
                    <S.Nav>
                        <NavLink to={"/"}>
                            <div>HOME</div>
                        </NavLink>
                        <NavLink to={"/about"}>
                            <div>공동체 소개</div>
                        </NavLink>
                        <NavLink to={"/suggestion"}>
                            <div>건의사항</div>
                        </NavLink>
                        <NavLink to={"/login"}>
                            <div>로그인/회원가입</div>
                        </NavLink>
                    </S.Nav>
                </S.HeaderContainer>
            </S.Header>
            <S.Main>
                <Outlet />
            </S.Main>
            <S.Footer>
                <S.SocialMediaLinkContainer>
                    <S.SocialMediaImageWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/Instagram_Glyph_Gradient.png"}></img>
                    </S.SocialMediaImageWrapper>
                    <S.SocialMediaImageWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/youtube_social_icon_red.png"}></img>
                    </S.SocialMediaImageWrapper>
                </S.SocialMediaLinkContainer>
                <S.ContactWrapper>Copyright ⓒ THEONE COMMUNITY. All rights reserved. | T. 010-5025-1824 | kjh@gmail.com</S.ContactWrapper>
            </S.Footer>
        </S.Wrapper>
    );
};

export default Layout;
