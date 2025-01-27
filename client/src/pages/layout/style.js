import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

// @media only screen and (max-width: 767px) {
//     /* 모바일용 스타일 */
// }

// @media only screen and (min-width: 768px) and (max-width: 1024px) {
//     /* 태블릿용 스타일 */
// }

// @media only screen and (min-width: 1025px) {
//     /* 데스크탑용 스타일 */
// }

// 전체를 감싸는 wrapper
S.Wrapper = styled.div`
    /* 화면 크기에 맞춤 */
    width: 100%;
    height: 100vh;
    /* 기본 배경색 */
    background-color: ${theme.PALETTE.background};
`;

// 헤더
S.Header = styled.header`
    width: 100%;
    height: 6rem;
    ${flexCenter}
    /* 상단에 헤더 고정 */
    position: fixed;
    /* 다른요소보다 위에 위치 */
    z-index: 100;
    background-color: ${theme.PALETTE.background};
`;

// 헤더안의 로고와 메뉴들을 각 끝에 고정
S.HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        justify-content: space-between;
    }
`;

//
S.LogoWrapper = styled.div`
    display: flex;
    width: 9rem;
    height: 4rem;
    margin-left: 2rem;

    & img {
        height: 100%;
    }

    /* 데스크탑용 스타일 */
    @media only screen and (min-width: 1025px) {
        margin-left: 8rem;
    }

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-left: 2rem;
    }

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        margin-left: 2rem;
    }
`;

S.Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 8rem;

    & div {
        margin: 1rem 0rem;
        margin-left: 2rem;
    }

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-right: 2rem;
    }

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

S.MobileNav = styled.div`
    ${flexCenter}
    margin-right: 2rem;

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        display: flex;
    }

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }

    /* 데스크탑용 스타일 */
    @media only screen and (min-width: 1025px) {
        display: none;
    }
`;

S.MobileDropdown = styled.div`
    width: 2rem;
    height: 2rem;
    .icon {
        font-size: 2rem;
    }
`;

S.Main = styled.main`
    width: 100%;
    padding-top: 6rem;
    /* padding-top: 1rem; */

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        padding-top: 6rem;
    }
`;

S.Footer = styled.footer`
    width: 100%;
    display: flex;
    ${flexCenterColumn}
`;

S.SocialMediaLinkContainer = styled.div`
    ${flexCenter}
`;

S.SocialMediaImageWrapper = styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    align-items: center;
    cursor: pointer;

    & img {
        width: 100%;
    }
`;

S.ContactWrapper = styled.div`
    ${flexCenterColumn}
    margin-top: 1rem;
    & p {
        margin-bottom: 1rem;
    }
`;

export default S;
