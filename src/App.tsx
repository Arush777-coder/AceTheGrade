import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClassSection from './components/ClassSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import Biology9Viewer from './components/Biology9Viewer';
import Physics9Viewer from './components/Physics9Viewer';
import Chemistry9Viewer from './components/Chemistry9Viewer';
import { studyKits } from './data';
import { Award, ShieldCheck, Zap, Star, Sparkles } from 'lucide-react';

export default function App() {
  // Modal toggle states
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isBiologyViewerOpen, setIsBiologyViewerOpen] = useState(false);
  const [isPhysicsViewerOpen, setIsPhysicsViewerOpen] = useState(false);
  const [isChemistryViewerOpen, setIsChemistryViewerOpen] = useState(false);
  const [preselectedKitId, setPreselectedKitId] = useState<string | undefined>(undefined);

  // Trigger order modal with optional kit preselected
  const handleOpenOrder = (kitId?: string) => {
    setPreselectedKitId(kitId);
    setIsOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/30 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Sticky Navigation Header */}
      <Header
        onOrderClick={() => handleOpenOrder()}
      />

      {/* 2. High-Impact Hero Section */}
      <Hero
        onOrderClick={() => handleOpenOrder()}
      />

      {/* 3. Conversion-focused Trust/Stats Grid Section */}
      <section className="bg-white py-12 border-y border-slate-100 shadow-sm relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Star className="h-6 w-6 text-blue-600 fill-blue-600" />
              </div>
              <div>
                <dt className="font-heading text-base font-extrabold text-slate-900 leading-tight">4.9/5 Rating</dt>
                <dd className="text-xs text-slate-500 font-medium">By 45,000+ Students & Parents</dd>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-650">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <dt className="font-heading text-base font-extrabold text-slate-900 leading-tight">Senior Examiners</dt>
                <dd className="text-xs text-slate-500 font-medium">Drafted by 15+ Yrs Exp Teachers</dd>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <dt className="font-heading text-base font-extrabold text-slate-900 leading-tight">Instant PDF Download</dt>
                <dd className="text-xs text-slate-500 font-medium">Receive secure files instantly online</dd>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Course Streams & Class Kits Navigation */}
      <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Class 9th Section — Detailed Content */}
        <section id="class-9" className="scroll-mt-20">
          <ClassSection
            classNumber="9"
            title="Class 9th Academic Track"
            subtitle="Secure early board concepts. Comprehensive visual cheat sheets covering all 12 core subjects with premium dual-color diagrams."
            onOrderClick={handleOpenOrder}
            kits={studyKits}
          />
        </section>

        {/* Class 10th Section — matching design system */}
        <section id="class-10" className="scroll-mt-20">
          <ClassSection
            classNumber="10"
            title="Class 10th Board Booster Series"
            subtitle="Double-verified by board examiners. Designed specifically to practice previous 10-year patterns, solve NCERT formulas, and build writing layouts."
            onOrderClick={handleOpenOrder}
            kits={studyKits}
          />
        </section>

        {/* Class 11th Section — matching design system */}
        <section id="class-11" className="scroll-mt-20">
          <ClassSection
            classNumber="11"
            title="Class 11th Core Prep Guide"
            subtitle="Lay down key secondary syllabus concepts for Science (PCM/PCB) or Commerce ledger shortcuts. Stay ahead in standard exams."
            onOrderClick={handleOpenOrder}
            kits={studyKits}
          />
        </section>

        {/* Class 12th Section — matching design system */}
        <section id="class-12" className="scroll-mt-20">
          <ClassSection
            classNumber="12"
            title="Class 12th Ultimate Board Buster"
            subtitle="The ultimate revision bundle. Features high-scoring templates, organic mechanism roadmaps, and full chapter summary maps in beautifully detailed digital PDF guides."
            onOrderClick={handleOpenOrder}
            kits={studyKits}
          />
        </section>

      </main>

      {/* 4.5 Premium Customized Study Kit Promotional Section */}
      <section id="customized-kit-promo" className="py-16 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-2xl p-8 md:p-12 lg:p-16 border border-slate-800">
            {/* Background ambient glows */}
            <div className="absolute right-[-100px] top-[-100px] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-[-100px] bottom-[-100px] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
              {/* Content Description */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-3 py-1 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-3 w-3 text-amber-400 animate-pulse" />
                  100% Personalization Available
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Need a Study Kit Tailored to Your Specific School Textbooks?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Every school uses different publishers and textbook editions. Don't worry! Tell us the exact books, chapters, and topics you need help with. Our expert authors will craft a personalized study kit with formula maps, step-by-step reaction flows, and examiner cheats custom-built just for you.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mt-0.5 text-xs font-bold">1</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Specific Book Mapping</h4>
                      <p className="text-xs text-slate-400">Customized precisely for NCERT editions, school publishers, or state modules.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mt-0.5 text-xs font-bold">2</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Personalized Focus</h4>
                      <p className="text-xs text-slate-400 font-medium">Get priority summaries for your weakest chapters or selected topics.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-950 p-6 md:p-8 text-center shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 rounded-bl-xl bg-blue-600 px-3 py-1 font-heading text-[10px] font-extrabold text-white uppercase tracking-wider">
                    Super Value
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">Customized Study Kit</h3>
                  <p className="text-slate-400 text-xs mt-1">Full Class Coverage & Chapter Mapping</p>
                  
                  <div className="my-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-extrabold text-white">₹999</span>
                      <span className="text-sm font-medium text-slate-500 line-through">₹1,999</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded mt-2 inline-block">
                      Flat Rate - No Hidden Charges
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenOrder('custom-kit-10')}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-105 transform transition-all active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>Get Your Customized Kit</span>
                  </button>
                  <p className="text-[10px] text-slate-500 mt-3 font-medium">
                    100% Satisfactory or Refund Policy Applies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Topper Success Testimonials Bento */}
      <Testimonials />

      {/* 6. High-Trust FAQ Section */}
      <FAQ />

      {/* 7. Footer containing crucial board disclaimers */}
      <Footer />

      {/* 8. Slides & Overlays */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => {
          setIsOrderOpen(false);
          setPreselectedKitId(undefined); // Clear preselects
        }}
        kits={studyKits}
        preselectedKitId={preselectedKitId}
        onOpenBiologyViewer={() => setIsBiologyViewerOpen(true)}
        onOpenPhysicsViewer={() => setIsPhysicsViewerOpen(true)}
        onOpenChemistryViewer={() => setIsChemistryViewerOpen(true)}
      />

      {isBiologyViewerOpen && (
        <Biology9Viewer onClose={() => setIsBiologyViewerOpen(false)} />
      )}

      {isPhysicsViewerOpen && (
        <Physics9Viewer onClose={() => setIsPhysicsViewerOpen(false)} />
      )}

      {isChemistryViewerOpen && (
        <Chemistry9Viewer onClose={() => setIsChemistryViewerOpen(false)} />
      )}

    </div>
  );
}

