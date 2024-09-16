import { defineSchema, defineTable } from "convex/server";
import { v, VString } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
    format: v.string(),
  }),

  patients: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    address: v.string(),
    registered: v.string(), //date type
    lastVisited: v.string(),
    image: v.string(),
  }),
  appointment: defineTable({
    patientId: v.string(),
    treatmentId: v.string(),
    doctorId: v.string(),
    documentId: v.string(),
    dateTime: v.string(),
    note: v.optional(v.string()),
    status: v.union(
      v.literal("FINISHED"),
      v.literal("Doing Treatment"),
      v.literal("Registered")
    ),
  }).index("by_patientId_treatmentId_doctorId", [
    "patientId",
    "treatmentId",
    "doctorId",
    "documentId",
  ]),
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
    // clinicId: v.id("clinic"),
  }),
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
  peripherals: defineTable({
    productname: v.string(),
    productimage: v.string(),
    assignedTo: v.string(), // room 1 , 2
    tags: v.array(v.string()),
    series: v.string(),
    category: v.string(), // Main Equipment, Support Equipment, Diagnostic Tools
    weigth: v.number(),
    sku: v.string(),
    barcode: v.string(),
    description: v.string(),
    purchaseDate: v.number(),
    purchasePrice: v.number(),
    vendor: v.string(),
    invoiceNumber: v.number(),
    status: v.union(
      v.literal("Draft"),
      v.literal("Used"),
      v.literal("Not Used")
    ),
  }),
  documents: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    tokenIdentifier: v.optional(v.string()),
    orgId: v.optional(v.string()),
    embedding: v.optional(v.array(v.float64())),
    fileId: v.id("_storage"),
  })
    .index("by_tokenIdentifier", ["tokenIdentifier"])
    .index("by_orgId", ["orgId"])
    .vectorIndex("by_embedding", {
      vectorField: "embedding",
      dimensions: 1536,
      filterFields: ["tokenIdentifier", "orgId"],
    }),

  counter_table: defineTable({
    name: v.string(),
    counter: v.number(),
  }),

  ...authTables,
});
