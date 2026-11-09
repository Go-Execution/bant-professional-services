"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Lock, MapPin, Phone, Clock } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Refund Checkup", href: "/refund-checkup" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/booking" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      {/* Simple, readable top info bar */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-caramel-light shrink-0" />
              <span>133 N Henderson St, Rusk, TX 75785</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-amber-200 font-medium">
              <Clock className="w-3.5 h-3.5 text-caramel-light shrink-0" />
              <span>Sat, Sun &amp; Mon: 24 Hours • Tue - Fri: 6:00 PM - 9:00 PM CST</span>
            </span>
          </div>

          <a
            href="tel:4302441818"
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-caramel-light transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-caramel-light" />
            <span>(430) 244-1818</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-6">
        {/* Prominent Official Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="BNT Professional Services - Business. Notary. Tax. Made Simple."
            width={1024}
            height={1024}
            priority
            className="h-20 w-20 sm:h-24 sm:w-24 lg:h-[104px] lg:w-[104px] object-contain"
          />
        </Link>

        {/* Clean Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-base font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 transition-colors ${
                  isActive
                    ? "text-slate-950 font-bold border-b-2 border-caramel"
                    : "hover:text-slate-950"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Clean Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/portal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors px-4 py-2.5 rounded-lg border border-slate-300"
          >
            <Lock className="w-4 h-4 text-slate-700" />
            <span>Client Portal</span>
          </Link>

          <Link
            href="/booking"
            className="btn-caramel px-5 py-2.5 rounded-lg text-sm font-bold"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg border border-slate-200 text-slate-900 hover:bg-slate-50"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Simple Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4 shadow-lg">
          <div className="text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p className="font-bold text-slate-900">Weekend (Sat, Sun &amp; Mon): 24 Hours</p>
            <p className="text-xs text-slate-600">Tuesday - Friday: 6:00 PM - 9:00 PM CST</p>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-300 text-sm font-semibold text-slate-900"
            >
              <Lock className="w-4 h-4" />
              <span>Client Portal</span>
            </Link>
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-caramel py-3 rounded-lg text-sm font-bold text-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
