import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// global style을 화면에 전체 적용시키는 로직
const GlobalStyle = createGlobalStyle`

    ${reset}
    
    /* 웹 폰트 적용 */
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        font-weight: 400;
        text-decoration: none;
        /* color: #142146; */
        margin: 0;
        padding: 0;
        letter-spacing: 1;
        line-height: 1;
    }

`;

export default GlobalStyle;
