import "express";
let counter = 0;

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({ counter });
  }

  if (req.method === "POST") {
    counter = req.body.counter;
    return res.status(200).json({ ok: true });
  }

  res.status(405).send("Method not allowed");
}
