"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Globe2,
  FileCheck,
  Building2,
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<
    "all" | "healthcare" | "individual" | "business" | "notary"
  >("all");

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 max-w-5xl mx-auto space-y-6">
        <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
          Services
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-3xl">
          Simple, Flat-Rate Tax, Bookkeeping &amp; Notary Services.
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
          Upfront quotes before any work starts. Serving Rusk, TX in person, with state-focused tax filing and Remote Online Notary across all 50 states.
        </p>

        {/* Clean Category Filter */}
        <div className="pt-2 flex flex-wrap gap-2.5">
          {[
            { id: "all", label: "All Services" },
            { id: "healthcare", label: "Healthcare Taxes" },
            { id: "individual", label: "Individual Tax" },
            { id: "business", label: "Business & Books" },
            { id: "notary", label: "Notary (All Over US)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white"
                  : "bg-[#F8F7F4] border border-slate-200 text-slate-700 hover:text-slate-950"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <div className="px-6 sm:px-8 pb-20 max-w-5xl mx-auto space-y-12">
        {/* 1. Healthcare Workers Tax */}
        {(activeTab === "all" || activeTab === "healthcare") && (
          <section
            id="healthcare-tax"
            className="bg-[#F8F7F4] rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-slate-900" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Healthcare Worker Taxes (LVN, RN, Physicians &amp; Allied Health)
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Shift-friendly tax filing built around medical schedules, covering multi-facility W-2s, PRN shifts, travel contracts, CEUs, scrubs, and licensing expenses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-slate-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Multi-facility W-2s &amp; 1099 travel contracts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Scrubs, CEU courses &amp; licensing deductions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>24/7 secure portal upload from home</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Saturday &amp; Sunday Evening by appointment</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/booking?service=Taxes+for+Healthcare+Workers"
                className="btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold"
              >
                <span>Book Healthcare Tax Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

        {/* 2. Individual Tax */}
        {(activeTab === "all" || activeTab === "individual") && (
          <section
            id="individual"
            className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-slate-900" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Individual Tax Preparation &amp; Refund Checkup
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Accurate federal and state electronic filing for W-2 earners, families, and homeowners, with upfront flat fees and zero cut from your refund.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-slate-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Flat-fee Refund Checkup written estimate</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Child, dependent &amp; education tax credits</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Mortgage &amp; property tax deductions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Fast IRS &amp; state electronic e-filing</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/booking?service=Individual+Tax+Preparation"
                className="btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold"
              >
                <span>Book Individual Tax</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/refund-checkup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-sm sm:text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                <span>Try Refund Checkup</span>
              </Link>
            </div>
          </section>
        )}

        {/* 3. Business Tax & Bookkeeping */}
        {(activeTab === "all" || activeTab === "business") && (
          <section
            id="business"
            className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-slate-900" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Business Tax &amp; Bookkeeping
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Reliable bookkeeping, bank account reconciliations, overdue record cleanup, and small business tax filing for LLCs, contractors, and sole proprietors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-slate-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Monthly bank &amp; card reconciliations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Catch-up cleanup for overdue books</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Schedule C &amp; LLC tax preparation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Texas franchise &amp; state tax compliance</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/booking?service=Business+Tax+Preparation+Support"
                className="btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold"
              >
                <span>Book Business Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

        {/* 4. Notary Public */}
        {(activeTab === "all" || activeTab === "notary") && (
          <section
            id="notary"
            className="bg-[#F8F7F4] rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-slate-900" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Notary Public (All Over the US &amp; In-Person in Rusk, TX)
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Commissioned for Remote Online Notarization (RON) across all 50 US states via secure live video, plus in-person notarizations at 133 N Henderson Street, Rusk, TX 75785.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-slate-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Real estate deeds, titles &amp; loan packets</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Powers of attorney &amp; medical directives</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Affidavits &amp; business agreements</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                <span>Saturday &amp; Sunday Evening by appointment</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/booking?service=Notary+Public+(Nationwide+or+In-Person)"
                className="btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold"
              >
                <span>Schedule Notary Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
