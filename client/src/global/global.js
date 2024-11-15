import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

// global style을 화면에 전체 적용시키는 로직
const GlobalStyle = createGlobalStyle`
    /* 기본설정 초기화 */
    ${reset}
    
    /* 웹 폰트 적용 */
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
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
    }

    h1 {
        font-size: ${theme.FONT_SIZE.h1};
    }

    h2 {
        font-size: ${theme.FONT_SIZE.h2};
    }

    h3 {
        font-size: ${theme.FONT_SIZE.h3};
    }

    h4 {
        font-size: ${theme.FONT_SIZE.h4};
    }

    body {
        font-size: ${theme.FONT_SIZE.body};
    }

    p {
        font-size: ${theme.FONT_SIZE.p};
    }


`;

export default GlobalStyle;
