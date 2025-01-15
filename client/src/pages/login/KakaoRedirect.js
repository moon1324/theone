import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

const KakaoRedirect = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    };

    // Spring 코드
    // const fetchLogin = async () => {
    //     fetch(`http://14.5.86.192:8090/api/user/login/oauth2/code/kakao?code=${code}`, {
    //         method: "GET",
    //         headers: headers,
    //         credentials: "include",
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("data : " + JSON.stringify(data));
    //         })
    //         .catch((error) => {
    //             console.error("오류 발생", error); //
    //         });
    // };

    // node 코드
    const fetchLogin = useCallback(
        async (code) => {
            try {
                // const param = {
                //     code,
                // };

                const response = await (
                    await fetch(`http://localhost:8000/user/login?code=${code}`, {
                        method: "POST",
                        // headers: {
                        //     "Content-Type": "application/json",
                        // },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        // string으로 전달해야함
                        // body: JSON.stringify(param),
                    })
                ).json();

                console.log(response);

                // API 호출 성공 시 메인 페이지로 이동
                navigate("/");
            } catch (error) {
                alert("Function fetchLogin error!");
                console.error(error);
            }
        },
        [navigate]
    );

    useEffect(() => {
        if (code) {
            fetchLogin(code);
        }
    }, [code, fetchLogin]);

    useEffect(() => {
        const Address = new URL(window.location.href);
        const code = Address.searchParams.get("code") || "";

        setCode(code);
    }, []);

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
