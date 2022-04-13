import express from "express";
import Post from "../model/post.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json({
      success: true,
      Post: post,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const post = await Post.find().populate("author");
    res.json({
      success: true,
      Post: post,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

export default router;
