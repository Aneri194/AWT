const express = require("express");
const helmet = require("helmet");
const https = require("https");
const path = require("path");
const fs = require("fs");
const port = 8080;

const app = express();
app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Open SSL Server");
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "certificates", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "certificates", "cert.pem")),
  },
  app
);

sslServer.listen(port, () => {
  console.log(`Server up and running on port https://localhost:${port}`);
});