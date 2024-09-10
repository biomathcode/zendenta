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

export const increment = mutation(
  async ({ db }, { counterName }: { counterName: string }) => {
    const counterDoc = await db
      .query("counter_table")
      .filter((q) => q.eq(q.field("name"), counterName))
      .first();
    const incrementBy = 1;
    if (counterDoc === null) {
      await db.insert("counter_table", {
        name: counterName,
        counter: incrementBy,
      });
      // console.log messages appear in your browser's console and the Convex dashboard.
      console.log("Created counter.");
    } else {
      counterDoc.counter += incrementBy;
      await db.replace(counterDoc._id, counterDoc);
      console.log(
        `Value of counter ${counterName} is now ${counterDoc.counter}.`
      );
    }
  }
);

export const send = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async (ctx, { body, author }) => {
    const message = { body, author };
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
