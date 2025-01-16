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

        const tokenData = await response.json();
        return tokenData;
    };

    const getUserData = async (tokenData) => {
        const token = tokenData.access_token;
        const response = await fetch("https://kapi.kakao.com/v2/user/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to get user data: ${response.statusText}`);
        }

        const userData = await response.json();

        const user = {
            kakao_id: userData.id,
            created_at: userData.connected_at,
            email: userData.kakao_account.email,
            user_name: userData.kakao_account.profile.nickname,
        };

        return user;
    };

    const checkUser = async (userData) => {
        const kakao_id = userData.kakao_id;
        const user = await User.findOne({ kakao_id: kakao_id });
        if (user) {
            return true;
        }
        return false;
    };

    try {
        const tokenData = await getAuthToken();
        const userData = await getUserData(tokenData);
        const isUserRegistered = await checkUser(userData);
        if (!isUserRegistered) {
            // 유저를 파싱
            let registerData = {
                kakao_id: userData.kakao_id,
                created_at: userData.created_at,
                email: userData.email,
                user_name: userData.user_name,
            };
            // 유저를 등록
            await User.create(registerData);
            return res.status(200).json({
                registerSuccess: true,
                userData,
                message: "회원가입이 완료 되었습니다",
            });
        }

        res.status(200).json({
            registerSuccess: false,
            userData,
            message: "이미 등록된 회원입니다",
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Failed to log in user" });
    }
};

const registerUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

export { loginUser, registerUser, updateUser, deleteUser };
