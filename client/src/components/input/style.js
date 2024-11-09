import styled, { css } from "styled-components";

const variantCSS = {
    default: css`
        background-color: ${({ theme }) => theme.PALETTE.transparent};
    `,
    white: css`
        background-color: ${({ theme }) => theme.PALETTE.white};
    `,
};

const sizeCSS = {
    default: css`
        width: 100%;
        height: 40px;
    `,
};

const Input = styled.input`
    ${({ variant }) => variantCSS[variant]}
    ${({ size }) => sizeCSS[size]}
    padding: 0 1rem;
    outline: none;
    height: 2.5rem;
`;

export default Input;
