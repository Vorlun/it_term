import { Schema, model } from "mongoose";

const authorSocialSchema = new Schema(
  {
    author_id: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    social_id: { type: Schema.Types.ObjectId, ref: "Social", required: true },
    social_link: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default model("AuthorSocial", authorSocialSchema);
