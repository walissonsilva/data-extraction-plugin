import { Database, get, getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from "./FirebaseService";

export type IDatabaseService = {
  writeItem<T>(path: string, item: T): Promise<void>;
  readItem<T>(path: string): Promise<T | null>;
};

export class DatabaseService implements IDatabaseService {
  private database: Database;

  constructor() {
    this.database = getDatabase(firebaseApp);
  }

  async writeItem<T>(path: string, item: T): Promise<void> {
    try {
      const itemRef = ref(this.database, path);
      await set(itemRef, item);
    } catch (err) {
      throw Error(`Error on trying to save the item on path ${path}.`);
    }
  }

  async readItem<T>(path: string): Promise<T> {
    try {
      const itemRef = ref(this.database, path);
      const snapshot = await get(itemRef);
      const data = snapshot.val();

      return data;
    } catch (err) {
      throw Error(`Error on trying to load the item on path ${path}.`);
    }
  }
}
