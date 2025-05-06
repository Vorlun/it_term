import { Schema, model } from "mongoose";

const socialSchema = new Schema(
  {
    social_name: { type: String, required: true },
    social_icon_file: String,
  },
  { timestamps: true, versionKey: false }
);

export default model("Social", socialSchema);
