import "dotenv/config";
import express from "express";

function bootstrap() {
  const app = express();
  const { PORT } = process.env;

  app.get("/", (req, res) => res.send("hello world!"));
  app.use("*", (req, res) => res.redirect("/"));

  app.listen(PORT, () => console.log("Server is running"));
}

bootstrap();
