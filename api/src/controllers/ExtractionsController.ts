import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { validateInput } from "src/middlewares/validateInput";
import { IAuthService } from "src/services/AuthService";
import {
  CollectExtractions,
  CollectExtractionsInputSchema,
} from "src/usecases/Extraction/CollectExtraction";
import { ListExtractions } from "src/usecases/Extraction/ListExtractions";

export class ExtractionsController {
  private router: Router;

  constructor(
    private readonly listExtractions: ListExtractions,
    private readonly collectExtractions: CollectExtractions,

    private readonly authService: IAuthService
  ) {
    this.router = Router();
  }

  get routes() {
    this.router.get("/list", this.list.bind(this));

    this.router.post(
      "/collect",
      [
        this.authService.verifyToken,
        validateInput(CollectExtractionsInputSchema),
      ],
      this.save.bind(this)
    );

    return this.router;
  }

  async list(req: Request, res: Response) {
    const token = req.headers.authorization;
    const extractions = await this.listExtractions.handle(token || "");
    return res.status(200).json(extractions);
  }

  async save(req: Request, res: Response) {
    const data = req.body;

    await this.collectExtractions.handle(data);
    return res.status(StatusCodes.CREATED).send();
  }
}
