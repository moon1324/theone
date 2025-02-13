import React, { useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/style";
import useInput from "../../hooks/useInput";
import TheoneButton from "../../components/button/TheoneButton";
import Textarea from "../../components/textarea/style";

const SuggestionWrite = () => {
    const [title, setTitle, handleTitleChange] = useInput("제목을 입력하세요");
    const [content, setContent, handleContentChange] = useInput("내용을 입력하세요");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleTitleFocus = () => {
        if (title === "제목을 입력하세요") {
            setTitle("");
        }
    };

    const handleTitleBlur = () => {
        if (!title) {
            setTitle("제목을 입력하세요");
        }
    };

    const handleContentFocus = () => {
        if (content === "내용을 입력하세요") {
            setContent("");
        }
    };

    const handleContentBlur = () => {
        if (!content) {
            setContent("내용을 입력하세요");
        }
    };

    const onClickNavigateSuggestionBoard = () => {
        navigate("/suggestion");
    };

    const onClickGeneratePost = async () => {
        try {
            // 14.5.86.192:8090
            // 192.168.32.99:8090
            const accessToken = localStorage.getItem("accessToken");
            console.log(accessToken);
            const response = await fetch("http://14.5.86.192:8090/api/suggestion", {
                method: "POST",
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    title: title,
                    content: content,
                }),
            });

            if (!response.ok) {
                throw new Error("건의사항 등록에 실패했습니다.");
            }

            const result = await response.json();
            const suggestionId = result.data.suggestionId;

            alert("건의사항이 성공적으로 등록되었습니다!");
            navigate(`/suggestion/${suggestionId}`);
        } catch (err) {
            setError("건의사항 등록 중 오류가 발생했습니다: " + err.message);
        } finally {
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <S.SuggestionPostContainer>
            <S.SuggestionPost>
                <S.SuggestionWriteHeader>
                    <S.SuggestionPostTitle>
                        <span>제목</span>
                        <Input
                            onFocus={handleTitleFocus}
                            onBlur={handleTitleBlur}
                            variant={"default"}
                            size={"title"}
                            border={"title"}
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </S.SuggestionPostTitle>
                    {/* <S.SuggestionPostInfoWrapper></S.SuggestionPostInfoWrapper> */}
                </S.SuggestionWriteHeader>
                <S.SuggestionPostBody>
                    <S.SuggestionPostContent>
                        <Textarea
                            onFocus={handleContentFocus}
                            onBlur={handleContentBlur}
                            border={"active"}
                            size={"post"}
                            value={content}
                            onChange={handleContentChange}
                        />
                    </S.SuggestionPostContent>
                </S.SuggestionPostBody>
                {/* <S.SuggestionPostFooter></S.SuggestionPostFooter> */}
            </S.SuggestionPost>
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
                <TheoneButton variant={"primary"} shape={"default"} size={"default"} border={"default"} color={"defalut"} onClick={onClickGeneratePost}>
                    글 쓰기
                </TheoneButton>
            </S.SuggestionButtonsContainer>
        </S.SuggestionPostContainer>
    );
};

export default SuggestionWrite;
