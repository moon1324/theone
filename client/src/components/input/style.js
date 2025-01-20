import styled, { css } from "styled-components";

const variantCSS = {
    default: css`
        background-color: ${({ theme }) => theme.PALETTE.transparent};
    `,
};

const sizeCSS = {
    default: css`
        width: 40rem;
        height: 2.5rem;
        padding: 0 1rem;
    `,

    title: css`
        width: 100%;
        height: 1rem;
    `,
};

const borderCSS = {
    default: css`
        border: none;
    `,

    title: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.text.black};
        padding: 0.6rem;
        margin-right: 1rem;
    `,
};

const Input = styled.input`
    ${({ variant }) => variantCSS[variant]}
    ${({ size }) => sizeCSS[size]}
    ${({ border }) => borderCSS[border]}
    outline: none;
`;

export default Input;
