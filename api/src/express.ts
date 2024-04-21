import cors from "cors";
import express from "express";
import { ExtractionsController } from "./controllers/ExtractionsController";
import { ExtractionsRepository } from "./repositories/ExtractionsRepository";
import { CollectExtractions } from "./usecases/CollectExtraction";
import { ListExtractions } from "./usecases/ListExtractions";

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

const extractionsRepository = new ExtractionsRepository();

const listExtractions = new ListExtractions(extractionsRepository);
const collectExtractions = new CollectExtractions(extractionsRepository);
const extractionsController = new ExtractionsController(
  listExtractions,
  collectExtractions
);

app.get("/", (_, res) =>
  res.status(200).json({
    health: "ok",
  })
);

app.use("/", extractionsController.routes);
