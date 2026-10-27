import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Authoritative high-contrast serif matching "B" and "T" in logo
const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

// Roman monumental serif matching "PROFESSIONAL SERVICES" in logo
const cinzel = Cinzel({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

// Modern geometric sans matching "Business. Notary. Tax. Made Simple." in logo
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
    <html 
      lang="en" 
      className={`${cormorant.variable} ${cinzel.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="p-2 sm:p-5 lg:p-8 antialiased selection:bg-amber-200 selection:text-amber-950 font-sans">
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
