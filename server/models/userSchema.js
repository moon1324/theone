import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
    id: { type: Number },
    user_role: { type: Number },
    user_status: { type: Number },
    created_at: { type: Date, default: getCurrentTime },
    kakao_id: { type: Number, required: true, unique: true },
    modified_at: { type: Date, default: getCurrentTime },
    address: { type: String },
    baptism_status: { type: String },
    birthday: { type: String },
    email: { type: String },
    gender: { type: String },
    job: { type: String },
    join_date: { type: String },
    login_id: { type: String },
    password: { type: String },
    mobile: { type: String },
    refresh_token: { type: String },
    school: { type: String },
    team: { type: String },
    team_role: { type: String },
    tree: { type: String },
    user_name: { type: String },
});

// model("객체명", 스키마, "컬렉션(테이블)명")
export default model("User", userSchema, "user");
