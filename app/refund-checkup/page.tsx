"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, DollarSign } from "lucide-react";

export default function RefundCheckupPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "w2",
    "healthcare-deductions",
  ]);
  const [requested, setRequested] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const checkupOptions = [
    { id: "w2", label: "W-2 Wage Statements" },
    { id: "healthcare-deductions", label: "Healthcare Worker Expenses (LVN, RN, MD)" },
    { id: "1099", label: "1099 Contractor Income" },
    { id: "child-credit", label: "Child & Dependent Tax Credits" },
    { id: "mortgage", label: "Mortgage & Property Taxes" },
    { id: "prior-year", label: "Prior Year Return Review" },
  ];

  const toggleOption = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequested(true);
  };

  return (
    <div className="bg-white px-6 sm:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <section className="max-w-3xl space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
            Flat-Fee Review
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            The BNT Refund Checkup
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Get a written estimate of your expected refund or balance due, plus a clear checklist of any missing deductions, for a simple upfront flat fee.
          </p>
        </section>

        {/* 3 Simple Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-slate-200 space-y-2">
            <DollarSign className="w-6 h-6 text-caramel-dark" />
            <h3 className="text-xl font-bold text-slate-900">100% Flat Fee</h3>
            <p className="text-base text-slate-700">
              Fixed upfront quote, with zero percentage cut from your refund.
            </p>
          </div>

          <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-slate-200 space-y-2">
            <FileText className="w-6 h-6 text-caramel-dark" />
            <h3 className="text-xl font-bold text-slate-900">Written Estimate</h3>
            <p className="text-base text-slate-700">
              Clear breakdown of your numbers before you decide to file.
            </p>
          </div>

          <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-slate-200 space-y-2">
            <ShieldCheck className="w-6 h-6 text-caramel-dark" />
            <h3 className="text-xl font-bold text-slate-900">Secure Upload</h3>
            <p className="text-base text-slate-700">
              Upload documents safely through your encrypted client portal.
            </p>
          </div>
        </section>

        {/* Simple Checklist + Request Form */}
        <section className="bg-[#F8F7F4] rounded-2xl p-7 sm:p-10 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              1. Select What Applies to You
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {checkupOptions.map((opt) => {
                const isSelected = selectedItems.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleOption(opt.id)}
                    className={`p-4 rounded-xl text-left border flex items-center gap-3 text-base font-semibold transition-colors ${
                      isSelected
                        ? "bg-white border-slate-900 text-slate-900 shadow-sm"
                        : "bg-white/70 border-slate-200 text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected
                          ? "bg-slate-900 text-white"
                          : "border border-slate-300 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                2. Request Your Checkup
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                {selectedItems.length} item(s) selected • Flat-fee quote sent before work begins.
              </p>
            </div>

            {requested ? (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-lg font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Request Confirmed
                </h3>
                <p className="text-base text-slate-700">
                  Thank you, {formData.name}. Your secure portal invite will be sent to {formData.email}.
                </p>
                <Link
                  href="/portal"
                  className="btn-caramel px-5 py-2.5 rounded-lg text-sm font-bold inline-block"
                >
                  Open Client Portal
                </Link>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4 text-sm sm:text-base">
                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(903) 555-0192"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-caramel py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2"
                >
                  <span>Request Refund Checkup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
