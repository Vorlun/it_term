import { Schema, model } from "mongoose";

const descQASchema = new Schema(
  {
    qa_id: {
      type: Schema.Types.ObjectId,
      ref: "QA",
      required: true,
    },
    desc_id: {
      type: Schema.Types.ObjectId,
      ref: "Desc",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model("DescQA", descQASchema);
