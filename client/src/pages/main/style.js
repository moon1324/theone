import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

S.MainSection = styled.section`
    margin: 0rem 8rem;
`;

S.MainContainer = styled.div`
    margin: 8rem;
`;

S.MainCatchPhraseWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & h2 {
        font-weight: 600;
        margin: 1rem;
    }

    & span {
        color: white;
        background-color: black;
    }
`;

export default S;
