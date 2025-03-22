import z from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string().url(),
	SECRET_TOKEN: z.string(),
	USER_EMAIL: z.string().email(),
});

export const env = envSchema.parse(process.env);
