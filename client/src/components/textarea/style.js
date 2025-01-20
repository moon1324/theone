import styled, { css } from "styled-components";

const borderCSS = {
    default: css`
        border: none;
    `,
    active: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.text.black};
    `,
};

const Textarea = styled.textarea`
    ${({ border }) => borderCSS[border]}
    background-color: ${({ theme }) => theme.PALETTE.transparent};
    width: 100%;
    min-height: 12rem;
    padding: 0.25rem;
    outline: none;
    resize: none;
    & :focus {
        outline: none;
    }
`;

export default Textarea;
