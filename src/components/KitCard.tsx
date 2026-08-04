import React from 'react';
import { Check, ShoppingCart, Sparkles, Clock } from 'lucide-react';
import { StudyKit } from '../types';

interface KitCardProps {
  kit: StudyKit;
  onOrderClick: (kitId: string) => void;
}

export default function KitCard({ kit, onOrderClick }: KitCardProps) {
  // Calculate discount percentage
  const discount = Math.round(((kit.originalPrice - kit.price) / kit.originalPrice) * 100);

  // Selector for left border accent matching Geometric Balance
  const getBorderLeftClass = (id: string) => {
    if (kit.isComingSoon) return 'border-l-amber-400';
    if (id.includes('science')) return 'border-l-blue-600';
    if (id.includes('english')) return 'border-l-orange-500';
    if (id.includes('hindi')) return 'border-l-red-500';
    if (id.includes('social')) return 'border-l-emerald-600';
    if (id.includes('commerce')) return 'border-l-amber-500';
    return 'border-l-indigo-600';
  };

  return (
    <div className={`relative group flex flex-col justify-between rounded-2xl border-l-4 ${getBorderLeftClass(kit.id)} border-y border-r border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300`}>
      
      <div>
        {/* Kit Badge & Discount / Coming Soon */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
          <span className="rounded-full bg-slate-50 px-3 py-1 font-heading text-[10px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1 border border-slate-100">
            <Sparkles className="h-3 w-3 text-blue-600" />
            {kit.subtitle}
          </span>
          {kit.isComingSoon ? (
            <span className="rounded-full bg-amber-500 px-2.5 py-0.5 font-heading text-[9px] font-extrabold text-white uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Coming Soon
            </span>
          ) : kit.badge ? (
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 font-heading text-[9px] font-extrabold text-white uppercase tracking-wider">
              {kit.badge}
            </span>
          ) : (
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-heading text-[9px] font-bold text-emerald-700">
              Save {discount}%
            </span>
          )}
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-bold text-slate-900">{kit.name}</h3>
        </div>
        
        {/* Exact Description constraint matched */}
        <p className="mt-2 text-sm text-slate-600 font-medium">
          {kit.description}
        </p>

        {/* Price Tag with traditional crossed retail price */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-slate-900">₹{kit.price}</span>
          <span className="text-sm font-medium text-slate-400 line-through">₹{kit.originalPrice}</span>
        </div>

        {/* Features Checklist */}
        <ul className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
          {kit.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Grid Actions with rounded-full style of Geometric Balance */}
      <div className="mt-6">
        {kit.isComingSoon ? (
          <button
            disabled
            className="w-full flex items-center justify-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-4 py-3 font-heading text-xs font-bold text-amber-700 cursor-not-allowed opacity-90"
          >
            <Clock className="h-4 w-4 text-amber-600" />
            <span>Coming Soon</span>
          </button>
        ) : (
          <button
            onClick={() => onOrderClick(kit.id)}
            className="w-full flex items-center justify-center gap-1.5 rounded-full bg-blue-600 hover:bg-[#2563EB] px-4 py-3 font-heading text-xs font-bold text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Buy Kit Now</span>
          </button>
        )}
      </div>

    </div>
  );
}
