import User from "../../models/userSchema.js";

const loginUser = async (req, res) => {
    const code = req.query.code;
    // console.log("req.query.code:" + code);
    // console.log("RESTAPIKEY:" + process.env.REACT_APP_KAKAO_REST_API_KEY);

    const getAuthToken = async () => {
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
            throw new Error(`Failed to get token: ${response.statusText}`);
        }

        const data = await response.json();

        return data.access_token;
    };

    const getUserData = async (token) => {
        const response = await fetch("https://kapi.kakao.com/v2/user/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to get user data: ${response.statusText}`);
        }

        const data = await response.json();

        const userData = {
            kakao_id: data.id,
            created_at: data.connected_at,
            email: data.kakao_account.email,
            user_name: data.kakao_account.profile.nickname,
        };

        return userData;
    };

    try {
        const token = await getAuthToken();
        const userData = await getUserData(token);

        res.status(200).json(userData);
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Failed to log in user" });
    }
};

const registerUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

export { loginUser, registerUser, updateUser, deleteUser };
