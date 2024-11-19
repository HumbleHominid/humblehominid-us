import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { inter } from "@/app/styles/fonts/fonts";
import Footer from "@/app/ui/footer/footer";
import Navbar from "@/app/ui/navbar/navbar";

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
        <div className="grid grid-rows-layout min-h-lvh justify-items-stretch">
          {/* Navbar */}
          <Navbar />
          {/* Content */}
          <div className="p-4 w-11/12 sm:w-4/5 lg:w-3/5 justify-self-center">
            {children}
            <Analytics />
          </div>
          {/* Footer */}
          <div className="row-start-4 mt-4">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
