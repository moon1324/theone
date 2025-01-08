import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import S from "./style";

const Layout = () => {
    const location = useLocation();
    const path = location.pathname;
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     console.log(path);
    // }, [path]);

    const handleHomeClick = () => {
        if (path === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleSocialMediaRedirect = (url) => {
        window.open(url, "_blank");
    };

    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderContainer>
                    {/* logo를 눌렀을 때 home으로 이동 */}
                    <S.LogoWrapper>
                        {/* 경로가 /일때 home을 누르면 스크롤업 되게 */}
                        <NavLink to={"/"} onClick={handleHomeClick}>
                            <img src={process.env.PUBLIC_URL + "global/images/new_logo.png"} alt="logo" />
                        </NavLink>
                    </S.LogoWrapper>
                    <S.Nav>
                        {/* 경로가 /일때 home을 누르면 스크롤업 되게 */}
                        <NavLink to={"/"} onClick={handleHomeClick}>
                            <div>HOME</div>
                        </NavLink>
                        <NavLink to={"/suggestion"}>
                            <div>건의사항</div>
                        </NavLink>
                        <NavLink to={"/login"}>
                            <div>로그인/회원가입</div>
                        </NavLink>
                        {/* 로그인 상태일 때는 logout을 띄우도록 */}
                        {/* <NavLink to={"/login"}>
                            <div>로그아웃</div>
                        </NavLink> */}
                        {/* {isLoggedIn ? (
                            <div
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    // 로그아웃 로직 추가
                                }}
                            >
                                로그아웃
                            </div>
                        ) : (
                            <NavLink to={"/login"}>
                                <div>로그인/회원가입</div>
                            </NavLink>
                        )} */}
                    </S.Nav>
                    {/* <S.MobileNav>
                        <S.MobileDropdown>
                            <FontAwesomeIcon icon={faBars} className="icon" />
                        </S.MobileDropdown>
                    </S.MobileNav> */}
                </S.HeaderContainer>
            </S.Header>
            <S.Main>
                <Outlet />
            </S.Main>
            <S.Footer>
                <S.SocialMediaLinkContainer>
                    {/* instagram을 눌렀을때 더원공동체 instagram으로 리디렉션 */}
                    <S.SocialMediaImageWrapper onClick={() => handleSocialMediaRedirect("https://www.instagram.com/theone_community")}>
                        <img src={process.env.PUBLIC_URL + "global/images/instagram.png"} alt="Instagram" />
                    </S.SocialMediaImageWrapper>
                    {/* youtube를 눌렀을때 더원공동체 youtube로 리디렉션 */}
                    <S.SocialMediaImageWrapper onClick={() => handleSocialMediaRedirect("https://www.youtube.com/@theone_community")}>
                        <img src={process.env.PUBLIC_URL + "global/images/youtube.png"} alt="YouTube" />
                    </S.SocialMediaImageWrapper>
                </S.SocialMediaLinkContainer>
                <S.ContactWrapper>
                    <p>Copyright ⓒ THEONE COMMUNITY. All rights reserved.</p>
                    <p>T. 010-5025-1824 | kjh@gmail.com</p>
                </S.ContactWrapper>
            </S.Footer>
        </S.Wrapper>
    );
};

export default Layout;
