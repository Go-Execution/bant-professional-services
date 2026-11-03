"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck, 
  Calculator, 
  BookOpen, 
  Phone, 
  MapPin, 
  Lock, 
  Clock, 
  ChevronRight,
  Scale,
  Sparkles,
  Award,
  GraduationCap,
  Building2,
  Plus,
  Minus,
  Stethoscope,
  Globe
} from "lucide-react";

export default function Home() {
  const [selectedServiceChip, setSelectedServiceChip] = useState("Healthcare Worker Taxes");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Taxes for Healthcare Workers (LVN, RN, Physicians, Allied Health)",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const faqs = [
    {
      q: "Why do you charge flat fees instead of taking a percentage of my refund?",
      a: "Our work is grounded in integrity and gratitude. Many tax preparers charge 10% to 20% of your refund, which penalizes you for earning your own money. At BNT, we quote a transparent flat fee upfront before any work begins.",
    },
    {
      q: "What makes your healthcare worker tax services specialized?",
      a: "We understand medical shift realities for LVNs, RNs, physicians, and allied health staff: multi-facility W-2s, PRN differentials, travel contracts, scrubs, CEU courses, and board licensing. We also offer Saturday and Sunday appointments to accommodate your shift rotations.",
    },
    {
      q: "Can you notarize documents outside of Texas?",
      a: "Yes. We are commissioned for Remote Online Notarization (RON), which allows us to legally notarize documents for clients across all 50 US states via secure live video. In-person notarizations are also available at our Rusk, TX office.",
    },
    {
      q: "Where is your office located and what are your weekend hours?",
      a: "Our office is at 133 N Henderson Street, Rusk, TX 75785. We serve Rusk, Jacksonville, and Cherokee County. Standard hours are Monday through Friday, with Saturday and Sunday available By Appointment.",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.email) return;
    setContactSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
  };

  return (
    <div>
      {/* 1. HERO SECTION: Clean, spacious, and focused */}
      <section className="px-6 sm:px-10 lg:px-14 pt-8 pb-14 lg:pb-20 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* The 3 Core Pillars Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 border border-caramel/35 text-charcoal-900 text-[11px] font-cinzel font-bold tracking-[0.2em]">
              <span>BUSINESS</span>
              <span className="text-caramel font-bold">•</span>
              <span>NOTARY</span>
              <span className="text-caramel font-bold">•</span>
              <span>TAX</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-charcoal-900 leading-[1.08] tracking-tight">
              Professional for Individuals & Businesses.
            </h1>

            <p className="text-sm text-stone-600 leading-relaxed font-normal max-w-sm">
              Business. Notary. Tax. Made Simple. Clear answers, accurate books, and honest tax filing. Grounded in faith, integrity, and upfront flat-rate pricing.
            </p>

            {/* Streamlined Status Line */}
            <p className="text-xs font-mono text-stone-500 pt-1">
              Notary all over US • Taxes state-focused • Sat & Sun by appointment
            </p>

            {/* Direct Phone Action with Doodle */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="tel:9035550192"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-caramel/25 border border-caramel/40 text-charcoal-900 text-xs sm:text-sm font-bold hover:bg-caramel/40 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center text-xs">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span>+1 (903) 555-0192</span>
              </a>

              <div className="floating-doodle hidden sm:block">
                <svg className="w-10 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 54 36">
                  <path d="M4 10 C 18 2, 28 32, 48 16" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M42 12 L 48 16 L 44 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Center Column: Iconic Arched Portrait with Rotating Badge */}
          <div className="lg:col-span-4 flex justify-center relative">
            <div className="relative w-[260px] sm:w-[300px] pt-2">
              
              <div className="arch-portrait w-full h-[380px] sm:h-[430px] relative overflow-hidden shadow-xl flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/20 pointer-events-none"></div>

                <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="w-36 h-22 sm:w-40 sm:h-24 rounded-2xl bg-white/95 shadow-md flex items-center justify-center p-2 border-4 border-white/80">
                    <Image
                      src="/logo.png"
                      alt="BNT Professional Services Official Logo"
                      width={1794}
                      height={877}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-44 sm:w-52 h-44 bg-stone-900 rounded-t-full mt-2 shadow-2xl relative flex flex-col items-center pt-4">
                    <div className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[11px] text-white font-serif">
                      UTSA
                    </div>
                    <span className="text-xs font-semibold text-stone-200 mt-2 font-mono">Principal Consultant</span>
                    <span className="text-[10px] text-caramel-light font-medium uppercase tracking-wider">MAcc • MBA</span>
                  </div>
                </div>
              </div>

              {/* Rotating Circular Badge */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20">
                <div className="relative w-26 h-26 sm:w-28 sm:h-28 flex items-center justify-center">
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
                    className="w-11 h-11 rounded-full bg-charcoal-900 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    aria-label="Book a Consultation"
                  >
                    <ArrowRight className="w-4 h-4 text-caramel -rotate-45" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Institutional Trust & Two Big Metrics */}
          <div className="lg:col-span-4 space-y-6 lg:pl-4">
            <div className="w-11 h-11 rounded-xl bg-stone-200/60 flex items-center justify-center text-stone-700">
              <Scale className="w-5 h-5 stroke-[1.75]" />
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              Support should be clear, fast, and focused. Practical guidance without confusing jargon, 100% upfront flat pricing, and zero percentage taken from your refund.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-200/70">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold block">100%</span>
                <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider block mt-1">Flat-Rate Fees</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold block">UTSA</span>
                <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider block mt-1">Master of Accountancy</span>
              </div>
            </div>

            <div className="pt-1">
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-900 hover:text-caramel transition-colors"
              >
                <span>Explore All Services</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SPECIALIZED HIGHLIGHT: HEALTHCARE WORKER TAXES (Streamlined & Punchy) */}
      <section className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 bg-[#FAF6F0] border-y border-stone-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-caramel/35 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 text-[11px] font-cinzel font-bold uppercase tracking-wider text-charcoal-900">
                <Stethoscope className="w-3.5 h-3.5 text-caramel-dark" />
                <span>Specialized Practice Highlight</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-900 leading-tight">
                Taxes for LVNs, RNs, Physicians & Allied Healthcare Workers
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Shift-friendly tax preparation built for the reality of medical schedules. We optimize travel stipends, multi-facility W-2s, PRN differentials, CEUs, scrubs, and licensing fees with flat upfront pricing.
              </p>

              {/* 3 Compact Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-stone-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linen-100 border border-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                  <span>Travel Stipends & Multi-Facility W-2s</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linen-100 border border-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                  <span>Scrub, CEU & Licensure Deductions</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linen-100 border border-stone-200">
                  <Clock className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                  <span>Saturday & Sunday By Appointment</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-linen-100 rounded-2xl p-6 border border-stone-200/80 space-y-3 text-center lg:text-left">
              <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-caramel-dark font-bold block">
                Healthcare Assurance
              </span>
              <h3 className="font-serif text-xl font-bold text-charcoal-900">
                100% Flat Fee. Zero Refund Cut.
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Private 256-bit vault uploads. Weekend slots scheduled directly around your off-shift hours.
              </p>
              <Link
                href="/booking?service=Healthcare+Worker+Taxes"
                className="btn-caramel w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 block"
              >
                <span>Book Healthcare Consult</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION: Concise narrative */}
      <section className="px-6 sm:px-10 lg:px-14 py-14 lg:py-20 bg-white/70 border-b border-stone-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
          
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-stone-200/80 aspect-[4/3] bg-stone-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-850 to-stone-800 opacity-95"></div>
              
              <div className="absolute inset-0 p-7 flex flex-col justify-between text-white">
                <span className="text-xs font-cinzel tracking-widest text-caramel uppercase">133 N Henderson St • Rusk, TX</span>
                <div className="space-y-2">
                  <p className="font-serif text-xl sm:text-2xl font-normal leading-snug text-stone-100">
                    "Doing honest work, serving people with integrity, and treating every client with respect."
                  </p>
                  <p className="text-[11px] font-mono text-stone-400">
                    Ex-JPMorgan Chase • Private New York Tax Practice
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-stone-700 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-caramel"></span>
              About Our Practice
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
              Institutional rigor meeting personal stewardship.
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Our Principal Consultant holds a Master of Accountancy (MAcc) from UTSA, a bachelor&apos;s degree, and an MBA. Having worked at a private New York tax firm and for JPMorgan Chase, he brings deep institutional knowledge directly to East Texas families and businesses.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="btn-caramel pl-5 pr-3 py-2.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5"
              >
                <span>Read More About Our Background</span>
                <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <span className="text-xs font-mono text-stone-500">
                133 N Henderson St, Rusk, TX 75785
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. KEY METRICS STRIP: Clean, quiet, and balanced */}
      <section className="border-b border-stone-200/70 bg-linen-100/50 py-10 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
          <div className="pt-3 lg:pt-0 lg:px-6 first:pl-0">
            <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 block">100%</span>
            <span className="text-[11px] text-stone-500 uppercase tracking-wider block mt-1">Upfront Flat-Rate Pricing</span>
          </div>

          <div className="pt-3 lg:pt-0 lg:px-6">
            <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 block">$0</span>
            <span className="text-[11px] text-stone-500 uppercase tracking-wider block mt-1">Commission on Refunds</span>
          </div>

          <div className="pt-3 lg:pt-0 lg:px-6">
            <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 block">All 50</span>
            <span className="text-[11px] text-stone-500 uppercase tracking-wider block mt-1">States Notary Coverage (RON)</span>
          </div>

          <div className="pt-3 lg:pt-0 lg:px-6">
            <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 block">UTSA</span>
            <span className="text-[11px] text-stone-500 uppercase tracking-wider block mt-1">Master of Accountancy</span>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION: 3 Focused Cards with Breathing Room */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-[#F6F3EE]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
              Core Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
              Professional for Individuals & Businesses
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Straightforward tax and bookkeeping services with zero hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Individual Tax */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-cinzel uppercase tracking-wider text-caramel-dark font-bold block">
                  01 • Individuals & Families
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900">Individual Tax Preparation</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Accurate federal and state tax preparation for W-2 earners, families, and contractors. Includes the BNT Refund Checkup diagnostic.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                    <span>The BNT Refund Checkup flat-fee review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                    <span>Texas state & federal electronic e-file</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <Link 
                  href="/services#individual-tax"
                  className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Individual Tax</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Business Tax & Books */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-cinzel uppercase tracking-wider text-caramel-dark font-bold block">
                  02 • Small Business & LLCs
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900">Business Tax & Books</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Tax preparation and monthly account reconciliations matching bank statements directly to your general ledger.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                    <span>Account reconciliations & balance audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                    <span>Schedule C deduction & expense planning</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <Link 
                  href="/services#business-tax"
                  className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Business Tax</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Notary Public All Over US */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-cinzel uppercase tracking-wider text-caramel-dark font-bold block">
                  03 • Remote & In-Person
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900">Notary Public (All Over US)</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Certified notarization for deeds, loan packets, and legal agreements. Available nationwide via Remote Online Notary (RON) and in-person in Rusk, TX.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                    <span>Remote Online Notary across all 50 states</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                    <span>In-person at 133 N Henderson St, Rusk, TX</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <Link 
                  href="/services#notary"
                  className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-1.5 transition-colors"
                >
                  <span>Schedule Notary Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CONSULTATION & CONTACT FORM SECTION: 4 Clean Fields */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 lg:py-20 bg-white border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block mb-1">
              Direct Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
              Get in Touch with BNT
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Speak directly with our Principal Consultant. Fast, confidential, and upfront answers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Office Card */}
            <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-linen-100 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-cinzel font-bold uppercase text-stone-500 tracking-wider block">
                  Office Location
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900">
                  133 N Henderson Street
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-medium">
                  Rusk, TX 75785 • Cherokee County
                </p>
                <p className="text-xs text-stone-500 leading-relaxed pt-1">
                  Serving Rusk, Jacksonville, and Cherokee County clients with in-person visits, plus nationwide remote notary and 256-bit client portal access.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-2 text-xs text-stone-700">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Phone:</span>
                  <a href="tel:9035550192" className="font-bold text-charcoal-900 hover:text-caramel">+1 (903) 555-0192</a>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Weekdays:</span>
                  <span>Monday - Friday 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Weekends:</span>
                  <span className="font-bold text-charcoal-900">Saturday & Sunday By Appointment</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form (Exact Fields: Name, Phone, Email, What service they are interested) */}
            <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              
              <div className="mb-5">
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900">Schedule a Free Consultation</h3>
                <p className="text-xs text-stone-500 mt-1">
                  Submit your details below and our Principal Consultant will respond within 24 hours.
                </p>
              </div>

              {/* Category Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {[
                  "Healthcare Worker Taxes",
                  "Individual Tax",
                  "Business Tax",
                  "Notary (All Over US)",
                  "Refund Checkup",
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
                      } else if (chip === "Refund Checkup") {
                        setContactForm({ ...contactForm, service: "The BNT Refund Checkup" });
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
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
                <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-lg">
                    ✓
                  </div>
                  <h4 className="font-serif text-lg text-charcoal-900">Consultation Request Received</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Thank you, {contactForm.name}. We will contact you at {contactForm.phone || contactForm.email} shortly.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="btn-caramel px-4 py-1.5 rounded-full text-xs font-semibold mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5 text-xs">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Name*</label>
                      <input
                        required
                        type="text"
                        placeholder="Your Full Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Phone*</label>
                      <input
                        required
                        type="tel"
                        placeholder="(903) 000-0000"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Email*</label>
                    <input
                      required
                      type="email"
                      placeholder="client@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                    />
                  </div>

                  {/* What service they are interested */}
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">What service are you interested in?*</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-stone-800 focus:outline-none focus:border-caramel font-medium"
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

                  <button
                    type="submit"
                    className="w-full btn-caramel py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-sm mt-1"
                  >
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 7. CLIENT FAQ SECTION (Collapsible Accordion) */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 bg-[#F6F3EE] border-t border-stone-200/70">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
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
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-charcoal-900 hover:text-caramel transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="w-7 h-7 rounded-full bg-linen-100 flex items-center justify-center shrink-0 text-charcoal-900">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. BOTTOM CALLOUT */}
      <section className="px-6 sm:px-10 lg:px-14 py-12 bg-white border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 text-center md:text-left">
            Turn Financial Questions <br className="hidden sm:inline" /> Into Confident Decisions.
          </h3>

          <div className="w-full md:w-auto max-w-md">
            {newsletterSubmitted ? (
              <div className="bg-linen-100 px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-emerald-800 flex items-center gap-2">
                <span>✓</span>
                <span>Subscribed! We will keep you updated.</span>
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
