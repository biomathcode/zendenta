import { crud } from "convex-helpers/server/crud";
import schema from "./schema";

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const staff = await ctx.db
      .query("staff")
      // .withSearchIndex("search_staff", (q) => q.search("name", "Pratik"))
      .collect();
    return await Promise.all(
      staff.map(async (e) => ({
        ...e,
        image: await ctx.storage.getUrl(e.image as Id<"_storage">),
      }))
    );
  },
});

//TODO: Send an email to the doctor
export const createDoctor = mutation({
  args: {
    name: v.string(),
    contact: v.string(),
    email: v.string(),
    working_days: v.array(v.number()), //1M, 2T, 3W, 4T,5F,6S,7S
    assigned_cosmetic: v.array(v.string()),
    assigned_treatment: v.array(v.string()),
    type: v.union(v.literal("PART-TIME"), v.literal("FULL-TIME")),
    occupation: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("staff", {
      ...args,
    });
  },
});

export const { create, read, update, destroy } = crud(schema, "staff");
