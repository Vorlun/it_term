import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    category_name: { type: String, required: true },
    parent_category_id: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true, versionKey: false }
);

export default model("Category", categorySchema);
