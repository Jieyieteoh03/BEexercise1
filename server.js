const express = require("express");
const path = require("path");
const controllerRouter = require("./router/c");
const duelistRouter = require("./router/d");
const initiatorRouter = require("./router/i");
const sentinelRouter = require("./router/s");
const app = express();
const port = 5000;

// Serve static files
app.use(express.static("public"));
app.use("/assets/controller", controllerRouter);
app.use("/assets/duelist", duelistRouter);
app.use("/assets/initiator", initiatorRouter);
app.use("/assets/sentinel", sentinelRouter);

// Define route for /controller/brim
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Define other routes...

// 404 middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
