import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
    // email: { type: String, required: true, unique: true },
    // name: { type: String },
    // token: { type: String },
    // password: { type: String, required: true },
    // mobile: { type: String },
    // nickname: { type: String },
    // profileImg: { type: String },
    // origin: { type: [String] },
});

// model("객체명", 스키마, "컬렉션(테이블)명")
export default model("User", userSchema, "user");
