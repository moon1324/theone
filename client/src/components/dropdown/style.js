import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

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
    align-self: center;
    justify-content: space-around;
    /* display: inline-block; */
`;

S.SelectOptions = styled.ul`
    position: absolute;
    top: 2.5rem;
    left: 0;
    width: 8rem;

    max-height: 200px;
    overflow-y: auto;
    border: ${(props) => (props.show ? `1px solid ${theme.PALETTE.text.black}` : "none")};
    max-height: ${(props) => (props.show ? "none" : "0")};
    background-color: ${theme.PALETTE.background};
`;

S.Option = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    padding: 1rem;
    &:hover {
        // hover 색상 후보
        background: ${theme.PALETTE.primary};
    }
`;

export default S;
