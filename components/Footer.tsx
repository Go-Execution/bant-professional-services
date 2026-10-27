import Link from "next/link";
import Image from "next/image";
import { Shield, Phone, MapPin, Mail, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-linen-100/80 px-6 sm:px-10 lg:px-14 pt-16 pb-12 border-t border-stone-200/70 overflow-hidden">
      
      {/* Subtle Giant Watermark Text behind footer */}
      <div className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none overflow-hidden opacity-10">
        <span className="font-serif text-[60px] sm:text-[100px] lg:text-[140px] font-bold tracking-widest text-stone-600 block leading-none">
          BNT SERVICES
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        
        {/* Brand Info with Official Logo */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="BNT Professional Services - Business. Notary. Tax. Made Simple."
              width={1794}
              height={877}
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
            Grounded in faith and gratitude. Delivering honest work, upfront flat-rate pricing, and respectful financial stewardship for every client.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-[11px] font-mono text-stone-600">
            <Shield className="w-3.5 h-3.5 text-caramel-dark" />
            <span>Jacksonville, TX & East Texas</span>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-3 text-xs">
          <h5 className="font-bold text-charcoal-900 uppercase tracking-wider">Company</h5>
          <ul className="space-y-2 text-stone-600">
            <li><Link href="/" className="hover:text-caramel transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-caramel transition-colors">About Principal Consultant</Link></li>
            <li><Link href="/services" className="hover:text-caramel transition-colors">All Services</Link></li>
            <li><Link href="/refund-checkup" className="hover:text-caramel transition-colors">The Refund Checkup</Link></li>
            <li><Link href="/booking" className="hover:text-caramel transition-colors">Book Consultation</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-3 text-xs">
          <h5 className="font-bold text-charcoal-900 uppercase tracking-wider">Services</h5>
          <ul className="space-y-2 text-stone-600">
            <li><Link href="/refund-checkup" className="hover:text-caramel transition-colors font-medium text-charcoal-900">The BNT Refund Checkup</Link></li>
            <li><Link href="/services#individual" className="hover:text-caramel transition-colors">Individual Tax Preparation</Link></li>
            <li><Link href="/services#reconciliation" className="hover:text-caramel transition-colors">Account Reconciliations</Link></li>
            <li><Link href="/services#bookkeeping" className="hover:text-caramel transition-colors">Bookkeeping & Cleanup</Link></li>
            <li><Link href="/services#notary" className="hover:text-caramel transition-colors">Texas Certified Notary</Link></li>
          </ul>
        </div>

        {/* Contacts & Security */}
        <div className="space-y-3 text-xs text-stone-600">
          <h5 className="font-bold text-charcoal-900 uppercase tracking-wider">Direct Contacts</h5>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>Jacksonville, TX 75766</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <a href="tel:9035550192" className="hover:text-charcoal-900">+1 (903) 555-0192</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>consulting@bntservices.com</span>
          </div>
          <div className="pt-2">
            <Link 
              href="/portal"
              className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-900 hover:text-caramel transition-colors"
            >
              <Lock className="w-3 h-3 text-caramel-dark" />
              <span>Private 256-Bit Client Vault</span>
            </Link>
          </div>
        </div>

      </div>

      <div className="relative z-10 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
        <p>© 2026 BNT Professional Services. All rights reserved.</p>
        <p className="text-center sm:text-right">
          Business. Notary. Tax. Made Simple. No percentage commissions on tax refunds.
        </p>
      </div>

    </footer>
  );
}
