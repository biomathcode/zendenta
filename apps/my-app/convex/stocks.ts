// in convex/users.ts
import { crud } from "convex-helpers/server/crud";
import schema from "./schema";

export const { create, read, update, destroy } = crud(schema, "stocks");
