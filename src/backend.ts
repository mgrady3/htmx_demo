import express, { Application, Request, Response } from "express";
import Server from "./server";
import api_routes from "./api";

import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const server: Server = new Server(app);
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 9999;


app.get('/', (req: Request, res: Response) => {
  res.send('Default GET response')
});

app.use('/api', api_routes);

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
