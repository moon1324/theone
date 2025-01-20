import styled from "styled-components";
import theme from "../../global/theme";

const S = {};

S.SelectBox = styled.div`
    display: flex;
    position: relative;
    width: 8rem;
    height: 2.5rem;
    border: 1px solid ${theme.PALETTE.text.black};
    background-color: ${theme.PALETTE.background};
    cursor: pointer;
`;

S.Label = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: ${theme.FONT_SIZE.p};
`;

S.SelectOptions = styled.ul`
    position: absolute;
    top: 2.5rem;
    left: 0;
    width: 100%;
    border: 1px solid ${theme.PALETTE.text.black};
    background-color: ${theme.PALETTE.background};
    z-index: 10; /* 드롭다운이 다른 요소보다 위에 오도록 설정 */
`;

S.Option = styled.li`
    padding: 0.5rem 1rem;
    font-size: ${theme.FONT_SIZE.p};
    cursor: pointer;

    &:hover {
        background-color: ${theme.PALETTE.primary};
    }
`;

export default S;
