import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/message", (_, res) => {
  res.contentType("html")
  res.send("<h1>Test</h1>");
});

ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening... PORT: http://localhost:3000")
});
