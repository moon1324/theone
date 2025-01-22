import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import S from "./style";
import { useNavigate, useParams } from "react-router-dom";
import TheoneButton from "../../components/button/TheoneButton";
import Textarea from "../../components/textarea/style";
import useInput from "../../hooks/useInput";
import Input from "../../components/input/style";

const SuggestionPost = () => {
    const { suggestionId } = useParams();
    const [suggestion, setSuggestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [content, setContent, handleContentChange] = useInput("댓글을 입력하세요");

    const navigate = useNavigate();

    const onClickNavigateSuggestionBoard = () => {
        navigate("/suggestion");
    };

    const onClickNavigateSuggestionWrite = () => {
        navigate("/suggestion/write");
    };

    const handleCommentFocus = () => {
        if (content === "제목을 입력하세요") {
            setContent("");
        }
    };

    const handleCommentBlur = () => {
        if (!content) {
            setContent("제목을 입력하세요");
        }
    };

    const getSuggestionDetails = async () => {
        try {
            // 14.5.86.192:8090
            // 192.168.32.99:8090
            const response = await fetch(`http://14.5.86.192:8090/api/suggestion/${suggestionId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error("Failed to fetch suggestion details");
            }
            const result = await response.json();

            console.log("result : " + JSON.stringify(result));

            setSuggestion(result.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError("Failed to fetch suggestion details");
            setLoading(false);
        }
    };
    useEffect(() => {
        getSuggestionDetails();
    }, [suggestionId]);

    const onClickGenerateComment = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            console.log(accessToken);
            const response = await fetch(`http://14.5.86.192:8090/api/comment/${suggestionId}`, {
                method: "POST",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    content: content,
                }),
            });

            if (!response.ok) {
                throw new Error("댓글 등록에 실패했습니다.");
            }

            alert("댓글이 성공적으로 등록되었습니다!");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        } catch (err) {
            setError("댓글 등록 중 오류가 발생했습니다: " + err.message);
        } finally {
        }
    };

    const onClickDeleteSuggestion = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            console.log(accessToken);
            const response = await fetch(`http://14.5.86.192:8090/api/suggestion/${suggestionId}`, {
                method: "DELETE",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("건의사항 삭제에 실패했습니다.");
            }

            alert("건의사항이 성공적으로 삭제되었습니다!");
            navigate(`/suggestion`);
        } catch (err) {
            setError("건의사항 삭제 중 오류가 발생했습니다: " + err.message);
        } finally {
        }
    };

    const onClickDeleteComment = async (commentId) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            console.log(accessToken);
            const response = await fetch(`http://14.5.86.192:8090/api/comment/${commentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("댓글 삭제에 실패했습니다.");
            }

            alert("댓글이 성공적으로 삭제되었습니다!");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        } catch (err) {
            setError("댓글 삭제 중 오류가 발생했습니다: " + err.message);
        } finally {
        }
    };

    if (loading)
        return (
            <S.SuggestionPostMessageContainer>
                <S.SuggestionPostMessage>
                    <S.SuggestionDescription>Loading...</S.SuggestionDescription>
                </S.SuggestionPostMessage>
            </S.SuggestionPostMessageContainer>
        );
    if (error)
        return (
            <S.SuggestionPostMessageContainer>
                <S.SuggestionPostMessage>
                    <S.SuggestionDescription>{error}</S.SuggestionDescription>
                </S.SuggestionPostMessage>
            </S.SuggestionPostMessageContainer>
        );

    return (
        <S.SuggestionPostContainer>
            <S.SuggestionPost>
                <S.SuggestionPostHeader>
                    <S.SuggestionPostTitle>
                        <span>제목</span>
                        <p>{suggestion.title}</p>
                    </S.SuggestionPostTitle>
                    <S.SuggestionPostInfoWrapper>
                        <S.SuggestionPostWriter>
                            <span>작성자</span>
                            <p>{suggestion.userName}</p>
                        </S.SuggestionPostWriter>
                        <S.SuggestionPostDate>
                            <span>작성날짜</span>
                            <p>{suggestion.createdAt}</p>
                        </S.SuggestionPostDate>
                    </S.SuggestionPostInfoWrapper>
                </S.SuggestionPostHeader>
                <S.SuggestionPostBody>
                    <S.SuggestionPostContent>
                        <Textarea border={"default"} readOnly={"true"}>
                            {suggestion.content}
                        </Textarea>
                    </S.SuggestionPostContent>
                </S.SuggestionPostBody>
                <S.SuggestionPostFooter>
                    <S.SuggestionIconsWrapper>
                        <S.SuggestionIcon>
                            <FontAwesomeIcon icon={faHeart} className="icon" />
                            <span>{suggestion.likeCount}</span>
                        </S.SuggestionIcon>
                        <S.SuggestionIcon>
                            <FontAwesomeIcon icon={faComment} className="icon" />
                            <span>{suggestion.commentList.length}</span>
                        </S.SuggestionIcon>
                    </S.SuggestionIconsWrapper>
                </S.SuggestionPostFooter>
            </S.SuggestionPost>
            {suggestion.commentList && suggestion.commentList.length > 0 && (
                <>
                    {suggestion.commentList.map((comment) => (
                        <S.SuggestionReplyContainer>
                            <S.EnterIcon>
                                <FontAwesomeIcon icon={faTurnUp} className="icon" />
                            </S.EnterIcon>
                            <S.SuggestionReply key={comment.commentId}>
                                <S.SuggestionReplyHeader>
                                    <S.SuggestionReplyWriter>{comment.userName}</S.SuggestionReplyWriter>
                                    <S.SuggestionReplyDate>{comment.createdAt}</S.SuggestionReplyDate>
                                </S.SuggestionReplyHeader>
                                <S.SuggestionReplyBody>
                                    <S.SuggestionReplyContent>{comment.content}</S.SuggestionReplyContent>
                                </S.SuggestionReplyBody>
                                <S.SuggestionReplyFooter>
                                    <S.SuggestionIconsWrapper>
                                        <S.SuggestionIcon>
                                            <FontAwesomeIcon icon={faHeart} className="icon" />
                                            <span>1</span>
                                        </S.SuggestionIcon>
                                    </S.SuggestionIconsWrapper>
                                </S.SuggestionReplyFooter>
                                <TheoneButton
                                    variant={"primary"}
                                    shape={"default"}
                                    size={"default"}
                                    border={"default"}
                                    color={"defalut"}
                                    onClick={() => onClickDeleteComment(comment.commentId)}
                                >
                                    댓글 삭제
                                </TheoneButton>
                            </S.SuggestionReply>
                        </S.SuggestionReplyContainer>
                    ))}
                </>
            )}
            <Input
                onFocus={handleCommentFocus}
                onBlur={handleCommentBlur}
                variant={"default"}
                size={"title"}
                border={"title"}
                value={content}
                onChange={handleContentChange}
            />
            <S.SuggestionButtonsContainer>
                <TheoneButton
                    variant={"primary"}
                    shape={"default"}
                    size={"default"}
                    border={"default"}
                    color={"defalut"}
                    onClick={onClickNavigateSuggestionBoard}
                >
                    목록
                </TheoneButton>
                <TheoneButton
                    variant={"primary"}
                    shape={"default"}
                    size={"default"}
                    border={"default"}
                    color={"defalut"}
                    onClick={onClickGenerateComment}
                >
                    댓글 등록
                </TheoneButton>
                <TheoneButton
                    variant={"primary"}
                    shape={"default"}
                    size={"default"}
                    border={"default"}
                    color={"defalut"}
                    onClick={onClickDeleteSuggestion}
                >
                    글 삭제
                </TheoneButton>
                <TheoneButton
                    variant={"primary"}
                    shape={"default"}
                    size={"default"}
                    border={"default"}
                    color={"defalut"}
                    onClick={onClickNavigateSuggestionWrite}
                >
                    글 쓰기
                </TheoneButton>
            </S.SuggestionButtonsContainer>
        </S.SuggestionPostContainer>
    );
};

export default SuggestionPost;
