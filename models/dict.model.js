import { Schema,model } from "mongoose";

const dictSchema = new Schema({
    term:{type:String, required:true,trim:true},
    letter:{type:String, uppercase:true}
},
{timestamps:true,versionKey:false})

dictSchema.pre("save", function (next) {
  if (this.term) {
    this.letter = this.term.charAt(0).toUpperCase(); 
  }
  next();
});

export default model("Dict", dictSchema)