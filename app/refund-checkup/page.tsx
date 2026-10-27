"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, FileText, AlertCircle, Clock, DollarSign } from "lucide-react";

export default function RefundCheckupPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "w2",
    "child-credit",
  ]);

  const [requested, setRequested] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const checkupOptions = [
    {
      id: "w2",
      label: "W-2 Wage Statements",
      desc: "Standard employment income from one or multiple employers.",
    },
    {
      id: "1099",
      label: "1099-NEC / 1099-MISC Income",
      desc: "Independent contractor, freelancing, or gig economy earnings.",
    },
    {
      id: "child-credit",
      label: "Dependent & Child Tax Credits",
      desc: "Qualifying children, daycare expenses, or dependents.",
    },
    {
      id: "mortgage",
      label: "1098 Mortgage Interest & Property Taxes",
      desc: "Homeownership deductions and Texas local property tax records.",
    },
    {
      id: "hsa",
      label: "HSA / Healthcare Forms (1095-A, 5498)",
      desc: "Health savings account contributions or marketplace insurance.",
    },
    {
      id: "education",
      label: "1098-T Higher Education Tuition",
      desc: "College tuition, student loan interest, or educational credits.",
    },
    {
      id: "investments",
      label: "1099-B / 1099-DIV Brokerage Statements",
      desc: "Stock sales, dividends, index funds, or digital asset activity.",
    },
    {
      id: "prior-year",
      label: "Prior Year Tax Return Review",
      desc: "Checking last year's filing to see if any deductions were missed.",
    },
  ];

  const toggleOption = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequested(true);
  };

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 space-y-14">
      
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
          Flagship Diagnostic Service
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl text-charcoal-900 leading-tight">
          The BNT Refund Checkup
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          A flat-fee review of your tax documents with a written estimate of your expected refund or balance due, plus a comprehensive list of anything missing or needing correction. Before you file, know exactly where you stand.
        </p>
      </section>

      {/* 3 Core Guarantees of the Checkup */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-linen-200 flex items-center justify-center font-bold text-charcoal-900">
            <DollarSign className="w-5 h-5 text-caramel-dark" />
          </div>
          <h3 className="font-serif text-xl text-charcoal-900">100% Flat Fee</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            We never take a percentage cut of your refund. Traditional preparers often take 10% to 20%; our fee is fixed and transparent upfront.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-linen-200 flex items-center justify-center font-bold text-charcoal-900">
            <FileText className="w-5 h-5 text-caramel-dark" />
          </div>
          <h3 className="font-serif text-xl text-charcoal-900">Written Estimate</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            You receive an itemized breakdown of your expected federal refund or balance due before committing to full tax return filing.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-linen-200 flex items-center justify-center font-bold text-charcoal-900">
            <ShieldCheck className="w-5 h-5 text-caramel-dark" />
          </div>
          <h3 className="font-serif text-xl text-charcoal-900">Private Portal Security</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Never send SSNs or W-2s via regular email or text. Your documents are uploaded directly to our 256-bit encrypted client vault.
          </p>
        </div>
      </section>

      {/* Interactive Tool Area */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm space-y-10">
        
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
            Step 1: Select Your Tax Profile
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
            Customize your Refund Checkup scope
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            Click the items that apply to your tax year to calculate your diagnostic review checklist.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {checkupOptions.map((opt) => {
            const isSelected = selectedItems.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleOption(opt.id)}
                className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-[#FAF6F0] border-caramel shadow-sm"
                    : "bg-[#FDFCFB] border-stone-200 hover:border-stone-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    isSelected ? "bg-caramel text-charcoal-900" : "border border-stone-300 text-transparent"
                  }`}>
                    ✓
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 uppercase">
                    {isSelected ? "Included" : "Add"}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal-900 font-bold leading-snug">{opt.label}</h4>
                  <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">{opt.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Real-Time Scope Summary Box */}
        <div className="bg-linen-100 rounded-2xl p-6 sm:p-8 border border-stone-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-caramel-dark block">
              Calculated Review Scope
            </span>
            <h3 className="font-serif text-2xl text-charcoal-900">
              {selectedItems.length} Tax Document Areas Ready for Verification
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                <span>Written refund / balance estimate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                <span>Deduction omissions check</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                <span>Turnaround: 24 to 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-caramel-dark shrink-0" />
                <span>Zero refund commission policy</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <span className="text-xs font-mono uppercase text-stone-500">Pricing Model</span>
            <span className="font-serif text-3xl font-bold text-charcoal-900 mt-0.5">Flat Fee</span>
            <p className="text-[11px] text-stone-500 text-left lg:text-right mt-1">
              Upfront quote provided before work starts.
            </p>
          </div>

        </div>

        {/* Direct Request Form */}
        <div className="pt-4 border-t border-stone-200">
          <div className="max-w-xl space-y-4">
            <h3 className="font-serif text-2xl text-charcoal-900">
              Request Your Refund Checkup
            </h3>
            <p className="text-xs text-stone-500">
              Enter your contact details. You will receive private portal login credentials to upload your files securely.
            </p>

            {requested ? (
              <div className="bg-linen-100 p-6 rounded-2xl border border-stone-200 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-lg">
                  ✓
                </div>
                <h4 className="font-serif text-xl text-charcoal-900">Request Confirmed!</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Thank you, {formData.name}. Our Principal Consultant will send your secure client portal key to {formData.email} within 24 hours.
                </p>
                <Link
                  href="/portal"
                  className="btn-caramel px-5 py-2 rounded-full text-xs font-semibold inline-block mt-2"
                >
                  Visit Client Portal
                </Link>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Full Name*</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Phone Number*</label>
                    <input
                      required
                      type="tel"
                      placeholder="(903) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 font-medium mb-1">Email Address*</label>
                  <input
                    required
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 font-medium mb-1">Specific Tax Questions / Notes (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Any changes in your household or employment this year?"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-caramel pl-5 pr-3 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-3"
                >
                  <span>Submit Refund Checkup Request</span>
                  <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
}
