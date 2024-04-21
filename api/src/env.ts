import { z } from "zod";

const envSchema = z.object({
  Port: z.string(),
  Environment: z.string(),
  Authentication: z.object({
    Secret: z.string(),
    Expiration: z.string(),
  }),
});

const envValues: z.infer<typeof envSchema> = {
  Port: "3000",
  Environment: process.env.NODE_ENV || "development",
  Authentication: {
    Secret: process.env.AUTH_SECRET || "c1a5c26f-3e86-44c5-ba08-18975a0a31e6",
    Expiration: process.env.AUTH_EXPIRATION || "24h",
  },
};

export const env = envSchema.parse(envValues);
