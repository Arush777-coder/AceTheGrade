import React, { useEffect } from 'react';
import { X, Heart, ShieldCheck, Sparkles, BookOpen, Users, Target, HelpCircle } from 'lucide-react';

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionModal({ isOpen, onClose }: MissionModalProps) {
  // Let the user close the modal using Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-6">
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
          aria-hidden="true" 
          onClick={onClose} 
        />

        {/* Modal container */}
        <div className="relative inline-block transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-2xl align-middle">
          
          {/* Header */}
          <div className="border-b border-slate-100 bg-slate-50 px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900 leading-tight">Our Mission & Commitment</h3>
                <p className="text-xs text-slate-500 font-sans mt-0.5">Empowering Indian students with premium, budget-friendly learning support</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="px-6 py-6 space-y-6 max-h-[75vh] overflow-y-auto leading-relaxed text-slate-600 text-sm">
            
            {/* Mission Statements */}
            <div className="rounded-2xl bg-blue-50/50 p-5 border border-blue-100 space-y-3">
              <h4 className="font-heading text-slate-905 font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-blue-650 text-blue-600" />
                Democratizing Academic Excellence
              </h4>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                At <strong>AceTheGrade</strong>, we hold an unshakeable belief: 
                <strong> premier, high-quality board preparation should not be a luxury reserved only for those who can afford expensive coaching classes or premium offline tuitions.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Our core mission is to make advanced conceptual summaries, memory formula maps, and examiner cheat sheets accessible to every student across India—regardless of tier-level, geography, or family budget.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4">
              <h4 className="font-heading text-slate-900 font-bold text-xs uppercase tracking-wider">The Four Pillars of AceTheGrade</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Examiner Audited Quality */}
                <div className="rounded-xl border border-slate-100 p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h5 className="font-heading font-bold text-slate-900 text-[13px]">Examiner-Audited Quality</h5>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    All cheat sheets and maps are co-created with senior CBSE board graders of 15+ years experience. Every formula, keyword and schematic layout aligns precision-perfect with the latest official curriculum requirements.
                  </p>
                </div>

                {/* 2. Radical Affordability */}
                <div className="rounded-xl border border-slate-100 p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-650 text-indigo-600">
                      <Heart className="h-4.5 w-4.5" />
                    </div>
                    <h5 className="font-heading font-bold text-slate-900 text-[13px]">Extreme Financial Value</h5>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    We keep operating overheads incredibly small in order to deliver premium, ready-to-print digital files starting at just ₹149 per subject. No recurring subscriptions, no giant textbook costs, and zero fluff.
                  </p>
                </div>

                {/* 3. High-Density Memory Science */}
                <div className="rounded-xl border border-slate-100 p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
                      <BookOpen className="h-4.5 w-4.5" />
                    </div>
                    <h5 className="font-heading font-bold text-slate-900 text-[13px]">Visual Recall Engineering</h5>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Traditional heavy paragraphs trigger reading fatigue. Our visual dual-maps, layout templates, and chronological tables leverage spatial memory structure to help students master syllabus topics 3x faster than average.
                  </p>
                </div>

                {/* 4. Serving Class 9th through 12th */}
                <div className="rounded-xl border border-slate-100 p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <h5 className="font-heading font-bold text-slate-900 text-[13px]">Dedicated Pupil Support</h5>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Over 54,000+ happy young scholars trust our platform. Our prompt customer service desk provides immediate manual WhatsApp guides if digital links are misplaced.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Promise info */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
              <HelpCircle className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-heading font-bold text-slate-800 text-xs uppercase tracking-wider mb-1">Our Pledge to India's Students</h5>
                <p className="text-xs text-slate-500 leading-normal">
                  We promise to never hike prices beyond reasonable bounds, never hide key formulas behind premium subscription gates, and continue updating our digital material archives in lockstep with national education policies year after year. Let's make learning organized, and let's ace those grades together!
                </p>
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="border-t border-slate-150 border-slate-100 px-6 py-4.5 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-[11px] text-slate-400 font-mono">© 2021-2026 AceTheGrade Team • Education First</span>
            <button
              onClick={onClose}
              className="inline-flex justify-center rounded-full bg-slate-900 hover:bg-slate-850 hover:bg-slate-800 px-5 py-2.5 text-xs font-bold text-white transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
