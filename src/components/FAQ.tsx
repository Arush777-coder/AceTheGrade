import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { faqs } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 font-heading text-xs font-bold text-slate-600 border border-slate-200">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 font-sans">
            Need clarification on syllabus alignment, digital file access, or free specimens? Browse through common questions below or search using key terms.
          </p>

          {/* Elegant Search bar */}
          <div className="mt-6 relative max-w-md mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs (e.g., download, CBSE, sample)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-full focus:outline-none focus:border-blue-500 font-sans"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'border-l-4 border-l-blue-600 border-y border-r border-slate-200 bg-slate-50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-heading text-sm sm:text-base font-bold text-slate-900 focus:outline-none"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-6 text-slate-400 font-sans text-sm">
              No matching FAQ entries found. Try searching for "download" or "Sample".
            </div>
          )}
        </div>

        {/* Parent Support line */}
        <div className="mt-12 text-center rounded-2xl bg-slate-50 border border-slate-200 p-6 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Still have questions about ordering? Speak directly with our student support experts.
          </p>
          <div className="mt-3 flex flex-all justify-center items-center gap-4 flex-wrap text-sm font-bold text-blue-600">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=acethegrade77@gmail.com&su=${encodeURIComponent('AceTheGrade Support / Student Inquiry')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              ✉️ Customer Care: acethegrade77@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
