import Link from "next/link";
import { ArrowRight, BookOpen, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Knowledge & Tax Insights | BNT Professional Services",
  description: "Educational tax guidance, bookkeeping practices, and flat-fee transparency from BNT Professional Services in Jacksonville, TX.",
};

export default function InsightsPage() {
  const articles = [
    {
      id: "refund-cut",
      category: "Tax Ethics & Pricing",
      readTime: "4 min read",
      date: "October 2026",
      title: "Why You Should Never Pay a Percentage of Your Tax Refund",
      summary: "Many high-volume tax storefronts advertise 'fast refunds' but quietly take 10% to 25% of your money. Here is why flat-fee pricing is the only ethical approach to tax preparation.",
      paragraphs: [
        "Every tax season, millions of American families fall victim to predatory tax preparation pricing models. When a preparer charges a fee tied to the size of your refund, a toxic incentive is created: either to inflate deductions beyond what is legal, or to take a massive bite out of money that rightfully belongs to your household.",
        "At BNT Professional Services, our fee is 100% flat and disclosed upfront. Whether your federal refund is $800 or $8,000, our service fee does not change. Your refund is your money, not ours.",
      ],
      takeaways: [
        "Percentage fees create conflicting incentives and audit risk.",
        "Flat fees ensure objective, honest tax preparation.",
        "Our Refund Checkup gives you a written estimate before you file.",
      ],
    },
    {
      id: "reconciliation",
      category: "Small Business Bookkeeping",
      readTime: "5 min read",
      date: "October 2026",
      title: "Account Reconciliation: Catching Discrepancies Before the IRS Does",
      summary: "Matching your bank, credit card, and loan statements to your accounting books is the single most vital habit for small business survival.",
      paragraphs: [
        "A business owner might look at their bank balance and assume everything is fine, only to discover at tax time that dozens of transactions were categorized incorrectly, recurring charges were duplicated, or customer deposits were missed.",
        "Reconciliation is the discipline of proving that every dollar in your bank statement matches a verified entry in your general ledger. Without monthly reconciliations, your tax preparer has to guess, and guessing is what triggers IRS scrutiny and audit penalties.",
      ],
      takeaways: [
        "Monthly reconciliation catches unauthorized charges immediately.",
        "Clean books prevent costly catch-up accounting fees at year-end.",
        "Accurate financial statements make securing commercial loans much simpler.",
      ],
    },
    {
      id: "security",
      category: "Data Privacy & Portals",
      readTime: "3 min read",
      date: "October 2026",
      title: "Why We Never Accept Sensitive Tax Documents via Email or Text",
      summary: "Standard email and SMS are completely unencrypted. Here is why BNT relies exclusively on a private 256-bit client portal.",
      paragraphs: [
        "Your W-2, 1099, and tax return forms contain the most sensitive pieces of data in your entire life: your Social Security number, home address, annual wages, and bank routing numbers. When you attach these documents to a regular email, they bounce across multiple insecure servers and can be intercepted by phishing filters or cybercriminals.",
        "BNT Professional Services upholds an institutional security standard. Every client is provided a private, 256-bit encrypted portal where documents are uploaded directly to protected storage. We treat your financial identity with the same care you would expect from a major bank.",
      ],
      takeaways: [
        "Regular email and SMS are easily intercepted and hacked.",
        "Our client portal uses bank-grade 256-bit SSL encryption.",
        "Files are kept confidential and accessed solely by your Principal Consultant.",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 space-y-14">
      
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 block">
          Client Education & Guidance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 leading-tight">
          What You Need To Know In Tax & Finance
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          Honest, plain-language insights designed to protect your hard-earned money, keep your records spotless, and eliminate tax season anxiety.
        </p>
      </section>

      {/* Articles Stream */}
      <section className="space-y-10">
        {articles.map((art) => (
          <article
            key={art.id}
            id={art.id}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4 text-xs">
              <span className="px-3 py-1 rounded-full bg-linen-200 text-charcoal-900 font-mono font-bold uppercase">
                {art.category}
              </span>
              <div className="flex items-center gap-3 text-stone-400 font-mono">
                <span>{art.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {art.readTime}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 leading-snug">
                {art.title}
              </h2>
              <p className="text-sm font-medium text-stone-700 leading-relaxed">
                {art.summary}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {art.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="bg-linen-100 rounded-2xl p-5 border border-stone-200/80 space-y-2">
              <span className="text-xs font-serif font-bold text-charcoal-900 block">
                Key Takeaways:
              </span>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {art.takeaways.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-caramel-dark shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/booking"
                className="text-xs font-semibold text-charcoal-900 hover:text-caramel flex items-center gap-2 transition-colors"
              >
                <span>Discuss this in a consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Call to action */}
      <section className="bg-linen-100 rounded-3xl p-8 sm:p-12 border border-stone-200 text-center space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
          Have questions about your specific tax or bookkeeping situation?
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
          We explain things in plain language and tell you upfront what our services cost.
        </p>
        <div className="pt-2">
          <Link href="/booking" className="btn-caramel px-6 py-3 rounded-full text-xs sm:text-sm font-semibold inline-block">
            Book a Personal Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
