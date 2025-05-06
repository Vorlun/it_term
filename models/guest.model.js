import { Schema, model } from "mongoose";

const guestSchema = new Schema(
  {
    guest_ip: String,
    guest_os: String,
    guest_device: String,
    guest_browser: String,
    guest_reg_date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default model("Guest", guestSchema);
