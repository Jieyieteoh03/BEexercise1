const express = require("express");
const path = require("path");

// specific route method
const duelistRouter = express.Router();
duelistRouter.get("/phoenix.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/phoenix.html")
  );
});

duelistRouter.get("/jett.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/jett.html")
  );
  // response.sendFile(path.join(__dirname + "/public/team.html"));
});

duelistRouter.get("/raze.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/raze.html")
  );
  // response.sendFile(path.join(__dirname + "/public/duelist.html"));
});

duelistRouter.get("/yoru.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/yoru.html")
  );
});

duelistRouter.get("/neon.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/neon.html")
  );
});

module.exports = duelistRouter;
