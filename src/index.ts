/**
 * If CORS problems appear, we may need to add headers:
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
 */

import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000);
