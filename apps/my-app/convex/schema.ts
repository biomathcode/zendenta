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
    email: v.string(),
    working_days: v.array(v.number()), //1M, 2T, 3W, 4T,5F,6S,7S
    assigned_cosmetic: v.array(v.string()),
    assigned_treatment: v.array(v.string()),
    type: v.union(v.literal("PART-TIME"), v.literal("FULL-TIME")),
    occupation: v.string(),
    image: v.optional(v.string()),
  }).searchIndex("search_staff", {
    searchField: "name",
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
    clinicId: v.id("clinic"),
  }).index("clinicId", ["clinicId"]),
  clinic: defineTable({
    name: v.string(),
    address: v.optional(v.string()),
  }),
  treatments: defineTable({
    name: v.string(),
    category: v.union(
      v.literal("Medical Service"),
      v.literal("Cosmatic Service")
    ),
    description: v.string(),
    price: v.number(),
    duration: v.number(), // in seconds
  }),

  counter_table: defineTable({
    name: v.string(),
    counter: v.number(),
  }),

  ...authTables,
});
