import express from "express";
import { fetchData } from "./model/db.js";
import userRoute from "./router/user.js";
import postRoute from "./router/post.js";
import cors from "cors";
const PORT = 5050;
const app = express();
app.get("/", (req, res) => {
  res.send("sax");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/post", postRoute);

app.listen(PORT, () => {
  fetchData();
  console.log(`server is running on port ${PORT}`);
});
