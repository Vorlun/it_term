import { Schema,model } from "mongoose";

const dictSchema = new Schema({
    term:{type:String, required:true,trim:true},
    letter:{type:String, uppercase:true}
},
{timestamps:true,versionKey:false})

export default model("Dict", dictSchema)