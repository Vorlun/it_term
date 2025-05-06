import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    admin_name: String,
    admin_email: { type: String, required: true, unique: true },
    admin_phone: String,
    admin_password: { type: String, required: true },
    admin_is_active: { type: Boolean, default: true },
    admin_is_creator: { type: Boolean, default: false },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default model("Admin", adminSchema);
