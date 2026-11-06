"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Plus,
  Minus,
  FileCheck,
  Stethoscope,
  Building2,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Quote,
  UploadCloud,
  Calculator,
} from "lucide-react";
import { Reveal, CountUp } from "@/components/Reveal";

export default function Home() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Healthcare Worker Taxes (LVN, RN, Physicians)",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      icon: FileCheck,
      title: "Individual Tax Preparation",
      desc: "Accurate federal and state filing with upfront flat pricing and our Refund Checkup review.",
      tags: ["W-2 & Family Credits", "Zero Refund Cut"],
      href: "/services#individual",
      cta: "Explore Individual Tax",
    },
    {
      num: "02",
      icon: Building2,
      title: "Business Tax & Bookkeeping",
      desc: "Small business tax returns, bank reconciliations, and clean monthly financial records.",
      tags: ["Schedule C & LLCs", "Monthly Reconciliations"],
      href: "/services#business",
      cta: "Explore Business Tax",
    },
    {
      num: "03",
      icon: Globe,
      title: "Notary Public (All Over US)",
      desc: "Remote Online Notary across all 50 states, plus in-person service at our Rusk, TX office.",
      tags: ["All 50 US States", "Deeds & Legal Docs"],
      href: "/services#notary",
      cta: "Book Notary Service",
    },
  ];

  const steps = [
    {
      num: "1",
      icon: Calculator,
      title: "Free Quote Upfront",
      desc: "Tell us what you need and get a clear flat-rate price before any work starts.",
    },
    {
      num: "2",
      icon: UploadCloud,
      title: "Share Documents Easily",
      desc: "Visit our Rusk office in person or upload files securely through our 256-bit portal.",
    },
    {
      num: "3",
      icon: ShieldCheck,
      title: "Review & File Confidently",
      desc: "Review every number in plain language and complete fast electronic filing.",
    },
  ];

  const faqs = [
    {
      q: "Do you take a percentage of my tax refund?",
      a: "Never. We quote a clear, upfront flat fee before any work begins so you keep 100% of your refund.",
    },
    {
      q: "What makes your healthcare worker tax prep specialized?",
      a: "We handle multi-facility W-2s, PRN shifts, travel contracts, scrubs, CEUs, and licensing deductions, with evening weekend appointments available.",
    },
    {
      q: "Can you notarize documents outside of Texas?",
      a: "Yes. Through Remote Online Notarization (RON), we legally notarize documents across all 50 US states, plus in-person service in Rusk, TX.",
    },
    {
      q: "Where are you located and what are your hours?",
      a: "Visit us at 133 N Henderson Street, Rusk, TX 75785. Weekday hours are Monday to Friday 9:00 AM to 5:00 PM, and Saturday & Sunday Evening by appointment only.",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.email) return;
    setContactSubmitted(true);
  };

  return (
    <div>
      {/* 1. HERO SECTION: Balanced 2-Column with Interactive Assurance Card */}
      <section className="relative px-6 sm:px-8 pt-12 pb-16 sm:py-20 bg-white bg-subtle-grid overflow-hidden">
        {/* Soft warm ambient accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-amber-100/50 blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <Reveal direction="up" className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Business</span>
              <span className="text-caramel-light">•</span>
              <span>Notary</span>
              <span className="text-caramel-light">•</span>
              <span>Tax</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1]">
              Professional Services for Individuals &amp; Businesses.
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl">
              Clear answers, accurate books, and honest flat-rate tax filing with zero percentage taken from your refund.
            </p>

            {/* Clear 2-Line Coverage & Evening Appointment Highlight */}
            <div className="bg-[#F8F7F4] border-l-4 border-l-caramel border border-slate-200 rounded-xl px-5 py-4 max-w-xl space-y-1.5 shadow-sm">
              <p className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-caramel-dark shrink-0" />
                <span>Notary All Over US • Taxes State-Focused</span>
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-800 flex items-center gap-2">
                <Clock className="w-4 h-4 text-caramel-dark shrink-0" />
                <span>Saturday &amp; Sunday Evening: By Appointment Only</span>
              </p>
            </div>

            {/* Primary Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href="tel:9035550192"
                className="btn-dark inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base"
              >
                <Phone className="w-4 h-4 text-caramel-light" />
                <span>+1 (903) 555-0192</span>
              </a>

              <Link
                href="/booking"
                className="group btn-caramel inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Right Column: Clean Visual Assurance Card Stack */}
          <Reveal direction="right" delay={140} className="lg:col-span-5">
            <div className="relative">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-7 sm:p-8 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-caramel-dark block">
                      The BNT Promise
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                      Transparent &amp; Upfront
                    </h2>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-caramel-dark" />
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8F7F4] border border-slate-200/70">
                    <span className="text-sm font-semibold text-slate-700">
                      Pricing Model
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                      100% Flat Fee
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8F7F4] border border-slate-200/70">
                    <span className="text-sm font-semibold text-slate-700">
                      Refund Cut Taken
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold">
                      $0 Commission
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8F7F4] border border-slate-200/70">
                    <span className="text-sm font-semibold text-slate-700">
                      Remote Notary
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold">
                      All 50 States
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8F7F4] border border-slate-200/70">
                    <span className="text-sm font-semibold text-slate-700">
                      Client Files
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900">
                      <Lock className="w-3.5 h-3.5 text-caramel-dark" />
                      256-Bit Vault
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Location Pill */}
              <div className="animate-float-slow hidden sm:inline-flex items-center gap-2.5 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-semibold -mt-4 ml-6 relative z-10">
                <MapPin className="w-4 h-4 text-caramel-light shrink-0" />
                <span>133 N Henderson St, Rusk, TX 75785</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Animated Trust Metrics Strip */}
        <Reveal delay={200} className="relative max-w-6xl mx-auto mt-14 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white/90 rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-caramel-dark" />
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-900 block leading-none">
                  <CountUp end={100} suffix="%" />
                </span>
                <span className="text-sm text-slate-700 font-semibold mt-1 block">
                  Upfront Flat-Rate Pricing
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/90 rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-900 block leading-none">
                  $<CountUp end={0} />
                </span>
                <span className="text-sm text-slate-700 font-semibold mt-1 block">
                  Cut Taken From Your Refund
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/90 rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-900 block leading-none">
                  All <CountUp end={50} />
                </span>
                <span className="text-sm text-slate-700 font-semibold mt-1 block">
                  States Online Notary (RON)
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. SPECIALIZED HEALTHCARE SPOTLIGHT: Visual & Concise */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-[#F8F7F4] border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs sm:text-sm font-bold text-slate-900">
                  <Stethoscope className="w-4 h-4 text-caramel-dark" />
                  <span>Specialized Healthcare Tax Practice</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Taxes for LVNs, RNs, Physicians &amp; Allied Healthcare Workers
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                  Shift-friendly tax filing built around medical schedules, covering multi-facility W-2s, travel stipends, scrubs, CEUs, and licensing fees.
                </p>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F8F7F4] border border-slate-200 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0" />
                    Multi-Facility &amp; Travel W-2s
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F8F7F4] border border-slate-200 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0" />
                    Scrub, CEU &amp; License Deductions
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F8F7F4] border border-slate-200 text-sm font-semibold text-slate-800">
                    <Clock className="w-4 h-4 text-caramel-dark shrink-0" />
                    Sat &amp; Sun Evening By Appt
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#F8F7F4] rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-caramel-dark block">
                  Built For Shift Schedules
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  100% Flat Fee. Zero Refund Cut.
                </h3>
                <p className="text-sm sm:text-base text-slate-700">
                  Upload W-2s anytime from home or book an off-shift evening appointment.
                </p>
                <Link
                  href="/booking?service=Taxes+for+Healthcare+Workers"
                  className="group btn-caramel w-full py-3 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <span>Book Healthcare Consult</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID: 3 Interactive Lift Cards */}
      <section className="px-6 sm:px-8 py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <Reveal className="max-w-2xl space-y-2.5">
            <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Simple Support for Every Need
            </h2>
            <p className="text-base sm:text-lg text-slate-700">
              Clear flat-rate services with zero hidden fees.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={idx * 100}>
                  <div className="group card-interactive h-full bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#F8F7F4] group-hover:bg-slate-900 border border-slate-200 flex items-center justify-center transition-colors">
                          <Icon className="w-6 h-6 text-slate-900 group-hover:text-caramel-light transition-colors" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">
                          {svc.num}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {svc.title}
                      </h3>

                      <p className="text-base text-slate-700 leading-relaxed">
                        {svc.desc}
                      </p>

                      <div className="pt-1 space-y-1.5">
                        {svc.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex items-center gap-2 text-sm font-medium text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 group-hover:text-caramel-dark transition-colors"
                      >
                        <span>{svc.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS: Clean 3-Step Visual Timeline */}
      <section className="px-6 sm:px-8 py-18 sm:py-20 bg-[#F8F7F4] border-y border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How Working With BNT Works
            </h2>
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Desktop connecting line */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-slate-200"
            />

            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={idx * 120} className="relative">
                  <div className="card-interactive bg-white rounded-2xl p-7 border border-slate-200 shadow-sm text-center space-y-4 h-full">
                    <div className="relative w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
                      <Icon className="w-6 h-6 text-caramel-light" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-caramel text-slate-900 text-xs font-bold flex items-center justify-center">
                        {s.num}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ABOUT OUR PRACTICE: Crisp White Box + High-Contrast Text */}
      <section className="px-6 sm:px-8 py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Clean White Box with Top Accent Bar & High-Contrast Readable Text */}
          <Reveal direction="left" className="lg:col-span-5">
            <div className="card-interactive bg-white rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md">
              <div className="h-2 bg-gradient-to-r from-slate-900 via-caramel to-amber-500" />
              <div className="p-8 sm:p-9 space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 bg-[#F8F7F4] border border-slate-200 px-3.5 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 text-caramel-dark shrink-0" />
                    <span>133 N Henderson St • Rusk, TX 75785</span>
                  </span>
                  <Quote className="w-7 h-7 text-caramel/50 shrink-0" />
                </div>

                <blockquote className="text-2xl sm:text-[26px] font-bold leading-snug text-slate-900">
                  &ldquo;Doing honest work, serving people with integrity, and treating every client with respect.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-slate-200 space-y-1">
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    Ex-JPMorgan Chase • Private New York Tax Practice
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    Serving Rusk, Jacksonville &amp; Cherokee County
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Concise Practice Overview */}
          <Reveal direction="right" delay={120} className="lg:col-span-7 space-y-5">
            <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
              About Our Practice
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Institutional expertise with personal stewardship.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Our Principal Consultant holds a Master of Accountancy (MACY) degree from the University of Texas at San Antonio (UTSA), a bachelor&apos;s degree in Accounting, an MBA, and a Doctor of Nursing Practice (DNP). With professional experience at a New York private tax firm and JPMorgan Chase, he brings extensive financial, accounting, and institutional expertise to serving individuals, families and businesses across East Texas. His areas of specialization include Accounting for Healthcare Organizations and Federal Income Taxation, combining a strong foundation in financial management with a unique understanding of the healthcare industry.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F8F7F4] border border-slate-200 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-caramel-dark" />
                Plain-Language Explanations
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F8F7F4] border border-slate-200 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-caramel-dark" />
                Personal 1-on-1 Attention
              </span>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group btn-dark inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT & CONSULTATION */}
      <section className="px-6 sm:px-8 py-20 sm:py-24 bg-[#F8F7F4] border-t border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Office Details */}
          <Reveal direction="up" className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <p className="text-base text-slate-700">
                Visit us in Rusk, TX or schedule a phone or online appointment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5 text-base text-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-caramel-dark" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Office Address</p>
                  <p>133 N Henderson Street, Rusk, TX 75785</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-caramel-dark" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <a
                    href="tel:9035550192"
                    className="font-semibold text-slate-900 hover:underline"
                  >
                    +1 (903) 555-0192
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-caramel-dark" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-900">Hours</p>
                  <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p className="font-bold text-slate-900">
                    Saturday &amp; Sunday Evening: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Clean 4-Field Consultation Form */}
          <Reveal direction="up" delay={120} className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200 shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Schedule a Free Consultation
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Leave your details and we will respond within 24 hours.
                </p>
              </div>

              {contactSubmitted ? (
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Request Received
                  </h4>
                  <p className="text-base text-slate-700 max-w-sm mx-auto">
                    Thank you, {contactForm.name}. We will reach out to{" "}
                    {contactForm.phone} shortly.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="btn-caramel px-5 py-2.5 rounded-lg text-sm font-bold mt-2"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="space-y-4 text-sm sm:text-base"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-800 font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-800 font-semibold mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(903) 000-0000"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            phone: e.target.value,
                          })
                        }
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-800 font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-800 font-semibold mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      value={contactForm.service}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          service: e.target.value,
                        })
                      }
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 font-medium transition-all"
                    >
                      <option value="Healthcare Worker Taxes (LVN, RN, Physicians)">
                        Healthcare Worker Taxes (LVN, RN, Physicians)
                      </option>
                      <option value="Individual Tax Preparation">
                        Individual Tax Preparation
                      </option>
                      <option value="Business Tax & Bookkeeping">
                        Business Tax &amp; Bookkeeping
                      </option>
                      <option value="Notary Public (All Over US)">
                        Notary Public (All Over US / In-Person)
                      </option>
                      <option value="The BNT Refund Checkup">
                        The BNT Refund Checkup
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group w-full btn-caramel py-3.5 rounded-xl text-base flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. SMOOTH ANIMATED FAQ SECTION */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <Reveal className="space-y-2">
            <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={index} delay={index * 70}>
                  <div className="bg-[#F8F7F4] rounded-2xl border border-slate-200 overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4.5 py-4 text-left flex items-center justify-between gap-4 text-base sm:text-lg font-bold text-slate-900 hover:bg-slate-100/70 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-slate-900 border-slate-900 text-white"
                            : "bg-white border-slate-200 text-slate-900"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-5 pt-3 text-base text-slate-700 leading-relaxed bg-white border-t border-slate-200">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
