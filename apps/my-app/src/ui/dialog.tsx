// Dialog
// entry animation from rigth
// exit animation

// Dialog Types with information data
// 1. Detail Accounts
// 2. Add new Account
// 3. Transfer money
// 4. Confirmation
// 5. Add new Doctor Staff
// 6. Reservation
// 7. Medical Checkup
// 8. Add patient to waitlist
// 9. Add Medical Records
// 10. Treatment Summary
// 11. Finish Treatment
// 12. History and Comment
// 13. Billing
// 14. Payment Success
// 15. Invoice
// 16.

"use client";

import { Drawer } from "vaul";

function MyDialog() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button name="drawerbutton">Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className=" flex flex-col justify-center rounded-t-[10px] h-full w-[500px]  mt-24 fixed bottom-0 right-4">
          <div className="p-4 bg-white rounded-3xl flex-1 max-h-[94%]">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Unstyled drawer for React.
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default MyDialog;
