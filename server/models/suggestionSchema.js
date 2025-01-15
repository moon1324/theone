import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const suggestionSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    user_id: { type: Number, ref: "User" },
    created_at: { type: Date, default: getCurrentTime },
    modified_at: { type: Date, default: getCurrentTime },
    title: { type: String, required: true },
    content: { type: String, required: true },
    like_count: { type: Number, default: 0 },
    comment_count: { type: Number, default: 0 },
});

// model("객체명", 스키마, "컬렉션(테이블)명")
export default model("Suggestion", suggestionSchema, "suggestion");
