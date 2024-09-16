import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getTreatment = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("treatments")
      // .withSearchIndex("search_staff", (q) => q.search("name", "Pratik"))
      .collect();
  },
});

//TODO: Send an email to the doctor
export const createTreatment = mutation({
  args: {
    name: v.string(),
    category: v.union(
      v.literal("Medical Service"),
      v.literal("Cosmatic Service")
    ),
    description: v.string(),
    price: v.number(),
    duration: v.number(), // in seconds
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("treatments", {
      ...args,
    });
  },
});
