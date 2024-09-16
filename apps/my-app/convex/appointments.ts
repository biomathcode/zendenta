// treatment
// patientid
// doctorId
// dateTime
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getAppointments = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("appointment")
      // .withSearchIndex("search_staff", (q) => q.search("name", "Pratik"))
      .collect();
  },
});

//TODO: Send an email to the doctor
export const createPeripherals = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("appointment", {
      ...args,
    });
  },
});
