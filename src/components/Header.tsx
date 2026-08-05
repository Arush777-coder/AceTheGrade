import React, { useState } from 'react';
import { Menu, X, Award, Mail, ShoppingCart, Sparkles } from 'lucide-react';
import MissionModal from './MissionModal';

interface HeaderProps {
  onOrderClick: (kitId?: string) => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#0F172A] text-white shadow-lg">
      {/* Premium Notification Banner */}
      <div className="bg-[#1E293B] px-4 py-1.5 text-center text-xs font-semibold text-white tracking-wide border-b border-slate-800">
        <div className="flex items-center justify-center gap-1.5 sm:gap-4 flex-wrap">
          <span className="flex items-center gap-1 font-heading">
            <Award className="h-3.5 w-3.5 text-blue-400" />
            Designed by Senior Board Examiners for CBSE / NCERT Curriculum
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=acethegrade77@gmail.com&su=${encodeURIComponent('AceTheGrade Customer Care Inquiry')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-heading text-slate-300 hover:text-blue-400 transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-blue-400" />
            <span>Customer Care: acethegrade77@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-lg text-white">
            A
          </div>
          <div>
            <span className="font-heading text-lg font-bold tracking-tight text-white block leading-none">
              Ace<span className="text-blue-400">TheGrade</span>
            </span>
            <span className="text-[9px] text-slate-400 font-mono tracking-wider uppercase block mt-1 font-medium">India's Study Support Kit</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollToSection('class-9')} className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer py-1 font-semibold">Class 9th</button>
          <button onClick={() => scrollToSection('class-10')} className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer py-1 font-semibold flex items-center gap-1">
            <span>Class 10th</span>
            <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded font-mono uppercase">Soon</span>
          </button>
          <button onClick={() => scrollToSection('class-11')} className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer py-1 font-semibold flex items-center gap-1">
            <span>Class 11th</span>
            <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded font-mono uppercase">Soon</span>
          </button>
          <button onClick={() => scrollToSection('class-12')} className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer py-1 font-semibold flex items-center gap-1">
            <span>Class 12th</span>
            <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded font-mono uppercase">Soon</span>
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer py-1 font-semibold">Success Stories</button>
          <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer py-1 font-semibold">FAQs</button>
          <button onClick={() => setIsMissionOpen(true)} className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer py-1 font-semibold">Our Mission</button>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="header-custom-cta-btn"
            onClick={() => onOrderClick('custom-kit-10')}
            className="flex items-center gap-1.5 rounded-full border border-slate-700 hover:border-slate-600 px-4 py-2 font-heading text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95 cursor-pointer bg-slate-800/50 hover:bg-slate-800"
          >
            <Sparkles className="h-3 w-3 text-amber-400 animate-pulse" />
            Customized Kit (₹999)
          </button>
          <button
            id="header-cta-btn"
            onClick={() => onOrderClick()}
            className="flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-[#2563EB] px-5 py-2 font-heading text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Order Study Kit
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-blue-400 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0F172A]" id="mobile-menu">
          <div className="space-y-1.5 px-3 py-4">
            <button
              onClick={() => scrollToSection('class-9')}
              className="block w-full text-left rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-blue-400"
            >
              Class 9th Study Support
            </button>
            <button
              onClick={() => scrollToSection('class-10')}
              className="block w-full text-left rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-blue-400"
            >
              Class 10th Board Booster
            </button>
            <button
              onClick={() => scrollToSection('class-11')}
              className="block w-full text-left rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-blue-400"
            >
              Class 11th Course Guides
            </button>
            <button
              onClick={() => scrollToSection('class-12')}
              className="block w-full text-left rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-blue-400"
            >
              Class 12th Board Revision
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-blue-400"
            >
              Topper Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-blue-400"
            >
              FAQs & Help
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsMissionOpen(true);
              }}
              className="block w-full text-left rounded-lg px-4 py-2.5 text-base font-semibold text-blue-400 hover:bg-slate-800 hover:text-blue-300"
            >
              Our Mission
            </button>

            {/* Mobile CTAs */}
            <div className="pt-4 border-t border-slate-800">
              <button
                id="mob-order-btn"
                onClick={() => {
                  setIsOpen(false);
                  onOrderClick();
                }}
                className="w-full rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white hover:bg-blue-500 transition-all shadow-md"
              >
                Buy Kits Now
              </button>
            </div>
            
            {/* Quick Contact Line */}
            <div className="pt-3 text-center">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=acethegrade77@gmail.com&su=${encodeURIComponent('AceTheGrade Customer Care Inquiry')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 font-medium hover:text-blue-400 underline transition-colors"
              >
                Customer Care: acethegrade77@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Our Mission Modal */}
      <MissionModal isOpen={isMissionOpen} onClose={() => setIsMissionOpen(false)} />
    </header>
  );
}
