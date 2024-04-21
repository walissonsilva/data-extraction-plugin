import { Router, Request, Response } from "express";
import { validateInput } from "src/middlewares/validateInput";
import { extractionSchema } from "src/models/Extraction";
import {
  CollectExtractions,
  CollectExtractionsInputSchema,
} from "src/usecases/CollectExtraction";
import { ListExtractions } from "src/usecases/ListExtractions";

export class ExtractionsController {
  private router: Router;

  constructor(
    private readonly listExtractions: ListExtractions,
    private readonly collectExtractions: CollectExtractions
  ) {
    this.router = Router();
  }

  async list(req: Request, res: Response) {
    const token = req.headers.authorization;
    const extractions = await this.listExtractions.handle(token || "");
    return res.status(200).json(extractions);
  }

  async save(req: Request, res: Response) {
    const data = req.body;
    extractionSchema.parse(data);

    await this.collectExtractions.handle(data);
    return res.status(201).send();
  }

  get routes() {
    this.router.get("/list", this.list.bind(this));
    this.router.post(
      "/collect",
      validateInput(CollectExtractionsInputSchema),
      this.save.bind(this)
    );
    return this.router;
  }
}
