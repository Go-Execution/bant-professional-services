"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  ShieldCheck,
  Building,
  UserCheck,
  Stethoscope,
  Globe2
} from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "Individual Tax Preparation";

  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service: preselectedService,
    format: "In-Person (133 N Henderson St, Rusk, TX)",
    date: "2026-11-04",
    timeSlot: "10:00 AM",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  useEffect(() => {
    if (preselectedService) {
      setBooking((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const services = [
    { 
      title: "Individual Tax Preparation", 
      desc: "Complete, accurate preparation & state/federal filing for W-2 filers & families.",
      badge: "Individual Tax"
    },
    { 
      title: "Taxes for Healthcare Workers", 
      desc: "LVNs, RNs, Physicians & Allied Health. Multi-shift, PRN, scrubs, and CEU optimization.",
      badge: "Specialized"
    },
    { 
      title: "Business Tax Preparation Support", 
      desc: "Schedule C, LLCs, independent contractors, and small business tax compliance.",
      badge: "Business Tax"
    },
    { 
      title: "Account Reconciliations & Cleanup", 
      desc: "Matching bank and card statements to books so records reflect total truth.",
      badge: "Financial Records"
    },
    { 
      title: "The BNT Refund Checkup", 
      desc: "Flat-fee document review with written refund calculation & missing deductions audit.",
      badge: "Diagnostic"
    },
    { 
      title: "Notary Public (Nationwide or In-Person)", 
      desc: "Remote Online Notary across all 50 states, or in-person at 133 N Henderson St, Rusk, TX.",
      badge: "All Over US & TX"
    },
  ];

  const formats = [
    { 
      id: "In-Person (133 N Henderson St, Rusk, TX)", 
      label: "In-Person Office Visit", 
      icon: MapPin, 
      desc: "133 N Henderson Street, Rusk, TX 75785 (Mon-Fri & Sat-Sun By Appointment)." 
    },
    { 
      id: "Telephone Consultation", 
      label: "Phone Consultation", 
      icon: Phone, 
      desc: "A direct discussion with our Principal Consultant (UTSA MAcc, MBA)." 
    },
    { 
      id: "Remote Portal & Video Meeting", 
      label: "Remote / Portal Screen Share", 
      icon: Video, 
      desc: "Virtual session with secure document sharing through our 256-bit encrypted vault." 
    },
  ];

  const timeSlots = [
    "09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM (By Appt)"
  ];

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 space-y-12 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
          Direct Scheduling • Rusk, TX & Nationwide
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl text-charcoal-900 leading-tight">
          Book Your Consultation
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
          Schedule your session with our Principal Consultant. Transparent flat fees, honest advice, Saturday & Sunday by appointment, and complete confidentiality.
        </p>
      </div>

      {bookingConfirmed ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-caramel-dark block">
              Confirmation #{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h2 className="font-serif text-3xl text-charcoal-900">
              Your Consultation is Confirmed
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              Thank you, {booking.fullName || "valued client"}. A calendar confirmation has been reserved for {booking.date} at {booking.timeSlot}.
            </p>
          </div>

          <div className="bg-linen-100 rounded-2xl p-5 border border-stone-200/80 max-w-md mx-auto text-xs text-left space-y-2">
            <div className="flex justify-between py-1 border-b border-stone-200">
              <span className="text-stone-500">Service:</span>
              <strong className="text-charcoal-900">{booking.service}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-stone-200">
              <span className="text-stone-500">Format:</span>
              <strong className="text-charcoal-900">{booking.format}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-stone-200">
              <span className="text-stone-500">Office Location:</span>
              <strong className="text-charcoal-900">133 N Henderson St, Rusk, TX 75785</strong>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-stone-500">Vault Access:</span>
              <strong className="text-emerald-700">Encrypted Client Portal Dispatched</strong>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/portal"
              className="btn-caramel px-6 py-3 rounded-full text-xs font-semibold"
            >
              Access Client Portal
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-full text-xs font-semibold border border-stone-300 text-stone-700 hover:bg-stone-100"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          
          {/* Progress Indicators */}
          <div className="grid grid-cols-3 gap-2 pb-6 border-b border-stone-200 text-xs">
            <div className={`text-center py-2 rounded-xl font-semibold transition-colors ${
              step >= 1 ? "bg-caramel/25 text-charcoal-900 font-bold" : "text-stone-400"
            }`}>
              1. What Service
            </div>
            <div className={`text-center py-2 rounded-xl font-semibold transition-colors ${
              step >= 2 ? "bg-caramel/25 text-charcoal-900 font-bold" : "text-stone-400"
            }`}>
              2. Date & Time
            </div>
            <div className={`text-center py-2 rounded-xl font-semibold transition-colors ${
              step >= 3 ? "bg-caramel/25 text-charcoal-900 font-bold" : "text-stone-400"
            }`}>
              3. Contact Details
            </div>
          </div>

          {/* STEP 1: SERVICE & FORMAT */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-charcoal-900">What service are you interested in?</h3>
                <p className="text-xs text-stone-500">Choose the primary area of assistance you require.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setBooking({ ...booking, service: s.title })}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      booking.service === s.title
                        ? "bg-[#FAF6F0] border-caramel shadow-sm"
                        : "bg-white border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-linen-200 text-charcoal-900 font-semibold">
                        {s.badge}
                      </span>
                    </div>
                    <span className="font-serif text-base text-charcoal-900 font-bold block">{s.title}</span>
                    <span className="text-xs text-stone-500 mt-1 block">{s.desc}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-charcoal-900">Consultation Format</h4>
                  <span className="text-[11px] font-mono text-stone-500">Weekend hours by appointment</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {formats.map((f) => {
                    const Icon = f.icon;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setBooking({ ...booking, format: f.id })}
                        className={`p-4 rounded-2xl text-left border transition-all space-y-2 ${
                          booking.format === f.id
                            ? "bg-[#FAF6F0] border-caramel shadow-sm"
                            : "bg-white border-stone-200 hover:border-stone-400"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-caramel-dark" />
                        <span className="font-serif text-sm font-bold text-charcoal-900 block">{f.label}</span>
                        <span className="text-[11px] text-stone-500 leading-tight block">{f.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-caramel pl-6 pr-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  <span>Continue to Date & Time</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-charcoal-900">Choose Date & Time Slot</h3>
                <p className="text-xs text-stone-500">
                  Standard business hours Mon-Fri (9:00 AM - 5:00 PM). Saturday & Sunday available By Appointment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">Select Consultation Date</label>
                  <input
                    type="date"
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-xs focus:outline-none focus:border-caramel"
                  />
                  <p className="text-[11px] text-stone-400 mt-2">
                    Central Standard Time (CST). Saturday & Sunday slots scheduled by appointment.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">Available Time Slots</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBooking({ ...booking, timeSlot: slot })}
                        className={`py-2.5 px-3 rounded-xl font-medium border text-center transition-all ${
                          booking.timeSlot === slot
                            ? "bg-caramel text-charcoal-900 border-caramel shadow-sm font-bold"
                            : "bg-white border-stone-200 text-stone-700 hover:border-stone-400"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold border border-stone-300 text-stone-600 hover:bg-stone-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-caramel pl-6 pr-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  <span>Continue to Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT DETAILS & CONFIRM */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-charcoal-900">Your Contact Details</h3>
                <p className="text-xs text-stone-500">
                  Please provide your contact information to receive your confirmation and secure portal key.
                </p>
              </div>

              {/* Exact form fields requested: Name, Phone, Email, What service they are interested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-medium text-stone-600 mb-1">Name*</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    value={booking.fullName}
                    onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                  />
                </div>
                <div>
                  <label className="block font-medium text-stone-600 mb-1">Phone*</label>
                  <input
                    required
                    type="tel"
                    placeholder="(903) 555-0192"
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block font-medium text-stone-600 mb-1">Email*</label>
                <input
                  required
                  type="email"
                  placeholder="client@example.com"
                  value={booking.email}
                  onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel text-xs"
                />
              </div>

              <div className="text-xs">
                <label className="block font-medium text-stone-600 mb-1">What service are you interested in?*</label>
                <select
                  value={booking.service}
                  onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:outline-none focus:border-caramel text-xs"
                >
                  <option value="Individual Tax Preparation">Individual Tax Preparation (W-2, 1099, Families)</option>
                  <option value="Taxes for Healthcare Workers">Taxes for Healthcare Workers (LVN, RN, Physicians & Allied Health)</option>
                  <option value="Business Tax Preparation Support">Business Tax Preparation Support (LLC, Schedule C, Partnerships)</option>
                  <option value="Account Reconciliations & Cleanup">Account Reconciliations & Bookkeeping Cleanup</option>
                  <option value="The BNT Refund Checkup">The BNT Refund Checkup (Flat-Fee Diagnostic Review)</option>
                  <option value="Notary Public (Nationwide or In-Person)">Notary Public (Nationwide Online RON or In-Person at Rusk, TX)</option>
                </select>
              </div>

              <div className="text-xs">
                <label className="block font-medium text-stone-600 mb-1">Additional Notes or Schedule Preferences (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g., Night shift LVN needing weekend appointment, or small business with 2 bank accounts..."
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel resize-none text-xs"
                ></textarea>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-linen-100 rounded-2xl p-4 border border-stone-200 text-xs text-stone-700 space-y-1">
                <p><strong>Service:</strong> {booking.service}</p>
                <p><strong>Format:</strong> {booking.format}</p>
                <p><strong>Scheduled:</strong> {booking.date} at {booking.timeSlot} CST</p>
                <p className="text-stone-500 text-[11px] pt-1">
                  Office: 133 N Henderson Street, Rusk, TX 75785 • Saturday & Sunday By Appointment
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold border border-stone-300 text-stone-600 hover:bg-stone-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-caramel pl-6 pr-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  <span>Confirm Consultation</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

        </div>
      )}

    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-stone-400 font-mono">Loading booking system...</div>}>
      <BookingContent />
    </Suspense>
  );
}
