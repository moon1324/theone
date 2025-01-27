import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserLogout, setUserStatus } from "../../modules/login"; // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import S from "./style";

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLogin } = useSelector((state) => state.login);

    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleLogout = () => {
        // Redux 상태와 localStorage 초기화
        dispatch(setUserLogout({}, false));
        localStorage.removeItem("accessToken");
        alert("로그아웃 되었습니다.");
        navigate("/", { replace: true });
    };

    const handleSocialMediaRedirect = (url) => {
        window.open(url, "_blank");
    };

    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderContainer>
                    <S.LogoWrapper>
                        <NavLink to={"/"} onClick={handleHomeClick}>
                            <img src={process.env.PUBLIC_URL + "global/images/new_logo.png"} alt="logo" />
                        </NavLink>
                    </S.LogoWrapper>
                    <S.Nav>
                        <NavLink to={"/"} onClick={handleHomeClick}>
                            <div>HOME</div>
                        </NavLink>
                        <NavLink to={"/suggestion"}>
                            <div>건의사항</div>
                        </NavLink>
                        {!isLogin ? (
                            <NavLink to={"/login"}>
                                <div>로그인/회원가입</div>
                            </NavLink>
                        ) : (
                            <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                                로그아웃
                            </div>
                        )}
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
