import express, { Router } from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);

  router.get("/detail/user/:userId", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);

  router.get("/upload-file", homeController.getUploadFilePage);
  router.post("/upload-profile-pic", homeController.handleUploadFile);
  return app.use("/", router);
};
export default initWebRoute;
