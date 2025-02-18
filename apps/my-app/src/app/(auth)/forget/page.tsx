"use client";

import { useState } from "react";

export default function PasswordReset() {
  const [step, setStep] = useState<"forgot" | { email: string }>("forgot");
  return step === "forgot" ? (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

      }}
    >
      <input name="email" placeholder="Email" type="text" />
      <input name="flow" type="hidden" value="reset" />
      <button type="submit">Send code</button>
    </form>
  ) : (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
      }}
    >
      <input name="code" placeholder="Code" type="text" />
      <input name="newPassword" placeholder="New password" type="password" />
      <input name="email" value={step?.email} type="hidden" />
      <input name="flow" value="reset-verification" type="hidden" />
      <button type="submit">Continue</button>
      {/* <button type="button" onClick={() => setStep("forget")}>
        Cancel
      </button> */}
    </form>
  );
}
