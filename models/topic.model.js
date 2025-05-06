import { Schema, model } from "mongoose";

const topicSchema = new Schema(
  {
    author_id: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    topic_title: { type: String, required: true },
    topic_text: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    is_checked: { type: Boolean, default: false },
    is_approved: { type: Boolean, default: false },
    expert_id: { type: Schema.Types.ObjectId, ref: "Author" },
  },
  { versionKey: false }
);

export default model("Topic", topicSchema);
