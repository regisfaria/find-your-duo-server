import express from "express";
import { purple } from "./shared/lib/chalk";

const app = express();

app.listen(3000, () => {
  console.log(purple("🚀 Server started, running on http://localhost:3000 🚀"));
});
