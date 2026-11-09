import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F7F4] border-t border-slate-200 px-6 sm:px-8 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="BNT Professional Services"
              width={1024}
              height={1024}
              className="h-24 w-24 object-contain"
            />
          </Link>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-sm">
            Business. Notary. Tax. Made Simple. Honest work and upfront flat-rate pricing for individuals, healthcare workers, and small businesses.
          </p>
        </div>

        {/* Column 2: Simple Navigation */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-slate-900">Quick Links</h4>
          <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
            <li>
              <Link href="/" className="hover:text-slate-950 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-slate-950 hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/refund-checkup" className="hover:text-slate-950 hover:underline">
                The Refund Checkup
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-950 hover:underline">
                About Our Practice
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-slate-950 hover:underline">
                Book Consultation
              </Link>
            </li>
            <li>
              <Link href="/portal" className="hover:text-slate-950 hover:underline">
                Client Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Office & Hours */}
        <div className="space-y-3.5 text-sm sm:text-base text-slate-700">
          <h4 className="text-base font-bold text-slate-900">Office &amp; Hours</h4>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-caramel-dark shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">133 N Henderson Street</p>
              <p>Rusk, TX 75785</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-5 h-5 text-caramel-dark shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">
                Sat, Sun &amp; Mon: 24 Hours
              </p>
              <p>Tuesday - Friday: 6:00 PM - 9:00 PM CST</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-caramel-dark shrink-0" />
            <a
              href="tel:4302441818"
              className="font-bold text-slate-900 hover:underline"
            >
              +1 (430) 244-1818
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-caramel-dark shrink-0" />
            <span>consulting@bntservices.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 gap-3">
        <p>© 2026 BNT Professional Services. All rights reserved.</p>
        <p>Notary All Over US • Taxes State-Focused</p>
      </div>
    </footer>
  );
}
