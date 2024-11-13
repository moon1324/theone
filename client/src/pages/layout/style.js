import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

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
`;

// 헤더안의 로고와 메뉴들을 각 끝에 고정
S.HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

//
S.LogoWrapper = styled.div`
    display: flex;
    width: 9rem;
    height: 4rem;
    margin: 0rem 8rem;
    & img {
        height: 100%;
    }
`;

S.Nav = styled.nav`
    display: flex;
    align-items: center;
    margin: 0rem 8rem;
    & div {
        margin: 1rem;
    }
`;

S.Main = styled.main`
    padding-top: 6rem;
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
    & img {
        width: 100%;
    }
`;

S.ContactWrapper = styled.div`
    margin: 1rem;
`;

export default S;
