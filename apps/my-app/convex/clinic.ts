import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import schema from "./schema";

export const getClinic = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("clinic").collect();
  },
});

export const createClinic = mutation({
  args: {
    name: v.string(),
    address: v.string(),
  },
  handler: async (ctx, newClinic) => {
    return await ctx.db.insert("clinic", newClinic);
  },
});
