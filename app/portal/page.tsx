"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lock,
  UploadCloud,
  ArrowRight,
  CheckCircle2,
  FileText,
  Eye,
  EyeOff,
} from "lucide-react";

export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: "2025_W2_Statement.pdf",
      size: "2.4 MB",
      date: "Oct 24, 2026",
      status: "Received",
    },
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
          status: "Encrypted",
        },
      ]);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 4000);
    }
  };

  return (
    <div className="bg-white py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#F8F7F4] border border-slate-200 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6 text-slate-900" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Client Portal
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-md mx-auto">
            Securely upload and review your tax and bookkeeping documents.
          </p>
        </div>

        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-[#F8F7F4] rounded-2xl p-8 border border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center">
              Sign In
            </h2>

            <form onSubmit={handleLogin} className="space-y-4 text-sm sm:text-base">
              <div>
                <label className="block text-slate-800 font-semibold mb-1.5">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1.5">
                  Portal Passcode
                </label>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-800"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-caramel py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2"
              >
                <span>Sign In to Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-sm text-center text-slate-600 pt-2 border-t border-slate-200">
              Need portal access?{" "}
              <Link
                href="/booking"
                className="text-slate-900 font-bold underline"
              >
                Book a consultation
              </Link>
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-slate-200 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Your Document Vault
                </h2>
                <p className="text-sm text-slate-600">256-Bit Encrypted Session</p>
              </div>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Sign Out
              </button>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Upload Documents
              </h3>

              {uploadSuccess && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-900 flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Document uploaded securely.</span>
                </div>
              )}

              <label className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-slate-900 hover:bg-slate-50 transition-colors">
                <UploadCloud className="w-10 h-10 text-slate-500 mb-2" />
                <span className="text-base font-bold text-slate-900">
                  Click to choose files
                </span>
                <span className="text-sm text-slate-600 mt-1">
                  PDF, JPG, PNG, or XLSX (W-2s, 1099s, statements)
                </span>
                <input
                  type="file"
                  onChange={handleSimulatedUpload}
                  className="hidden"
                />
              </label>

              <div className="space-y-2.5">
                {uploadedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#F8F7F4] border border-slate-200 text-sm sm:text-base"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-caramel-dark shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          {file.name}
                        </span>
                        <span className="text-xs text-slate-600">
                          {file.size} • {file.date}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {file.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
