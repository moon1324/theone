import styled, { css } from "styled-components";

const borderCSS = {
    default: css`
        border: none;
    `,
    active: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.text.black};
    `,
};

const sizeCSS = {
    post: css`
        width: 100%;
        min-height: 12rem;
    `,
    comment: css`
        width: 100%;
        min-height: 5rem;
    `,
};

const Textarea = styled.textarea`
    ${({ border }) => borderCSS[border]}
    background-color: ${({ theme }) => theme.PALETTE.transparent};
    ${({ size }) => sizeCSS[size]}
    padding: 0.25rem;
    outline: none;
    resize: none;
    white-space: pre-line;
    & :focus {
        outline: none;
    }
`;

export default Textarea;
