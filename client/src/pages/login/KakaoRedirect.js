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
                const response = await fetch(`http://14.5.86.192:8090/api/user/login/oauth2/code/kakao?code=${code}`, {
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

                localStorage.setItem("kakaoToken", accessToken);
                localStorage.setItem("accessToken", response.headers.get("Authorization"));

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
// Spring 코드
// const fetchLogin = async () => {
//         fetch(`http://14.5.86.192:8090/api/user/login/oauth2/code/kakao?code=${code}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//                 credentials: "include",
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                         console.log("data : " + JSON.stringify(data));
//                     })
//                     .catch((error) => {
//                             console.error("오류 발생", error); //
//                         });
//                 };

// 이전 node 코드
// const fetchLogin = async () => {
//     fetch(`http://localhost:8000/user/login?code=${code}`, {
//         method: "POST",
//         headers: headers,
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             // console.log(data);
//             getUserInfo(data.access_token);
//         })
//         .catch((error) => {
//             console.error("오류 발생", error); //
//         });
// };

// const getUserInfo = async (accessToken) => {
//     try {
//         const response = await fetch("https://kapi.kakao.com/v2/user/me", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 Authorization: `Bearer ${accessToken}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`Failed to fetch user info: ${response.statusText}`);
//         }

//         const authInfo = await response.json();
//         console.log(authInfo); // 사용자 정보 확인
//         return authInfo;
//     } catch (error) {
//         console.error("Error fetching user info:", error);
//         throw error;
//     }
// };

// useEffect(() => {
//     fetchLogin();
// }, []);
