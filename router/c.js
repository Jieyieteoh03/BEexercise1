const express = require("express");
const path = require("path");

// specific route method
const controllerRouter = express.Router();
controllerRouter.get("/brim.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/brim.html")
  );
});

controllerRouter.get("/viper.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/viper.html")
  );
  // response.sendFile(path.join(__dirname + "/public/team.html"));
});

controllerRouter.get("/omen.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/omen.html")
  );
  // response.sendFile(path.join(__dirname + "/public/controller.html"));
});

controllerRouter.get("/astra.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/astra.html")
  );
});

controllerRouter.get("/harbor.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/harbor.html")
  );
});

module.exports = controllerRouter;
// export default aboutRouter
