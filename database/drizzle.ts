import config from "@/lib/config";
import { drizzle } from "drizzle-orm/neon-http";

const sql = config.env.databaseUrl;

export const db = drizzle({ client: sql, casing: "snake_case" });
