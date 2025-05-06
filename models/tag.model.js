import { Schema, model } from "mongoose";

const tagSchema = new Schema(
  {
    topic_id: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model("Tag", tagSchema);
