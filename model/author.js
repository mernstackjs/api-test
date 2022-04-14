import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({

  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phonenumber: { type: Number, required: true },
  articles: {
    type: Array,
    required: false
  }
}, {
  timestamps: true
});

export default mongoose.model("Author", authorSchema);
