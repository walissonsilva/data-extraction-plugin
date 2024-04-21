import { z } from "zod";

export const extractionSchema = z.object({
  device: z.string(),
  os: z.string(),
  origin: z.string(),
});

export type Extraction = z.infer<typeof extractionSchema>;
