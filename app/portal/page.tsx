"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Lock, 
  ShieldCheck, 
  UploadCloud, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  AlertCircle,
  KeyRound,
  Eye,
  EyeOff
} from "lucide-react";

export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "2025_W2_Employer.pdf", size: "2.4 MB", date: "Oct 24, 2026", status: "Verified" },
    { name: "Bank_Statement_Sep.pdf", size: "1.1 MB", date: "Oct 25, 2026", status: "Under Audit" },
  ]);

  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFiles([
        ...uploadedFiles,
        {
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          date: "Just now",
          status: "Encrypted & Received",
        },
      ]);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 4000);
    }
  };

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 space-y-12 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-caramel/20 text-caramel-dark flex items-center justify-center mx-auto mb-2">
          <Lock className="w-6 h-6" />
        </div>
        <span className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-caramel-dark block">
          256-Bit SSL Encrypted Vault
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 leading-tight">
          Private Client Portal
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
          Confidential file transmission for tax returns, W-2s, and accounting ledgers. Never sent via unsecured email or text.
        </p>
      </div>

      {!isAuthenticated ? (
        /* LOGIN GATEWAY */
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="space-y-1 text-center">
            <h3 className="font-serif text-2xl text-charcoal-900">Sign In to Your Vault</h3>
            <p className="text-xs text-stone-500">Enter your assigned client ID and vault passcode.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-stone-600 font-medium mb-1">Client ID / Registered Email</label>
              <input
                required
                type="email"
                placeholder="client@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel"
              />
            </div>

            <div>
              <label className="block text-stone-600 font-medium mb-1">Passcode / Vault Key</label>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-caramel pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full btn-caramel py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
              >
                <span>Unlock Client Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="pt-4 border-t border-stone-100 text-center space-y-2 text-[11px] text-stone-500">
            <p>
              Don&apos;t have a portal key yet?{" "}
              <Link href="/booking" className="text-caramel-dark font-semibold underline">
                Schedule a consultation
              </Link>
            </p>
            <p className="text-stone-400">
              Demo access: Enter any email & passcode to inspect client vault.
            </p>
          </div>
        </div>
      ) : (
        /* AUTHENTICATED VAULT DASHBOARD */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Welcome Strip */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-linen-200 flex items-center justify-center font-serif text-xl font-bold text-charcoal-900">
                JD
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal-900">Client Portal Dashboard</h3>
                <p className="text-xs text-stone-500">Account Reference: #BNT-CLIENT-2026 • 256-Bit TLS Active</p>
              </div>
            </div>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 rounded-full border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100"
            >
              Sign Out
            </button>
          </div>

          {/* Workflow Status Tracker */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-xl text-charcoal-900">File Progression Status</h4>
              <span className="px-3 py-1 rounded-full bg-caramel/25 text-charcoal-900 font-mono text-[11px] font-bold">
                AUDIT IN PROGRESS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs pt-2">
              <div className="p-3.5 rounded-xl bg-linen-100 border border-stone-200 space-y-1">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold">Step 1: Done</span>
                <p className="font-bold text-charcoal-900">Documents Uploaded</p>
                <p className="text-[11px] text-stone-500">Encrypted in client vault</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-caramel space-y-1">
                <span className="text-[10px] font-mono uppercase text-caramel-dark font-bold">Step 2: Active</span>
                <p className="font-bold text-charcoal-900">Principal Review</p>
                <p className="text-[11px] text-stone-500">UTSA MAcc diagnosis</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1 opacity-70">
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold">Step 3: Pending</span>
                <p className="font-bold text-charcoal-900">Written Estimate</p>
                <p className="text-[11px] text-stone-500">Itemized calculation</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1 opacity-70">
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold">Step 4: Pending</span>
                <p className="font-bold text-charcoal-900">Electronic E-File</p>
                <p className="text-[11px] text-stone-500">IRS instant confirmation</p>
              </div>
            </div>
          </div>

          {/* Secure Document Uploader */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-serif text-xl text-charcoal-900">Upload Confidential Documents</h4>
                <p className="text-xs text-stone-500">Supported formats: PDF, PNG, JPG, XLSX (Max 50MB per file)</p>
              </div>
            </div>

            {uploadSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>File uploaded and encrypted in vault successfully.</span>
              </div>
            )}

            <label className="border-2 border-dashed border-stone-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-caramel hover:bg-linen-100/50 transition-all">
              <UploadCloud className="w-10 h-10 text-stone-400 mb-2" />
              <span className="font-serif text-base text-charcoal-900 font-bold">Click to select files or drag and drop</span>
              <span className="text-xs text-stone-500 mt-1">W-2s, 1099s, bank reconciliations, property receipts</span>
              <input type="file" onChange={handleSimulatedUpload} className="hidden" />
            </label>

            {/* Uploaded Files Table */}
            <div className="space-y-3">
              <h5 className="font-serif text-base text-charcoal-900">Uploaded Documents in Vault</h5>
              <div className="space-y-2 text-xs">
                {uploadedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-linen-100 border border-stone-200">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-caramel-dark" />
                      <div>
                        <span className="font-bold text-charcoal-900 block">{file.name}</span>
                        <span className="text-[11px] text-stone-400">{file.size} • {file.date}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                      {file.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Phase 3 Notice */}
          <div className="p-4 rounded-2xl bg-linen-200/60 border border-stone-300 text-xs text-stone-600 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-caramel-dark shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal-900">Phase 3 Ready Architecture</p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                In Phase 3, this vault will connect to our persistent cloud database and encrypted storage backend for automated notifications and live status synchronization.
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
