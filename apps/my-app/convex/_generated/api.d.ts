/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as ResendOTP from "../ResendOTP.js";
import type * as ResendOTPPasswordReset from "../ResendOTPPasswordReset.js";
import type * as appointments from "../appointments.js";
import type * as auth from "../auth.js";
import type * as clinic from "../clinic.js";
import type * as documents from "../documents.js";
import type * as files from "../files.js";
import type * as http from "../http.js";
import type * as messages from "../messages.js";
import type * as patients from "../patients.js";
import type * as peripherals from "../peripherals.js";
import type * as staff from "../staff.js";
import type * as stocks from "../stocks.js";
import type * as treatments from "../treatments.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  ResendOTP: typeof ResendOTP;
  ResendOTPPasswordReset: typeof ResendOTPPasswordReset;
  appointments: typeof appointments;
  auth: typeof auth;
  clinic: typeof clinic;
  documents: typeof documents;
  files: typeof files;
  http: typeof http;
  messages: typeof messages;
  patients: typeof patients;
  peripherals: typeof peripherals;
  staff: typeof staff;
  stocks: typeof stocks;
  treatments: typeof treatments;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
