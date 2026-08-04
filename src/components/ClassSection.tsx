import React, { useState } from 'react';
import { BookOpen, HelpCircle, Shield, Sparkles, Star, ChevronDown, CheckSquare, Layers, X, Clock } from 'lucide-react';
import { Subject, StudyKit } from '../types';
import DynamicIcon from './DynamicIcon';
import KitCard from './KitCard';

interface ClassSectionProps {
  classNumber: '9' | '10' | '11' | '12';
  title: string;
  subtitle: string;
  onOrderClick: (kitId?: string) => void;
  kits: StudyKit[];
}

export default function ClassSection({
  classNumber,
  title,
  subtitle,
  onOrderClick,
  kits
 }: ClassSectionProps) {
  // Topic Detail interactive popover modal state
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const isSectionComingSoon = classNumber === '10' || classNumber === '11' || classNumber === '12';

  // Filters kits for this class
  const classKits = kits.filter(k => k.classValue === classNumber);
  const bundleKits = classKits.filter(k => !k.id.startsWith('subject-'));
  const subjectKits = classKits.filter(k => k.id.startsWith('subject-'));

  return (
    <div className="py-16 sm:py-20 border-t border-slate-100 last:border-b-0">
      
      {/* Decorative Ribbon tag */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-heading text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
              Academic Track: Class {classNumber}th Support
            </span>
            {isSectionComingSoon && (
              <span className="bg-amber-500 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Coming Soon
              </span>
            )}
          </div>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-slate-900 tracking-tight flex items-center flex-wrap gap-3">
            <span>{title}</span>
            {isSectionComingSoon && (
              <span className="bg-amber-100 text-amber-800 border border-amber-300 font-extrabold text-xs px-2.5 py-1 rounded-full uppercase tracking-widest">
                Coming Soon
              </span>
            )}
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-sans max-w-xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* CLASSIFIED SPECIFIC LOGIC: Class 9th & 10th have specific Subjects grid + Ultimate Cheat Sheets area */}
      {classNumber === '9' || classNumber === '10' ? (
        <div className="space-y-12">
          
          {/* SUBSECTION 1: Subjects Cheat Sheets */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-blue-600" />
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Subjects Cheat Sheets
                </h3>
              </div>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 font-heading text-[10px] font-extrabold text-blue-700 uppercase tracking-widest">
                {subjectKits.length} Subjects Customized for NCERT / CBSE
              </span>
            </div>
 
            {/* Subject-wise cheat sheet cards grid (4-column on xl, 3-column on lg) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjectKits.map((kit) => (
                <div key={kit.id} className="flex flex-col">
                  <KitCard
                    kit={kit}
                    onOrderClick={() => onOrderClick(kit.id)}
                  />
                </div>
              ))}
            </div>
          </div>
 
          {/* SUBSECTION 2: Ultimate Cheat Sheets */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-blue-600" />
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Ultimate Cheat Sheets
              </h3>
            </div>
 
            {/* Cheat Sheet Pack Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bundleKits.map((kit) => (
                <div key={kit.id} className="flex flex-col">
                  <KitCard
                    kit={kit}
                    onOrderClick={() => onOrderClick(kit.id)}
                  />
                </div>
              ))}
            </div>
          </div>
 
        </div>
      ) : (classNumber === '11' || classNumber === '12') ? (
        /* SPECIAL CLASS 11TH & 12TH LOGIC: Render elegant "Streams We Cover" custom bento */
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-blue-600" />
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Streams We Cover
              </h3>
            </div>
 
            {/* Stream Options Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classKits.map((kit) => (
                <div key={kit.id} className="flex flex-col">
                  <KitCard
                    kit={kit}
                    onOrderClick={() => onOrderClick(kit.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* Interactive Subject details popover modal (no DB, fully responsive) */}
      {selectedSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedSubject(null)} />
          <div className="relative transform overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all w-full max-w-md">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${selectedSubject.bgColor} ${selectedSubject.textColor}`}>
                  <DynamicIcon name={selectedSubject.iconName} className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-extrabold text-slate-900">{selectedSubject.name} Cover Card</h4>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-heading font-extrabold">{selectedSubject.category} Bundle</span>
                </div>
              </div>
              <button onClick={() => setSelectedSubject(null)} className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mock Subject outline detail topics */}
            <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed font-sans">
              <p>
                Our <strong>Class 9th Ultimate Pack</strong> contains detailed, visual, dual-color cards covering following high-yield segments for <strong className="text-slate-800">{selectedSubject.name}</strong>:
              </p>
              
              <ul className="space-y-2 border-y border-slate-100 py-3 font-medium text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Interactive short theories for all chapters</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Important board questions highlights solved</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Formula compilations / grammar rules charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Visual diagrams and flowcharts for revision speed</span>
                </li>
              </ul>

              {/* Buy Option Callout */}
              <div className="rounded-lg bg-blue-50 p-3 text-[11px] text-blue-800 font-semibold flex items-center justify-between">
                <span>Get complete cheat sheets bundle today!</span>
                <button
                  onClick={() => {
                    setSelectedSubject(null);
                    onOrderClick();
                  }}
                  className="font-bold underline text-blue-700 hover:text-blue-900 cursor-pointer"
                >
                  Buy This Kit →
                </button>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setSelectedSubject(null)}
                className="rounded-lg bg-slate-100 hover:bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                Close Summary
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
