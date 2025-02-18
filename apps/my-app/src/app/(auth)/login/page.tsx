"use client";
import { useState } from "react";


function SignIn() {

  const user = {
    email: 'pratik Sharma'
  }

  console.log(user);
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");

  return (
    <>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
        }}
      >
        <input name="email" placeholder="Email" type="text" />
        <input name="password" placeholder="Password" type="password" />
        <input name="flow" type="hidden" value={step} />
        <button type="submit">
          {step === "signIn" ? "Sign in" : "Sign up"}
        </button>
        <button
          type="button"
          onClick={() => {
            setStep(step === "signIn" ? "signUp" : "signIn");
          }}
        >
          {step === "signIn" ? "Sign up instead" : "Sign in instead"}
        </button>
      </form>


      <div>{user?.email}</div>
      <div>
        <button className="" onClick={() => alert('log out')}>
          Log out
        </button>
      </div>

    </>
  );
}

export default SignIn;
