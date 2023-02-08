import express from "express";
const app = express();
import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./route/web";
const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import connection from "./configs/connectDB";
require("dotenv").config();
// setup View Engine
configViewEngine(app);

// init Web Route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
