import React from 'react';
import { Star, Quote, ArrowRight, Award } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-16 sm:py-24 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 font-heading text-xs font-bold text-blue-600 border border-slate-200">
            <Award className="h-4.5 w-4.5 text-blue-600" />
            <span>Hear From High Performers</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Success Stories from CBSE & NCERT Aspirants
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed font-sans">
            Read how students across India used AceTheGrade Ultimate Cheat Sheets to maximize their memory recall, structure high-scoring board answers, and secure outstanding grades.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between rounded-2xl border-l-4 border-l-blue-600 border-y border-r border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Rating Stars & Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-slate-200 shrink-0" />
                </div>

                {/* Score Big Indicator */}
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-blue-600 font-heading">{t.score}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-1.5 py-0.5 rounded font-heading border border-slate-150">
                    {t.board}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 italic leading-relaxed font-sans">
                  "{t.text}"
                </p>
              </div>

              {/* Topper Details */}
              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 font-heading text-sm font-bold text-blue-700 border border-blue-105">
                  {t.name.split(' ').map(part => part[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-heading">{t.name}</h4>
                  <p className="text-[10px] text-slate-500 font-sans">{t.role} • {t.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic conversion nudge box */}
        <div className="mt-12 rounded-2xl bg-[#0F172A] p-6 sm:p-10 text-white relative overflow-hidden shadow-lg border border-slate-800">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          
          {/* Decorative design pillars */}
          <div className="hidden md:flex gap-2 items-end absolute bottom-0 right-10 opacity-10 pointer-events-none">
            <div className="w-12 h-16 bg-white/5 rounded-t-lg border-t border-x border-white/20"></div>
            <div className="w-12 h-24 bg-white/10 rounded-t-lg border-t border-x border-white/30"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-lg sm:text-2xl font-extrabold tracking-tight">Are you aiming for 95%+ in your semester or final boards?</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-350 text-slate-300 font-sans max-w-2xl leading-relaxed">
                Get our expert-designed syllabus blueprints, delivered straight to your email after a secure online payment, backed by our 100% satisfaction refund guarantees.
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('hero');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full bg-blue-600 hover:bg-[#2563EB] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-blue-950/20 flex items-center gap-1.5 shrink-0 transition-transform active:translate-y-0.5 hover:scale-105 transform cursor-pointer"
            >
              <span>Get Your Support Pack Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
