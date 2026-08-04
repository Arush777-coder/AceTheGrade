import React from 'react';
import { ShieldCheck, Zap, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onOrderClick: (kitId?: string) => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#1E3A8A] text-white pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-36">
      {/* Absolute Geometric Ornaments */}
      <div className="absolute right-[-20px] top-[-20px] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 translate-x-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Decorative White Pillar Outlines of Geometric Balance */}
      <div className="hidden lg:flex gap-4 items-end absolute bottom-8 right-[5%] opacity-15 pointer-events-none">
        <div className="w-24 h-32 bg-white/5 rounded-t-xl border-t border-x border-white/20"></div>
        <div className="w-24 h-40 bg-white/10 rounded-t-xl border-t border-x border-white/30"></div>
        <div className="w-24 h-24 bg-white/5 rounded-t-xl border-t border-x border-white/20"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10">
          
          {/* Animated Brand Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 border border-white/10 text-blue-300 text-xs font-bold tracking-tight mb-6">
            <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
            <span>Premium Study Support Platform for Indian Students</span>
          </div>

          {/* Brand Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Master Your Curriculum with India's <span className="text-blue-400 underline decoration-2 underline-offset-4">Premium Result-Oriented</span> Study Kits.
          </h1>

          {/* Rich Subtext */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Expertly crafted subject-wise study materials designed specifically for the Indian board system. High-trust, concise, and focused on your academic excellence.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Order My Study Kit Button */}
            <button
              id="hero-order-my-study-kit-btn"
              onClick={() => onOrderClick()}
              className="group relative flex items-center justify-center gap-2.5 rounded-full bg-blue-600 hover:bg-[#2563EB] px-8 py-3.5 font-heading text-sm font-bold text-white shadow-xl shadow-blue-500/10 hover:scale-105 transform transition-all active:scale-95 cursor-pointer"
            >
              <span>Order My Study Kit</span>
              <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Secondary Customized Kit Button */}
            <button
              id="hero-custom-kit-btn"
              onClick={() => onOrderClick('custom-kit-10')}
              className="group relative flex items-center justify-center gap-2 rounded-full bg-slate-800 hover:bg-slate-700 px-8 py-3.5 font-heading text-sm font-bold text-white border border-slate-700 hover:scale-105 transform transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
              <span>Get Your Customized Kit</span>
            </button>
          </div>

          {/* Micro Trust Seals */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full border-t border-white/10 pt-8 text-left">
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white font-heading">100% Board Aligned</h4>
                <p className="text-[10px] text-slate-400 font-medium">CBSE / NCERT mapped</p>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Zap className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white font-heading">Instant PDF Download</h4>
                <p className="text-[10px] text-slate-400 font-medium">Secure digital delivery</p>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <div className="flex shrink-0 mt-0.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-heading">4.9★ Smart Rating</h4>
                <p className="text-[10px] text-slate-400 font-medium">45k+ students nationwide</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
