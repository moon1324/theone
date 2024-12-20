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

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        /* margin: 0rem 4rem; */
        margin: 0rem;
    }

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        margin: 0rem;
    }
`;

S.SuggestionTitle = styled.h2`
    margin: 2rem 1rem;
    color: ${theme.PALETTE.text.black};
    font-weight: 600;
`;

S.SuggestionBoardContainer = styled.div``;

S.SuggestionDescriptionContainer = styled.div`
    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

S.SuggestionDescription = styled.p`
    margin: 1rem;
    /* 글자가 화면을 넘어갈 때 밑으로 내리기 */
    white-space: break-spaces;
    color: ${theme.PALETTE.text.black};
`;

S.SuggestionPostBox = styled.div``;

S.SuggestionPostBoxHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 1rem;
`;

S.SelectDropdown = styled.div`
    width: 6rem;
    height: 2rem;
    border: 1px solid ${theme.PALETTE.text.black};

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

S.SearchBar = styled.div`
    width: 40rem;
    height: 2rem;
    border-bottom: 1px solid ${theme.PALETTE.text.black};

    /* 태블릿용 스타일 */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 20rem;
    }

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

S.WriteButton = styled.div`
    ${flexCenter}
    width: 4rem;
    height: 2rem;
    border: 1px solid ${theme.PALETTE.text.black};
    background-color: ${theme.PALETTE.primary};
`;

S.SuggestionPostTable = styled.div`
    border-top: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionPostTableHeader = styled.div`
    border-bottom: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionPostTableBody = styled.div``;

S.SuggestionPostTableRow = styled.div`
    border-bottom: 1px solid ${theme.PALETTE.text.black};
`;

export default S;
