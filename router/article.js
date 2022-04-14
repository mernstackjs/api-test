import express from "express";
import Article from "../model/article.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);
    res.json({
      success: true,
      article: newArticle,
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
    const article = await Article.find().populate("author");
    res.json({
      success: true,
      Article: article,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

export default router;
