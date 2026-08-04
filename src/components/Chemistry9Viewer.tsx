import React, { useState, useMemo } from 'react';
import { 
  X, BookOpen, ChevronLeft, ChevronRight, Search, 
  Printer, Sparkles, HelpCircle, Eye, EyeOff, CheckCircle2, Bookmark, Info
} from 'lucide-react';
import { chemistry9Pages, ChemistryPage } from '../data/chemistry9Data';

interface Chemistry9ViewerProps {
  onClose: () => void;
}

export default function Chemistry9Viewer({ onClose }: Chemistry9ViewerProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({});
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  // Jump to specific page
  const handlePageJump = (num: number) => {
    if (num >= 1 && num <= 16) {
      setCurrentPage(num);
    }
  };

  // Toggle bookmark
  const toggleBookmark = (num: number) => {
    if (bookmarks.includes(num)) {
      setBookmarks(bookmarks.filter(b => b !== num));
    } else {
      setBookmarks([...bookmarks, num]);
    }
  };

  // Toggle single answer visibility
  const toggleSolution = (problemIndex: number) => {
    setShowSolutions(prev => ({
      ...prev,
      [problemIndex]: !prev[problemIndex]
    }));
  };

  // Group pages by Chapter for Table of Contents
  const chapters = useMemo(() => {
    const map: Record<string, { start: number; pages: { num: number; title: string }[] }> = {};
    chemistry9Pages.forEach(p => {
      if (!map[p.chapter]) {
        map[p.chapter] = { start: p.pageNumber, pages: [] };
      }
      map[p.chapter].pages.push({ num: p.pageNumber, title: p.title });
    });
    return Object.entries(map).map(([name, data]) => ({
      name,
      start: data.start,
      pages: data.pages
    }));
  }, []);

  // Search through all pages
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    
    return chemistry9Pages.filter(p => {
      const pageTitle = p.title.toLowerCase();
      const chapterTitle = p.chapter.toLowerCase();
      let bodyText = '';

      if (p.type === 'key-concepts') {
        bodyText += p.content.intro + ' ' + p.content.concepts.map((c: any) => c.heading + ' ' + c.body).join(' ');
      } else if (p.type === 'table') {
        bodyText += p.content.headers.join(' ') + ' ' + p.content.rows.map((r: any) => r.feature + ' ' + r.plant + ' ' + r.animal).join(' ');
      } else if (p.type === 'traps') {
        bodyText += p.content.traps.map((t: any) => t.topic + ' ' + t.trap + ' ' + t.correction).join(' ');
      } else if (p.type === 'problems') {
        bodyText += p.content.problems.map((pr: any) => pr.q + ' ' + pr.ans).join(' ');
      }

      return pageTitle.includes(query) || chapterTitle.includes(query) || bodyText.toLowerCase().includes(query);
    });
  }, [searchQuery]);

  // Current page object
  const pageObj = useMemo(() => {
    return chemistry9Pages.find(p => p.pageNumber === currentPage) || chemistry9Pages[0];
  }, [currentPage]);

  // Trigger browser printing optimized for PDF export
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900 text-slate-100 font-sans print:bg-white print:text-black">
      
      {/* Top Bar (Header) - Hidden in Print */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800 bg-slate-950 px-6 print:hidden">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-teal-500/10 p-2 text-teal-400 border border-teal-500/20">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-heading text-base font-bold text-white flex items-center gap-1.5 leading-none">
              Class 9th Chemistry Cheat Sheet
              <span className="rounded-full bg-teal-500/15 px-2 py-0.5 text-[10px] font-extrabold text-teal-400 border border-teal-500/30">
                OFFICIAL ACCESS
              </span>
            </h1>
            <p className="text-xs text-slate-400 font-medium mt-1">Interactive Study Kit & Chemical Formula Guide</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-full bg-teal-600 hover:bg-teal-500 px-4.5 py-2 font-heading text-xs font-bold text-white shadow-lg shadow-teal-500/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>Print or Export PDF</span>
          </button>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            title="Close Book Viewer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex flex-1 overflow-hidden print:overflow-visible print:block">
        
        {/* Left Hand: Sidebar - Table of Contents & Search - Hidden in Print */}
        <aside className="w-80 shrink-0 border-r border-slate-800 bg-slate-950 flex flex-col print:hidden">
          {/* Search bar segment */}
          <div className="p-4 border-b border-slate-800">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cheat sheets..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            </div>
            {searchQuery && (
              <p className="text-[10px] text-slate-400 mt-2 font-medium">
                Found {searchResults.length} matching pages
              </p>
            )}
          </div>

          {/* Results list or Table of Contents */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {searchQuery ? (
              // Search Results
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Search Results</h4>
                {searchResults.length > 0 ? (
                  searchResults.map(p => (
                    <button
                      key={p.pageNumber}
                      onClick={() => {
                        setCurrentPage(p.pageNumber);
                        setSearchQuery('');
                      }}
                      className="w-full text-left p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-2.5 group"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-teal-500/10 text-teal-400 text-[10px] font-bold group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        {p.pageNumber}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{p.title}</p>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{p.chapter}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 italic py-2">No matching concepts found.</p>
                )}
              </div>
            ) : (
              // Table of Contents
              <div className="space-y-4">
                {/* Bookmarks Quick Link */}
                {bookmarks.length > 0 && (
                  <div className="space-y-1.5 border-b border-slate-800 pb-3">
                    <h4 className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Bookmark className="h-3 w-3 fill-amber-400" />
                      Bookmarked Pages
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {bookmarks.map(num => (
                        <button
                          key={num}
                          onClick={() => handlePageJump(num)}
                          className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                            currentPage === num 
                              ? 'bg-amber-400 text-slate-950' 
                              : 'bg-slate-900 text-amber-300 border border-amber-400/20 hover:border-amber-400/40'
                          }`}
                        >
                          Page {num}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chapters */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Table of Contents</h4>
                  {chapters.map(ch => (
                    <div key={ch.name} className="space-y-1">
                      <h5 className="text-xs font-bold text-white/95 leading-tight">{ch.name}</h5>
                      <div className="pl-2.5 space-y-0.5 border-l border-slate-800 mt-1.5">
                        {ch.pages.map(p => (
                          <button
                            key={p.num}
                            onClick={() => handlePageJump(p.num)}
                            className={`w-full text-left py-1 px-2 rounded text-[11px] font-medium transition-all block truncate ${
                              currentPage === p.num
                                ? 'bg-teal-500/10 text-teal-400 border-l-2 border-teal-500 pl-1.5 font-bold'
                                : 'text-slate-400 hover:text-white hover:bg-slate-900'
                            }`}
                          >
                            <span className="inline-block w-4 text-slate-500 font-bold">{p.num}</span>
                            {p.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right Hand: Interactive Reader Content Frame */}
        <main className="flex-1 bg-slate-900 overflow-y-auto p-6 md:p-10 flex flex-col items-center justify-between print:bg-white print:p-0 print:block print:overflow-visible">
          
          {/* Floating Bookmark & Print Controls - Hidden in Print */}
          <div className="w-full max-w-3xl flex justify-between items-center mb-4 text-xs text-slate-400 print:hidden">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              Viewing page <strong className="text-white">{currentPage}</strong> of 16
            </span>

            <button
              onClick={() => toggleBookmark(currentPage)}
              className={`flex items-center gap-1.5 font-bold transition-colors cursor-pointer ${
                bookmarks.includes(currentPage) ? 'text-amber-400 hover:text-amber-500' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${bookmarks.includes(currentPage) ? 'fill-amber-400' : ''}`} />
              <span>{bookmarks.includes(currentPage) ? 'Page Bookmarked' : 'Bookmark Page'}</span>
            </button>
          </div>

          {/* Interactive Page Container */}
          <div className="w-full max-w-3xl bg-slate-950 rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-800 min-h-[640px] flex flex-col justify-between relative print:bg-white print:text-black print:border-none print:shadow-none print:p-0 print:min-h-0 print:block">
            
            {/* Top Chapter Metadata Indicator */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 print:border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold text-teal-400 tracking-wider uppercase font-mono">
                  {pageObj.chapter.split(":")[0]}
                </span>
                <span className="text-slate-700 font-bold">•</span>
                <span className="text-xs font-bold text-slate-300 print:text-slate-650">
                  {pageObj.chapter.split(":")[1]?.trim()}
                </span>
              </div>
              <span className="rounded-full bg-slate-900 px-3 py-1 font-mono text-[10px] font-bold text-slate-400 border border-slate-800 print:border-slate-200 print:bg-slate-50">
                Page {pageObj.pageNumber}
              </span>
            </div>

            {/* Page Title Header */}
            <div className="my-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight print:text-black">
                {pageObj.title}
              </h2>
              {pageObj.subtitle && (
                <p className="text-slate-400 text-sm mt-1.5 italic font-medium print:text-slate-600">
                  {pageObj.subtitle}
                </p>
              )}
            </div>

            {/* Page Body Custom Renders based on page template type */}
            <div className="flex-1 my-2 print:my-4">
              
              {/* Type 1: Key Concepts */}
              {pageObj.type === 'key-concepts' && (
                <div className="space-y-6">
                  {pageObj.content.intro && (
                    <p className="text-slate-300 text-sm leading-relaxed print:text-slate-800 font-sans">
                      {pageObj.content.intro}
                    </p>
                  )}
                  <div className="grid grid-cols-1 gap-4.5">
                    {pageObj.content.concepts.map((c: any, idx: number) => (
                      <div key={idx} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 print:bg-slate-50 print:border-slate-100">
                        <h4 className="font-heading text-sm font-extrabold text-teal-400 flex items-center gap-2 print:text-teal-700">
                          <span className="flex h-5 w-5 items-center justify-center rounded bg-teal-500/10 text-teal-400 text-[10px] font-extrabold">
                            {idx + 1}
                          </span>
                          {c.heading}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed mt-2.5 pl-1.5 print:text-slate-700">
                          {c.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Type 2: Table */}
              {pageObj.type === 'table' && (
                <div className="space-y-4">
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/30 print:border-slate-200">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-slate-900 text-[11px] font-bold text-slate-300 uppercase border-b border-slate-800 print:bg-slate-100 print:text-black">
                        <tr>
                          {pageObj.content.headers.map((h: string, idx: number) => (
                            <th key={idx} className="px-4 py-3">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 print:divide-slate-200 text-slate-300 print:text-black">
                        {pageObj.content.rows.map((row: any, idx: number) => (
                          <tr key={idx} className="hover:bg-slate-900/20">
                            <td className="px-4 py-3.5 font-bold text-white print:text-black">{row.feature}</td>
                            <td className="px-4 py-3.5 font-mono text-teal-300 print:text-teal-900 font-bold">{row.plant}</td>
                            <td className="px-4 py-3.5 text-slate-400 print:text-slate-700 leading-relaxed">{row.animal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Type 3: Traps */}
              {pageObj.type === 'traps' && (
                <div className="space-y-4">
                  <p className="text-slate-300 text-xs italic flex items-center gap-1.5 mb-2 print:text-slate-600">
                    <Info className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Watch out for these extremely common examiner traps and CBSE marking criteria.</span>
                  </p>
                  <div className="space-y-4">
                    {pageObj.content.traps.map((t: any, idx: number) => (
                      <div key={idx} className="border border-red-500/20 rounded-xl overflow-hidden">
                        <div className="bg-red-500/5 px-4 py-2.5 border-b border-red-500/10 flex justify-between items-center print:bg-slate-50">
                          <span className="text-xs font-bold text-red-400 print:text-red-700 uppercase tracking-wider">{t.topic}</span>
                          <span className="text-[10px] font-extrabold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full uppercase">Trap {idx + 1}</span>
                        </div>
                        <div className="p-4 bg-slate-900/20 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Common Student Mistake</span>
                            <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed print:text-slate-800">{t.trap}</p>
                          </div>
                          <div className="border-t md:border-t-0 md:border-l border-slate-800/80 md:pl-4 pt-3 md:pt-0">
                            <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider block">Correct Conceptual Response</span>
                            <p className="text-xs text-emerald-400/90 font-medium mt-1 leading-relaxed print:text-emerald-700">{t.correction}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Type 4: Solved Problems */}
              {pageObj.type === 'problems' && (
                <div className="space-y-4">
                  <div className="space-y-4 print:space-y-6">
                    {pageObj.content.problems.map((prob: any, idx: number) => {
                      const uid = currentPage * 100 + prob.num;
                      const isOpen = showSolutions[uid];
                      return (
                        <div key={prob.num} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/10 print:border-slate-200">
                          {/* Header bar */}
                          <div className="bg-slate-900/60 px-4 py-3 border-b border-slate-850 flex items-center justify-between print:bg-slate-50">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-teal-400 print:text-teal-700">Problem {prob.num}</span>
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                              <span className="rounded bg-slate-800 px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">{prob.type || 'numerical'}</span>
                            </div>

                            <button
                              onClick={() => toggleSolution(uid)}
                              className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-400 hover:text-teal-350 cursor-pointer print:hidden"
                            >
                              {isOpen ? (
                                <>
                                  <EyeOff className="h-3 w-3" />
                                  <span>Hide Solution</span>
                                </>
                              ) : (
                                <>
                                  <Eye className="h-3 w-3" />
                                  <span>Show Solution</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Problem Question */}
                          <div className="p-4">
                            <p className="text-xs text-white font-bold leading-relaxed print:text-black">
                              {prob.q}
                            </p>

                            {/* Solution section (collapsible in interactive, always shown in print) */}
                            {(isOpen || window.location.search.includes('print')) ? (
                              <div className="mt-3.5 p-3.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-xs text-slate-350 leading-relaxed print:bg-white print:border-none print:p-0 print:mt-2">
                                <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block mb-1 print:text-emerald-700">Detailed Solved Explanation</span>
                                <p className="print:text-slate-800 leading-relaxed">{prob.ans}</p>
                              </div>
                            ) : (
                              <button
                                onClick={() => toggleSolution(uid)}
                                className="mt-3 w-full bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-750 text-slate-400 hover:text-white py-2 px-3 text-center rounded-lg text-[10px] font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer print:hidden"
                              >
                                <Eye className="h-3 w-3" />
                                <span>Reveal Answer Key and Solver Steps</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Disclaimer Banner */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono print:border-slate-200">
              <span>ACETHEGRADE PREMIUM STUDY SUPPORT KITS</span>
              <span>© 2026 ACETHEGRADE CORP.</span>
            </div>

          </div>

          {/* Reader Pagination Controls - Hidden in Print */}
          <div className="w-full max-w-3xl flex items-center justify-between mt-6 print:hidden">
            <button
              onClick={() => handlePageJump(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 disabled:opacity-40 disabled:hover:bg-slate-950 disabled:hover:border-slate-800 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous Page</span>
            </button>

            {/* Middle Quick Dots Pagination */}
            <div className="hidden sm:flex items-center gap-1">
              {Array.from({ length: 16 }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  onClick={() => handlePageJump(num)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentPage === num ? 'w-5 bg-teal-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  title={`Go to page ${num}`}
                />
              ))}
            </div>

            <button
              onClick={() => handlePageJump(currentPage + 1)}
              disabled={currentPage === 16}
              className="flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 disabled:opacity-40 disabled:hover:bg-slate-950 disabled:hover:border-slate-800 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <span>Next Page</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}
