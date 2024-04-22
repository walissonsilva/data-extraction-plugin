import { z } from "zod";
import { extractionSchema } from "src/models/Extraction";
import { IExtractionsRepository } from "src/repositories/ExtractionsRepository";

export const CollectExtractionsInputSchema = extractionSchema.merge(
  z.object({
    userId: z.string(),
  })
);

export type CollectExtractionsInput = z.infer<
  typeof CollectExtractionsInputSchema
>;

export class CollectExtractions {
  constructor(private readonly extractionRepository: IExtractionsRepository) {}

  async handle(input: CollectExtractionsInput): Promise<void> {
    await this.extractionRepository.saveExtraction(input);
  }
}
