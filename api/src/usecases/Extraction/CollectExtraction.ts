import { IExtractionsRepository } from "src/repositories/ExtractionsRepository";
import { z } from "zod";

export const CollectExtractionsInputSchema = z.object({
  userId: z.string(),
  device: z.string(),
  os: z.string(),
  origin: z.string(),
});

export type CollectExtractionsInput = z.infer<
  typeof CollectExtractionsInputSchema
>;

export class CollectExtractions {
  constructor(private readonly extractionRepository: IExtractionsRepository) {}

  async handle(input: CollectExtractionsInput): Promise<void> {
    await this.extractionRepository.saveExtraction(input);
  }
}
