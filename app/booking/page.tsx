"use client";

import { useState } from "react";
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
  UserCheck
} from "lucide-react";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service: "The BNT Refund Checkup",
    format: "In-Person (Jacksonville, TX)",
    date: "2026-11-02",
    timeSlot: "10:00 AM",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const services = [
    { title: "The BNT Refund Checkup", desc: "Flat-fee document audit & written estimate." },
    { title: "Individual & W-2 Tax Return Prep", desc: "Complete federal and state tax filing." },
    { title: "Account Reconciliations", desc: "Matching bank and card statements to general ledger." },
    { title: "Bookkeeping Support & Cleanup", desc: "Catch-up accounting and receipt organization." },
    { title: "Texas Certified Notary", desc: "In-person notarization of legal documents." },
  ];

  const formats = [
    { id: "In-Person (Jacksonville, TX)", label: "In-Person Office Visit", icon: MapPin, desc: "Meet at our Jacksonville, TX location by appointment." },
    { id: "Telephone Call", label: "Phone Consultation", icon: Phone, desc: "A focused call directly with our Principal Consultant." },
    { id: "Secure Video Meeting", label: "Remote Video Screen Share", icon: Video, desc: "Virtual review from anywhere in Texas." },
  ];

  const timeSlots = [
    "09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"
  ];

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 space-y-12 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-caramel block">
          Direct Scheduling
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 leading-tight">
          Book Your Consultation
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
          Schedule your session with our Principal Consultant. Transparent flat fees, honest advice, and complete confidentiality.
        </p>
      </div>

      {bookingConfirmed ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-caramel-dark block">
              Reference #{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h2 className="font-serif text-3xl text-charcoal-900">
              Your Consultation is Confirmed
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              Thank you, {booking.fullName || "valued client"}. A calendar invitation and confirmation have been reserved for {booking.date} at {booking.timeSlot}.
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
            <div className="flex justify-between py-1">
              <span className="text-stone-500">Vault Access:</span>
              <strong className="text-emerald-700">Client Portal Key Dispatched</strong>
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
              1. Service & Format
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
                <h3 className="font-serif text-2xl text-charcoal-900">Select Service Needed</h3>
                <p className="text-xs text-stone-500">Choose the primary area you want to discuss.</p>
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
                    <span className="font-serif text-base text-charcoal-900 font-bold block">{s.title}</span>
                    <span className="text-xs text-stone-500 mt-1 block">{s.desc}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-100">
                <h4 className="font-serif text-lg text-charcoal-900">Appointment Format</h4>
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
                <p className="text-xs text-stone-500">Consultations are conducted Monday through Saturday.</p>
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
                    East Texas timezone (CST). Same-week availability.
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
                  className="px-5 py-2.5 rounded-full text-xs font-semibold border border-stone-300 text-stone-600"
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
                <h3 className="font-serif text-2xl text-charcoal-900">Your Contact Information</h3>
                <p className="text-xs text-stone-500">We will send confirmation details and portal access keys here.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-medium text-stone-600 mb-1">Full Name*</label>
                  <input
                    required
                    type="text"
                    placeholder="Johnathan Davis"
                    value={booking.fullName}
                    onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
                  />
                </div>
                <div>
                  <label className="block font-medium text-stone-600 mb-1">Phone Number*</label>
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
                <label className="block font-medium text-stone-600 mb-1">Email Address*</label>
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
                <label className="block font-medium text-stone-600 mb-1">Brief Description of Your Situation (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g., W-2 with college credits, or 6 months of back bookkeeping..."
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel resize-none text-xs"
                ></textarea>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-linen-100 rounded-2xl p-4 border border-stone-200 text-xs text-stone-700 space-y-1">
                <p><strong>Selected:</strong> {booking.service} ({booking.format})</p>
                <p><strong>Scheduled:</strong> {booking.date} at {booking.timeSlot} CST</p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold border border-stone-300 text-stone-600"
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
