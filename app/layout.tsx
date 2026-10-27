import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BNT Professional Services | Business. Notary. Tax. Made Simple.",
  description: "Executive tax preparation, flat-fee refund checkups, business bookkeeping, and certified notary services in Jacksonville, TX. Grounded in faith, integrity, and upfront pricing.",
  keywords: ["Tax Preparation Jacksonville TX", "BNT Professional Services", "Refund Checkup", "Bookkeeping East Texas", "Notary Public Jacksonville TX", "UTSA Master of Accountancy"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="p-2 sm:p-5 lg:p-8 antialiased selection:bg-amber-200 selection:text-amber-900">
        <div className="editorial-wrapper max-w-[1400px] mx-auto rounded-3xl lg:rounded-[36px] overflow-hidden border border-stone-200/70 min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
