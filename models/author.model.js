import { Schema, model } from "mongoose";

const authorSchema = new Schema(
  {
    author_first_name: String,
    author_last_name: String,
    author_nick_name: String,
    author_email: { type: String, required: true, unique: true },
    author_phone: String,
    author_password: { type: String, required: true },
    author_info: String,
    author_position: String,
    author_photo: String,
    is_expert: { type: Boolean, default: false },
    author_is_active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

export default model("Author", authorSchema);
