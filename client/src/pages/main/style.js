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

S.OurPrayerTitle = styled.h2`
    margin: 1rem;
    font-weight: 600;
    color: ${theme.PALETTE.background};
`;

S.OurPrayerSubtitle = styled.h3`
    margin: 1rem;
    font-weight: 600;
    color: ${theme.PALETTE.background};
    margin-bottom: 2rem;
`;

S.OurPrayerContent = styled.p`
    color: ${theme.PALETTE.background};
    margin: 1rem;
`;

// core values
S.CoreValuesSection = styled.section`
    margin: 4rem 8rem;
    height: 100vh;

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

S.MainContentTitle = styled.h2`
    margin: 1rem;
    font-weight: 600;
    color: ${theme.PALETTE.text.black};
`;

S.MainContentSubtitle = styled.h3`
    margin: 1rem;
    font-weight: 600;
    color: ${theme.PALETTE.text.black};
`;

S.CoreValuesMainImageWrapper = styled.div`
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

// our strategies
S.OurStrategiesSection = styled.section`
    margin: 4rem 8rem;
    height: 100vh;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        /* margin: 0rem 4rem; */
        margin: 0rem;
    }
`;

S.OurStrategiesSectionContainer = styled.div`
    margin: 2rem 8rem;

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 2rem 4rem;
    }

    /* @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    margin: 0rem;
} */
`;

// location and time
S.LocationAndTimeSection = styled.section`
    /* height: 100vh; */
    margin: 4rem 8rem;

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
