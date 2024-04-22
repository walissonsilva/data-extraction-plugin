import { z } from "zod";

const envSchema = z.object({
  Port: z.number(),
  Environment: z.string(),
  Authentication: z.object({
    Secret: z.string(),
    Expiration: z.string(),
  }),
  Firebase: z.object({
    ApiKey: z.string().min(1),
  }),
});

const envValues: z.infer<typeof envSchema> = {
  Port: Number(process.env.PORT || "3000"),
  Environment: process.env.NODE_ENV || "development",
  Authentication: {
    Secret: process.env.JWT_SECRET || "c1a5c26f-3e86-44c5-ba08-18975a0a31e6",
    Expiration: process.env.AUTH_EXPIRATION || "1h",
  },
  Firebase: {
    ApiKey: process.env.FIREBASE_API_KEY || "",
  },
};

export const env = envSchema.parse(envValues);
