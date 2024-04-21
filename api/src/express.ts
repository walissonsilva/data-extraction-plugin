import cors from "cors";
import express from "express";
import { ExtractionsController } from "./controllers/ExtractionsController";
import { ExtractionsRepository } from "./repositories/ExtractionsRepository";
import { CollectExtractions } from "./usecases/Extraction/CollectExtraction";
import { ListExtractions } from "./usecases/Extraction/ListExtractions";
import { AuthService } from "./services/AuthService";
import { AuthController } from "./controllers/AuthController";

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

// AUTHENTICATION
const authService = new AuthService();
const authController = new AuthController(authService);

// EXTRACTIONS
const extractionsRepository = new ExtractionsRepository();

const listExtractions = new ListExtractions(extractionsRepository);
const collectExtractions = new CollectExtractions(extractionsRepository);
const extractionsController = new ExtractionsController(
  listExtractions,
  collectExtractions,
  authService
);

app.get("/", (_, res) =>
  res.status(200).json({
    health: "ok",
  })
);

app.use("/", extractionsController.routes);
app.use("/auth", authController.routes);
