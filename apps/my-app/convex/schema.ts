import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
  }),
  likes: defineTable({
    liker: v.string(),
    messageId: v.id("messages"),
  }),
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  ...authTables,
});
