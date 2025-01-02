import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import S from "./style";

const SuggestionPost = () => {
    return (
        <S.SuggestionPostContainer>
            <S.SuggestionPost>
                <S.SuggestionPostHeader>
                    <S.SuggestionPostTitle>
                        <span>제목</span>
                        건의사항 첫 게시글
                    </S.SuggestionPostTitle>
                    <S.SuggestionPostInfoWrapper>
                        <S.SuggestionPostWriter>
                            <span>작성자</span>
                            문승현
                        </S.SuggestionPostWriter>
                        <S.SuggestionPostDate>
                            <span>작성날짜</span>
                            2024.12.31.
                        </S.SuggestionPostDate>
                    </S.SuggestionPostInfoWrapper>
                </S.SuggestionPostHeader>
                <S.SuggestionPostBody>
                    <S.SuggestionPostContent>첫 게시글 내용</S.SuggestionPostContent>
                </S.SuggestionPostBody>
                <S.SuggestionPostFooter>
                    <S.SuggestionIconsWrapper>
                        <S.SuggestionIcon>
                            <FontAwesomeIcon icon={faHeart} className="icon" />
                            <span>1</span>
                        </S.SuggestionIcon>
                        <S.SuggestionIcon>
                            <FontAwesomeIcon icon={faComment} className="icon" />
                            <span>2</span>
                        </S.SuggestionIcon>
                    </S.SuggestionIconsWrapper>
                </S.SuggestionPostFooter>
            </S.SuggestionPost>
            <S.SuggestionReplyContainer>
                <S.EnterIcon>
                    <FontAwesomeIcon icon={faTurnUp} className="icon" />
                </S.EnterIcon>
                <S.SuggestionReply>
                    <S.SuggestionReplyHeader>
                        <S.SuggestionReplyWriter>오푸른솔</S.SuggestionReplyWriter>
                        <S.SuggestionReplyDate>2025.01.01</S.SuggestionReplyDate>
                    </S.SuggestionReplyHeader>
                    <S.SuggestionReplyBody>
                        <S.SuggestionReplyContent>좋은것같아요~</S.SuggestionReplyContent>
                    </S.SuggestionReplyBody>
                    <S.SuggestionReplyFooter>
                        <S.SuggestionIconsWrapper>
                            <S.SuggestionIcon>
                                <FontAwesomeIcon icon={faHeart} className="icon" />
                                <span>1</span>
                            </S.SuggestionIcon>
                        </S.SuggestionIconsWrapper>
                    </S.SuggestionReplyFooter>
                </S.SuggestionReply>
            </S.SuggestionReplyContainer>
        </S.SuggestionPostContainer>
    );
};

export default SuggestionPost;
