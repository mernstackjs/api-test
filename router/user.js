import express from "express";
import User from "../model/user.js";
const router = express.Router();
import randomBytes from "randombytes";

//get All users
router.get("/", async (req, res) => {
  try {
    const user = await User.find().populate("post");
    res.json(user);
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// create users
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({
      success: true,
      User: user,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

//get user by UserId

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    res.json({
      success: true,
      User: user,
    });
    console.log(user.post);
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// delate users

router.delete("/:userId", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.send(`waa la delete`);
  } catch (err) {
    res.send(`cilad baa jirta ${err.message}`);
  }
});

//update user

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json({
      success: true,
      User: user,
    });
  } catch (err) {
    res.send("cilad ayaa jirta");
  }
});
export default router;

// async function run() {
//   try {
//     const post = await User.where("username").equals("mukhtaar");
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
