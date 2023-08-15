const express = require("express");
const path = require("path");

// specific route method
const initiatorRouter = express.Router();
initiatorRouter.get("/sova.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/sova.html")
  );
});

initiatorRouter.get("/breach.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/breach.html")
  );
  // response.sendFile(path.join(__dirname + "/public/team.html"));
});

initiatorRouter.get("/skye.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/skye.html")
  );
  // response.sendFile(path.join(__dirname + "/public/initiator.html"));
});

initiatorRouter.get("/kayo.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/kayo.html")
  );
});

initiatorRouter.get("/gekko.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/gekko.html")
  );
});

module.exports = initiatorRouter;
