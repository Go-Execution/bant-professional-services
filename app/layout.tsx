import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BNT Professional Services | Business. Notary. Tax. Made Simple. | Rusk, TX",
  description:
    "Simple, honest tax preparation, bookkeeping, and nationwide notary services. Specialized taxes for LVNs, RNs, Physicians & Healthcare Workers. 133 N Henderson Street, Rusk, TX 75785. Saturday & Sunday Evening by Appointment Only.",
  keywords: [
    "BNT Professional Services",
    "Individual Tax Rusk TX",
    "Business Tax Rusk TX",
    "Healthcare Worker Taxes LVN RN",
    "Notary All Over US",
    "Remote Online Notary",
    "Taxes State Focused",
    "133 N Henderson Street Rusk TX 75785",
  ],
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
      className={`${dmSans.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-amber-200 selection:text-slate-900 font-sans min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
