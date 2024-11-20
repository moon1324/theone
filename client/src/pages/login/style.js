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
    /* height: 100%; */
    background-color: ${theme.PALETTE.background};
    ${flexCenterColumn}
`;

S.LoginLogoWrapper = styled.div`
    margin: 4rem;
    width: 48rem;
    ${flexCenter}
    & img {
        width: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 6rem;
        width: 36rem;
        ${flexCenter}
        &img {
            width: 100%;
        }
    }
`;

S.LoginBoxWrapper = styled.div`
    ${flexCenterColumn}
    text-align: center;
`;

S.LoginDescriptionContainer = styled.div``;

S.LoginDescriptionTitle = styled.h3`
    margin: 1rem;
    font-weight: 500;
`;

S.LoginDescriptionContent = styled.p`
    margin: 0.5rem;
`;

S.LoginButtonsContainer = styled.div`
    ${flexCenter}
`;

S.LoginButton = styled.div``;

export default S;
