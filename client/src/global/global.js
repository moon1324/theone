import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

// global style을 화면에 전체 적용시키는 로직
const GlobalStyle = createGlobalStyle`
    /* 기본설정 초기화 */
    ${reset}
    
    /* 웹 폰트 적용 */
    @font-face {
        font-family: 'Pretendard Variable';
        src: url('./fonts/PretendardVariable.woff2') format('woff2');
        font-weight: 100 900;
        font-style: normal;
    }

    /* 전체적용 */
    * {
        box-sizing: border-box;
        font-weight: 400;
        text-decoration: none;
        color: #231815;
        margin: 0;
        padding: 0;
        letter-spacing: 1;
        line-height: 1;
        white-space: nowrap;
    }

    html{
        background-color: ${theme.PALETTE.background};
    }

    h1 {
        font-size: ${theme.FONT_SIZE.h1};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.h1};
        }
    }

    h2 {
        font-size: ${theme.FONT_SIZE.h2};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.h2};
        }
    }
    
    h3 {
        font-size: ${theme.FONT_SIZE.h3};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.h3};
        }
    }

    h4 {
        font-size: ${theme.FONT_SIZE.h4};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.h4};
        }
    }

    body {
        font-size: ${theme.FONT_SIZE.body};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.body};
        }
    }

    button {
        font-size: ${theme.FONT_SIZE.button};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.button};
        }
    }

    p {
        font-size: ${theme.FONT_SIZE.p};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.p};
        }
    }

    textarea {
        font-size: ${theme.FONT_SIZE.p};

        @media only screen and (max-width: 767px) {
            font-size: ${theme.MOBILE_FONT_SIZE.p};
        }
    }

`;

export default GlobalStyle;
