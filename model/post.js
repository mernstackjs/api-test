import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  titel: { type: String },
  desc: { type: String },
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
});

export default mongoose.model("Post", postSchema);
