import express from "express";
import multer from "multer";
const app = express();
import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api.js";

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import connection from "./configs/connectDB";
require("dotenv").config();
// setup View Engine
configViewEngine(app);

// init Web Route
initWebRoute(app);

// init Web Route
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
