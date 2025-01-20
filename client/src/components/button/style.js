import styled, { css } from "styled-components";
import { flexCenter } from "../../global/common";

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
    primary: css`
        background-color: ${({ theme }) => theme.PALETTE.primary};
    `,
};

const shapeCSS = {
    default: css``,
};

const sizeCSS = {
    default: css`
        width: 5rem;
        height: 2.5rem;
    `,
    // full: css`
    //     width: 100%;
    //     aspect-ratio: 8/1;
    //     padding: 16px 0;
    // `,
};

const borderCSS = {
    default: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.text.black};
    `,
    gray: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
    `,
    disabled: css`
        border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
    `,
};

const colorCSS = {
    white: css`
        color: #fff;
    `,
    black: css`
        color: ${({ theme }) => theme.PALETTE.text.black};
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

    ${flexCenter}
    font-size: ${({ theme }) => theme.FONT_SIZE.p};
    cursor: pointer;
`;

export default Button;
