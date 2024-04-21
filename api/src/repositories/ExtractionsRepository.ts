import { Extraction } from "src/models/Extraction";

export type IExtractionsRepository = {
  saveExtraction: (extraction: Extraction) => Promise<void>;
  listExtractions: (token: string) => Promise<Extraction[]>;
};

export class ExtractionsRepository implements IExtractionsRepository {
  private extractions: Extraction[] = [];

  async saveExtraction(extraction: Extraction): Promise<void> {
    this.extractions.push(extraction);
  }

  async listExtractions(token: string): Promise<Extraction[]> {
    return this.extractions.slice(0, 20);
  }
}
