"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowRight, 
  Phone, 
  Scale, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  FileText, 
  BookOpen, 
  Calculator,
  Lock,
  ChevronRight,
  Plus,
  Minus,
  Clock,
  Globe,
  Stethoscope,
  Briefcase,
  UserCheck,
  Building2,
  FileCheck2,
  Stamp
} from "lucide-react";

export default function HomePage() {
  const [selectedServiceChip, setSelectedServiceChip] = useState("Healthcare Worker Taxes");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Taxes for Healthcare Workers (LVN, RN, Physicians, Allied Health)",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you specialize in taxes for nurses, physicians, and healthcare workers?",
      a: "Yes. We offer specialized tax preparation tailored specifically for Licensed Vocational Nurses (LVN), Registered Nurses (RN), Nurse Practitioners, Physicians, and Allied Healthcare Workers. We optimize complex filings including travel nurse stipends, PRN shift differentials, multiple state W-2s, 1099 agency contracts, continuing education (CEU/CME) expenses, scrubs/equipment, and licensing fees.",
    },
    {
      q: "Where is your physical office located, and what are your weekend hours?",
      a: "Our primary office is located at 133 N Henderson Street, Rusk, TX 75785. We serve clients throughout Rusk, Jacksonville, Cherokee County, and all of East Texas. We are open Monday through Friday during standard business hours, with Saturday and Sunday available By Appointment to accommodate your shifts and family schedules.",
    },
    {
      q: "Can you notarize documents outside of Texas?",
      a: "Yes. While our tax preparation is state-focused for state filers and compliance, our certified Notary Public services are available all over the US via secure Remote Online Notarization (RON), as well as in-person appointments at our Rusk, TX office.",
    },
    {
      q: "How does the BNT Refund Checkup work?",
      a: "The Refund Checkup is a flat-fee review of your tax documents before you file. We calculate a written estimate of your expected refund or balance due, cross-check for deductions you may have overlooked, and provide a clear checklist of any missing forms.",
    },
    {
      q: "Why do you never charge a percentage of my tax refund?",
      a: "Because your refund belongs entirely to you. High-volume storefronts often take 10% to 25% of refunds or push questionable deductions to inflate their fees. Our fee is strictly flat and quoted upfront, ensuring objective, honest tax preparation without conflicting incentives.",
    },
    {
      q: "What bookkeeping and reconciliation support do you offer for businesses?",
      a: "We match your bank, credit card, and merchant statements directly to your general ledger to eliminate variances. We also perform multi-month historical cleanup bookkeeping and prepare audit-ready financial statements for sole proprietors, LLCs, and small business owners.",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
  };

  return (
    <div>
      {/* 1. FIRST HERO SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 pt-10 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Editorial Headline & Guidance */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* The 3 Core Pillars Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-caramel/15 border border-caramel/40 text-charcoal-900 text-xs font-cinzel font-bold tracking-[0.2em]">
              <span>BUSINESS</span>
              <span className="text-caramel font-bold">•</span>
              <span>NOTARY</span>
              <span className="text-caramel font-bold">•</span>
              <span>TAX</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl text-charcoal-900 leading-[1.05] tracking-tight">
              Professional for Individuals & Businesses.
            </h1>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-sm">
              Business. Notary. Tax. Made Simple. Providing sharp tax preparation, clean bookkeeping reconciliations, and certified notary services. Grounded in faith, integrity, and 100% upfront flat-rate pricing.
            </p>

            {/* Scope Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-charcoal-900 font-semibold shadow-sm">
                <Globe className="w-3.5 h-3.5 text-caramel-dark" />
                <span>Notary All Over US</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-charcoal-900 font-semibold shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-caramel-dark" />
                <span>Taxes State-Focused</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/30 text-charcoal-900 font-bold">
                <Clock className="w-3.5 h-3.5 text-caramel-dark" />
                <span>Saturday & Sunday By Appointment</span>
              </span>
            </div>

            {/* Phone Number Pill + Handwritten Floating Arrow */}
            <div className="pt-2 flex items-center gap-4 relative">
              <a
                href="tel:9035550192"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-caramel/25 border border-caramel/40 text-charcoal-900 text-xs sm:text-sm font-bold hover:bg-caramel/40 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center text-xs">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span>+1 (903) 555-0192</span>
              </a>

              {/* Playful Doodled Arrow pointing right */}
              <div className="floating-doodle hidden sm:block">
                <svg className="w-12 h-10 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 54 36">
                  <path d="M4 10 C 18 2, 28 32, 48 16" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M42 12 L 48 16 L 44 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>

            {/* Vintage Scales of Justice / Integrity Seal */}
            <div className="pt-4 opacity-85 hidden sm:block">
              <div className="flex items-center gap-3 text-stone-500 text-xs">
                <Scale className="w-10 h-10 text-stone-600 shrink-0 stroke-[1.5]" />
                <div>
                  <p className="font-serif text-sm font-semibold text-charcoal-900">133 N Henderson Street, Rusk, TX 75785</p>
                  <p className="text-[11px] text-stone-500">Grounded in faith, integrity & respectful service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Iconic Arch Frame & Circular Rotating Badge */}
          <div className="lg:col-span-4 flex justify-center relative">
            <div className="relative w-[280px] sm:w-[320px] pt-4">
              
              {/* Arch Background Container */}
              <div className="arch-portrait w-full h-[400px] sm:h-[450px] relative overflow-hidden shadow-xl flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/20 pointer-events-none"></div>

                {/* Professional Silhouette Graphic with Official Logo */}
                <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="w-40 h-24 sm:w-44 sm:h-26 rounded-2xl bg-white/95 shadow-md flex items-center justify-center p-2.5 border-4 border-white/80">
                    <Image
                      src="/logo.png"
                      alt="BNT Professional Services Official Logo"
                      width={1794}
                      height={877}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-48 sm:w-56 h-48 bg-stone-900 rounded-t-full mt-2 shadow-2xl relative flex flex-col items-center pt-5">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-xs text-white font-serif">
                      UTSA
                    </div>
                    <span className="text-xs font-semibold text-stone-200 mt-2 font-mono">Principal Consultant</span>
                    <span className="text-[10px] text-caramel-light font-medium uppercase tracking-wider">MAcc • MBA</span>
                  </div>
                </div>
              </div>

              {/* Signature Circular Rotating Badge */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                  <svg className="rotating-badge absolute inset-0 w-full h-full text-charcoal-900" viewBox="0 0 120 120">
                    <path id="badgePath" d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="transparent"></path>
                    <text className="text-[9.5px] font-cinzel font-bold tracking-[2.8px] uppercase fill-charcoal-900">
                      <textPath xlinkHref="#badgePath">
                        • BUSINESS • NOTARY • TAX • MADE SIMPLE •
                      </textPath>
                    </text>
                  </svg>

                  <Link
                    href="/booking"
                    className="w-12 h-12 rounded-full bg-charcoal-900 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    aria-label="Book a Consultation"
                  >
                    <ArrowRight className="w-5 h-5 text-caramel -rotate-45" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Practical Note & Big Metrics */}
          <div className="lg:col-span-4 space-y-8 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-stone-200/60 flex items-center justify-center text-stone-700">
              <Scale className="w-6 h-6 stroke-[1.75]" />
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              Support should be clear, fast, and focused. BNT gives you practical guidance without the jargon, upfront flat pricing, and zero commissions taken from your refund.
            </p>

            {/* 2 Key Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-2 border-t border-stone-200/70">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold block">100%</span>
                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block mt-1">Flat-Rate Fees</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold block">UTSA</span>
                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block mt-1">Master of Accountancy</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <Link 
                href="/refund-checkup"
                className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-900 hover:text-caramel transition-colors"
              >
                <span>Calculate Your Refund Review</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="text-[11px] text-stone-500 font-mono">
                133 N Henderson St, Rusk, TX 75785 • By Appt Sat & Sun
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SPECIALIZED HIGHLIGHT: TAXES FOR HEALTHCARE WORKERS */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 bg-[#FAF6F0] border-y border-stone-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-caramel/40 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/30 text-[11px] font-cinzel font-bold uppercase tracking-wider text-charcoal-900">
                <Stethoscope className="w-3.5 h-3.5 text-caramel-dark" />
                <span>Specialized Practice Highlight</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Taxes for Licensed Vocational Nurses (LVN), Registered Nurses (RN), Physicians & Allied Healthcare Workers
              </h2>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                Healthcare workers face unique tax challenges: multiple state licenses, travel per diems, PRN shifts across facilities, continuing medical education (CME/CEU), and uniform deductions. We provide dedicated tax preparation to ensure you claim every deduction you earned.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0 mt-0.5" />
                  <span>Travel nurse stipends, per diem & multi-state W-2 filings</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0 mt-0.5" />
                  <span>PRN shift differentials & 1099 agency contract reconciliation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0 mt-0.5" />
                  <span>Continuing education (CEU/CME), licensing & board exam fees</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0 mt-0.5" />
                  <span>Malpractice insurance, medical supplies, scrubs & gear</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-linen-100 rounded-2xl p-6 sm:p-7 border border-stone-200/80 space-y-4 text-center lg:text-left">
              <span className="text-[11px] font-cinzel uppercase tracking-[0.18em] text-caramel-dark font-bold block">
                Healthcare Worker Assurance
              </span>
              <h3 className="font-serif text-2xl text-charcoal-900">
                100% Flat-Rate. Zero Refund Cut.
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We never take a percentage of your refund. Upload your documents to your private encrypted vault. Saturday & Sunday appointments available for shift workers.
              </p>
              <Link
                href="/booking?service=Healthcare+Worker+Taxes"
                className="w-full btn-caramel py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2 block"
              >
                <span>Book Healthcare Tax Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-white/70 border-b border-stone-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 aspect-[4/3] bg-stone-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-850 to-stone-800 opacity-95"></div>
              
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-cinzel tracking-widest text-caramel uppercase">133 N Henderson St • Rusk, TX</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono">TX</span>
                </div>
                <div className="space-y-3">
                  <p className="font-serif text-2xl sm:text-3xl font-normal leading-snug text-stone-100">
                    "Doing honest work, serving people with integrity, and treating every client with respect."
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-xs font-mono text-stone-400">
                    <span>Ex-JPMorgan Chase</span>
                    <span>•</span>
                    <span>Private New York Tax Firm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-stone-700 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-caramel"></span>
              About BNT Professional Services
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal-900 leading-tight">
              Building Solutions Through Financial Excellence & Integrity
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              At BNT Professional Services, we believe that tax and financial guidance should be clear, confident, and client-focused. With years of experience helping individuals and businesses, our mission is to simplify complex filings and provide strategic clarity.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Our Principal Consultant holds a Master of Accountancy (MAcc) degree from the University of Texas at San Antonio (UTSA), a Bachelor&apos;s degree, and a Master of Business Administration (MBA). Having worked at a private New York tax firm and for JPMorgan Chase, he brings deep institutional knowledge directly to East Texas families and businesses.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="btn-caramel pl-6 pr-3 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-3"
              >
                <span>More About Our Practice</span>
                <span className="w-7 h-7 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <span className="text-xs font-mono text-stone-500">
                Rusk, TX 75785 • Saturday & Sunday By Appt
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. KEY METRICS STRIP */}
      <section className="border-b border-stone-200/70 bg-linen-100/50 py-12 px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
          <div className="pt-4 lg:pt-0 lg:px-6 first:pl-0">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 block">100%</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Upfront Flat-Rate Pricing</span>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-6">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 block">$0</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Commission on Refunds</span>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-6">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 block">All 50</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">States Notary Coverage (RON)</span>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-6">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 block">UTSA</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Master of Accountancy</span>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-[#F6F3EE]">
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
            Our Core Services
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal-900 leading-tight">
            Professional for Individuals & Businesses
          </h2>
          <p className="text-sm text-stone-600">
            Transparent, reliable tax and business solutions crafted for individuals, healthcare professionals, families, and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Individual Tax */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-linen-100 flex items-center justify-center font-serif text-lg font-bold text-charcoal-900">
                01
              </div>
              <span className="text-[11px] font-cinzel uppercase tracking-wider text-caramel-dark font-bold block">
                Individuals & Families
              </span>
              <h3 className="font-serif text-2xl text-charcoal-900">Individual Tax Preparation</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Complete, accurate preparation and electronic filing for W-2 wage earners, homeowners, families, and self-employed contractors. State-focused tax filings with zero commissions on your refund.
              </p>
              <ul className="text-xs text-stone-600 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>The BNT Refund Checkup diagnostic review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Child Tax Credit & dependent optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Electronic IRS e-file with instant confirmation</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/services#individual-tax"
                className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-2 transition-colors"
              >
                <span>Explore Individual Tax</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Business Tax & Books */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-linen-100 flex items-center justify-center font-serif text-lg font-bold text-charcoal-900">
                02
              </div>
              <span className="text-[11px] font-cinzel uppercase tracking-wider text-caramel-dark font-bold block">
                Small Business & LLCs
              </span>
              <h3 className="font-serif text-2xl text-charcoal-900">Business Tax & Bookkeeping</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Strategic tax filing support for small businesses, sole proprietors, and LLCs. Plus account reconciliations matching bank statements directly to your general ledger.
              </p>
              <ul className="text-xs text-stone-600 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Schedule C deduction defense & expense allocation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Account reconciliations & zero-variance balance sheets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Historical catch-up bookkeeping for overdue months</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/services#business-tax"
                className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-2 transition-colors"
              >
                <span>Explore Business Tax</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Notary Public All Over US */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-linen-100 flex items-center justify-center font-serif text-lg font-bold text-charcoal-900">
                03
              </div>
              <span className="text-[11px] font-cinzel uppercase tracking-wider text-caramel-dark font-bold block">
                Nationwide & Local In-Person
              </span>
              <h3 className="font-serif text-2xl text-charcoal-900">Notary Public (All Over US)</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Certified, reliable notarization for real estate, business contracts, and legal documents. Available nationwide via Remote Online Notarization (RON) and in-person in Rusk, TX.
              </p>
              <ul className="text-xs text-stone-600 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Remote Online Notary across all 50 states</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>In-person at 133 N Henderson St, Rusk, TX</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Warranty deeds, loan packets, powers of attorney</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/services#notary"
                className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-2 transition-colors"
              >
                <span>Schedule Notary Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CONSULTATION & CONTACT FORM SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 bg-white border-t border-stone-200/70">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block mb-2">
            Direct Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
            Get in Touch with BNT Professional Services
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Reach out directly to our Principal Consultant. We provide straightforward answers to your tax and bookkeeping needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Preview & Office Info */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-stone-200 bg-linen-100 p-6 sm:p-8 flex flex-col justify-between relative min-h-[420px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-cinzel font-bold uppercase text-stone-500 tracking-wider">Office & Regional Headquarters</span>
                <span className="px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-stone-700 shadow-sm border border-stone-200">
                  Rusk, TX 75785
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Serving Cherokee County, Rusk, Jacksonville, Tyler, and East Texas clients with in-person visits, plus remote 256-bit encrypted portal access and nationwide online notary services.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3 my-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-caramel/20 text-caramel-dark flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">Rusk Office Location</h4>
                  <p className="text-xs text-stone-600 font-semibold">133 N Henderson Street, Rusk, TX 75785</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Cherokee County • East Texas</p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-600 gap-1.5">
                <span>Phone: <a href="tel:9035550192" className="font-semibold text-charcoal-900 hover:text-caramel">+1 (903) 555-0192</a></span>
                <span className="px-2.5 py-1 rounded-full bg-caramel/15 text-charcoal-900 font-semibold text-[11px]">
                  Saturday & Sunday: By Appointment
                </span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-stone-500 flex items-center justify-between">
              <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
              <span className="text-caramel-dark font-semibold">Weekend By Appt</span>
            </div>
          </div>

          {/* Form Card (Contains Exact Fields: Name, Phone, Email, What service they are interested) */}
          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-3xl p-7 sm:p-9 border border-stone-200/90 shadow-sm">
            
            <div className="space-y-2 mb-6">
              <h3 className="font-serif text-2xl text-charcoal-900">Schedule a Free Consultation</h3>
              <p className="text-xs text-stone-500">
                Please complete the form below. Our Principal Consultant will review your details and contact you within 24 hours.
              </p>
            </div>

            {/* Quick Category Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Healthcare Worker Taxes",
                "Individual Tax",
                "Business Tax",
                "Notary (All Over US)",
                "The Refund Checkup",
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setSelectedServiceChip(chip);
                    if (chip === "Healthcare Worker Taxes") {
                      setContactForm({ ...contactForm, service: "Taxes for Healthcare Workers (LVN, RN, Physicians, Allied Health)" });
                    } else if (chip === "Individual Tax") {
                      setContactForm({ ...contactForm, service: "Individual Tax Preparation" });
                    } else if (chip === "Business Tax") {
                      setContactForm({ ...contactForm, service: "Business Tax Preparation" });
                    } else if (chip === "Notary (All Over US)") {
                      setContactForm({ ...contactForm, service: "Notary Public (All Over US)" });
                    } else if (chip === "The Refund Checkup") {
                      setContactForm({ ...contactForm, service: "The BNT Refund Checkup" });
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedServiceChip === chip
                      ? "bg-caramel text-charcoal-900 shadow-sm"
                      : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {contactSubmitted ? (
              <div className="bg-white rounded-2xl p-8 border border-stone-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="font-serif text-xl text-charcoal-900">Consultation Request Received</h4>
                <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, {contactForm.name || "Client"}. We have received your inquiry for <strong>{contactForm.service}</strong>. Our Principal Consultant will contact you at {contactForm.phone || contactForm.email} to confirm your appointment.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="btn-caramel px-5 py-2 rounded-full text-xs font-semibold mt-2"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                
                {/* 1. Name */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Name*
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                  />
                </div>

                {/* 2. Phone */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Phone*
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(903) 000-0000"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                  />
                </div>

                {/* 3. Email */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Email*
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                  />
                </div>

                {/* 4. What service they are interested */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    What service are you interested in?*
                  </label>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-stone-800 focus:outline-none focus:border-caramel font-medium"
                  >
                    <option value="Taxes for Healthcare Workers (LVN, RN, Physicians, Allied Health)">
                      Taxes for Healthcare Workers (LVN, RN, Physicians, Allied Health)
                    </option>
                    <option value="Individual Tax Preparation">
                      Individual Tax Preparation
                    </option>
                    <option value="Business Tax Preparation">
                      Business Tax Preparation
                    </option>
                    <option value="Notary Public (All Over US)">
                      Notary Public (All Over US / Online & In-Person)
                    </option>
                    <option value="The BNT Refund Checkup">
                      The BNT Refund Checkup (Flat-Fee Review)
                    </option>
                    <option value="Account Reconciliations & Bookkeeping">
                      Account Reconciliations & Bookkeeping Support
                    </option>
                  </select>
                </div>

                {/* Optional Message Field */}
                <div>
                  <label className="block text-stone-600 font-medium mb-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your tax situation or questions..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-caramel py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-3 shadow-md"
                >
                  <span>Submit Consultation Request</span>
                  <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 7. CLIENT FAQ SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 bg-[#F6F3EE] border-t border-stone-200/70">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            We believe in complete transparency. Here is everything you need to know about our flat-fee structure, security, and process.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-charcoal-900 hover:text-caramel transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-linen-100 flex items-center justify-center shrink-0 text-charcoal-900">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-8 flex items-center gap-4">
          <Link
            href="/booking"
            className="btn-caramel px-6 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>Ask a Question in a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 8. NEWSLETTER / BOTTOM CALLOUT */}
      <section className="px-6 sm:px-10 lg:px-14 py-14 bg-white border-t border-stone-200/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 text-center md:text-left">
            Turn Financial Questions <br className="hidden sm:inline" /> Into Confident Decisions.
          </h3>

          <div className="w-full md:w-auto max-w-md">
            {newsletterSubmitted ? (
              <div className="bg-linen-100 px-5 py-3 rounded-full border border-stone-200 text-xs font-medium text-emerald-800 flex items-center gap-2">
                <span>✓</span>
                <span>Subscribed! You will receive our tax season guidance notes.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 bg-linen-100 p-1.5 rounded-full border border-stone-200">
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent text-xs text-stone-800 px-4 py-2 w-full focus:outline-none placeholder-stone-400"
                />
                <button type="submit" className="btn-caramel px-5 py-2 rounded-full text-xs font-semibold shrink-0 flex items-center gap-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
