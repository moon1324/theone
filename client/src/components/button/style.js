import styled, { css } from "styled-components";

const variantCSS = {
    default: css`
        background-color: ${({ theme }) => theme.PALETTE.transparent};
    `,
    gray: css`
        background-color: ${({ theme }) => theme.PALETTE.gray[200]};
    `,
    disabled: css`
        background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    `,
    home: css`
        background-color: ${({ theme }) => theme.PALETTE.primary};
    `,
};

const shapeCSS = {
    default: css``,
    home: css`
        border-radius: 12px;
    `,
    // round: css`
    //     border-radius: 50%;
    // `,
};

const sizeCSS = {
    default: css`
        width: 80px;
        height: 40px;
    `,
    home: css`
        width: 300px;
        height: 45px;
        /* padding: 14px 0; */
    `,
    // full: css`
    //     width: 100%;
    //     aspect-ratio: 8/1;
    //     padding: 16px 0;
    // `,
};

const borderCSS = {
    default: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.text[black]};
    `,
    gray: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
    `,
    disabled: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
    `,
    home: css`
        border: none;
    `,
};

const colorCSS = {
    white: css`
        color: #fff;
    `,
    black: css`
        color: ${({ theme }) => theme.PALETTE.text[black]};
    `,
    gray: css`
        color: ${({ theme }) => theme.PALETTE.gray[200]};
    `,
    disabled: css`
        color: ${({ theme }) => theme.PALETTE.gray[100]};
    `,
};

const Button = styled.button`
    ${({ variant }) => variantCSS[variant]}
    ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    ${({ border }) => borderCSS[border]}
    ${({ color }) => colorCSS[color]}

    cursor: pointer;
`;

export default Button;
