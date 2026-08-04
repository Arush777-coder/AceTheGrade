import React, { useState, useMemo } from 'react';
import { 
  X, BookOpen, ChevronLeft, ChevronRight, Search, 
  Printer, Sparkles, HelpCircle, Eye, EyeOff, CheckCircle2, Bookmark, Info
} from 'lucide-react';
import { biology9Pages, BiologyPage } from '../data/biology9Data';

interface Biology9ViewerProps {
  onClose: () => void;
}

export default function Biology9Viewer({ onClose }: Biology9ViewerProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({});
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  // Jump to specific page
  const handlePageJump = (num: number) => {
    if (num >= 1 && num <= 41) {
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
    biology9Pages.forEach(p => {
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
    
    return biology9Pages.filter(p => {
      const pageTitle = p.title.toLowerCase();
      const chapterTitle = p.chapter.toLowerCase();
      let bodyText = '';

      if (p.type === 'key-concepts') {
        bodyText += p.content.intro + ' ' + p.content.concepts.map((c: any) => c.heading + ' ' + c.body).join(' ');
      } else if (p.type === 'boundaries') {
        bodyText += p.content.boundaries.map((b: any) => b.name + ' ' + b.description).join(' ') + ' ' +
                    p.content.transport.map((t: any) => t.name + ' ' + t.description).join(' ');
      } else if (p.type === 'division') {
        bodyText += p.content.organisation.map((o: any) => o.type + ' ' + o.features.join(' ')).join(' ') + ' ' +
                    p.content.division.map((d: any) => d.name + ' ' + d.description).join(' ');
      } else if (p.type === 'table') {
        bodyText += p.content.headers.join(' ') + ' ' + p.content.rows.map((r: any) => r.feature + ' ' + (r.desc || r.plant || r.animal)).join(' ');
      } else if (p.type === 'organelles') {
        bodyText += p.content.organelles.map((o: any) => o.name + ' ' + o.role + ' ' + o.desc).join(' ');
      } else if (p.type === 'traps') {
        bodyText += p.content.traps.map((t: any) => t.topic + ' ' + t.trap + ' ' + t.correction).join(' ');
      } else if (p.type === 'flowcharts') {
        bodyText += p.content.titleA + ' ' + (p.content.stepsA ? p.content.stepsA.map((s: any) => s.step + ' ' + s.desc).join(' ') : '') + ' ' +
                    (p.content.divisions ? p.content.divisions.map((d: any) => d.name + ' ' + d.flow + ' ' + d.usage).join(' ') : '');
      } else if (p.type === 'problems') {
        bodyText += p.content.problems.map((pr: any) => pr.q + ' ' + (pr.ans || '')).join(' ');
      } else if (p.type === 'solutions') {
        bodyText += p.content.solutions.map((s: any) => s.label + ' ' + s.ans).join(' ');
      } else if (p.type === 'keywords') {
        bodyText += p.content.keywords.map((k: any) => k.term + ' ' + k.def).join(' ');
      }

      return pageTitle.includes(query) || chapterTitle.includes(query) || bodyText.toLowerCase().includes(query);
    });
  }, [searchQuery]);

  // Current page object
  const pageObj = useMemo(() => {
    return biology9Pages.find(p => p.pageNumber === currentPage) || biology9Pages[0];
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
          <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-heading text-base font-bold text-white flex items-center gap-1.5 leading-none">
              Class 9th Biology Cheat Sheet
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-extrabold text-emerald-400 border border-emerald-500/30">
                OFFICIAL ACCESS
              </span>
            </h1>
            <p className="text-xs text-slate-400 font-medium mt-1">Interactive Study Kit & High-Yield Examination Guide</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4.5 py-2 font-heading text-xs font-bold text-white shadow-lg shadow-emerald-500/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
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
                                ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-500 pl-1.5 font-bold'
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
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Viewing page <strong className="text-white">{currentPage}</strong> of 41
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
                <span className="text-[10px] font-extrabold text-emerald-400 tracking-wider uppercase font-mono">
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
                        <h4 className="font-heading text-sm font-extrabold text-emerald-400 flex items-center gap-2 print:text-emerald-700">
                          <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold">
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

              {/* Type 2: Boundaries & Transport */}
              {pageObj.type === 'boundaries' && (
                <div className="space-y-8">
                  {/* Top Block: Cell Boundaries */}
                  {pageObj.content.boundaries && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Cell Boundaries</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pageObj.content.boundaries.map((b: any, idx: number) => (
                          <div key={idx} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 print:bg-slate-50 print:border-slate-100">
                            <h4 className="font-heading text-xs font-extrabold text-emerald-400 print:text-emerald-700">{b.name}</h4>
                            <p className="text-xs text-slate-300 leading-normal mt-2 print:text-slate-700">{b.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Block: Cell Transport */}
                  {pageObj.content.transport && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Cell Transport</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pageObj.content.transport.map((t: any, idx: number) => (
                          <div key={idx} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 print:bg-slate-50 print:border-slate-100">
                            <h4 className="font-heading text-xs font-extrabold text-blue-400 print:text-blue-700">{t.name}</h4>
                            <p className="text-xs text-slate-300 leading-normal mt-2 print:text-slate-700">{t.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Type 3: Cell Organisation & Division (inc Quadrant) */}
              {pageObj.type === 'division' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {pageObj.content.organisation.map((o: any, idx: number) => (
                      <div key={idx} className="p-4.5 rounded-xl border border-slate-850 bg-slate-900/30 print:bg-slate-50 print:border-slate-100">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{o.type}</h4>
                        <ul className="space-y-2">
                          {o.features.map((f: string, fidx: number) => (
                            <li key={fidx} className="flex items-start gap-2 text-xs text-slate-300 print:text-slate-750">
                              <span className="text-emerald-400 text-xs mt-0.5 shrink-0">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Quadrant matrix visualization */}
                  {pageObj.content.quadrant && (
                    <div className="mt-6 border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/20 p-4 print:border-slate-200">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase text-center mb-3 tracking-widest">
                        Cell Division Axis Matrix Model
                      </h4>
                      <div className="grid grid-cols-2 gap-3 relative">
                        {/* Vertical Axis line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 print:bg-slate-200" />
                        {/* Horizontal Axis line */}
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-800 print:bg-slate-200" />
                        
                        {pageObj.content.quadrant.quadrants.map((q: any, idx: number) => (
                          <div key={idx} className="p-3 bg-slate-950/60 rounded-xl relative z-10 text-center flex flex-col justify-center min-h-[100px] print:bg-slate-50">
                            <span className="text-[9px] font-mono font-bold text-emerald-400 block mb-1 uppercase tracking-wider">{q.pos}</span>
                            <h5 className="text-xs font-bold text-white print:text-slate-900 leading-tight">{q.title}</h5>
                            <p className="text-[10px] text-slate-400 mt-1.5 leading-snug print:text-slate-600">{q.desc}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between mt-3 text-[9px] font-mono text-slate-500 px-1 font-semibold uppercase">
                        <span>{pageObj.content.quadrant.xLabel}</span>
                        <span>{pageObj.content.quadrant.yLabel}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Type 4: Data Tables / Fact Banks */}
              {pageObj.type === 'table' && (
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60 print:border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 print:bg-slate-50 print:border-slate-200 print:text-black font-semibold">
                        {pageObj.content.headers.map((h: string, idx: number) => (
                          <th key={idx} className="p-3.5 leading-tight">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 print:divide-slate-250">
                      {pageObj.content.rows.map((row: any, idx: number) => (
                        <tr key={idx} className="hover:bg-slate-900/10 transition-colors print:hover:bg-transparent">
                          <td className="p-3.5 font-bold text-emerald-400 min-w-[150px] leading-tight print:text-emerald-700">
                            {row.feature}
                          </td>
                          {row.desc && (
                            <td className="p-3.5 text-slate-300 leading-relaxed print:text-slate-850">
                              {row.desc}
                            </td>
                          )}
                          {row.plant && (
                            <>
                              <td className="p-3.5 text-slate-300 border-l border-slate-850/80 leading-normal print:border-slate-200 print:text-slate-800">
                                {row.plant}
                              </td>
                              <td className="p-3.5 text-slate-400 border-l border-slate-850/80 leading-normal print:border-slate-200 print:text-slate-600">
                                {row.animal}
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Type 5: Cell Organelles List */}
              {pageObj.type === 'organelles' && (
                <div className="space-y-4">
                  {pageObj.content.organelles.map((o: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="p-4.5 rounded-xl border border-slate-800/80 bg-slate-900/40 flex gap-4 items-start transition-colors hover:border-slate-700/80 print:bg-slate-50 print:border-slate-100"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 text-lg shadow-inner">
                        {o.symbol}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <h4 className="font-heading text-sm font-extrabold text-white print:text-slate-950">{o.name}</h4>
                          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">
                            {o.role}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed mt-2 print:text-slate-700">{o.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Type 6: Watch Out! Traps */}
              {pageObj.type === 'traps' && (
                <div className="space-y-5">
                  {pageObj.content.traps.map((t: any, idx: number) => (
                    <div key={idx} className="rounded-xl border border-rose-500/15 bg-rose-500/[0.03] p-4.5 border-l-4 border-l-rose-500 shadow-sm print:bg-rose-50/20 print:border-rose-100 print:border-l-rose-500">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-widest print:text-rose-600">
                        <Sparkles className="h-3.5 w-3.5 text-rose-500 animate-pulse" />
                        <span>Trap {idx + 1}: {t.topic}</span>
                      </div>
                      <div className="mt-3.5 space-y-2.5">
                        <div className="flex items-start gap-2 text-xs">
                          <span className="text-slate-400 font-extrabold text-[10px] uppercase bg-slate-800/80 px-1.5 py-0.5 rounded shrink-0 print:bg-slate-200 print:text-slate-800">Common Mistake</span>
                          <p className="text-slate-300 italic print:text-slate-700">"{t.trap}"</p>
                        </div>
                        <div className="flex items-start gap-2 text-xs">
                          <span className="text-emerald-500 font-extrabold text-[10px] uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded shrink-0">Examiner Solution</span>
                          <p className="text-slate-200 font-medium leading-relaxed print:text-slate-900">{t.correction}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Type 7: Flowcharts */}
              {pageObj.type === 'flowcharts' && (
                <div className="space-y-8">
                  {/* Flowchart A */}
                  {pageObj.content.stepsA && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">
                        {pageObj.content.titleA}
                      </h3>
                      
                      {/* Flex/Block vertical flow pipeline */}
                      <div className="relative pl-6 space-y-4.5 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500">
                        {pageObj.content.stepsA.map((s: any, idx: number) => (
                          <div key={idx} className="relative flex items-start gap-4">
                            {/* Bullet node indicator */}
                            <div className="absolute left-[-21px] top-1 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-500 flex items-center justify-center text-[7px] font-bold text-white print:border-white shadow" />
                            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-850 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2.5 print:bg-slate-50 print:border-slate-100">
                              <span className="text-xs font-bold text-white print:text-slate-950 font-mono flex items-center gap-2">
                                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold font-mono">STEP {idx + 1}</span>
                                {s.step}
                              </span>
                              <span className="text-xs text-slate-400 font-medium max-w-md text-left md:text-right print:text-slate-650">
                                {s.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flowchart B (Meiosis/Mitosis pathways) */}
                  {pageObj.content.divisions && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">
                        {pageObj.content.titleB}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {pageObj.content.divisions.map((d: any, idx: number) => (
                          <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 print:bg-slate-50 print:border-slate-100">
                            <h4 className="font-heading text-sm font-extrabold text-white flex items-center gap-2 print:text-slate-950">
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                              {d.name}
                            </h4>
                            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-850/80 font-mono text-xs text-emerald-400 leading-normal tracking-wide print:bg-slate-100 print:text-slate-850 print:border-slate-200">
                              {d.flow}
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2.5 pl-1 font-medium print:text-slate-600">
                              <strong>Primary Purpose:</strong> {d.usage}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Type 8: Practice Problems & Solutions */}
              {(pageObj.type === 'problems' || pageObj.type === 'solutions') && (
                <div className="space-y-5">
                  <div className="rounded-xl bg-slate-900/15 p-4 border border-slate-800 text-xs text-slate-300 leading-relaxed flex gap-2 items-start print:bg-slate-50 print:text-black print:border-slate-100">
                    <Info className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-200 print:text-slate-900">Active Recall Testing Mode Active!</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 print:text-slate-650">Click individual problem cards or the toggle button to reveal examiner answers and check your syllabus knowledge.</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Render Page 10 Practice Problems */}
                    {pageObj.type === 'problems' && pageObj.content.problems.map((p: any, idx: number) => (
                      <div 
                        key={idx} 
                        onClick={() => toggleSolution(idx)}
                        className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 hover:border-slate-700 transition-all cursor-pointer group select-none print:bg-slate-50 print:border-slate-100 print:cursor-default"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono">
                            Q{p.num} • {p.type}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 group-hover:text-emerald-400 transition-colors flex items-center gap-1 print:hidden">
                            {showSolutions[idx] ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                            <span>{showSolutions[idx] ? "Hide Answer" : "Tap to Check Answer"}</span>
                          </span>
                        </div>
                        <h4 className="font-heading text-sm font-bold text-white mt-2 leading-relaxed print:text-slate-900">
                          {p.q}
                        </h4>

                        {/* Expandable Solution Answer Block */}
                        {(showSolutions[idx] || window.matchMedia('print').matches) && (
                          <div className="mt-4 pt-3.5 border-t border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-xs leading-relaxed animate-fadeIn print:bg-white print:border-slate-200">
                            <span className="font-extrabold text-[10px] text-emerald-400 uppercase tracking-widest font-mono">Examiner Logic Answer:</span>
                            <p className="text-slate-300 mt-1.5 font-medium print:text-slate-800">
                              {p.ans || "Solution loading... Please test recall with matching Page 11 steps."}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Render Page 11 Solutions List */}
                    {pageObj.type === 'solutions' && pageObj.content.solutions.map((s: any, idx: number) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 print:bg-slate-50 print:border-slate-100"
                      >
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                          Answer {s.num} • {s.label}
                        </span>
                        <p className="text-xs text-slate-200 mt-2.5 leading-relaxed font-sans print:text-slate-850">
                          {s.ans}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Type 9: Examiner Preferred Keywords Glossary */}
              {pageObj.type === 'keywords' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pageObj.content.keywords.map((k: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between print:bg-slate-50 print:border-slate-100">
                      <div>
                        <span className="text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest">KEYWORD {idx + 1}</span>
                        <h4 className="font-heading text-sm font-extrabold text-emerald-400 mt-1 print:text-emerald-700">
                          {k.term}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed mt-2.5 print:text-slate-700">
                          {k.def}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Bottom Footer Area */}
            <div className="border-t border-slate-800/85 pt-4 flex items-center justify-between text-[11px] text-slate-500 print:border-slate-100 print:text-slate-400">
              <span className="font-heading font-bold">AceTheGrade Study Companion © 2026</span>
              <span className="font-mono">Verifiably Authentic Study Resource</span>
            </div>

          </div>

          {/* Reader Navigation Footer Panel - Hidden in Print */}
          <div className="mt-6 flex items-center gap-4 print:hidden">
            <button
              onClick={() => handlePageJump(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              title="Previous Page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="text-xs font-semibold text-slate-400 select-none">
              Flip Page {currentPage} of 41
            </span>

            <button
              onClick={() => handlePageJump(currentPage + 1)}
              disabled={currentPage === 41}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              title="Next Page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </main>

      </div>

      {/* COMPLETE HIDDEN HIGH-FIDELITY PRINTABLE BLUEPRINT FOR PDF EXPORT */}
      {/* This element remains completely hidden in standard UI viewport but takes full page hierarchy layout in @media print */}
      <div className="hidden print:block print:bg-white print:text-black">
        {biology9Pages.map(page => (
          <div key={page.pageNumber} className="print-page py-8 border-b border-slate-200" style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 text-[10px] text-slate-500">
              <span>AceTheGrade™ Class 9th Biology Cheat Sheet</span>
              <span>{page.chapter}</span>
            </div>

            {/* Title */}
            <div className="my-4">
              <h1 className="text-2xl font-bold font-heading">{page.title}</h1>
              {page.subtitle && <p className="text-xs text-slate-600 italic mt-0.5">{page.subtitle}</p>}
            </div>

            {/* Content Body mapping matching above styles */}
            <div className="my-4 text-xs space-y-4">
              {page.type === 'key-concepts' && (
                <div className="space-y-4">
                  {page.content.intro && <p className="leading-relaxed">{page.content.intro}</p>}
                  <div className="space-y-3">
                    {page.content.concepts.map((c: any, cidx: number) => (
                      <div key={cidx} className="p-3 border rounded bg-slate-50">
                        <h4 className="font-bold text-emerald-800">{c.heading}</h4>
                        <p className="mt-1 text-slate-700">{c.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {page.type === 'boundaries' && (
                <div className="space-y-4">
                  {page.content.boundaries && (
                    <div className="space-y-2">
                      <h3 className="font-bold border-l-2 border-emerald-700 pl-1">Cell Boundaries</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {page.content.boundaries.map((b: any, bidx: number) => (
                          <div key={bidx} className="p-2 border rounded bg-slate-50">
                            <h4 className="font-bold text-emerald-800">{b.name}</h4>
                            <p className="text-slate-700">{b.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {page.content.transport && (
                    <div className="space-y-2">
                      <h3 className="font-bold border-l-2 border-emerald-700 pl-1">Cell Transport</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {page.content.transport.map((t: any, tidx: number) => (
                          <div key={tidx} className="p-2 border rounded bg-slate-50">
                            <h4 className="font-bold text-blue-800">{t.name}</h4>
                            <p className="text-slate-700">{t.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {page.type === 'division' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {page.content.organisation.map((o: any, oidx: number) => (
                      <div key={oidx} className="p-3 border rounded bg-slate-50">
                        <h4 className="font-bold text-slate-800 mb-2">{o.type}</h4>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700">
                          {o.features.map((f: string, fidx: number) => (
                            <li key={fidx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {page.content.quadrant && (
                    <div className="p-3 border rounded">
                      <h4 className="font-bold text-center mb-2">Cell Division Axis Matrix Model</h4>
                      <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                        {page.content.quadrant.quadrants.map((q: any, qidx: number) => (
                          <div key={qidx} className="p-2 bg-slate-50 border rounded">
                            <strong className="block text-emerald-800">{q.title}</strong>
                            <span className="text-slate-650">{q.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {page.type === 'table' && (
                <table className="w-full text-left border-collapse border text-[11px]">
                  <thead>
                    <tr className="bg-slate-100 border-b font-bold">
                      {page.content.headers.map((h: string, hidx: number) => (
                        <th key={hidx} className="p-2 border">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.content.rows.map((row: any, ridx: number) => (
                      <tr key={ridx}>
                        <td className="p-2 border font-bold text-emerald-800">{row.feature}</td>
                        {row.desc && <td className="p-2 border text-slate-700">{row.desc}</td>}
                        {row.plant && (
                          <>
                            <td className="p-2 border text-slate-700">{row.plant}</td>
                            <td className="p-2 border text-slate-600">{row.animal}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {page.type === 'organelles' && (
                <div className="space-y-3">
                  {page.content.organelles.map((o: any, oidx: number) => (
                    <div key={oidx} className="p-3 border rounded bg-slate-50">
                      <strong className="text-emerald-800">{o.name} ({o.role})</strong>
                      <p className="mt-1 text-slate-700">{o.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {page.type === 'traps' && (
                <div className="space-y-3">
                  {page.content.traps.map((t: any, tidx: number) => (
                    <div key={tidx} className="p-3 border-l-4 border-rose-500 bg-rose-50/10 border">
                      <strong className="text-rose-700">Trap: {t.topic}</strong>
                      <p className="text-slate-600 italic mt-1">Mistake: "{t.trap}"</p>
                      <p className="text-slate-950 mt-1 font-bold">Correct Solution: {t.correction}</p>
                    </div>
                  ))}
                </div>
              )}

              {page.type === 'flowcharts' && (
                <div className="space-y-4">
                  {page.content.stepsA && (
                    <div className="space-y-2">
                      <h4 className="font-bold text-slate-800">{page.content.titleA}</h4>
                      <ol className="list-decimal pl-5 space-y-1 text-slate-700">
                        {page.content.stepsA.map((s: any, sidx: number) => (
                          <li key={sidx}>
                            <strong>{s.step}:</strong> {s.desc}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {page.content.divisions && (
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800">{page.content.titleB}</h4>
                      {page.content.divisions.map((d: any, didx: number) => (
                        <div key={didx} className="p-2 border rounded bg-slate-50">
                          <strong className="text-emerald-800">{d.name}</strong>
                          <div className="bg-white border p-1.5 font-mono my-1 text-[11px]">{d.flow}</div>
                          <span className="text-slate-650">Use case: {d.usage}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {page.type === 'problems' && (
                <div className="space-y-2">
                  {page.content.problems.map((pr: any, pridx: number) => (
                    <div key={pridx} className="p-2 border rounded bg-slate-50">
                      <strong>Q{pr.num} ({pr.type}): {pr.q}</strong>
                      <p className="text-[11px] text-slate-700 border-t pt-1 mt-1.5 font-medium">
                        Answer: {pr.ans || "Refer to subsequent answer page."}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {page.type === 'solutions' && (
                <div className="space-y-2">
                  {page.content.solutions.map((sl: any, slidx: number) => (
                    <div key={slidx} className="p-2 border rounded bg-slate-50">
                      <strong>Answer {sl.num} ({sl.label}):</strong>
                      <p className="text-slate-700 mt-1">{sl.ans}</p>
                    </div>
                  ))}
                </div>
              )}

              {page.type === 'keywords' && (
                <div className="grid grid-cols-2 gap-3">
                  {page.content.keywords.map((k: any, kidx: number) => (
                    <div key={kidx} className="p-2 border rounded bg-slate-50">
                      <strong className="text-emerald-800">{k.term}</strong>
                      <p className="mt-1 text-slate-650">{k.def}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-1 mt-6 text-[9px] text-slate-400">
              <span>AceTheGrade Board Exam Topper Cheat Sheet</span>
              <span>Page {page.pageNumber} of 41</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
