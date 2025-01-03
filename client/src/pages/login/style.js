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

S.LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${theme.PALETTE.background};
    ${flexCenterColumn}
    text-align: center;

    @media only screen and (max-width: 767px) {
        justify-content: space-evenly;
    }
    text-align: center;
`;

S.LoginLogoWrapper = styled.div`
    margin-top: 4rem;
    width: 48rem;
    ${flexCenter}
    & img {
        width: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-top: 6rem;
        width: 36rem;
        ${flexCenter}
        &img {
            width: 100%;
        }
    }

    @media only screen and (max-width: 767px) {
        /* margin-top: 4rem; */
        width: 20rem;
        ${flexCenter}
        &img {
            width: 100%;
        }
    }
`;

S.LoginBoxWrapper = styled.div`
    /* ${flexCenterColumn}
    text-align: center; */
`;

S.LoginDescriptionContainer = styled.div`
    margin: 1rem;

    @media only screen and (max-width: 767px) {
        margin: 0rem;
    }
`;

S.LoginDescriptionTitle = styled.h3`
    margin: 2rem;
    font-weight: 500;
`;

S.LoginDescriptionContent = styled.p`
    margin: 0.5rem;
`;

S.LoginButtonsContainer = styled.div`
    ${flexCenterColumn}
    @media only screen and (max-width: 767px) {
        ${flexCenterColumn}
    }
`;

S.LoginButton = styled.div`
    width: 300px;
    height: 45px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
`;

S.KakaoButton = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${theme.PALETTE.kakao};
    & img {
        margin-left: 14px;
    }

    & span {
        margin: auto;
        font-size: 14px;
        font-weight: 500;
    }

    & div {
        width: 14px;
    }
`;

S.HomeButton = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    font-size: 14px;
    cursor: pointer;
`;

export default S;
