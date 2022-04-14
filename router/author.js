import express from "express";
import Author from "../model/author.js";
import Article from "../model/article.js";
const router = express.Router();
import randomBytes from "randombytes";

//get All Authors
router.get("/", async (req, res) => {
  try {
    const author = await Author.find();
    res.json(author);
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// create Authors
router.post("/", async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.json({
      success: true,
      Author: newAuthor,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

//get Author by AuthorId

router.get("/:AuthorId", async (req, res) => {
  try {
    const author = await Author.findById(req.params.AuthorId);
    const articles = await Article.find({ author: req.params.AuthorId });

    res.json({
      success: true,
      Author:{
        author,
        articles
      },
    });
    
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// delate Authors

router.delete("/:AuthorId", async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.AuthorId);
    res.send(`waa la delete`);
  } catch (err) {
    res.send(`cilad baa jirta ${err.message}`);
  }
});

//update Author

router.put("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json({
      success: true,
      Author: author,
    });
  } catch (err) {
    res.send("cilad ayaa jirta");
  }
});
export default router;

// async function run() {
//   try {
//     const post = await Author.where("Authorname").equals("mukhtaar");
//     post[0].post = "6256b561d7b326ba786ac374";
//     post[0].save();
//     console.log(post);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// run();

// function run() {
//   const rNum = Math.floor(Math.random() * 1000);
//   const p = performance.timeOrigin.toFixed().slice(10, 14);
//   const chart = "abcdefghjklmnopqrstuvwxyz";
//   let sR = "";
//   let rP = "";
//   const m = "LR";
//   for (let i = 0; i < chart.length; i++) {
//     sR += chart.charAt(Math.floor(Math.random() * chart.length));
//     rP += chart.charAt(Math.floor(Math.random() * chart.length));
//   }
//   const fChart = sR.slice(0, 2);
//   const sChart = rP.slice(23, 24);
//   const randomNumber = m.concat(rNum, fChart, p, sChart);
//   console.log(randomNumber);
// }
// run();

// function rnum(len) {
//   const chart = "abcdefghjlkmnpqrstuvwzys123456789";
//   let id = "";

//   for (let i = 0; i < len; i++) {
//     id += chart.charAt(Math.floor(Math.random() * chart.length)).toUpperCase();
//   }

//   console.log(id);
// }

// rnum(10);
