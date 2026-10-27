import Link from "next/link";
import { ArrowRight, Scale, Shield, Award, GraduationCap, Building2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Our Practice | BNT Professional Services",
  description: "Learn about BNT Professional Services, our Principal Consultant with a UTSA MAcc & MBA, Wall St/NY tax firm experience, and our faith-grounded commitment to integrity in Jacksonville, TX.",
};

export default function AboutPage() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Master of Accountancy (MAcc)",
      institution: "University of Texas at San Antonio (UTSA)",
      description: "Advanced degree focusing on corporate tax architecture, auditing standards, financial statements, and regulatory compliance.",
    },
    {
      icon: Award,
      title: "Master of Business Admin (MBA)",
      institution: "Advanced Finance Degree",
      description: "Strategic financial analysis, organizational leadership, capital structuring, and cash flow optimization for small enterprises.",
    },
    {
      icon: Building2,
      title: "New York Private Tax Practice",
      institution: "Wall Street / Manhattan Regional Firm",
      description: "Hands-on experience preparing complex individual returns, multi-state tax allocations, itemized deductions, and high-stakes reviews.",
    },
    {
      icon: Shield,
      title: "JPMorgan Chase Background",
      institution: "Global Institutional Banking",
      description: "Rigorous training in financial ledgers, transactional reconciliation, strict security controls, and risk management.",
    },
  ];

  const values = [
    {
      title: "Grounded in Faith & Gratitude",
      description: "We view our work as a service of trust and stewardship. Every client relationship begins with thankfulness and an earnest desire to help your family and business flourish.",
    },
    {
      title: "Uncompromising Integrity",
      description: "No questionable gray-area tax schemes, no predatory fees, and no inflated promises. We do honest, diligent work that protects you from IRS scrutiny.",
    },
    {
      title: "Respect for Every Client",
      description: "Whether you earn $30,000 as an hourly employee or manage a $2,000,000 commercial business, we treat you with equal dignity, attentiveness, and patience.",
    },
    {
      title: "Plain-Language Clarity",
      description: "You will never leave a meeting feeling confused by tax code jargon. We explain every calculation in simple, conversational terms so you understand your money.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 space-y-16 lg:space-y-24">
      
      {/* 1. Header & Lead Story */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-caramel"></span>
          Our Background & Philosophy
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.08] tracking-tight">
          Institutional caliber financial discipline, dedicated to East Texas.
        </h1>

        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          Our work is grounded in faith and gratitude. We believe in doing honest work, serving people with integrity, and treating every client with respect. We help individuals, families, and small businesses understand their finances, keep accurate records, and file with confidence.
        </p>
      </section>

      {/* 2. Principal Consultant Highlight */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-5 flex justify-center">
          <div className="arch-portrait w-64 sm:w-72 h-80 sm:h-96 relative overflow-hidden shadow-md flex items-end justify-center">
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-stone-100 shadow-md flex items-center justify-center font-serif text-3xl font-bold text-charcoal-900 border-4 border-white/60">
                BNT
              </div>
              <div className="w-48 h-36 bg-stone-900 rounded-t-full mt-2 shadow-2xl relative flex flex-col items-center pt-4">
                <span className="text-xs font-semibold text-stone-200 font-mono">Principal Consultant</span>
                <span className="text-[10px] text-caramel-light font-medium uppercase tracking-wider">UTSA Macy • MBA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-caramel">
            Founder & Principal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
            Academic rigor meeting real-world institutional experience.
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Our Principal Consultant holds a Master of Accountancy (MAcc) degree from the University of Texas at San Antonio (UTSA). He also holds a bachelor&apos;s degree and a Master of Business Administration (MBA) degree.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            He brings invaluable experience having worked at a private New York tax firm and for JPMorgan Chase, delivering high-level financial analysis and tax preparation directly to every client in Jacksonville, Tyler, Rusk, and surrounding communities.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/booking"
              className="btn-caramel pl-5 pr-3 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2.5"
            >
              <span>Book Consultation with Principal</span>
              <span className="w-6 h-6 rounded-full bg-charcoal-900 text-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>

      </section>

      {/* 3. Credential Matrix */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 block mb-1">
            Proven Foundation
          </span>
          <h3 className="font-serif text-3xl text-charcoal-900">
            Education & Career Background
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div key={cred.title} className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-linen-200 text-charcoal-900 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-caramel-dark" />
                </div>
                <h4 className="font-serif text-xl text-charcoal-900">{cred.title}</h4>
                <p className="text-xs font-mono text-caramel-dark font-medium">{cred.institution}</p>
                <p className="text-xs text-stone-600 leading-relaxed">{cred.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Core Values & Principles */}
      <section className="bg-linen-100 rounded-3xl p-8 sm:p-12 border border-stone-200 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-600 block">
            The BNT Standard
          </span>
          <h3 className="font-serif text-3xl text-charcoal-900">
            Our Commitments to You
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            How we conduct our work every single day, with every single file.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-caramel-dark shrink-0" />
                <h4 className="font-serif text-lg text-charcoal-900 font-bold">{v.title}</h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pl-6">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Callout Banner */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
            Ready to experience an honest tax consultation?
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            Schedule a conversation in Jacksonville, TX or remotely via our private client portal.
          </p>
        </div>
        <Link
          href="/booking"
          className="btn-caramel px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shrink-0"
        >
          Schedule Your Consultation
        </Link>
      </section>

    </div>
  );
}
