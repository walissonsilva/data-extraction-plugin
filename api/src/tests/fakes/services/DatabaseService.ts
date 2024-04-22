import { IDatabaseService } from "src/services/DatabaseService";
import { vi } from "vitest";

export class FakeDatabaseService implements IDatabaseService {
  writeItem = vi.fn();
  readItem = vi.fn();
}
