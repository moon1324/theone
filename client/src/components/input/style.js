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
    `,

    tablet: css`
        width: 20rem;
        height: 2.5rem;
    `,
};

const borderCSS = {
    default: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.text.black};
    `,
};

const Input = styled.input`
    ${({ variant }) => variantCSS[variant]}
    ${({ size }) => sizeCSS[size]}
    ${({ border }) => borderCSS[border]}
    padding: 0 1rem;
    outline: none;
    height: 2.5rem;
`;

export default Input;
