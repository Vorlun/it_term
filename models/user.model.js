import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    user_name: { type: String, required: true },
    user_email: { type: String, required: true, unique: true },
    user_password: { type: String, required: true },
    user_info: String,
    user_photo: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    user_is_active: { type: Boolean, default: true },
  },
  { versionKey: false }
);

export default model("User", userSchema);
