import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getPeripherals = query({
  args: {},
  handler: async (ctx) => {
    const staff = await ctx.db
      .query("peripherals")
      // .withSearchIndex("search_staff", (q) => q.search("name", "Pratik"))
      .collect();
    return await Promise.all(
      staff.map(async (e) => ({
        ...e,
        image: await ctx.storage.getUrl(e.productimage as Id<"_storage">),
      }))
    );
  },
});

//TODO: Send an email to the doctor
export const createPeripherals = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("peripherals", {
      ...args,
    });
  },
});
