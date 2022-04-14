import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: '{PATH} is required!'
  },
  desc: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
}, {
  timestamps: true
}
);

export default mongoose.model("Article", articleSchema);
