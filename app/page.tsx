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
  HelpCircle
} from "lucide-react";

export default function HomePage() {
  const [selectedServiceChip, setSelectedServiceChip] = useState("Tax Prep");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "The BNT Refund Checkup",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the BNT Refund Checkup work?",
      a: "The Refund Checkup is a flat-fee review of your tax documents before you file. We calculate a written estimate of your expected refund or balance due, cross-check for deductions you may have overlooked, and provide a clear checklist of any missing forms.",
    },
    {
      q: "Why do you never charge a percentage of my refund?",
      a: "Because your refund is your hard-earned money. High-volume tax storefronts often take 10% to 25% of refunds or push questionable deductions to inflate their fees. Our fee is strictly flat and quoted upfront, ensuring objective, honest tax preparation.",
    },
    {
      q: "How does the private client portal protect my personal information?",
      a: "We never ask you to email or text sensitive documents like W-2s, 1099s, or Social Security numbers. Everything is uploaded directly into your private 256-bit encrypted client vault, which is protected by bank-grade security protocols.",
    },
    {
      q: "What bookkeeping and reconciliation services do you provide for businesses?",
      a: "We match your bank, credit card, and merchant statements directly to your general ledger to eliminate discrepancies. We also provide multi-month catch-up bookkeeping and prepare clean financial statements so your business is audit-ready.",
    },
    {
      q: "Where do you offer notary appointments?",
      a: "We offer certified notary services all over the US via secure Remote Online Notarization (RON), as well as local in-person appointments at our office at 133 N Henderson Street, Rusk, TX 75785 and throughout East Texas. Saturday & Sunday appointments are available by request.",
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
      {/* 1. HERO SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 pt-10 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Editorial Headline & Guidance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-caramel/25 border border-caramel/40 text-charcoal-900 text-xs font-bold uppercase tracking-wider">
                Business • Notary • Tax
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-bold">
                Individuals &amp; Businesses
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl text-charcoal-900 leading-[1.05] tracking-tight">
              Smart Tax, Business &amp; Notary Support
            </h1>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-sm">
              Professional financial solutions for individuals and businesses. Featuring specialized tax preparation for healthcare workers, business bookkeeping, and certified notary services across the US.
            </p>

            {/* Quick Hero Badges */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-700 pt-1">
              <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <span className="block font-bold text-charcoal-900">Sat &amp; Sun:</span>
                <span className="text-[11px] text-stone-600">By Appointment</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <span className="block font-bold text-charcoal-900">Notary Service:</span>
                <span className="text-[11px] text-stone-600">All Over US</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <span className="block font-bold text-charcoal-900">Taxes:</span>
                <span className="text-[11px] text-stone-600">State &amp; Federal Returns</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <span className="block font-bold text-charcoal-900">Office Location:</span>
                <span className="text-[11px] text-stone-600">Rusk, TX 75785</span>
              </div>
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
                  <p className="font-serif text-sm font-semibold text-charcoal-900">Grounded in Faith &amp; Gratitude</p>
                  <p className="text-[11px] text-stone-500">133 N Henderson St, Rusk, TX 75785 • Serving Nationwide</p>
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

                {/* Professional Silhouette Graphic */}
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
                        • BNT CONSULTING • TRUSTED ETHICS •
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

            <div className="pt-2">
              <Link 
                href="/refund-checkup"
                className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-900 hover:text-caramel transition-colors"
              >
                <span>Calculate Your Refund Review</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-white/70 border-t border-stone-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 aspect-[4/3] bg-stone-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-850 to-stone-800 opacity-95"></div>
              
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-caramel uppercase">Institutional Standard</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">TX</span>
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

            <div className="pt-2">
              <Link
                href="/about"
                className="btn-caramel pl-6 pr-3 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-3"
              >
                <span>More About Our Practice</span>
                <span className="w-7 h-7 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. KEY METRICS STRIP */}
      <section className="border-y border-stone-200/70 bg-linen-100/50 py-12 px-6 sm:px-10 lg:px-14">
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
            <span className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 block">256-Bit</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Encrypted Client Vault</span>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-6">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 block">UTSA</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Master of Accountancy</span>
          </div>
        </div>
      </section>

      {/* 4. SPECIALIZED HIGHLIGHT: TAXES FOR HEALTHCARE PROFESSIONALS */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 bg-[#1E2522] text-white rounded-3xl mx-4 sm:mx-8 lg:mx-14 mb-16 shadow-2xl border border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/20 text-caramel-light border border-caramel/40 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Tax Practice • Individuals &amp; Businesses</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
            Taxes for Licensed Vocational Nurses (LVN), Registered Nurses (RN), Physicians &amp; Allied Healthcare Workers
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Healthcare professionals handle complex tax situations—travel nurse multi-state stipends, locum tenens 1099 contracts, board certifications, and professional expenses. We specialize in maximizing your legal deductions while keeping your returns 100% compliant.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
            <h4 className="font-serif text-xl font-bold text-caramel-light">LVN &amp; RN Nurses</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Travel nurse tax homes, per diem lodging &amp; meal stipends, scrub allowances, continuing education (CEU), and state board fees.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
            <h4 className="font-serif text-xl font-bold text-caramel-light">Physicians &amp; Surgeons</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Locum tenens 1099 contracts, W-2 hospitalist optimization, professional liability deductions, and medical practice entity planning.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
            <h4 className="font-serif text-xl font-bold text-caramel-light">Allied Health Specialists</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Physical therapists, radiologic technologists, respiratory therapists, occupational therapists, and clinical technicians.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
            <h4 className="font-serif text-xl font-bold text-caramel-light">Multi-State Returns</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Seamless state income tax filings across multiple assignments with zero double taxation and precision state apportionment.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-10 text-center">
          <Link
            href="/booking"
            className="btn-caramel pl-6 pr-4 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-3 shadow-lg"
          >
            <span>Book Healthcare Worker Tax Consultation</span>
            <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-[#F6F3EE]">
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
            Our Services
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal-900 leading-tight">
            Professional for Individuals &amp; Businesses
          </h2>
          <p className="text-sm text-stone-600">
            Transparent, reliable services crafted for individuals, healthcare professionals, and growing businesses in Rusk, East Texas, and nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Individual Tax */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-linen-100 flex items-center justify-center font-serif text-lg font-bold text-charcoal-900">
                01
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900">Individual Tax Preparation</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Complete federal and state tax returns for W-2 wage earners, 1099 contractors, families, and professionals with upfront flat pricing.
              </p>
              <ul className="text-xs text-stone-600 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>State &amp; Federal electronic filing confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Dependent, education &amp; retirement credits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>$0 commission taken from your refund</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/booking"
                className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-2 transition-colors"
              >
                <span>Schedule Individual Filing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Business Tax */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-linen-100 flex items-center justify-center font-serif text-lg font-bold text-charcoal-900">
                02
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900">Business Tax &amp; Books</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Small business tax preparation, Schedule C, LLC, S-Corp filings, account reconciliations, and audit-ready bookkeeping records.
              </p>
              <ul className="text-xs text-stone-600 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Bank &amp; credit card monthly reconciliations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Deduction maximization &amp; asset depreciation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Multi-month historical catch-up accounting</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/services#business"
                className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-2 transition-colors"
              >
                <span>Explore Business Solutions</span>
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
              <h3 className="font-serif text-2xl text-charcoal-900">Notary (All Over US)</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Certified notarizations nationwide via Remote Online Notarization (RON) and local in-person appointments in Rusk and East Texas.
              </p>
              <ul className="text-xs text-stone-600 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Nationwide remote online notarization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Wills, deeds, powers of attorney, contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Saturday &amp; Sunday appointments available</span>
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

      {/* 5. CONSULTATION & CONTACT SECTION */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 bg-white border-t border-stone-200/70">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
            Client Consultation
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Reach out to BNT Professional Services. Professional guidance for individuals and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map & Office Information Preview */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-stone-200 bg-linen-100 p-6 flex flex-col justify-between relative min-h-[380px]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-stone-500">Service Coverage Area</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-semibold text-stone-700 shadow-sm border border-stone-200">
                  Rusk, TX 75785 &amp; Nationwide
                </span>
              </div>
              <p className="text-xs text-stone-600">
                Serving Rusk, Jacksonville, Cherokee County, Tyler, East Texas, and clients nationwide via secure 256-bit remote portal and online notary.
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="block font-bold text-charcoal-900">Sat &amp; Sun:</span>
                  <span className="text-stone-500">By Appointment</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="block font-bold text-charcoal-900">Notary:</span>
                  <span className="text-stone-500">All Over US</span>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-stone-200 shadow-sm space-y-2 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-caramel/20 text-caramel-dark flex items-center justify-center font-bold text-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-900">Rusk Office &amp; Remote Vault</h4>
                  <p className="text-[11px] text-stone-600 font-medium">133 N Henderson Street, Rusk, TX 75785</p>
                </div>
              </div>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
                <span>Direct: (903) 555-0192</span>
                <span className="text-caramel font-semibold">Weekend by Appt</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-3xl p-7 sm:p-9 border border-stone-200/90 shadow-sm">
            
            <div className="space-y-2 mb-6">
              <h3 className="font-serif text-2xl text-charcoal-900">Get in Touch with BNT</h3>
              <p className="text-xs text-stone-500">
                Professional tax preparation for individuals, healthcare workers, businesses, and certified notary services across the US.
              </p>
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Individual Tax", "Business Tax", "Healthcare Workers Tax", "Notary (All over US)", "Refund Checkup"].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setSelectedServiceChip(chip);
                    setContactForm({ ...contactForm, service: chip });
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedServiceChip === chip
                      ? "bg-caramel text-charcoal-900 shadow-sm font-bold"
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
                <h4 className="font-serif text-xl text-charcoal-900">Message Sent Successfully</h4>
                <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, {contactForm.name || "Client"}. Our Principal Consultant will review your inquiry and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="btn-caramel px-5 py-2 rounded-full text-xs font-semibold mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">Name*</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">Phone*</label>
                    <input
                      required
                      type="tel"
                      placeholder="(903) 000-0000"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">Email*</label>
                    <input
                      required
                      type="email"
                      placeholder="email@address.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">What service they are interested*</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:outline-none focus:border-caramel font-medium"
                    >
                      <option value="Healthcare Workers Tax">Taxes for Healthcare Workers (LVN, RN, MD, Allied Health)</option>
                      <option value="Individual Tax">Individual Tax Preparation (State &amp; Federal)</option>
                      <option value="Business Tax">Business Tax Preparation &amp; Books</option>
                      <option value="Notary (All over US)">Notary Service (All over US &amp; Texas)</option>
                      <option value="The BNT Refund Checkup">The BNT Refund Checkup (Flat Fee)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 font-medium mb-1">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your tax situation or notary needs..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-caramel pl-5 pr-3 py-2.5 rounded-full text-xs font-semibold flex items-center gap-3"
                >
                  <span>Submit Inquiry</span>
                  <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 6. CLIENT FAQ SECTION (IN PLACE OF INSIGHTS) */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 bg-[#F6F3EE] border-t border-stone-200/70">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 block">
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

      {/* 7. NEWSLETTER / BOTTOM CALLOUT */}
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
