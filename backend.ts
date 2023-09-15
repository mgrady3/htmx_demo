import express, { Application } from "express";
import Server from "./src/server";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const server: Server = new Server(app);
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 9999;

app
  .listen(port, "localhost", () => {
    console.log(`Backend server running on port ${port}`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Could not start server on port: ${port} - already in use`);
    } else {
      console.log(err);
    }
  });
