import { drizzle } from 'drizzle-orm/postgres-js';
export const db = drizzle(process.env.DATABASE_URL || "postgres://zendentadmin:zendentaAdmin123@localhost:5432/zendenta");
