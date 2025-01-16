import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment} from "@fortawesome/free-solid-svg-icons";
import S from "./style";
import { useParams } from "react-router-dom";

const SuggestionPost = () => {
    const { suggestionId } = useParams();
    const [suggestion, setSuggestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSuggestionDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8090/api/suggestion/${suggestionId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch suggestion details");
                }
                const res = await response.json();

                console.log("res : " + JSON.stringify(res));

                setSuggestion(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError("Failed to fetch suggestion details");
                setLoading(false);
            }
        };

        getSuggestionDetails();
    }, [suggestionId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <S.SuggestionPostContainer>
            <S.SuggestionPost>
                <S.SuggestionPostHeader>
                    <S.SuggestionPostTitle>
                        <span>제목</span>
                        {suggestion.title}
                    </S.SuggestionPostTitle>
                    <S.SuggestionPostInfoWrapper>
                        <S.SuggestionPostWriter>
                            <span>작성자</span>
                            {suggestion.userName}
                        </S.SuggestionPostWriter>
                        <S.SuggestionPostDate>
                            <span>작성날짜</span>
                            {suggestion.createdAt}
                        </S.SuggestionPostDate>
                    </S.SuggestionPostInfoWrapper>
                </S.SuggestionPostHeader>
                <S.SuggestionPostBody>
                    <S.SuggestionPostContent>{suggestion.content}</S.SuggestionPostContent>
                </S.SuggestionPostBody>
                <S.SuggestionPostFooter>
                    <S.SuggestionIconsWrapper>
                        <S.SuggestionIcon>
                            <FontAwesomeIcon icon={faHeart} className="icon" />
                            <span>{suggestion.likes}</span>
                        </S.SuggestionIcon>
                        <S.SuggestionIcon>
                            <FontAwesomeIcon icon={faComment} className="icon" />
                            <span>{suggestion.commentList.length}</span>
                        </S.SuggestionIcon>
                    </S.SuggestionIconsWrapper>
                </S.SuggestionPostFooter>
            </S.SuggestionPost>
            {suggestion.commentList && suggestion.commentList.length > 0 && (
                <S.SuggestionReplyContainer>
                    {suggestion.commentList.map((comment) => (
                        <S.SuggestionReply key={comment.commentId}>
                            <S.SuggestionReplyHeader>
                                <S.SuggestionReplyWriter>{comment.userName}</S.SuggestionReplyWriter>
                                <S.SuggestionReplyDate>{comment.createdAt}</S.SuggestionReplyDate>
                            </S.SuggestionReplyHeader>
                            <S.SuggestionReplyBody>
                                <S.SuggestionReplyContent>{comment.content}</S.SuggestionReplyContent>
                            </S.SuggestionReplyBody>
                        </S.SuggestionReply>
                    ))}
                </S.SuggestionReplyContainer>
            )}
        </S.SuggestionPostContainer>
    );
};

export default SuggestionPost;
