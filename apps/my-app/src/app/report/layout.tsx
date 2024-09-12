import RootLayout from "../dashboard/layout";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
