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
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "About Our Practice | BNT Professional Services",
  description:
    "Learn about BNT Professional Services at 133 N Henderson St, Rusk, TX 75785. Led by our Principal Consultant holding a MACY from UTSA, Bachelor's in Accounting, MBA, and DNP, with New York private tax firm and JPMorgan Chase experience.",
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
      title: "MACY, MBA, Accounting & DNP Credentials",
      description:
        "Specializing in Accounting for Healthcare Organizations and Federal Income Taxation, combining financial management with clinical insight.",
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
      {/* 1. Hero Header */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-subtle-grid border-b border-slate-100">
        <Reveal className="max-w-5xl mx-auto space-y-5">
          <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
            About Our Practice
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-3xl">
            Honest work, clear answers, and personal stewardship.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-4xl">
            Our Principal Consultant holds a Master of Accountancy (MACY) degree from the University of Texas at San Antonio (UTSA), a bachelor&apos;s degree in Accounting, an MBA, and a Doctor of Nursing Practice (DNP). With professional experience at a New York private tax firm and JPMorgan Chase, he brings extensive financial, accounting, and institutional expertise to serving individuals, families and businesses across East Texas. His areas of specialization include Accounting for Healthcare Organizations and Federal Income Taxation, combining a strong foundation in financial management with a unique understanding of the healthcare industry.
          </p>
        </Reveal>
      </section>

      {/* 2. Experience Cards */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-[#F8F7F4] border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-10">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900">Our Background</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 100}>
                  <div className="card-interactive h-full bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Commitments */}
      <section className="px-6 sm:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900">
              Our Commitments to You
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 80}>
                <div className="card-interactive h-full bg-[#F8F7F4] rounded-2xl p-6 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-caramel-dark shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed pl-7">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Office & Coverage Summary */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-[#F8F7F4] border-t border-slate-200">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="card-interactive h-full bg-white rounded-2xl p-7 border border-slate-200 space-y-2">
                <MapPin className="w-6 h-6 text-caramel-dark" />
                <h3 className="text-lg font-bold text-slate-900">
                  Office Location
                </h3>
                <p className="text-base text-slate-700">
                  133 N Henderson Street, Rusk, TX 75785. Serving Rusk, Jacksonville, and Cherokee County.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card-interactive h-full bg-white rounded-2xl p-7 border border-slate-200 space-y-2">
                <Globe2 className="w-6 h-6 text-caramel-dark" />
                <h3 className="text-lg font-bold text-slate-900">
                  Notary All Over US
                </h3>
                <p className="text-base text-slate-700">
                  Remote Online Notarization (RON) across all 50 states, plus in-person service in Rusk, TX.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-interactive h-full bg-white rounded-2xl p-7 border border-slate-200 space-y-2">
                <Clock className="w-6 h-6 text-caramel-dark" />
                <h3 className="text-lg font-bold text-slate-900">Operating Hours</h3>
                <p className="text-base text-slate-700">
                  <span className="block font-bold text-slate-900">
                    Sat, Sun &amp; Mon: 24 Hours
                  </span>
                  <span className="block text-slate-700 mt-1">
                    Tuesday - Friday: 6:00 PM - 9:00 PM CST
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
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
                className="group btn-caramel inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base shrink-0"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
