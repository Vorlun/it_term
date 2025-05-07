import { Schema, model } from "mongoose";

const descTopicSchema = new Schema(
  {
    desc_id: {
      type: Schema.Types.ObjectId,
      ref: "Desc",
      required: true,
    },
    topic_id: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
  },
  { timestamps: true, versionKey: false }
);

export default model("DescTopic", descTopicSchema);
