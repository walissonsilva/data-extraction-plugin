import { Database, get, getDatabase, ref, set } from "firebase/database";
import { Extraction, extractionSchema } from "src/models/Extraction";
import { firebaseApp } from "src/services/FirebaseService";

export type IExtractionsRepository = {
  saveExtraction: (extraction: Extraction) => Promise<void>;
  listExtractions: (token: string) => Promise<Extraction[]>;
};

export class ExtractionsRepository implements IExtractionsRepository {
  private database: Database;

  constructor() {
    this.database = getDatabase(firebaseApp);
  }

  async saveExtraction(extraction: Extraction): Promise<void> {
    try {
      const currentExtractions = await this.listExtractions(extraction.userId);

      await set(ref(this.database, "extractions/" + extraction.userId), [
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
    const extractionsRef = ref(this.database, "extractions/" + userId);

    const snapshot = await get(extractionsRef);

    try {
      const data = snapshot.val() ?? [];

      const extractions: Extraction[] = data.map((extraction: Extraction) =>
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
