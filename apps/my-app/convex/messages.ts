import { query, mutation } from "./_generated/server";

import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});

export const list = query(async (ctx) => {
  return await ctx.db.query("messages").collect();
});

export const send = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async (ctx, { body, author }) => {
    const message = { body, author };
    await ctx.db.insert("messages", message);
  },
});
