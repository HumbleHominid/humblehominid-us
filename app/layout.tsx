import type { Metadata } from "next";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "HumbleHominid",
  description: "Website for HumbleHominid and all his stuff!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-900 dark:text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
