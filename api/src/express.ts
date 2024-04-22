import cors from "cors";
import express from "express";
import { ExtractionsController } from "./controllers/ExtractionsController";
import { ExtractionsRepository } from "./repositories/ExtractionsRepository";
import { CollectExtractions } from "./usecases/Extraction/CollectExtraction";
import { ListExtractions } from "./usecases/Extraction/ListExtractions";
import { AuthService } from "./services/AuthService";
import { AuthController } from "./controllers/AuthController";
import { errorHandler } from "./middlewares/errorsHandler";
import "express-async-errors";
import { DatabaseService } from "./services/DatabaseService";

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

// Services
const authService = new AuthService();
const databaseService = new DatabaseService();

// Repositories
const extractionsRepository = new ExtractionsRepository(databaseService);

// Use cases
const listExtractions = new ListExtractions(extractionsRepository);
const collectExtractions = new CollectExtractions(extractionsRepository);

// Controllers
const authController = new AuthController(authService);
const extractionsController = new ExtractionsController(
  listExtractions,
  collectExtractions,
  authService
);

app.use(errorHandler);

app.use("/", extractionsController.routes);
app.use("/auth", authController.routes);

app.get("/", (_, res) =>
  res.status(200).json({
    health: "ok",
  })
);
