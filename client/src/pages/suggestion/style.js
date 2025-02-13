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

// SuggestionBoard
S.SuggestionBoardContainer = styled.div``;

S.SuggestionDescriptionContainer = styled.div`
    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

S.SuggestionDescription = styled.p`
    margin: 0.5rem;
    /* 글자가 화면을 넘어갈 때 밑으로 내리기 */
    white-space: break-spaces;
    color: ${theme.PALETTE.text.black};
    cursor: default;
`;

S.SuggestionPostBox = styled.div`
    ${flexCenterColumn}
`;

S.SuggestionPostBoxHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 1rem;
`;

S.SelectDropdown = styled.div`
    width: 6rem;
    height: 2.5rem;
    border: 1px solid ${theme.PALETTE.text.black};

    /* 모바일용 스타일 */
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

S.SearchBar = styled.div`
    position: relative;
    width: 40rem;
    height: 2.5rem;
    border-bottom: 1px solid ${theme.PALETTE.text.black};

    & .icon {
        position: absolute;
        right: 1rem;
        top: 0.75rem;
    }
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
    width: 5rem;
    height: 2.5rem;
    border: 1px solid ${theme.PALETTE.text.black};
    background-color: ${theme.PALETTE.primary};
    font-size: ${theme.FONT_SIZE.p};
`;

S.SuggestionPostTable = styled.table`
    width: 100%;
    height: 22rem;
    border-top: 1px solid ${theme.PALETTE.text.black};

    & thead tr {
        max-height: 2rem;
        border-bottom: 1px solid ${theme.PALETTE.text.black};
        cursor: default; /* thead의 tr은 기본 커서 */
    }

    & tbody tr {
        max-height: 2rem;
        border-bottom: 1px solid ${theme.PALETTE.text.black};
        cursor: pointer; /* tbody의 tr에 포인터 커서 적용 */

        &.cursor-default {
            cursor: default; /* empty 클래스가 있는 tr은 기본 커서 */
        }
    }

    & th,
    & td {
        padding: 0.5rem;
        text-align: center;
    }

    /* 번호, 이름, 날짜, 조회수 칸의 너비 설정 */
    & th:nth-child(1),
    & td:nth-child(1) {
        width: 10%; /* 번호 */
    }

    & th:nth-child(2),
    & td:nth-child(2) {
        width: 10%; /* 이름 */
    }

    & th:nth-child(4),
    & td:nth-child(4) {
        width: 10%; /* 날짜 */
    }

    & th:nth-child(5),
    & td:nth-child(5) {
        width: 10%; /* 조회수 */
    }

    & th:nth-child(6),
    & td:nth-child(6) {
        width: 10%; /* 공감감수 */
    }

    & th:nth-child(4),
    & th:nth-child(5),
    & th:nth-child(6) {
        cursor: pointer;
    }

    /* 제목 칸은 남은 공간을 차지 */
    & th:nth-child(3) {
        width: 50%;
        text-align: center;
    }

    & td:nth-child(3) {
        width: 50%; /* 제목 */
        text-align: left; /* 제목은 왼쪽 정렬 */
        padding-left: 2rem;
        text-overflow: ellipsis;
    }

    & .empty {
        border-bottom: none;
    }

    /* empty 클래스가 포함된 tr이 있을 때 border-bottom 추가 */
    ${({ hasEmptyRows }) =>
        hasEmptyRows &&
        `
        border-bottom: 1px solid ${theme.PALETTE.text.black};
    `}
`;

S.SuggestionPostTableTdMessage = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenterColumn}

    & svg {
        width: 3rem;
        height: 3rem;
        margin-bottom: 1rem;
    }
`;

S.SuggestionPagination = styled.div`
    width: 100%;
    ${flexCenter}
    margin: 1rem;
`;

S.PaginationNumbersContainer = styled.div`
    width: 8rem;
    ${flexCenter}
    & div {
        margin: 0.5rem;
        cursor: pointer;
    }

    & .active {
        color: ${theme.PALETTE.primary};
    }
`;

S.PaginationArrowsContainer = styled.div`
    width: 4rem;
    ${flexCenter}
    margin: 0 0.5rem;
    & svg {
        margin: 0.25rem;
        cursor: pointer;
    }
`;

// SuggestionPost
S.SuggestionPostContainer = styled.div``;

S.SuggestionPost = styled.div`
    width: 100%;
    border-top: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionPostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.PALETTE.text.black};
    & span {
        margin: 0rem 1rem;
        font-weight: 500;
    }
`;

S.SuggestionPostTitle = styled.div`
    display: flex;
    margin: 0.5rem 1rem;
`;

S.SuggestionPostInfoWrapper = styled.div`
    display: flex;
`;

S.SuggestionPostWriter = styled.div`
    display: flex;
    margin: 0.5rem 0rem;
    margin-right: 1rem;
`;

S.SuggestionPostDate = styled.div`
    display: flex;
    margin: 0.5rem 0rem;
    margin-right: 2rem;
`;

S.SuggestionPostBody = styled.div`
    border-bottom: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionPostContent = styled.div`
    margin: 0.5rem 2rem;
    min-height: 12rem;
`;

S.SuggestionPostFooter = styled.div`
    width: 100%;
    border-bottom: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionIconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

S.SuggestionReactionWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 2rem;

    & span {
        margin-left: 0.5rem;
    }
`;

S.SuggestionInteractionWrapper = styled.div`
    display: flex;
    align-items: center;
`;

S.SuggestionInteractionButton = styled.div`
    display: flex;
    align-items: center;
`;

S.SuggestionIcon = styled.div`
    width: 2rem;
    margin-right: 1.5rem;
    ${flexCenter}

    & svg.icon {
        cursor: pointer;

        &.fa-heart {
            fill: none;
            stroke: ${theme.PALETTE.text.black};
            stroke-width: 30;

            path {
                fill: ${(props) => (props.isLiked ? theme.PALETTE.red : theme.PALETTE.background)};
            }

            &.liked {
                stroke: ${theme.PALETTE.red};

                path {
                    fill: ${theme.PALETTE.red};
                }
            }
        }
    }

    &.reduce-margin-right {
        margin-right: 0.5rem;
    }
`;

S.SuggestionReplyContainer = styled.div`
    width: 100%;
    display: flex;
`;

S.EnterIcon = styled.div`
    /* width: 2.5rem; */
    ${flexCenter}
    display: flex;
    padding: 0.5rem 2rem;
    & .icon {
        transform: rotate(90deg);
    }
    /* border-bottom: 1px solid ${theme.PALETTE.text.black}; */
`;

S.SuggestionReply = styled.div`
    width: 100%;
`;

S.SuggestionReplyHeader = styled.div`
    /* width: 100%; */
    display: flex;
    border-bottom: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionReplyWriter = styled.div`
    margin: 0.5rem 0rem;
    margin-left: 2rem;
`;

S.SuggestionReplyDate = styled.div`
    margin: 0.5rem 0rem;
    margin-left: 2rem;
`;

S.SuggestionReplyBody = styled.div`
    /* width: 100%; */
    border-bottom: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionReplyContent = styled.div`
    margin: 0.5rem 2rem;
    & p {
        white-space: pre-line;
    }
`;
S.SuggestionReplyFooter = styled.div`
    /* width: 100%; */
    border-bottom: 1px solid ${theme.PALETTE.text.black};
`;

S.SuggestionReplyInputContainer = styled.div`
    min-height: 6rem;
    display: flex;

    border-bottom: 1px solid ${theme.PALETTE.text.black};

    & textarea {
        margin: 0.25rem;
    }
`;

S.SuggestionReplyButtonsContainer = styled.div`
    ${flexCenter}
`;

S.SuggestionButtonsContainer = styled.div`
    margin: 4rem 0rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    & button {
        /* margin: 0rem 1rem; */
    }
`;

S.SuggestionPostMessageContainer = styled.div`
    height: 70vh;
`;

S.SuggestionPostMessage = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenterColumn}

    & svg {
        width: 3rem;
        height: 3rem;
        margin-bottom: 1rem;
    }
`;

S.SuggestionWriteHeader = styled.div`
    border-bottom: 1px solid ${theme.PALETTE.text.black};
    & span {
        margin: 0rem 1rem;
        font-weight: 500;
    }
`;

export default S;
