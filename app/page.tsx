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
} from "lucide-react";

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
      icon: FileCheck,
      title: "Individual Tax Preparation",
      desc: "Straightforward federal and state filing with upfront flat pricing and our Refund Checkup review.",
      href: "/services#individual",
      cta: "View Individual Tax",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Worker Taxes",
      desc: "Shift-friendly tax filing tailored for LVNs, RNs, physicians, and allied healthcare professionals.",
      href: "/services#healthcare-tax",
      cta: "View Healthcare Tax",
    },
    {
      icon: Building2,
      title: "Business Tax & Bookkeeping",
      desc: "Small business tax returns, account reconciliations, and clean monthly financial records.",
      href: "/services#business",
      cta: "View Business Services",
    },
    {
      icon: Globe,
      title: "Notary Public (All Over US)",
      desc: "Remote Online Notary across all 50 states, plus in-person notarization at our Rusk, TX office.",
      href: "/services#notary",
      cta: "Book Notary Service",
    },
  ];

  const faqs = [
    {
      q: "Do you take a percentage of my tax refund?",
      a: "Never. We quote a clear, upfront flat fee before any work begins so you keep 100% of your refund.",
    },
    {
      q: "Can you notarize documents outside of Texas?",
      a: "Yes. Through Remote Online Notarization (RON), we legally notarize documents across all 50 US states, in addition to in-person service in Rusk, TX.",
    },
    {
      q: "Where are you located and what are your hours?",
      a: "Visit us at 133 N Henderson Street, Rusk, TX 75785. Weekday hours are Monday–Friday 9:00 AM – 5:00 PM, and Saturday & Sunday Evening by appointment only.",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.email) return;
    setContactSubmitted(true);
  };

  return (
    <div>
      {/* 1. HERO SECTION — Clean, spacious, high-contrast */}
      <section className="px-6 sm:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span>Business</span>
              <span className="text-caramel">•</span>
              <span>Notary</span>
              <span className="text-caramel">•</span>
              <span>Tax</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.12]">
              Professional Services for Individuals &amp; Businesses.
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl">
              Clear answers, accurate books, and honest flat-rate tax filing with zero percentage taken from your refund.
            </p>

            {/* Clear 2-Line Coverage & Evening Appointment Notice */}
            <div className="bg-[#F8F7F4] border border-slate-200 rounded-xl px-5 py-4 max-w-xl space-y-1.5">
              <p className="text-base sm:text-lg font-bold text-slate-900">
                Notary All Over US • Taxes State-Focused
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-800">
                Saturday &amp; Sunday Evening: By Appointment Only
              </p>
            </div>

            {/* Primary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:9035550192"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white text-base font-semibold hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-caramel-light" />
                <span>+1 (903) 555-0192</span>
              </a>

              <Link
                href="/booking"
                className="btn-caramel inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Simple 3-Point Trust Bar */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-slate-900 block">
                100%
              </span>
              <span className="text-sm sm:text-base text-slate-600 font-medium mt-1 block">
                Upfront Flat-Rate Pricing
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold text-slate-900 block">
                $0
              </span>
              <span className="text-sm sm:text-base text-slate-600 font-medium mt-1 block">
                Cut Taken From Your Refund
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold text-slate-900 block">
                All 50 States
              </span>
              <span className="text-sm sm:text-base text-slate-600 font-medium mt-1 block">
                Remote Online Notary Coverage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION — 4 Simple, Spacious Cards */}
      <section className="px-6 sm:px-8 py-20 sm:py-24 bg-[#F8F7F4] border-y border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How We Can Help You
            </h2>
            <p className="text-base sm:text-lg text-slate-700">
              Simple, transparent support with no confusing jargon or hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {svc.title}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 hover:text-caramel-dark transition-colors"
                    >
                      <span>{svc.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT OUR PRACTICE — Clean White Box with High-Contrast Text */}
      <section className="px-6 sm:px-8 py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Clean White Card with High-Contrast Readable Text */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-slate-200 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 bg-slate-100 px-3.5 py-1.5 rounded-lg">
                <MapPin className="w-4 h-4 text-caramel-dark shrink-0" />
                <span>133 N Henderson St • Rusk, TX 75785</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl font-bold leading-snug text-slate-900">
                &ldquo;Doing honest work, serving people with integrity, and treating every client with respect.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  Ex-JPMorgan Chase • Private New York Tax Practice
                </p>
                <p className="text-sm text-slate-700 mt-1">
                  Serving Rusk, Jacksonville &amp; Cherokee County
                </p>
              </div>
            </div>
          </div>

          {/* Right: Concise Practice Overview */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
              About Our Practice
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Honest guidance grounded in faith and integrity.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Grounded in faith and gratitude, we help individuals, healthcare professionals, and small business owners keep accurate records and file taxes with confidence. Drawing on institutional experience at JPMorgan Chase and a private New York tax practice, we provide clear, plain-language guidance to every client.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="btn-dark inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT & CONSULTATION — Simple & Direct */}
      <section className="px-6 sm:px-8 py-20 sm:py-24 bg-[#F8F7F4] border-t border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Office Details */}
          <div className="lg:col-span-5 space-y-6">
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
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-caramel-dark shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900">Office Address</p>
                  <p>133 N Henderson Street, Rusk, TX 75785</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-caramel-dark shrink-0 mt-1" />
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

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-caramel-dark shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-bold text-slate-900">Hours</p>
                  <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p className="font-bold text-slate-900">
                    Saturday &amp; Sunday Evening: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean 4-Field Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-10 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Schedule a Free Consultation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Leave your details and we will get back to you within 24 hours.
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
              <form onSubmit={handleContactSubmit} className="space-y-4 text-sm sm:text-base">
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
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
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
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
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
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-semibold mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    value={contactForm.service}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, service: e.target.value })
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 font-medium"
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
                  className="w-full btn-caramel py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2 mt-2"
                >
                  <span>Request Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. SHORT FAQ SECTION */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#F8F7F4] rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-base sm:text-lg font-bold text-slate-900 hover:bg-slate-100/70 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-900">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-base text-slate-700 leading-relaxed bg-white border-t border-slate-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
