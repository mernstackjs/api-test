import express from "express";
import { fetchData } from "./model/db.js";
import AuthorRoute from "./router/author.js";
import ArticleRoute from "./router/article.js";
import cors from "cors";
const PORT = 5050;
const app = express();
app.get("/", (req, res) => {
  res.send("sax");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/authors", AuthorRoute);
app.use("/articles", ArticleRoute);

app.listen(PORT, () => {
  fetchData();
  console.log(`server is running on port ${PORT}`);
});
