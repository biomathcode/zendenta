// patient image upload
// patient

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

//TODO: add filter option and pagination
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("patients").collect();
  },
});

export const createPatient = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    address: v.string(),
    registered: v.string(), //date type
    lastVisited: v.string(),
    image: v.string(),
  },

  handler: async (
    ctx,
    { name, phone, email, address, registered, lastVisited, image }
  ) => {
    const newpatient = {
      name,
      phone,
      email,
      address,
      registered,
      lastVisited,
      image,
    };
    await ctx.db.insert("patients", newpatient);
  },
});
