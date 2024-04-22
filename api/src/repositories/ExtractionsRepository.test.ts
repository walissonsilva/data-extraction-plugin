import { FakeDatabaseService } from "src/tests/fakes/services/DatabaseService";
import { describe, expect, it } from "vitest";
import { ExtractionsRepository } from "./ExtractionsRepository";
import { when } from "jest-when";
import { Extraction } from "src/models/Extraction";

describe("ExtractionsRepository", () => {
  const fakeDatabaseService = new FakeDatabaseService();

  describe("listExtractions", () => {
    it("should return an empty array when there are no extractions", async () => {
      const extractions: Extraction[] = [
        {
          userId: "another-user-id",
          device: "device",
          os: "os",
          origin: "origin",
        },
      ];

      when(fakeDatabaseService.readItem)
        .calledWith("extractions/user-id")
        .mockResolvedValueOnce(null);

      when(fakeDatabaseService.readItem)
        .calledWith("extractions/another-user-id")
        .mockResolvedValueOnce(extractions);

      const extractionsRepository = new ExtractionsRepository(
        fakeDatabaseService
      );

      const output = await extractionsRepository.listExtractions("user-id");

      expect(output).toEqual([]);
    });

    it("should return the extractions when there are some", async () => {
      const extractions: Extraction[] = [
        {
          userId: "another-user-id",
          device: "device",
          os: "os",
          origin: "origin",
        },
      ];

      when(fakeDatabaseService.readItem)
        .calledWith("extractions/user-id")
        .mockResolvedValueOnce(null);

      when(fakeDatabaseService.readItem)
        .calledWith("extractions/another-user-id")
        .mockResolvedValueOnce(extractions);

      const extractionsRepository = new ExtractionsRepository(
        fakeDatabaseService
      );
      const result = await extractionsRepository.listExtractions(
        "another-user-id"
      );

      expect(result).toEqual(extractions);
    });
  });

  describe("saveExtraction", () => {
    it("should save the extraction", async () => {
      const extraction: Extraction = {
        userId: "user-id",
        device: "device",
        os: "os",
        origin: "origin",
      };

      fakeDatabaseService.readItem.mockResolvedValueOnce(null);

      const extractionsRepository = new ExtractionsRepository(
        fakeDatabaseService
      );

      await extractionsRepository.saveExtraction(extraction);

      expect(fakeDatabaseService.writeItem).toHaveBeenLastCalledWith(
        "extractions/user-id",
        [extraction]
      );
    });

    it("should save the extraction when there are already extractions", async () => {
      const extraction: Extraction = {
        userId: "user-id",
        device: "device",
        os: "os",
        origin: "origin",
      };

      const currentExtractions: Extraction[] = [
        {
          userId: "user-id",
          device: "old-device",
          os: "old-os",
          origin: "old-origin",
        },
      ];

      fakeDatabaseService.readItem.mockResolvedValueOnce(currentExtractions);

      const extractionsRepository = new ExtractionsRepository(
        fakeDatabaseService
      );

      await extractionsRepository.saveExtraction(extraction);

      expect(fakeDatabaseService.writeItem).toHaveBeenLastCalledWith(
        "extractions/user-id",
        expect.arrayContaining([extraction, ...currentExtractions])
      );
    });
  });
});
