import { Extraction } from "src/models/Extraction";
import { IExtractionsRepository } from "src/repositories/ExtractionsRepository";

export class ListExtractions {
  constructor(private readonly extractionRepository: IExtractionsRepository) {}

  async handle(token: string): Promise<Extraction[]> {
    const extractions = await this.extractionRepository.listExtractions(token);

    return extractions;
  }
}
