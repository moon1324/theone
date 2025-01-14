import User from "../../models/userSchema.js";

const loginUser = async (req, res) => {
    const code = req.query.code;
    console.log("req.query.code:" + code);
    console.log("RESTAPIKEY:" + process.env.REACT_APP_KAKAO_REST_API_KEY);
    try {
        const params = new URLSearchParams({
            grant_type: "authorization_code",
            client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
            code,
            redirect_uri: "http://localhost:3000/oauth/kakao",
        });

        const response = await fetch("https://kauth.kakao.com/oauth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch token: ${response.statusText}`);
        }

        const authToken = await response.json();
        console.log("authToken:" + authToken);
        res.status(200).json(authToken);
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Failed to log in user" });
    }
};
const registerUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

export { loginUser, registerUser, updateUser, deleteUser };
