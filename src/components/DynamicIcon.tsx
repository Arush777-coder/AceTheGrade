import React from 'react';
import {
  Atom,
  Beaker,
  Dna,
  BookMarked,
  Scroll,
  Quote,
  Compass,
  BookOpen,
  PenTool,
  BookOpenText,
  Sparkles,
  Binary,
  GraduationCap,
  Award,
  Book,
  Briefcase,
  Layers,
  LineChart,
  Percent,
  TrendingUp,
  Activity,
  FileSpreadsheet
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, className = "h-5 w-5" }: DynamicIconProps) {
  switch (name) {
    case 'Atom':
      return <Atom className={className} />;
    case 'Beaker':
      return <Beaker className={className} />;
    case 'Dna':
      return <Dna className={className} />;
    case 'BookMarked':
      return <BookMarked className={className} />;
    case 'Scroll':
      return <Scroll className={className} />;
    case 'Quote':
      return <Quote className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'PenTool':
      return <PenTool className={className} />;
    case 'BookOpenText':
      return <BookOpenText className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Binary':
      return <Binary className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Book':
      return <Book className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'LineChart':
      return <LineChart className={className} />;
    case 'Percent':
      return <Percent className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}
