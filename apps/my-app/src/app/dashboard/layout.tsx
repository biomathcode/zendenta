import type { Metadata } from "next";
import "../globals.css";
import { ConvexClientProvider } from "@/lib/ConvexClientProvider";
import { NavProvider } from "@/hooks/useNavOpen";
import NavGroup from "@/ui/navgroup";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Denta Clinic Management System",
  description: "Generated by create next app",
};
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>x
    <ClerkProvider>
      <ConvexAuthNextjsServerProvider>
        <html lang="en">
          <body>
            <ConvexClientProvider>
              <Toaster />
              <div className="flex justify-center items-center min-w-full  ">
                <main className="flex w-full h-full">
                  <NavProvider>
                    <NavGroup />
                  </NavProvider>
                  {children}
                </main>
              </div>
            </ConvexClientProvider>
          </body>
        </html>
      </ConvexAuthNextjsServerProvider>
    </ClerkProvider>
  );
}
