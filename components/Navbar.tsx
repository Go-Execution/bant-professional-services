"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X, ChevronDown, Lock, MapPin, Clock, ShieldCheck, Phone } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Refund Checkup", href: "/refund-checkup", badge: "Flat Fee" },
    { name: "Consultation", href: "/booking" },
  ];

  const serviceSublinks = [
    { name: "All Services Overview", href: "/services" },
    { name: "Individual Tax Preparation", href: "/services#individual-tax" },
    { name: "Business Tax Preparation", href: "/services#business-tax" },
    { name: "Healthcare Worker Taxes (LVN / RN / MD)", href: "/services#healthcare-tax" },
    { name: "The BNT Refund Checkup", href: "/refund-checkup" },
    { name: "Notary Public (All Over US)", href: "/services#notary" },
    { name: "Account Reconciliations & Cleanup", href: "/services#reconciliation" },
  ];

  return (
    <header className="z-30">
      {/* Top Utility Announcement Bar */}
      <div className="bg-charcoal-900 text-stone-300 text-[11px] py-2 px-4 sm:px-10 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 font-medium">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-caramel shrink-0" />
              <span>133 N Henderson Street, Rusk, TX 75785</span>
            </span>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span className="inline-flex items-center gap-1.5 text-caramel-light font-semibold">
              <Clock className="w-3.5 h-3.5 text-caramel shrink-0" />
              <span>Saturday & Sunday: By Appointment</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-stone-200 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-caramel shrink-0" />
              <span>Notary All Over US • Taxes State-Focused</span>
            </span>
            <span className="text-stone-600 hidden lg:inline">|</span>
            <a href="tel:9035550192" className="hidden lg:inline-flex items-center gap-1 text-stone-300 hover:text-caramel transition-colors">
              <Phone className="w-3 h-3 text-caramel" />
              <span>(903) 555-0192</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="relative px-6 sm:px-10 lg:px-14 py-4 sm:py-5 flex items-center justify-between border-b border-stone-200/50 bg-[#F6F3EE]">
        
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="BNT Professional Services - Business. Notary. Tax. Made Simple."
            width={1794}
            height={877}
            priority
            className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 transition-colors py-2 ${
                      pathname.startsWith("/services") ? "text-charcoal-900 font-bold" : "hover:text-charcoal-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdown && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-stone-200/80 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      {serviceSublinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setServicesDropdown(false)}
                          className="block px-3.5 py-2 rounded-xl text-xs font-medium text-stone-700 hover:bg-linen-100 hover:text-charcoal-900 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 transition-colors py-2 ${
                  isActive ? "text-charcoal-900 font-bold" : "hover:text-charcoal-900"
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-caramel/25 text-charcoal-900 border border-caramel/40">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/portal"
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-charcoal-900 transition-colors px-3.5 py-2.5 rounded-full border border-stone-300 hover:border-stone-400 bg-white/70"
          >
            <Lock className="w-3.5 h-3.5 text-caramel-dark" />
            <span>Client Portal</span>
          </Link>

          <Link
            href="/booking"
            className="btn-caramel pl-5 pr-3 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2.5"
          >
            <span>Get Free Consultation</span>
            <span className="w-7 h-7 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-charcoal-900 hover:text-stone-600 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#F6F3EE] border-b border-stone-200/80 p-6 space-y-4 shadow-xl lg:hidden z-50">
            <div className="p-3 rounded-xl bg-charcoal-900 text-stone-200 text-xs space-y-1">
              <p className="font-semibold text-caramel-light">133 N Henderson Street, Rusk, TX 75785</p>
              <p className="text-[11px] text-stone-400">Saturday & Sunday: By Appointment</p>
              <p className="text-[11px] text-stone-400">Notary All Over US • Taxes State-Focused</p>
            </div>

            <div className="flex flex-col space-y-2 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-stone-700 hover:bg-stone-200/50 hover:text-charcoal-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-200 space-y-1">
              <span className="text-[11px] font-mono uppercase text-stone-500 font-bold block px-3">Services</span>
              {serviceSublinks.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-stone-600 hover:text-charcoal-900"
                >
                  {sub.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-stone-300 text-xs font-semibold text-charcoal-900 bg-white"
              >
                <Lock className="w-3.5 h-3.5 text-caramel-dark" />
                <span>Client Portal Login</span>
              </Link>
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-caramel py-3 rounded-full text-xs font-semibold text-center block"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
