import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          " font-Manrope " +
          ` bg-lightbg text-black dark:bg-darkbg dark:text-white`
        }
      >
        <main className="container max-w-3xl flex flex-col gap-8 py-4">
          <Link href="/">Back to home</Link>
          {children}
        </main>
      </body>
    </html>
  );
}
