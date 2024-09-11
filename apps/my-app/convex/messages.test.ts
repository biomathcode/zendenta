import { convexTest } from "convex-test";
import { expect, test } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";

test("sending messages", async () => {
  const t = convexTest(schema);
  await t.mutation(api.messages.send, {
    body: "Hi!",
    author: "Sarah",
    format: "",
  });
  await t.mutation(api.messages.send, {
    body: "Hey!",
    author: "Tom",
    format: "",
  });
  const messages = await t.query(api.messages.list);
  expect(messages).toMatchObject([
    { body: "Hi!", author: "Sarah" },
    { body: "Hey!", author: "Tom" },
  ]);
});
