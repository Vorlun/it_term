import { Schema, model } from "mongoose";

const qaSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    is_checked: { type: Boolean, default: false },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    expert_id: { type: Schema.Types.ObjectId, ref: "Author" },
  },
  { versionKey: false }
);

export default model("QA", qaSchema);
