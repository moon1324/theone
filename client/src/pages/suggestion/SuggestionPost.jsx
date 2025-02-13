import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faTurnUp, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import S from "./style";
import { useNavigate, useParams } from "react-router-dom";
import TheoneButton from "../../components/button/TheoneButton";
import Textarea from "../../components/textarea/style";
import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";
import Input from "../../components/input/style";

const SuggestionPost = () => {
    const { suggestionId } = useParams();
    const [suggestion, setSuggestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [content, setContent, handleContentChange] = useInput("댓글을 입력하세요");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");
    const [postLiked, setPostLiked] = useState(false);
    const [postLikeCount, setPostLikeCount] = useState(0);
    const [commentLikes, setCommentLikes] = useState({});

    const navigate = useNavigate();

    const { currentUser } = useSelector((state) => state.login);

    const onClickNavigateSuggestionBoard = () => {
        navigate("/suggestion");
    };

    const onClickNavigateSuggestionWrite = () => {
        navigate("/suggestion/write");
    };

    const handleTitleFocus = () => {
        if (editedTitle === "제목을 입력하세요") {
            setEditedTitle("");
        }
    };

    const handleTitleBlur = () => {
        if (!editedTitle) {
            setEditedTitle("제목을 입력하세요");
        }
    };

    const handleCommentFocus = () => {
        if (content === "댓글을 입력하세요") {
            setContent("");
        }
    };

    const handleCommentBlur = () => {
        if (!content) {
            setContent("댓글을 입력하세요");
        }
    };

    const getTimeAgo = (createdAt) => {
        const now = new Date();
        const createdTime = new Date(createdAt);
        const diffInMs = now - createdTime;
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInWeeks = Math.floor(diffInDays / 7);
        const diffInMonths = Math.floor(diffInWeeks / 4.345); // average weeks per month
        const diffInYears = Math.floor(diffInMonths / 12);

        if (diffInMinutes < 1) return "방금 전";
        if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
        if (diffInHours < 24) return `${diffInHours}시간 전`;
        if (diffInDays < 2) return `하루 전`;
        if (diffInDays < 7) return `${diffInDays}일 전`;
        if (diffInWeeks < 4) return `${diffInWeeks}주 전`;
        if (diffInMonths < 12) return `${diffInMonths}달 전`;
        return `${diffInYears}년 전`;
    };

    const getSuggestionDetails = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(`http://14.5.86.192:8090/api/suggestion/login/${suggestionId}`, {
                method: "GET",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Failed to fetch suggestion details");
            }

            const result = await response.json();
            setSuggestion(result.data);
            console.log(result.data);
            setPostLiked(result.data.liked); // 서버에서 좋아요 상태 가져오기
            setPostLikeCount(result.data.likeCount); // 서버에서 좋아요 개수 가져오기
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
            getSuggestionDetails();
        } catch (err) {
            setError("댓글 등록 중 오류가 발생했습니다: " + err.message);
        } finally {
        }
    };

    const onClickEditSuggestion = () => {
        setIsEditing(true);
        setEditedTitle(suggestion.title);
        setEditedContent(suggestion.content);
    };

    const onCancelEdit = () => {
        setIsEditing(false);
        setEditedContent("");
    };

    const onConfirmEdit = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(`http://14.5.86.192:8090/api/suggestion/${suggestionId}`, {
                method: "PATCH",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    title: editedTitle,
                    content: editedContent,
                }),
            });

            if (!response.ok) {
                throw new Error("게시글 수정에 실패했습니다.");
            }

            alert("게시글이 성공적으로 수정되었습니다!");
            getSuggestionDetails();
            setIsEditing(false);
        } catch (err) {
            setError("게시글 수정 중 오류가 발생했습니다: " + err.message);
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
            getSuggestionDetails();
        } catch (err) {
            setError("댓글 삭제 중 오류가 발생했습니다: " + err.message);
        } finally {
        }
    };

    const onClickEditComment = (commentId, currentContent) => {
        setEditingCommentId(commentId);
        setEditedContent(currentContent); // Initialize with the current content of the comment
    };

    const onCancelEditComment = () => {
        setEditingCommentId(null);
        setEditedContent("");
    };

    const onConfirmEditComment = async (commentId) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(`http://14.5.86.192:8090/api/comment/${commentId}`, {
                method: "PATCH",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ content: editedContent }),
            });

            if (!response.ok) throw new Error("댓글 수정에 실패했습니다.");

            alert("댓글이 성공적으로 수정되었습니다!");
            getSuggestionDetails();
        } catch (err) {
            setError("댓글 수정 중 오류가 발생했습니다: " + err.message);
        } finally {
            setEditingCommentId(null);
        }
    };

    const onClickTogglePostLike = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(`http://14.5.86.192:8090/api/like/suggestion/${suggestionId}`, {
                method: postLiked ? "DELETE" : "GET",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) throw new Error("Failed to toggle like");

            // 좋아요 상태 및 개수 업데이트
            setPostLiked((prev) => !prev);
            setPostLikeCount((prevCount) => (postLiked ? prevCount - 1 : prevCount + 1));
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

    const onClickToggleCommentLike = async (commentId) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(`http://14.5.86.192:8090/api/like/comment/${commentId}`, {
                method: commentLikes[commentId]?.liked ? "DELETE" : "GET",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) throw new Error("Failed to toggle like");

            // 좋아요 상태 및 개수 업데이트
            setCommentLikes((prev) => {
                const isLiked = prev[commentId]?.liked; // 현재 좋아요 상태
                const currentCount = prev[commentId]?.likeCount || 0; // 현재 좋아요 개수

                return {
                    ...prev,
                    [commentId]: {
                        liked: !isLiked, // 좋아요 상태 반전
                        likeCount: isLiked ? currentCount - 1 : currentCount + 1, // 좋아요 개수 증가/감소
                    },
                };
            });
            console.log(commentLikes);
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

    useEffect(() => {
        if (suggestion?.commentList) {
            const initialCommentLikes = suggestion.commentList.reduce((acc, comment) => {
                acc[comment.commentId] = {
                    liked: comment.liked,
                    likeCount: comment.likeCount,
                };
                return acc;
            }, {});
            setCommentLikes(initialCommentLikes);
        }
    }, [suggestion]);

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
                        {isEditing ? (
                            <Input
                                onFocus={handleTitleFocus}
                                onBlur={handleTitleBlur}
                                variant={"default"}
                                size={"title"}
                                border={"title"}
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                        ) : (
                            <p>{suggestion.title}</p>
                        )}
                    </S.SuggestionPostTitle>
                    <S.SuggestionPostInfoWrapper>
                        <S.SuggestionPostWriter>
                            <span>글쓴이</span>
                            <p>{suggestion.userName}</p>
                        </S.SuggestionPostWriter>
                        <S.SuggestionPostDate>
                            <span>작성일시</span>
                            <p>{getTimeAgo(suggestion.createdAt)}</p>
                        </S.SuggestionPostDate>
                    </S.SuggestionPostInfoWrapper>
                </S.SuggestionPostHeader>
                <S.SuggestionPostBody>
                    <S.SuggestionPostContent>
                        {isEditing ? (
                            <>
                                <Textarea border={"active"} size={"post"} value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
                                <S.SuggestionReplyButtonsContainer>
                                    <TheoneButton variant={"gray"} shape={"default"} size={"default"} border={"default"} color={"black"} onClick={onCancelEdit}>
                                        취소
                                    </TheoneButton>
                                    <TheoneButton
                                        variant={"primary"}
                                        shape={"default"}
                                        size={"default"}
                                        border={"default"}
                                        color={"defalut"}
                                        onClick={onConfirmEdit}
                                    >
                                        확인
                                    </TheoneButton>
                                </S.SuggestionReplyButtonsContainer>
                            </>
                        ) : (
                            <Textarea border={"default"} size={"post"} readOnly={true}>
                                {suggestion.content}
                            </Textarea>
                        )}
                    </S.SuggestionPostContent>
                </S.SuggestionPostBody>
                <S.SuggestionPostFooter>
                    <S.SuggestionIconsWrapper>
                        <S.SuggestionReactionWrapper>
                            <S.SuggestionIcon>
                                <FontAwesomeIcon icon={faHeart} className={`icon ${postLiked ? "liked" : ""}`} onClick={onClickTogglePostLike} />
                                <span>{postLikeCount}</span>
                            </S.SuggestionIcon>
                            <S.SuggestionIcon>
                                <FontAwesomeIcon icon={faComment} className="icon" />
                                <span>{suggestion.commentList.length}</span>
                            </S.SuggestionIcon>
                        </S.SuggestionReactionWrapper>
                        {suggestion.userName === currentUser.userName && (
                            <S.SuggestionInteractionWrapper>
                                <S.SuggestionInteractionButton>
                                    <S.SuggestionIcon className="reduce-margin-right">
                                        <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={onClickEditSuggestion} />
                                    </S.SuggestionIcon>
                                </S.SuggestionInteractionButton>
                                <S.SuggestionInteractionButton>
                                    <S.SuggestionIcon>
                                        <FontAwesomeIcon icon={faTrashCan} className="icon" onClick={onClickDeleteSuggestion} />
                                    </S.SuggestionIcon>
                                </S.SuggestionInteractionButton>
                            </S.SuggestionInteractionWrapper>
                        )}
                    </S.SuggestionIconsWrapper>
                </S.SuggestionPostFooter>
            </S.SuggestionPost>
            {suggestion.commentList && suggestion.commentList.length > 0 && (
                <>
                    {suggestion.commentList.map((comment) => (
                        <S.SuggestionReplyContainer key={comment.commentId}>
                            <S.EnterIcon>
                                <FontAwesomeIcon icon={faTurnUp} className="icon" />
                            </S.EnterIcon>
                            {editingCommentId === comment.commentId ? (
                                <S.SuggestionReply>
                                    <S.SuggestionReplyInputContainer>
                                        <Textarea
                                            onFocus={handleCommentFocus}
                                            onBlur={handleCommentBlur}
                                            border={"active"}
                                            size={"comment"}
                                            value={editedContent}
                                            onChange={(e) => setEditedContent(e.target.value)}
                                        />
                                        <S.SuggestionReplyButtonsContainer>
                                            <TheoneButton
                                                variant={"gray"}
                                                shape={"default"}
                                                size={"default"}
                                                border={"default"}
                                                color={"black"}
                                                onClick={onCancelEditComment}
                                            >
                                                취소
                                            </TheoneButton>
                                            <TheoneButton
                                                variant={"primary"}
                                                shape={"default"}
                                                size={"default"}
                                                border={"default"}
                                                color={"defalut"}
                                                onClick={() => onConfirmEditComment(comment.commentId)}
                                            >
                                                확인
                                            </TheoneButton>
                                        </S.SuggestionReplyButtonsContainer>
                                    </S.SuggestionReplyInputContainer>
                                </S.SuggestionReply>
                            ) : (
                                // Display Mode
                                <S.SuggestionReply>
                                    <S.SuggestionReplyHeader>
                                        <S.SuggestionReplyWriter>{comment.userName}</S.SuggestionReplyWriter>
                                        <S.SuggestionReplyDate>{getTimeAgo(comment.createdAt)}</S.SuggestionReplyDate>
                                    </S.SuggestionReplyHeader>
                                    <S.SuggestionReplyBody>
                                        <S.SuggestionReplyContent>
                                            <p>{comment.content}</p>
                                        </S.SuggestionReplyContent>
                                    </S.SuggestionReplyBody>
                                    <S.SuggestionReplyFooter>
                                        <S.SuggestionIconsWrapper>
                                            <S.SuggestionReactionWrapper>
                                                <S.SuggestionIcon>
                                                    <FontAwesomeIcon
                                                        icon={faHeart}
                                                        className={`icon ${commentLikes[comment.commentId]?.liked ? "liked" : ""}`}
                                                        onClick={() => onClickToggleCommentLike(comment.commentId)}
                                                    />
                                                    <span>{commentLikes[comment.commentId]?.likeCount || comment.likeCount}</span>
                                                </S.SuggestionIcon>
                                            </S.SuggestionReactionWrapper>
                                            {currentUser && comment.userName === currentUser.userName && (
                                                <S.SuggestionInteractionWrapper>
                                                    <S.SuggestionIcon className="reduce-margin-right">
                                                        <FontAwesomeIcon
                                                            icon={faPenToSquare}
                                                            className="icon"
                                                            onClick={() => onClickEditComment(comment.commentId, comment.content)}
                                                        />
                                                    </S.SuggestionIcon>
                                                    <S.SuggestionIcon>
                                                        <FontAwesomeIcon
                                                            icon={faTrashCan}
                                                            className="icon"
                                                            onClick={() => onClickDeleteComment(comment.commentId)}
                                                        />
                                                    </S.SuggestionIcon>
                                                </S.SuggestionInteractionWrapper>
                                            )}
                                        </S.SuggestionIconsWrapper>
                                    </S.SuggestionReplyFooter>
                                </S.SuggestionReply>
                            )}
                        </S.SuggestionReplyContainer>
                    ))}
                </>
            )}
            <S.SuggestionReplyContainer>
                <S.EnterIcon>
                    <FontAwesomeIcon icon={faTurnUp} className="icon" />
                </S.EnterIcon>
                <S.SuggestionReply>
                    <S.SuggestionReplyInputContainer>
                        <Textarea
                            onFocus={handleCommentFocus}
                            onBlur={handleCommentBlur}
                            border={"active"}
                            size={"comment"}
                            value={content}
                            onChange={handleContentChange}
                        />
                        <S.SuggestionReplyButtonsContainer>
                            <TheoneButton
                                variant={"primary"}
                                shape={"default"}
                                size={"default"}
                                border={"default"}
                                color={"defalut"}
                                onClick={onClickGenerateComment}
                            >
                                등록
                            </TheoneButton>
                        </S.SuggestionReplyButtonsContainer>
                    </S.SuggestionReplyInputContainer>
                </S.SuggestionReply>
            </S.SuggestionReplyContainer>
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
                    onClick={onClickNavigateSuggestionWrite}
                >
                    글 쓰기
                </TheoneButton>
            </S.SuggestionButtonsContainer>
        </S.SuggestionPostContainer>
    );
};

export default SuggestionPost;
