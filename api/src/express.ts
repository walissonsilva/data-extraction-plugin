import express from "express";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "1mb",
  })
);

app.get("/", (_, res) =>
  res.status(200).json({
    health: "ok",
  })
);
