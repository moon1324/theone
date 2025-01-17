import React, {useState} from "react";
import S from "./style";
import {useNavigate} from "react-router-dom";

const SuggestionPost = () => {
    const [title, setTitle] = useState("제목을 입력하세요");
    const [content, setContent] = useState("내용을 입력하세요");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onChangeSetTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeSetContent = (e) => {
        setContent(e.target.value);
    };

    const onClickGenerateSchedules = async () => {
        try {
            const res = await fetch('http://localhost:8090/api/suggestion', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    title: title,
                    content: content,
                }),
            });

            if (!res.ok) {
                throw new Error('건의사항 등록에 실패했습니다.');
            }

            const result = await res.json();
            const suggestionId = result.data.suggestionId;

            alert('건의사항이 성공적으로 등록되었습니다!');
            navigate(`/suggestion/${suggestionId}`);
        } catch (err) {
            setError('건의사항 등록 중 오류가 발생했습니다: ' + err.message);
        } finally {

        }
    };


    if (error) return <div>{error}</div>;

    return (
        <S.SuggestionPostContainer>
            <S.SuggestionPost>
                <S.SuggestionPostHeader>
                    <S.SuggestionPostTitle>
                        <span>제목</span>
                        <input value={title} onChange={onChangeSetTitle} />
                    </S.SuggestionPostTitle>
                    <S.SuggestionPostInfoWrapper>
                        <S.WriteButton onClick={() => onClickGenerateSchedules()}>글 쓰기</S.WriteButton>
                    </S.SuggestionPostInfoWrapper>
                </S.SuggestionPostHeader>
                <S.SuggestionPostBody>
                    <S.SuggestionPostContent><input value={content} onChange={onChangeSetContent}/></S.SuggestionPostContent>
                </S.SuggestionPostBody>
                <S.SuggestionPostFooter>
                </S.SuggestionPostFooter>
            </S.SuggestionPost>
        </S.SuggestionPostContainer>
    );
};

export default SuggestionPost;
