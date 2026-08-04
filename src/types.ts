export interface Subject {
  name: string;
  category: 'Science' | 'Languages' | 'Social Science' | 'Mathematics';
  iconName: string;
  bgColor: string;
  textColor: string;
  topicsCount: number;
}

export interface StudyKit {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice: number;
  badge?: string;
  features: string[];
  subjectsIncluded: string[];
  classValue: '9' | '10' | '11' | '12';
  isComingSoon?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  score: string;
  board: string;
  location: string;
  text: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface OrderFormData {
  studentName: string;
  parentName: string;
  parentPhone: string;
  email: string;
  board: 'CBSE' | 'ICSE' | 'State Board';
  selectedClass: '9th' | '10th' | '11th' | '12th';
  selectedKits: string[];
  deliverAddress: string;
  state: string;
  city: string;
  pincode: string;
  paymentMethod: 'cod' | 'online';
  selectedSubjectBookName?: string;
}
