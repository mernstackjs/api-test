import mongoose from "mongoose";
const urlDB =
  "mongodb+srv://proshop:proshop@cluster0.qv7cl.mongodb.net/biblotek?retryWrites=true&w=majority";
export const fetchData = () => {
  mongoose.connect(urlDB, {}, () => {
    console.log("server is connect db");
  });
};
