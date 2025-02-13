import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setUserStatus } from "../../modules/login";

import S from "./style";

const KakaoRedirect = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [code, setCode] = useState("");

    // node 코드
    const fetchLogin = useCallback(
        async (code) => {
            try {
                // 14.5.86.192:8090
                // 192.168.32.99:8090
                const response = await fetch(`http://14.5.86.192:8090/api/user/login/oauth2/code/kakao?code=${code}`, {
                    // const response = await fetch(`https://theone.onl/api/user/login/oauth2/code/kakao?code=${code}`, {
                    method: "GET",
                    // express
                    // await fetch(`http://localhost:8000/user/login?code=${code}`, {
                    //     method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                const { data } = result;

                // data[0(accessToken),1(userName),2(userId)], message, statusCode 반환
                const [accessToken, userName, userId] = data;

                // 로그인시 토큰을 제외한 userData 담을것
                const userData = { userName, userId };
                dispatch(setUser(userData));
                dispatch(setUserStatus(true));

                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("userData", JSON.stringify(userData));
                console.log(localStorage.getItem("accessToken"));
                console.log(localStorage.getItem("userData"));
                // API 호출 성공 시 메인 페이지로 이동
                navigate("/", { replace: true });
            } catch (error) {
                alert("Function fetchLogin error!");
                console.error(error);
            }
        },
        [dispatch, navigate]
    );

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const codeParam = urlParams.get("code");

        if (codeParam) {
            setCode(codeParam);
        }
    }, []);

    useEffect(() => {
        if (code) {
            fetchLogin(code);
        }
    }, [code, fetchLogin]);

    return (
        <S.LoginContainer>
            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <h3>Loading...</h3>
                </div>
            </div>
        </S.LoginContainer>
    );
};

export default KakaoRedirect;
