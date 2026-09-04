/**
 * If CORS problems appear, we may need to add headers:
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
 */

import express, { type Express, type Request, type Response } from "express";
import { pictures, placeholder } from "./pictures.ts";

const app: Express = express();

app.use(express.static("assets"));

app.get("/pictures", (_req: Request, res: Response) => {
  res.send(pictures);
});

app.get("/placeholder", (_req: Request, res: Response) => {
  res.send(placeholder);
});

app.post("/picture", (req: Request, res: Response) => {
  console.log("received image: ", req);
  res.send("received image");
});

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000);
