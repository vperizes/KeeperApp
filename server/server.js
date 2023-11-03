import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 8080;

app.get("/", (req, res) => res.render);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
