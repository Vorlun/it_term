import { Schema, model } from "mongoose";

const synonymSchema = new Schema(
  {
    desc_id: {
      type: Schema.Types.ObjectId,
      ref: "Desc",
      required: true,
    },
    dict_id: { type: Schema.Types.ObjectId, ref: "Dict", required: true },
  },
  { timestamps: true, versionKey: false }
);

export default model("Synonym", synonymSchema);
