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
import { Reveal } from "@/components/Reveal";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<
    "all" | "healthcare" | "individual" | "business" | "notary"
  >("all");

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-subtle-grid border-b border-slate-100">
        <Reveal className="max-w-5xl mx-auto space-y-6">
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
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-[#F8F7F4] border border-slate-200 text-slate-700 hover:text-slate-950"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="px-6 sm:px-8 py-16 max-w-5xl mx-auto space-y-10">
        {/* 1. Healthcare Workers Tax */}
        {(activeTab === "all" || activeTab === "healthcare") && (
          <Reveal>
            <section
              id="healthcare-tax"
              className="card-interactive bg-[#F8F7F4] rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6"
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
                  <span>Sat, Sun &amp; Mon 24-Hr Weekend Availability</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/booking?service=Taxes+for+Healthcare+Workers"
                  className="group btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base"
                >
                  <span>Book Healthcare Tax Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
          </Reveal>
        )}

        {/* 2. Individual Tax */}
        {(activeTab === "all" || activeTab === "individual") && (
          <Reveal>
            <section
              id="individual"
              className="card-interactive bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6"
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
                  className="group btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base"
                >
                  <span>Book Individual Tax</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/refund-checkup"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-sm sm:text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>Try Refund Checkup</span>
                </Link>
              </div>
            </section>
          </Reveal>
        )}

        {/* 3. Business Tax & Bookkeeping */}
        {(activeTab === "all" || activeTab === "business") && (
          <Reveal>
            <section
              id="business"
              className="card-interactive bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6"
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
                  className="group btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base"
                >
                  <span>Book Business Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
          </Reveal>
        )}

        {/* 4. Notary Public */}
        {(activeTab === "all" || activeTab === "notary") && (
          <Reveal>
            <section
              id="notary"
              className="card-interactive bg-[#F8F7F4] rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Notary Public (10 Official Services)
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-caramel-dark mt-0.5">
                    Remote Online Notarization (RON) Across All 50 US States • Mobile &amp; In-Person in Rusk, TX
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
                Commissioned for Remote Online Notarization (RON) across all 50 US states via secure live video, traveling mobile notary service across Cherokee County, and in-person notarizations at our Rusk, TX office.
              </p>

              {/* 10 Official Services List */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Full Scope of Notary Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-slate-800">
                  {[
                    { num: "01", name: "Jurats (verifications)", desc: "Verifying document statements under oath or affirmation" },
                    { num: "02", name: "Oaths and affirmations", desc: "Administering verbal oaths for legal proceedings" },
                    { num: "03", name: "Copy certification", desc: "Official verification of original documents and records" },
                    { num: "04", name: "Signature witnessing", desc: "Witnessing execution of contracts, deeds, and agreements" },
                    { num: "05", name: "Affidavits and sworn statements", desc: "Sworn legal statements for courts and government agencies" },
                    { num: "06", name: "Loan documents and financial forms", desc: "Mortgage, refinance, and commercial lending documentation" },
                    { num: "07", name: "Mobile notary", desc: "We travel directly to homes, hospitals, nursing facilities, and offices" },
                    { num: "08", name: "Loan signing agent", desc: "Certified real estate loan closings for lenders, title, and escrow" },
                    { num: "09", name: "Remote online notarization (RON)", desc: "Legally binding electronic notarization valid in all 50 US states" },
                    { num: "10", name: "Apostille and authentication preparation", desc: "Document preparation and authentication for international use" },
                  ].map((service) => (
                    <div
                      key={service.num}
                      className="bg-white rounded-xl p-4 border border-slate-200 flex items-start gap-3 shadow-sm"
                    >
                      <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {service.num}
                      </span>
                      <div>
                        <p className="font-bold text-slate-900 text-sm sm:text-base">
                          {service.name}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours & Contact Pill */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                  <span>
                    <strong>Operating Hours:</strong> Sat, Sun &amp; Mon: 24 Hours • Tue - Fri: 6:00 PM - 9:00 PM CST
                  </span>
                </div>
                <a
                  href="tel:4302441818"
                  className="font-bold text-slate-900 hover:text-caramel-dark transition-colors text-sm sm:text-base"
                >
                  Call / Text: (430) 244-1818
                </a>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/booking?service=Notary+Public+(Nationwide+or+In-Person)"
                  className="group btn-caramel inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base"
                >
                  <span>Schedule Notary Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:4302441818"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span>Direct Call (430) 244-1818</span>
                </a>
              </div>
            </section>
          </Reveal>
        )}
      </div>
    </div>
  );
}
