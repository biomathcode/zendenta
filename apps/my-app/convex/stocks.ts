// in convex/users.ts

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getStocks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("stocks")
      // .withSearchIndex("search_staff", (q) => q.search("name", "Pratik"))
      .collect();
  },
});

//TODO: Send an email to the doctor
export const createStocks = mutation({
  args: {
    name: v.string(),
    image: v.string(),
    categories: v.union(
      v.literal("Antiseptic"),
      v.literal("Antibiotic"),
      v.literal("Steroid")
    ),
    sku: v.string(),
    vendor: v.string(),
    stock: v.number(),
    status: v.union(
      v.literal("IN STOCK"),
      v.literal("LOW STOCK"),
      v.literal("OUT OF STOCK")
    ),
    quantity: v.number(),
    assertValue: v.number(), // in dollars
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("stocks", {
      ...args,
      status: "IN STOCK",
    });
  },
});
