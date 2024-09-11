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
  args: { body: v.string(), author: v.string(), format: v.string() },
  handler: async (ctx, { body, author, format }) => {
    const message = { body, author, format };
    await ctx.db.insert("messages", message);
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const sendImage = mutation({
  args: { storageId: v.id("_storage"), author: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      body: args.storageId,
      author: args.author,
      format: "image",
    });
  },
});
