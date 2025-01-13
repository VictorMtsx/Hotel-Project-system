import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../db/schema.ts";
import { env } from "../env.ts";

export const client = postgres(env.DATABASE_URL);
export const db = drizzle(client, { schema, logger: true });
