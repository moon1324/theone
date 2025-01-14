import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

const KakaoRedirect = () => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    // console.log(code);
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    };

    useEffect(() => {
        fetch(`http://localhost:8000/user/login?code=${code}`, {
            method: "POST",
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // console.log(data.result.user_id);
                // console.log(data.result.jwt);
            })
            .catch((error) => {
                console.error("오류 발생", error); //
            });
    }, []);

    // const [code, setCode] = useState("");
    // const navigate = useNavigate();

    // const fetchLogin = useCallback(
    //     async (code) => {
    //         try {
    //             const param = {
    //                 code,
    //             };

    //             const response = await (
    //                 await fetch("http://localhost:8000/user/login", {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify(param), // string으로 전달해야함
    //                 })
    //             ).json();

    //             console.log(response); // { nickname: '#######' }
    //             console.log("fetchLogin done");
    //             // navigate("/main"); // API 호출 성공 시 메인 페이지로 이동
    //         } catch (error) {
    //             alert("Function fetchLogin error!");
    //             console.error(error);
    //         }
    //     },
    //     [navigate]
    // );

    // useEffect(() => {
    //     if (code) {
    //         fetchLogin(code);
    //         console.log("fetchLogin(code) done");
    //     }
    // }, [code, fetchLogin]);

    // useEffect(() => {
    //     const Address = new URL(window.location.href);
    //     const code = Address.searchParams.get("code") || "";
    //     console.log(code);
    //     setCode(code);
    // }, []);

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
