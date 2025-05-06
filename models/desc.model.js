import { Schema, model } from "mongoose";

const descriptionSchema = new Schema(
  {
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default model("Desc", descriptionSchema);
