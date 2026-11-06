import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Building2,
  CheckCircle2,
  MapPin,
  Globe2,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "About Our Practice | BNT Professional Services",
  description:
    "Learn about BNT Professional Services at 133 N Henderson St, Rusk, TX 75785. Grounded in faith and gratitude, backed by JPMorgan Chase and private New York tax practice experience.",
};

export default function AboutPage() {
  const highlights = [
    {
      icon: Building2,
      title: "Private New York Tax Practice",
      description:
        "Hands-on experience preparing individual returns, multi-state filings, itemized deductions, and small business taxes.",
    },
    {
      icon: Shield,
      title: "JPMorgan Chase Background",
      description:
        "Institutional training in financial ledgers, accurate account reconciliations, strict data security, and attention to detail.",
    },
    {
      icon: Award,
      title: "Advanced Accounting & MBA Education",
      description:
        "Graduate-level training in accounting, tax compliance, and small business financial management.",
    },
  ];

  const values = [
    {
      title: "Grounded in Faith & Gratitude",
      description:
        "Every client relationship begins with thankfulness, honesty, and genuine care.",
    },
    {
      title: "100% Upfront Flat Pricing",
      description:
        "No hidden charges and never a percentage taken from your tax refund.",
    },
    {
      title: "Plain-Language Clarity",
      description:
        "We explain every number in simple, clear terms without confusing tax jargon.",
    },
    {
      title: "Respect for Every Client",
      description:
        "Whether you are filing a single W-2 or running a growing business, you receive attentive, patient support.",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Simple Hero Header */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 max-w-5xl mx-auto space-y-5">
        <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
          About Our Practice
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-3xl">
          Honest work, clear answers, and personal stewardship.
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl">
          Grounded in faith and gratitude, BNT Professional Services helps individuals, healthcare workers, and small businesses in Rusk and East Texas understand their finances, keep clean books, and file taxes with confidence.
        </p>
      </section>

      {/* 2. Experience Cards */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-[#F8F7F4] border-y border-slate-200">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Commitments */}
      <section className="px-6 sm:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Commitments to You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#F8F7F4] rounded-2xl p-6 border border-slate-200 space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed pl-7">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Office & Coverage Summary */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-[#F8F7F4] border-t border-slate-200">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200 space-y-2">
              <MapPin className="w-6 h-6 text-caramel-dark" />
              <h3 className="text-lg font-bold text-slate-900">Office Location</h3>
              <p className="text-base text-slate-700">
                133 N Henderson Street, Rusk, TX 75785. Serving Rusk, Jacksonville, and Cherokee County.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200 space-y-2">
              <Globe2 className="w-6 h-6 text-caramel-dark" />
              <h3 className="text-lg font-bold text-slate-900">Notary All Over US</h3>
              <p className="text-base text-slate-700">
                Remote Online Notarization (RON) across all 50 states, plus in-person service in Rusk, TX.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200 space-y-2">
              <Clock className="w-6 h-6 text-caramel-dark" />
              <h3 className="text-lg font-bold text-slate-900">Hours</h3>
              <p className="text-base text-slate-700">
                Monday – Friday: 9:00 AM – 5:00 PM.
                <span className="block font-bold text-slate-900 mt-1">
                  Saturday &amp; Sunday Evening: By Appointment Only
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Ready to schedule a conversation?
              </h3>
              <p className="text-base text-slate-700 mt-1">
                Meet in person in Rusk, TX or connect remotely.
              </p>
            </div>
            <Link
              href="/booking"
              className="btn-caramel inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
