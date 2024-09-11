import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
    format: v.string(),
  }),
  likes: defineTable({
    liker: v.string(),
    messageId: v.id("messages"),
  }),
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  patients: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    address: v.string(),
    registered: v.number(), //date type
    lastVisited: v.number(),
  }),
  staff: defineTable({
    name: v.string(),
    contact: v.string(),
    workind_days: v.array(v.number()),
    assigned_treatment: v.array(v.string()),
    type: v.union(v.literal("PART-TIME"), v.literal("FULL-TIME")),
  }),
  stocks: defineTable({
    name: v.string(),
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
    assertValue: v.number(), // in dollars
  }),

  counter_table: defineTable({
    name: v.string(),
    counter: v.number(),
  }),

  ...authTables,
});
