import React from 'react';
import { Award, ShieldAlert, BookOpen, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800">
      
      {/* Upper Footer section with grid links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Column 1: Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-heading font-bold text-lg">
                AG
              </div>
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight">
                Ace<span className="text-blue-400">TheGrade</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              AceTheGrade is India's leading designer of premium student study support kits, memory formula maps, and subject-wise cheat sheets. Empowering students of Classes 9 to 12 with quick recall, structure, and academic confidence since 2021.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Classes Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-200">Study Kits</h4>
            <ul className="text-xs sm:text-sm text-slate-400 space-y-2.5 font-sans">
              <li>
                <a href="#class-9" className="hover:text-blue-400 transition-colors">Class 9th Study Support</a>
              </li>
              <li>
                <a href="#class-10" className="hover:text-blue-400 transition-colors">Class 10th Board Booster</a>
              </li>
              <li>
                <a href="#class-11" className="hover:text-blue-400 transition-colors">Class 11th Course Bundle</a>
              </li>
              <li>
                <a href="#class-12" className="hover:text-blue-400 transition-colors">Class 12th Board Revision</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics & Corporate Help */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-200">Helpline Office</h4>
            <ul className="text-xs sm:text-sm text-slate-400 space-y-2 font-sans leading-relaxed">
              <li>
                <strong>HQ Address:</strong> AceTheGrade Learning Private Ltd, Sector 62, Noida, Uttar Pradesh, 201301.
              </li>
              <li>
                <strong>Support Desk:</strong>{' '}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=acethegrade77@gmail.com&su=${encodeURIComponent('AceTheGrade Support Desk Inquiry')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline transition-colors"
                >
                  acethegrade77@gmail.com
                </a>
              </li>
              <li>
                <strong>Hours:</strong> Mon – Sat: 9:00 AM – 7:00 PM IST
              </li>
              <li>
                <span className="inline-block bg-slate-800 text-[10px] text-blue-400 font-bold px-2 py-0.5 rounded border border-slate-700">
                  Approved Delivery PIN codes listed: 19,000+
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Board Disclaimer (Essential and Professional) */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-start gap-4 text-[10.5px] leading-relaxed text-slate-500">
          <ShieldAlert className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong>Indian Boards Legal Disclaimer:</strong> AceTheGrade is an independent secondary education learning research team. All study materials, summaries, blueprints, and quick-recall diagrams are created as complementary pedagogical supports for students practicing for board examinations. All product names, logos, registrations, and brands are property of their respective owners. CBSE, CISCE, ICSE, ISC, and respective State Board registrations are used solely for identification and syllabus compatibility index representation.
          </p>
        </div>

        {/* Lower Banner */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <p>© {currentYear} AceTheGrade Learning Private Ltd. All academic rights reserved worldwide.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline transition-all">Privacy Policy</a>
            <a href="#" className="hover:underline transition-all">Terms of Service</a>
            <a href="#" className="hover:underline transition-all">Refund Guarantee</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
