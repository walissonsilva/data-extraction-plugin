import { Extraction, extractionSchema } from "src/models/Extraction";
import { IDatabaseService } from "src/services/DatabaseService";

export type IExtractionsRepository = {
  saveExtraction: (extraction: Extraction) => Promise<void>;
  listExtractions: (token: string) => Promise<Extraction[]>;
};

export class ExtractionsRepository implements IExtractionsRepository {
  constructor(private readonly databaseService: IDatabaseService) {}

  async saveExtraction(extraction: Extraction): Promise<void> {
    try {
      const currentExtractions = await this.listExtractions(extraction.userId);

      const extractionKey = "extractions/" + extraction.userId;
      await this.databaseService.writeItem<Extraction[]>(extractionKey, [
        extraction,
        ...currentExtractions,
      ]);
    } catch (err) {
      throw Error(
        `Error on trying to save the extraction for user ${extraction.userId}.`
      );
    }
  }

  async listExtractions(userId: string): Promise<Extraction[]> {
    try {
      const extractionKey = "extractions/" + userId;
      const data = await this.databaseService.readItem<Extraction[]>(
        extractionKey
      );

      if (!data) return [];

      const extractions: Extraction[] = data
        .slice(0, 20)
        .map((extraction: Extraction) =>
          extractionSchema.parse({ ...extraction, userId: userId })
        );

      return extractions;
    } catch (err) {
      throw Error(
        `Error on trying to load extractions made by the user ${userId}.`
      );
    }
  }
}
