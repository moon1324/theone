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

// common
S.MainContentH2 = styled.h2`
    margin: 1rem 0rem;
    font-weight: 600;
    color: ${theme.PALETTE.text.black};
`;

S.MainContentH3 = styled.h3`
    margin: 1rem 0rem;
    font-weight: 600;
    color: ${theme.PALETTE.text.black};
`;

S.MainContentH4 = styled.h4`
    margin: 1rem 0rem;
    font-weight: 600;
    color: ${theme.PALETTE.text.black};
`;

S.MainContentH5 = styled.h5`
    margin: 1rem 0rem;
    font-weight: 500;
    color: ${theme.PALETTE.text.black};
`;

S.MainContentP = styled.p`
    margin: 0.5rem 0rem;
    color: ${theme.PALETTE.text.black};
`;

S.MainContentPWrapper = styled.div``;

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
    background-image: url(${process.env.PUBLIC_URL}/global/images/our_prayer.png);
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

S.OurPrayerH2 = styled.h2`
    margin: 1rem;
    font-weight: 600;
    color: ${theme.PALETTE.background};
`;

S.OurPrayerH3 = styled.h3`
    margin: 1rem;
    font-weight: 600;
    color: ${theme.PALETTE.background};
    margin-bottom: 2rem;
`;

S.OurPrayerP = styled.p`
    color: ${theme.PALETTE.background};
    margin: 1rem;
`;

// core values
S.CoreValuesSection = styled.section`
    margin: 4rem 8rem;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        /* margin: 0rem 4rem; */
        margin: 0rem;
    }
`;

S.CoreValuesSectionContainer = styled.div`
    margin: 2rem 8rem;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 2rem 4rem;
    }

    /* @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        margin: 0rem;
    } */
`;

S.CoreValuesMainImageWrapper = styled.div`
    width: 100%;
    height: 24rem;
    overflow: hidden;
    ${flexCenter}
    & img {
        width: 100%;
        object-fit: cover;
    }
`;

S.CoreValuesItemsWrapper = styled.div`
    width: 100%;
    ${flexCenter}
`;

S.CoreValuesItemsColumn = styled.div`
    ${flexCenterColumn}
    margin: 0rem 4rem;
`;

S.CoreValuesItem = styled.div`
    width: 20rem;
    margin: 2rem;
`;

S.CoreValuesItemImageWrapper = styled.div`
    width: 20rem;
    overflow: hidden;
    ${flexCenter}
    & img {
        width: 100%;
        object-fit: cover;
    }
`;

S.CoreValuesItemScriptsWrapper = styled.div`
    margin: 2rem 0rem;
`;

S.CoreValuesItemScriptsWrapperTextAlignRight = styled.div`
    margin: 2rem 0rem;
    text-align: right;
`;

// our strategies
S.OurStrategiesSection = styled.section`
    margin: 4rem 8rem;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        /* margin: 0rem 4rem; */
        margin: 0rem;
    }
`;

S.OurStrategiesSectionContainer = styled.div`
    margin: 2rem 8rem;
    text-align: right;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 2rem 4rem;
    }

    /* @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    margin: 0rem;
} */
`;

S.OurStrategiesItemsContainer = styled.div`
    margin: 8rem 0rem;
`;

S.OurStrategiesItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 4rem 0rem;
`;

S.OurStrategiesImageWrapper = styled.div`
    width: 28rem;
    height: 16rem;
    overflow: hidden;
    ${flexCenter}
    & img {
        width: 100%;
        object-fit: cover;
    }
`;

S.OurStrategiesScriptsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;

    & h4 {
        margin: 1rem 0rem;
    }

    & div {
        margin: 1rem 0rem;
    }
`;

// location and time
S.LocationAndTimeSection = styled.section`
    margin: 4rem 8rem;
    /* margin: 8rem; */

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        /* margin: 0rem 4rem; */
        margin: 0rem;
    }
`;

S.LocationAndTimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 8rem;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 2rem 4rem;
    }

    /* @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        margin: 0rem;
    } */
`;

S.LocationAndTimeTextWrapper = styled.div``;

S.LocationAndTimeContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

S.LocationAndTimeMapWrapper = styled.div`
    /* 육안으로 봤을떄 안정적이게 1.5rem 줬음 */
    margin-top: 1.25rem;
    width: 32rem;
    height: 24rem;
    background-color: black;
`;

S.LocationAndTimeContentWrapper = styled.div`
    margin-top: 1.5rem;
`;

S.LocationWrapper = styled.div`
    margin-bottom: 2rem;
`;

S.LocationAndTimeContent = styled.p`
    color: ${theme.PALETTE.text.black};
    margin: 1rem;

    & span {
        font-size: ${theme.FONT_SIZE.body};
        font-weight: 700;
    }
`;

export default S;
