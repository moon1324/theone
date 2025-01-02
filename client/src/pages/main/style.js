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

S.MainSection = styled.section`
    margin: 0rem 8rem;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        /* margin: 0rem 4rem; */
        margin: 0rem;
    }
`;

S.MainContainer = styled.div`
    margin: 2rem 8rem;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 2rem 4rem;
    }

    /* @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        margin: 0rem;
    } */
`;

S.MainCatchPhraseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    & h3 {
        font-weight: 600;
        margin: 1rem;

        /* 태블릿용 스타일 */
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
            font-size: ${theme.FONT_SIZE.h3};
        }
    }

    & span {
        color: white;
        background-color: black;
    }
`;

S.MainImageWrapper = styled.div`
    width: 100%;
    height: 24rem;
    overflow: hidden;
    ${flexCenter}
    & img {
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
    }
`;

S.OurPrayerSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/global/images/OurPrayer.png);
    background-repeat: no-repeat;
    background-size: cover;
`;

S.OurPrayerContainer = styled.div`
    margin: 0rem 8rem;
    text-align: right;
    color: ${theme.PALETTE.text.white};

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 0rem 4rem;
    }
`;

S.OurPrayerTitle = styled.h2`
    margin: 1rem;
    color: ${theme.PALETTE.background};
`;

S.OurPrayerSubtitle = styled.h3`
    margin: 1rem;
    color: ${theme.PALETTE.background};
    margin-bottom: 2rem;
`;

S.OurPrayerContent = styled.p`
    color: ${theme.PALETTE.background};
    margin: 1rem;
`;

export default S;
