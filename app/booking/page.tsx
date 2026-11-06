"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Video, CheckCircle2, ArrowRight, Clock } from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedService =
    searchParams.get("service") || "Individual Tax Preparation";

  const [booking, setBooking] = useState({
    service: preselectedService,
    format: "In-Person (133 N Henderson St, Rusk, TX)",
    date: "2026-11-09",
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

  const formats = [
    {
      id: "In-Person (133 N Henderson St, Rusk, TX)",
      label: "In-Person Office",
      icon: MapPin,
      desc: "133 N Henderson St, Rusk, TX 75785",
    },
    {
      id: "Phone Consultation",
      label: "Phone Call",
      icon: Phone,
      desc: "Direct call at your scheduled time",
    },
    {
      id: "Remote Video / Online",
      label: "Online / Video",
      icon: Video,
      desc: "Remote session or Online Notary",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "11:00 AM",
    "01:30 PM",
    "03:30 PM",
    "Sat/Sun Evening (By Appt)",
  ];

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="bg-white py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-sm font-bold uppercase tracking-wider text-caramel-dark block">
            Schedule Consultation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Book Your Consultation
          </h1>
          <p className="text-base sm:text-lg text-slate-700">
            Monday – Friday: 9:00 AM – 5:00 PM •{" "}
            <strong className="text-slate-900">
              Saturday &amp; Sunday Evening: By Appointment Only
            </strong>
          </p>
        </div>

        {bookingConfirmed ? (
          <div className="bg-[#F8F7F4] rounded-2xl p-8 sm:p-12 border border-slate-200 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">
                Appointment Request Received
              </h2>
              <p className="text-base text-slate-700 max-w-md mx-auto">
                Thank you, {booking.fullName}. We have received your request for{" "}
                <strong>{booking.date}</strong> ({booking.timeSlot}).
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 max-w-md mx-auto text-sm sm:text-base text-left space-y-2">
              <p>
                <strong>Service:</strong> {booking.service}
              </p>
              <p>
                <strong>Format:</strong> {booking.format}
              </p>
              <p>
                <strong>Office:</strong> 133 N Henderson St, Rusk, TX 75785
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/portal"
                className="btn-caramel px-6 py-3 rounded-xl text-sm sm:text-base font-bold"
              >
                Open Client Portal
              </Link>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl text-sm sm:text-base font-semibold border border-slate-300 text-slate-800 bg-white hover:bg-slate-50"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleFinalSubmit}
            className="bg-[#F8F7F4] rounded-2xl p-7 sm:p-10 border border-slate-200 space-y-8"
          >
            {/* 1. Service & Format */}
            <div className="space-y-5">
              <div>
                <label className="block text-base font-bold text-slate-900 mb-2">
                  1. Select Service *
                </label>
                <select
                  value={booking.service}
                  onChange={(e) =>
                    setBooking({ ...booking, service: e.target.value })
                  }
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-base text-slate-900 font-medium focus:outline-none focus:border-slate-900"
                >
                  <option value="Individual Tax Preparation">
                    Individual Tax Preparation
                  </option>
                  <option value="Taxes for Healthcare Workers">
                    Healthcare Worker Taxes (LVN, RN, Physicians)
                  </option>
                  <option value="Business Tax Preparation Support">
                    Business Tax &amp; Bookkeeping
                  </option>
                  <option value="Notary Public (Nationwide or In-Person)">
                    Notary Public (All Over US or In-Person)
                  </option>
                  <option value="The BNT Refund Checkup">
                    The BNT Refund Checkup
                  </option>
                </select>
              </div>

              <div>
                <span className="block text-base font-bold text-slate-900 mb-2">
                  2. Meeting Format
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {formats.map((f) => {
                    const Icon = f.icon;
                    const active = booking.format === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setBooking({ ...booking, format: f.id })}
                        className={`p-4 rounded-xl text-left border transition-colors space-y-1.5 ${
                          active
                            ? "bg-white border-slate-900 shadow-sm"
                            : "bg-white/70 border-slate-200 hover:border-slate-400"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-caramel-dark" />
                        <span className="text-base font-bold text-slate-900 block">
                          {f.label}
                        </span>
                        <span className="text-sm text-slate-600 block">
                          {f.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div>
                <label className="block text-base font-bold text-slate-900 mb-2">
                  3. Preferred Date
                </label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) =>
                    setBooking({ ...booking, date: e.target.value })
                  }
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-base text-slate-900 focus:outline-none focus:border-slate-900"
                />
                <p className="text-xs sm:text-sm text-slate-600 mt-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-caramel-dark shrink-0" />
                  <span>Sat &amp; Sun Evening available by appointment only.</span>
                </p>
              </div>

              <div>
                <label className="block text-base font-bold text-slate-900 mb-2">
                  Preferred Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setBooking({ ...booking, timeSlot: slot })}
                      className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition-colors ${
                        booking.timeSlot === slot
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white border-slate-300 text-slate-800 hover:border-slate-500"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Contact Details */}
            <div className="space-y-4 pt-4 border-t border-slate-200 text-sm sm:text-base">
              <h3 className="text-base font-bold text-slate-900">
                4. Your Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    value={booking.fullName}
                    onChange={(e) =>
                      setBooking({ ...booking, fullName: e.target.value })
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
                    value={booking.phone}
                    onChange={(e) =>
                      setBooking({ ...booking, phone: e.target.value })
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={booking.email}
                  onChange={(e) =>
                    setBooking({ ...booking, email: e.target.value })
                  }
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-caramel py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2"
              >
                <span>Confirm Consultation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-base text-slate-600">
          Loading scheduler...
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
