import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

// @media only screen and (max-width: 767px) {
//     /* 모바일용 스타일 */
// }

// @media only screen and (min-width: 768px) and (max-width: 1024px) {
//     /* 태블릿용 스타일 */
// }

// @media only screen and (min-width: 1025px) {
//     /* 데스크탑용 스타일 */
// }

S.SuggestionContainer = styled.div`
    margin: 0rem 8rem;
`;

S.SuggestionTitle = styled.h2`
    margin: 1rem;
    color: ${theme.PALETTE.background};
`;

S.SuggestionDescription = styled.p`
    margin: 1rem;
    color: ${theme.PALETTE.background};
`;

S.SuggestionBox = styled.div``;

S.SuggestionBoxHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

S.SelectDropdown = styled.div``;

S.SearchBar = styled.div``;

S.WriteButton = styled.div``;

S.SuggestionBoxContent = styled.div``;

S.SuggestionTable = styled.div``;

export default S;
