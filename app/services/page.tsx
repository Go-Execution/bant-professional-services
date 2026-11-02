"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Calculator, 
  BookOpen, 
  ShieldCheck, 
  Stamp, 
  Receipt,
  Scale,
  Clock,
  Lock,
  Sparkles
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "individual" | "business" | "notary">("all");

  const individualServices = [
    {
      id: "refund-checkup",
      badge: "Flagship Diagnostic Review",
      title: "The BNT Refund Checkup",
      description: "A flat-fee diagnostic review of your tax documents with a written estimate of your expected refund or balance due, plus a comprehensive list of anything missing or needing correction.",
      points: [
        "Fixed flat fee: We never charge a percentage of your refund.",
        "Written calculation of expected refund or balance due before filing.",
        "Detailed review of missing deductions, credits, and necessary forms.",
        "Delivered securely through your private 256-bit client portal.",
      ],
      ctaText: "Explore Refund Checkup Tool",
      ctaLink: "/refund-checkup",
    },
    {
      id: "individual-tax",
      badge: "Individual Tax Prep",
      title: "W-2 & Individual Tax Return Preparation",
      description: "Complete, accurate preparation and electronic filing for employees, families, homeowners, self-employed contractors, and multi-state filers.",
      points: [
        "Electronic IRS e-file with instant submission confirmation.",
        "Child Tax Credit, Earned Income Credit, and education credits.",
        "Homeowner mortgage interest and property tax optimization.",
        "Plain-language explanation of your entire return line-by-line.",
      ],
      ctaText: "Book Tax Prep Consultation",
      ctaLink: "/booking?service=Individual+Tax+Preparation",
    },
  ];

  const businessServices = [
    {
      id: "reconciliation",
      badge: "Financial Integrity",
      title: "Account Reconciliations",
      description: "Matching your bank, credit card, payroll, and merchant accounts directly to your books so your financial records reflect total truth.",
      points: [
        "Identify unauthorized, duplicate, or ghost charges immediately.",
        "Ensure balance sheets balance to the penny without unexplained variance.",
        "Prevent costly audit triggers before filing federal business taxes.",
        "Monthly or quarterly recurring reconciliation plans available.",
      ],
      ctaText: "Inquire About Reconciliations",
      ctaLink: "/booking?service=Account+Reconciliations",
    },
    {
      id: "bookkeeping",
      badge: "Cleanup & Support",
      title: "Bookkeeping Support & Record Cleanup",
      description: "Behind on your books? We untangle disorganized transactions, catch up overdue periods, and organize your receipts and financial statements.",
      points: [
        "Historical catch-up accounting for businesses months or years behind.",
        "Standardized chart of accounts tailored to your industry.",
        "Clean profit and loss statements ready for lenders and investors.",
        "Friendly, patient guidance without judgment or scolding.",
      ],
      ctaText: "Request Bookkeeping Review",
      ctaLink: "/booking?service=Bookkeeping+Cleanup",
    },
    {
      id: "business-tax",
      badge: "Small Business Tax",
      title: "Small Business Tax Return Support",
      description: "Strategic tax preparation for sole proprietors, LLCs, freelancers, and small business owners in East Texas.",
      points: [
        "Schedule C deduction optimization and expense categorization.",
        "Self-employment tax reduction strategies and quarterly planning.",
        "Depreciation calculations for equipment, vehicles, and assets.",
        "Representation guidance on past-due filings and IRS notices.",
      ],
      ctaText: "Schedule Business Tax Review",
      ctaLink: "/booking?service=Business+Tax+Preparation",
    },
  ];

  const notaryServices = [
    {
      id: "notary",
      badge: "Certified Texas Notary",
      title: "Official Notary Public Services",
      description: "Certified, reliable notarization for legal, real estate, and business documents in Jacksonville, TX and surrounding Cherokee County.",
      points: [
        "Warranty deeds, deeds of trust, closing packets, and mortgage notes.",
        "Statutory durable powers of attorney and medical directives.",
        "Affidavits, sworn oaths, and commercial business contracts.",
        "Flexible scheduling in Jacksonville, TX to suit your schedule.",
      ],
      ctaText: "Schedule Notary Appointment",
      ctaLink: "/booking?service=Texas+Notary+Service",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We discuss your tax or bookkeeping situation in plain language and provide an upfront flat-rate quote before any work starts.",
    },
    {
      step: "02",
      title: "Secure Vault Upload",
      desc: "You receive your private portal key to upload W-2s, 1099s, or statements safely. No unencrypted emails or text messages.",
    },
    {
      step: "03",
      title: "Principal Review",
      desc: "Our Principal Consultant (UTSA MAcc, MBA, Ex-JPMorgan Chase) personally diagnoses, reconciles, and optimizes your file.",
    },
    {
      step: "04",
      title: "Written Review & Filing",
      desc: "You receive a clear breakdown of your refund or books, review every number, and authorize instant electronic filing.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 space-y-16">
      
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
          Comprehensive Services
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl text-charcoal-900 leading-tight">
          Clear answers. Accurate books. Taxes filed with confidence.
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          Explore our tailored solutions for individuals, families, and growing businesses in Jacksonville, TX and East Texas. Every service is priced upfront with zero hidden fees.
        </p>

        {/* Tab Filters */}
        <div className="pt-4 flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Services" },
            { id: "individual", label: "For Individuals & Families" },
            { id: "business", label: "For Businesses" },
            { id: "notary", label: "Certified Notary" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-charcoal-900 text-white shadow-sm"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 1. Individual Services */}
      {(activeTab === "all" || activeTab === "individual") && (
        <section id="individual" className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
              For Individuals & Families
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Personalized tax services with clear flat-rate pricing and zero commissions on your refund.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {individualServices.map((svc) => (
              <div key={svc.id} className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-linen-200 text-charcoal-900 font-semibold inline-block">
                    {svc.badge}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal-900">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{svc.description}</p>
                  <ul className="text-xs text-stone-600 space-y-2 pt-2">
                    {svc.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href={svc.ctaLink}
                    className="btn-caramel pl-5 pr-3 py-2.5 rounded-full text-xs font-semibold inline-flex items-center gap-2.5"
                  >
                    <span>{svc.ctaText}</span>
                    <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. Business Services */}
      {(activeTab === "all" || activeTab === "business") && (
        <section id="reconciliation" className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
              For Small Businesses & Self-Employed
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Account reconciliations, historical cleanups, and compliant small business tax preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessServices.map((svc) => (
              <div key={svc.id} className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-linen-200 text-charcoal-900 font-semibold inline-block">
                    {svc.badge}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal-900">{svc.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{svc.description}</p>
                  <ul className="text-xs text-stone-600 space-y-2 pt-2">
                    {svc.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href={svc.ctaLink}
                    className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-2 transition-colors"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Notary Services */}
      {(activeTab === "all" || activeTab === "notary") && (
        <section id="notary" className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
              Texas Certified Notary Services
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Official verification for deeds, loan packets, powers of attorney, and business agreements.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-linen-200 text-charcoal-900 font-semibold inline-block">
                Jacksonville, TX Appointments
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                Reliable, statutory notarization in East Texas.
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                As a commissioned Texas Notary Public, we witness signatures, administer affirmations, and certify vital documents with total legal diligence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Real estate deeds & title packets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Powers of attorney & wills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Sworn affidavits & bill of sale</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark" />
                  <span>Flexible local scheduling</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Link
                href="/booking?service=Texas+Notary+Service"
                className="btn-caramel px-6 py-3 rounded-full text-xs sm:text-sm font-semibold"
              >
                Schedule Notary Visit
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. The 4-Step Working Process Walkthrough */}
      <section className="bg-linen-100 rounded-3xl p-8 sm:p-12 border border-stone-200 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-caramel-dark block">
            The Client Experience
          </span>
          <h3 className="font-serif text-3xl text-charcoal-900">
            How We Work With You
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            From first conversation to final filing, here is our simple, transparent four-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((p) => (
            <div key={p.step} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <span className="font-serif text-3xl font-bold text-caramel-dark block">
                {p.step}
              </span>
              <h4 className="font-serif text-lg font-bold text-charcoal-900">{p.title}</h4>
              <p className="text-xs text-stone-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Callout */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif text-2xl text-charcoal-900">Ready to get started?</h3>
          <p className="text-xs text-stone-500">Book your consultation or upload your files to the client portal.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/booking" className="btn-caramel px-6 py-2.5 rounded-full text-xs font-semibold">
            Book Consultation
          </Link>
          <Link href="/portal" className="px-5 py-2.5 rounded-full text-xs font-semibold border border-stone-300 text-stone-700 hover:bg-stone-100">
            Client Portal
          </Link>
        </div>
      </section>

    </div>
  );
}
