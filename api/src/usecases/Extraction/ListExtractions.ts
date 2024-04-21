import { Extraction } from "src/models/Extraction";
import { IExtractionsRepository } from "src/repositories/ExtractionsRepository";
import { z } from "zod";

export const ListExtractionsInputSchema = z.object({
  userId: z.string(),
});

export type ListExtractionsInput = z.infer<typeof ListExtractionsInputSchema>;

export class ListExtractions {
  constructor(private readonly extractionRepository: IExtractionsRepository) {}

  async handle(input: ListExtractionsInput): Promise<Extraction[]> {
    const extractions = await this.extractionRepository.listExtractions(
      input.userId
    );

    return extractions;
  }
}
