import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShoppingBag, Truck, CreditCard, ShieldCheck, ClipboardList, ChevronRight, ChevronLeft, Sparkles, Upload, Image, Trash2, Camera, Mail } from 'lucide-react';
import { StudyKit, OrderFormData } from '../types';
import { statesOfIndia } from '../data';
import { generateKitPDF } from '../utils/pdfGenerator';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  kits: StudyKit[];
  preselectedKitId?: string;
  onOpenBiologyViewer?: () => void;
  onOpenPhysicsViewer?: () => void;
  onOpenChemistryViewer?: () => void;
}

export default function OrderModal({ 
  isOpen, 
  onClose, 
  kits, 
  preselectedKitId, 
  onOpenBiologyViewer,
  onOpenPhysicsViewer,
  onOpenChemistryViewer
}: OrderModalProps) {
  // Multistep Form State
  const [step, setStep] = useState(1);
  const [selectedKits, setSelectedKits] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Payment Receipt Upload State
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);

  // Blinking Pop-up Notification State
  const [showOrderPopup, setShowOrderPopup] = useState<boolean>(false);

  // Form Values State
  const [formData, setFormData] = useState<OrderFormData>({
    studentName: '',
    parentName: '',
    parentPhone: '',
    email: '',
    board: 'CBSE',
    selectedClass: '9th',
    selectedKits: [],
    deliverAddress: 'Digital Online Access',
    state: 'Digital Delivery',
    city: 'Digital Network',
    pincode: '400001',
    paymentMethod: 'online',
    selectedSubjectBookName: ''
  });

  // Success summary state
  const [bookingCode, setBookingCode] = useState('');
  const [utr, setUtr] = useState('');
  const [upiName, setUpiName] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState<string | null>(null);

  // Handle outside click or Escape key
  useEffect(() => {
    setUtr('');
    setUpiName('');
    setIsVerifying(false);
    setReceiptFile(null);
    setReceiptPreview(null);
    setShowOrderPopup(false);
    if (preselectedKitId) {
      const foundKit = kits.find(k => k.id === preselectedKitId);
      if (foundKit && !foundKit.isComingSoon) {
        setSelectedKits([preselectedKitId]);
        let classLabel: '9th' | '10th' | '11th' | '12th' = '9th';
        if (foundKit.classValue === '10') classLabel = '10th';
        if (foundKit.classValue === '11') classLabel = '11th';
        if (foundKit.classValue === '12') classLabel = '12th';
        setFormData(prev => ({ 
          ...prev, 
          selectedClass: classLabel,
          deliverAddress: 'Digital Online Access',
          state: 'Digital Delivery',
          city: 'Digital Network',
          pincode: '400001',
          paymentMethod: 'online'
        }));
        setStep(2); // Go directly to detailed checkout
      } else {
        setSelectedKits([]);
        setStep(1);
      }
    } else {
      setSelectedKits([]);
      setStep(1);
    }
  }, [preselectedKitId, kits, isOpen]);

  if (!isOpen) return null;

  // Toggle checkout kits
  const handleKitToggle = (kitId: string) => {
    const kit = kits.find(k => k.id === kitId);
    if (kit?.isComingSoon) return;
    setSelectedKits(prev => {
      if (prev.includes(kitId)) {
        return prev.filter(id => id !== kitId);
      } else {
        return [...prev, kitId];
      }
    });
  };

  // Pricing math
  const subtotal = selectedKits.reduce((acc, kitId) => {
    const kit = kits.find(k => k.id === kitId);
    return acc + (kit ? kit.price : 0);
  }, 0);

  const originalSubtotal = selectedKits.reduce((acc, kitId) => {
    const kit = kits.find(k => k.id === kitId);
    return acc + (kit ? kit.originalPrice : 0);
  }, 0);

  const totalSaved = originalSubtotal - subtotal;
  const shippingCost = 0; // Free delivery
  const totalCost = subtotal + shippingCost;

  // Step 1 Validation -> Next
  const handleStep1Submit = () => {
    if (selectedKits.length === 0) {
      setErrorMsg('Please select at least one Study Kit to proceed.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  // Step 2 submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.parentPhone.trim() || !formData.email.trim() || !formData.selectedSubjectBookName?.trim()) {
      setErrorMsg('Please fill in all mandatory fields (including student name, phone, email, and textbook name).');
      return;
    }

    if (formData.parentPhone.match(/^[0-9]{10}$/) === null) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Success! Generate mock booking
    setErrorMsg('');
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const code = `ATG-${formData.selectedClass.toUpperCase()}-${randomNum}`;
    setBookingCode(code);
    setStep(3); // Go to Payment Verification Step
  };

  // Helper to convert uploaded receipt file to base64
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // Step 3 Payment confirmation handler
  const handleConfirmPaymentDone = async () => {
    if (!receiptFile) {
      setErrorMsg('Please upload your payment screenshot/receipt before proceeding.');
      return;
    }
    if (!upiName.trim()) {
      setErrorMsg('Please answer: What is the name on the UPI app which you used to pay?');
      return;
    }
    if (!utr.trim()) {
      setErrorMsg('Please enter your 12-digit UPI UTR / Transaction Number.');
      return;
    }
    if (utr.trim().length !== 12) {
      setErrorMsg('Please enter a valid 12-digit UPI UTR number.');
      return;
    }

    setErrorMsg('');
    setIsVerifying(true);

    try {
      let base64Receipt = '';
      if (receiptFile) {
        base64Receipt = await readFileAsBase64(receiptFile);
      }

      const selectedKitNames = selectedKits.map(id => kits.find(k => k.id === id)?.name || id);

      // Post order details + receipt screenshot to backend API endpoint
      await fetch('/api/send-receipt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentPhone: formData.parentPhone,
          email: formData.email,
          selectedClass: formData.selectedClass,
          selectedSubjectBookName: formData.selectedSubjectBookName,
          selectedKits: selectedKitNames,
          upiName: upiName.trim(),
          utr: utr.trim(),
          bookingCode,
          totalCost,
          receiptFileBase64: base64Receipt,
          receiptFileName: receiptFile.name
        })
      });
    } catch (err) {
      console.error('Failed to dispatch receipt email to server:', err);
    } finally {
      setIsVerifying(false);
      setStep(4);
      setShowOrderPopup(true); // Trigger blinking order completion pop-up
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Dark Backdrop */}
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" aria-hidden="true" onClick={onClose} />
        
        {/* Align center in screen */}
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

        {/* Modal content element */}
        <div className="relative inline-block transform overflow-hidden rounded-2xl bg-white text-left align-bottom shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle">
          
          {/* Header */}
          <div className="border-b border-slate-100 bg-slate-50 px-6 py-4.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-blue-650 p-1.5 text-blue-600 bg-blue-50">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900 leading-tight">Order Study Support Kit</h3>
                <p className="text-xs text-slate-500 font-medium font-sans">Instant Digital Download & Online Delivery inside Class 9-12</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form Action */}
          <div className="px-6 py-6 max-h-[75vh] overflow-y-auto">
            
            {/* Top Required Payment Instruction Banner */}
            <div className="mb-5 rounded-2xl bg-amber-50 border-2 border-amber-400 p-4 shadow-sm text-center">
              <p className="text-xs sm:text-sm font-extrabold text-amber-950 leading-relaxed">
                Please make the payment on the UPI ID- vaish123cbse@okhdfcbank before filling the form and take a screenshot of it to upload in the form.
              </p>
            </div>

            {/* Step Indicators */}
            {step < 4 && (
              <div className="mb-6 flex items-center justify-center gap-1.5 sm:gap-4 text-xs sm:text-sm font-semibold">
                <div className={`flex items-center gap-1.5 pb-2 border-b-2 transition-all ${
                  step === 1 ? 'border-blue-600 text-blue-650' : 'border-emerald-500 text-emerald-600'
                }`}>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-extrabold ${
                    step > 1 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-650'
                  }`}>1</span>
                  <span>Select Kits</span>
                </div>
                <div className="h-[2px] w-4 sm:w-8 bg-slate-200 mb-2" />
                <div className={`flex items-center gap-1.5 pb-2 border-b-2 transition-all ${
                  step === 2 ? 'border-blue-600 text-blue-650' : 
                  step > 2 ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-slate-400'
                }`}>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-extrabold ${
                    step > 2 ? 'bg-emerald-100 text-emerald-600' : 
                    step === 2 ? 'bg-blue-100 text-blue-650' : 'bg-slate-100 text-slate-400'
                  }`}>2</span>
                  <span>Recipient Info</span>
                </div>
                <div className="h-[2px] w-4 sm:w-8 bg-slate-200 mb-2" />
                <div className={`flex items-center gap-1.5 pb-2 border-b-2 transition-all ${
                  step === 3 ? 'border-blue-600 text-blue-650' : 'border-transparent text-slate-400'
                }`}>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-extrabold ${
                    step === 3 ? 'bg-blue-100 text-blue-650' : 'bg-slate-100 text-slate-400'
                  }`}>3</span>
                  <span>Payment Receipt</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-4 rounded-lg bg-rose-50 p-3.5 border border-rose-200 text-rose-700 text-xs font-semibold leading-relaxed">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* STEP 1: Select Kits */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800">Select Class Category:</span>
                  <select
                    value={formData.selectedClass}
                    onChange={(e) => setFormData(prev => ({ ...prev, selectedClass: e.target.value as any }))}
                    className="rounded-lg border border-slate-300 py-1 px-2.5 font-heading text-xs font-bold text-slate-700 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="9th">Class 9th Kits</option>
                    <option value="10th">Class 10th Kits</option>
                    <option value="11th">Class 11th Kits</option>
                    <option value="12th">Class 12th Kits</option>
                  </select>
                </div>

                {/* Filter kits matching selected class */}
                <div className="space-y-3.5">
                  {kits
                    .filter(kit => {
                      const cv = kit.classValue;
                      if (formData.selectedClass === '9th') return cv === '9';
                      if (formData.selectedClass === '10th') return cv === '10';
                      if (formData.selectedClass === '11th') return cv === '11';
                      if (formData.selectedClass === '12th') return cv === '12';
                      return true;
                    })
                    .map(kit => {
                      const isSelected = selectedKits.includes(kit.id);
                      const isComingSoon = kit.isComingSoon;
                      return (
                        <div
                          key={kit.id}
                          onClick={() => handleKitToggle(kit.id)}
                          className={`relative rounded-xl border p-4 transition-all flex items-start gap-3.5 ${
                            isComingSoon
                              ? 'border-slate-200 bg-slate-50/70 opacity-75 cursor-not-allowed'
                              : isSelected 
                                ? 'border-blue-500 bg-blue-50/50 shadow-md shadow-blue-100 cursor-pointer' 
                                : 'border-slate-200 bg-white hover:border-slate-300 cursor-pointer'
                          }`}
                        >
                          <input
                            type="checkbox"
                            disabled={isComingSoon}
                            checked={isSelected}
                            onChange={() => {}} // Handler captured in parent div onClick
                            className="h-4.5 w-4.5 mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer disabled:cursor-not-allowed"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-heading text-sm font-bold text-slate-900">{kit.name}</h4>
                                {isComingSoon && (
                                  <span className="bg-amber-500 text-white font-extrabold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                                    Coming Soon
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-xs font-bold text-slate-900">₹{kit.price}</span>
                                <span className="font-mono text-[10px] text-slate-400 line-through">₹{kit.originalPrice}</span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{kit.description}</p>
                            <div className="mt-2 text-[10px] text-blue-650 font-semibold bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                              Includes: {kit.features.slice(0, 2).map((f, idx) => (idx === 1 ? f : f + ', '))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Selection summary */}
                {selectedKits.length > 0 && (
                  <div className="mt-4 rounded-xl bg-slate-50 p-4 border border-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-650 font-semibold">
                      <span>Kits Selected:</span>
                      <span className="text-slate-900 font-bold">{selectedKits.length} Pack(s)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-650 mt-1.5 font-semibold">
                      <span>Value Savings:</span>
                      <span className="text-emerald-600 font-bold">₹{totalSaved} Saved</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-bold text-slate-900 mt-3 pt-2.5 border-t border-slate-200">
                      <span>Estimated Order Amount:</span>
                      <span className="text-blue-700 font-heading text-base">₹{totalCost}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: Shipping & Personal Info */}
            {step === 2 && (
              <form onSubmit={handleFormSubmit} className="space-y-4 leading-normal">
                {/* Selected Kit Preview mini rail banner */}
                <div className="rounded-lg bg-blue-50 p-3.5 border border-blue-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div>
                    <span className="font-bold text-blue-900">Ordering: </span>
                    <span className="text-blue-750 font-medium">
                      {selectedKits.map(id => kits.find(k => k.id === id)?.name).join(' + ')} ({formData.selectedClass} Class)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Change Kits
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Fields */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
                      placeholder="e.g. Prerna Sen"
                      className="w-full rounded-lg border border-slate-300 py-2 px-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight mb-1">Parent Name / Guardian *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                      placeholder="e.g. Dr. Rajesh Sen"
                      className="w-full rounded-lg border border-slate-300 py-2 px-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact Fields */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight mb-1">Parent Contact Mobile (10-Digit) *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-slate-400 text-sm font-semibold font-mono">+91</span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentPhone: e.target.value.replace(/\D/g, '') }))}
                        placeholder="e.g. 9812345678"
                        className="w-full rounded-lg border border-slate-300 py-2 pl-12 pr-3 text-sm font-mono text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight mb-1">E-mail Address (For Instant Digital Delivery) *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g. acethegrade77@gmail.com"
                      className="w-full rounded-lg border border-slate-300 py-2 px-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Board Syllabus Group */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight mb-1">Your School Board *</label>
                    <select
                      value={formData.board}
                      disabled
                      className="w-full rounded-lg border border-slate-300 py-2 px-3 text-sm text-slate-800 bg-slate-50 focus:outline-none cursor-not-allowed"
                    >
                      <option value="CBSE">CBSE Board (NCERT)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight mb-1">Class Registered *</label>
                    <select
                      value={formData.selectedClass}
                      onChange={(e: any) => setFormData(prev => ({ ...prev, selectedClass: e.target.value }))}
                      className="w-full rounded-lg border border-slate-300 py-2 px-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none font-semibold text-blue-800"
                    >
                      <option value="9th">Class 9th</option>
                      <option value="10th">Class 10th (Board Exams)</option>
                      <option value="11th">Class 11th</option>
                      <option value="12th">Class 12th (Final Board)</option>
                    </select>
                  </div>
                </div>

                {/* Textbook Name Question */}
                <div>
                  <label htmlFor="textbook-name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-tight mb-1.5 flex items-center gap-1.5">
                    <span>What is the book name of the subject you have selected?</span>
                    <span className="text-rose-500 font-extrabold">*</span>
                  </label>
                  <input
                    type="text"
                    id="textbook-name-input"
                    required
                    value={formData.selectedSubjectBookName}
                    onChange={(e) => setFormData(prev => ({ ...prev, selectedSubjectBookName: e.target.value }))}
                    placeholder="e.g. NCERT First Flight, Lakhmir Singh Chemistry, or specific publisher name"
                    className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Payment Receipt Upload Option */}
                <div className="space-y-2 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/50 p-4">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-tight flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-indigo-900 font-extrabold">
                      <Upload className="h-4 w-4 text-indigo-600" />
                      Upload Payment Receipt / Screenshot <span className="text-rose-500 font-extrabold">*</span>
                    </span>
                    {receiptFile && (
                      <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle className="h-3 w-3" /> Screenshot Attached
                      </span>
                    )}
                  </label>
                  <p className="text-[11px] text-slate-600 font-medium leading-snug">
                    Please make payment on UPI ID: <strong className="text-indigo-700 font-black">vaish123cbse@okhdfcbank</strong> and upload your payment screenshot here. Customers are also requested to email their payment screenshot, UPI sender name, and UTR number to <a href="mailto:acethegrade77@gmail.com" className="text-indigo-700 font-extrabold underline">acethegrade77@gmail.com</a>.
                  </p>

                  {receiptPreview ? (
                    <div className="relative mt-2 rounded-lg border border-slate-200 bg-white p-2.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <img
                          src={receiptPreview}
                          alt="Payment Receipt Preview"
                          className="h-14 w-14 rounded-md object-cover border border-slate-200 shrink-0"
                        />
                        <div className="truncate">
                          <p className="text-xs font-bold text-slate-800 truncate">{receiptFile?.name}</p>
                          <p className="text-[10px] text-slate-400">
                            {receiptFile?.size ? (receiptFile.size / 1024).toFixed(1) + ' KB' : 'Image File'}
                          </p>
                          <span className="text-[10px] text-emerald-600 font-extrabold">✅ Ready for submission</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setReceiptFile(null);
                          setReceiptPreview(null);
                        }}
                        className="rounded-lg p-2 text-rose-500 hover:bg-rose-50 transition-colors shrink-0 cursor-pointer"
                        title="Remove screenshot"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-indigo-300 bg-white p-4 text-center cursor-pointer hover:bg-indigo-50/80 transition-colors">
                      <Camera className="h-6 w-6 text-indigo-500 mb-1 animate-pulse" />
                      <span className="text-xs font-bold text-indigo-700">Click or Drag to Upload Payment Screenshot</span>
                      <span className="text-[10px] text-slate-400 mt-0.5">Supports PNG, JPG, JPEG, WEBP or PDF</span>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setReceiptFile(file);
                            if (file.type.startsWith('image/')) {
                              setReceiptPreview(URL.createObjectURL(file));
                            } else {
                              setReceiptPreview('/placeholder-pdf.png');
                            }
                            setErrorMsg('');
                          }
                        }}
                      />
                    </label>
                  )}
                </div>

                {/* Secure Online Payment selection */}
                <div className="rounded-xl border border-blue-100 p-4 bg-slate-50 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wide">Secure Online Payment Protocol:</span>
                    <div className="space-y-2">
                      <label className="relative flex items-center justify-between p-2.5 rounded-lg border border-blue-500 bg-blue-50/50 cursor-pointer select-none">
                        <span className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={formData.paymentMethod === 'online'}
                            onChange={() => {}}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="text-xs font-bold text-slate-800">Secure Online Payment (UPI, Cards, NetBanking)</span>
                        </span>
                        <span className="text-[10px] text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded font-extrabold uppercase">100% SECURE</span>
                      </label>
                    </div>
                  </div>

                  {/* Summary Total Cost */}
                  <div className="flex flex-col justify-between pt-1 font-sans text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Retail Total Value:</span>
                      <span className="text-slate-400 line-through">₹{originalSubtotal}</span>
                    </div>
                    <div className="flex items-center justify-between text-emerald-600 font-bold">
                      <span>Package Discount:</span>
                      <span>-₹{totalSaved}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span>Digital Delivery Cost:</span>
                      <span className="text-emerald-600 font-bold">FREE EMAIL DELIVERY</span>
                    </div>
                    <div className="h-[1px] bg-slate-200 my-1" />
                    <div className="flex items-center justify-between text-sm font-bold text-slate-900">
                      <span>Net Total Online Payment:</span>
                      <span className="text-blue-650 text-base font-heading font-extrabold">₹{totalCost}</span>
                    </div>
                  </div>
                </div>

                {/* Secure checkout info */}
                <div className="flex items-start gap-2.5 text-[11px] text-slate-500 leading-normal">
                  <ShieldCheck className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>
                    By submitting this online payment order, you confirm your consent to receive the digital study kit on your registered Email. <strong>AceTheGrade</strong> will deliver access to your digital study kit after the online payment verification has successfully completed.
                  </p>
                </div>
              </form>
            )}

            {/* STEP 3: SECURE UPI PAYMENT & RECEIPT VERIFICATION */}
            {step === 3 && (
              <div className="text-center py-2 space-y-5 max-w-md mx-auto">
                <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 flex items-center justify-between gap-3 text-left animate-fade-in">
                  <div className="flex-1">
                    <span className="block text-[10px] text-blue-600 font-extrabold uppercase tracking-widest">Selected Kit Delivery</span>
                    <strong className="text-sm text-slate-800 font-heading block mt-0.5 truncate">
                      {selectedKits.map(id => kits.find(k => k.id === id)?.name).join(' + ')}
                    </strong>
                    <span className="text-xs text-slate-500">Registered for {formData.studentName} ({formData.email})</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wide">Amount Due</span>
                    <span className="text-lg font-heading font-black text-blue-700">₹{totalCost}</span>
                  </div>
                </div>

                {/* Display UPI ID and Instruction prominently in bold on top */}
                <div className="bg-indigo-50 border border-indigo-150 rounded-2xl p-6 text-center space-y-3 shadow-md animate-fade-in">
                  <div className="text-base text-slate-800 leading-relaxed font-semibold">
                    Pay to UPI ID: <span className="text-indigo-700 font-black select-all text-lg underline">vaish123cbse@okhdfcbank</span> to receive the study kit PDF on your provided Email: <span className="text-indigo-900 font-black select-all">{formData.email}</span>.
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    You can copy the UPI ID above and pay the due amount of <strong className="text-slate-800">₹{totalCost}</strong> using any UPI app (Google Pay, PhonePe, Paytm, BHIM, etc.).
                  </div>
                </div>

                {/* Important Owner Email Instruction Box */}
                <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 text-left shadow-sm">
                  <div className="flex items-start gap-2.5">
                    <Mail className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-heading font-extrabold text-xs text-amber-900 uppercase tracking-wide">
                        📩 Important Email Submission Request
                      </h5>
                      <p className="text-xs text-amber-900 mt-1 font-semibold leading-relaxed">
                        Please also send the screenshot of your payment, your UPI payment details (sender name), and your 12-digit UTR transaction number directly to our email ID:
                      </p>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=acethegrade77@gmail.com&su=${encodeURIComponent(`[AceTheGrade Payment Proof] ${formData.studentName} (${formData.email})`)}&body=${encodeURIComponent(`Hello AceTheGrade Team,\n\nI have completed the payment for my order on AceTheGrade.\n\nStudent Name: ${formData.studentName}\nClass: Class ${formData.selectedClass}th (${formData.board})\nTextbook: ${formData.selectedSubjectBookName}\nPhone: ${formData.parentPhone}\nEmail: ${formData.email}\nUPI Sender Name: ${upiName || '(Enter UPI Name)'}\nUTR Number: ${utr || '(Enter 12-Digit UTR)'}\nTotal Paid: ₹${totalCost}\n\nPlease check my payment screenshot attached.\n\nThank you!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1.5 px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-lg shadow-sm transition-colors"
                      >
                        ✉️ Open Gmail (acethegrade77@gmail.com)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Payment Receipt Upload Option inside Step 3 */}
                <div className="space-y-2 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/50 p-4 text-left">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-tight flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-indigo-900 font-extrabold">
                      <Upload className="h-4 w-4 text-indigo-600" />
                      Payment Receipt Screenshot <span className="text-rose-500 font-extrabold">*</span>
                    </span>
                    {receiptFile && (
                      <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle className="h-3 w-3" /> Screenshot Attached
                      </span>
                    )}
                  </label>

                  {receiptPreview ? (
                    <div className="relative mt-2 rounded-lg border border-slate-200 bg-white p-2.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <img
                          src={receiptPreview}
                          alt="Payment Receipt Preview"
                          className="h-14 w-14 rounded-md object-cover border border-slate-200 shrink-0"
                        />
                        <div className="truncate">
                          <p className="text-xs font-bold text-slate-800 truncate">{receiptFile?.name}</p>
                          <p className="text-[10px] text-slate-400">
                            {receiptFile?.size ? (receiptFile.size / 1024).toFixed(1) + ' KB' : 'Image File'}
                          </p>
                          <span className="text-[10px] text-emerald-600 font-extrabold">✅ Receipt Attached</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setReceiptFile(null);
                          setReceiptPreview(null);
                        }}
                        className="rounded-lg p-2 text-rose-500 hover:bg-rose-50 transition-colors shrink-0 cursor-pointer"
                        title="Remove screenshot"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-indigo-300 bg-white p-4 text-center cursor-pointer hover:bg-indigo-50/80 transition-colors">
                      <Camera className="h-6 w-6 text-indigo-500 mb-1 animate-pulse" />
                      <span className="text-xs font-bold text-indigo-700">Upload Payment Screenshot</span>
                      <span className="text-[10px] text-slate-400 mt-0.5">Supports PNG, JPG, JPEG, WEBP or PDF</span>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setReceiptFile(file);
                            if (file.type.startsWith('image/')) {
                              setReceiptPreview(URL.createObjectURL(file));
                            } else {
                              setReceiptPreview('/placeholder-pdf.png');
                            }
                            setErrorMsg('');
                          }
                        }}
                      />
                    </label>
                  )}
                </div>

                {/* Question form for payment verification */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-4 shadow-sm animate-fade-in">
                  <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">
                    Please provide payment confirmation details:
                  </h4>
                  
                  {/* Question 1: Name on the UPI app used */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight">
                      1. What is the name on the UPI app which you used to pay? <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      value={upiName}
                      onChange={(e) => setUpiName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-lg border border-slate-350 py-2 px-3 text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
                    />
                    <p className="text-[10px] text-slate-400">
                      Enter the sender name exactly as it appears in your UPI payment receipt.
                    </p>
                  </div>

                  {/* Question 2: UTR/Transaction Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight">
                      2. UTR/Transaction Number <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      maxLength={12}
                      value={utr}
                      onChange={(e) => setUtr(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 12-digit UPI UTR number"
                      className="w-full rounded-lg border border-slate-350 py-2 px-3 text-sm font-mono text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
                    />
                    <p className="text-[10px] text-slate-400 leading-snug">
                      Your 12-digit UTR/Ref ID can be copied from your payment app transaction history.
                    </p>
                  </div>
                </div>

                {/* Action in content */}
                <div className="pt-2">
                  <button
                    type="button"
                    disabled={isVerifying}
                    onClick={handleConfirmPaymentDone}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-400 px-6 py-3.5 text-base font-extrabold text-white shadow-md transition-all transform hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                  >
                    {isVerifying ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS OVERVIEW */}
            {step === 4 && (
              <div className="text-center py-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-650 mb-4 animate-bounce">
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                </div>

                <h4 className="font-heading text-2xl font-extrabold text-slate-900 tracking-tight">Payment Access Granted!</h4>
                <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Excellent choice! Your order for <strong className="text-slate-800">{formData.studentName}</strong> has been received and verified. Your digital study materials will be delivered to your WhatsApp/email within 2-3 hours.
                </p>

                {/* Booking Code Board */}
                <div className="mt-5 inline-block bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-inner font-mono text-center">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Digital Study Kit Access Key</span>
                  <span className="text-lg font-bold text-blue-700 tracking-wider block mt-1">{bookingCode}</span>
                  <span className="text-[10px] text-emerald-600 mt-2 bg-emerald-50 px-2 py-0.5 rounded-full inline-block font-semibold">
                    Status: Paid & Delivery in Progress (2-3 Hours)
                  </span>
                </div>

                {/* Customer Email Payment Details Notice */}
                <div className="mt-4 p-3.5 bg-indigo-50/90 border border-indigo-200 rounded-xl max-w-sm mx-auto text-left flex items-start gap-2.5">
                  <Mail className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h6 className="font-heading font-extrabold text-xs text-indigo-950">Email Payment Details Required</h6>
                    <p className="text-[11px] text-indigo-900 mt-0.5 leading-snug">
                      Please email your payment screenshot, UPI sender name, and 12-digit UTR transaction number to{' '}
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=acethegrade77@gmail.com&su=${encodeURIComponent(`[AceTheGrade Order] Payment Receipt Proof - ${formData.studentName} (${bookingCode})`)}&body=${encodeURIComponent(`Hello AceTheGrade Team,\n\nI have completed the payment for my order on AceTheGrade.\n\nOrder Code: ${bookingCode}\nStudent Name: ${formData.studentName}\nClass: Class ${formData.selectedClass}th (${formData.board})\nTextbook: ${formData.selectedSubjectBookName}\nPhone: ${formData.parentPhone}\nEmail: ${formData.email}\nUPI Sender Name: ${upiName || '(Please enter UPI sender name)'}\nUTR Number: ${utr || '(Please enter 12-digit UTR)'}\nTotal Paid: ₹${totalCost}\n\nPlease check my payment receipt screenshot attached.\n\nThank you!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline text-indigo-700 hover:text-indigo-900"
                      >
                        acethegrade77@gmail.com
                      </a>.
                    </p>
                  </div>
                </div>

                {/* Printable receipt segment */}
                <div className="mt-6 border border-dashed border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs bg-slate-50/50">
                  <h5 className="font-semibold text-slate-800 border-b border-dashed border-slate-200 pb-1.5 font-heading">Order Summary - Invoice ATG-290</h5>
                  <ul className="mt-2.5 space-y-1 text-slate-600">
                    <li className="flex justify-between">
                      <span>Recipient Student:</span>
                      <strong className="text-slate-800">{formData.studentName}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Target Class:</span>
                      <strong className="text-slate-800">{formData.selectedClass}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Syllabus Board:</span>
                      <strong className="text-slate-800">{formData.board}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Textbook Name:</span>
                      <strong className="text-slate-800 truncate max-w-[170px]" title={formData.selectedSubjectBookName}>{formData.selectedSubjectBookName}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Receipt Attached:</span>
                      <strong className="text-emerald-600 font-bold">{receiptFile ? 'Yes (Verified)' : 'Attached'}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Delivery Email:</span>
                      <strong className="text-slate-800 text-right truncate max-w-[170px]">{formData.email}</strong>
                    </li>
                    <li className="flex justify-between border-t border-dashed border-slate-200 pt-2 font-bold text-slate-900 mt-2">
                      <span>Amount Paid Online (Secure):</span>
                      <span className="text-blue-700">₹{totalCost}</span>
                    </li>
                  </ul>
                </div>

                {/* Action CTA list to engage users */}
                <div className="mt-6 space-y-3 max-w-md mx-auto border-t border-slate-100 pt-5 text-center">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=acethegrade77@gmail.com&su=${encodeURIComponent(`[AceTheGrade Order] Payment Receipt Proof - ${formData.studentName} (${bookingCode})`)}&body=${encodeURIComponent(`Hello AceTheGrade Team,\n\nI have completed the payment for my order on AceTheGrade.\n\nOrder Code: ${bookingCode}\nStudent Name: ${formData.studentName}\nClass: Class ${formData.selectedClass}th (${formData.board})\nTextbook: ${formData.selectedSubjectBookName}\nPhone: ${formData.parentPhone}\nEmail: ${formData.email}\nUPI Sender Name: ${upiName || '(Please enter UPI sender name)'}\nUTR Number: ${utr || '(Please enter 12-digit UTR)'}\nTotal Paid: ₹${totalCost}\n\nPlease check my payment receipt screenshot attached.\n\nThank you!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3.5 font-heading text-sm font-extrabold text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Mail className="h-4 w-4 text-indigo-200" />
                    <span>📧 Open Gmail to Send Proof to acethegrade77@gmail.com</span>
                  </a>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Clicking above will open Gmail with a pre-composed message addressed to <strong>acethegrade77@gmail.com</strong> containing your order details.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Footer Controls */}
          {step < 4 && (
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex items-center justify-between">
              <div>
                {step === 2 ? (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back to Kits Selection</span>
                  </button>
                ) : step === 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back to Recipient Info</span>
                  </button>
                ) : (
                  <span className="text-slate-500 text-xs font-semibold">Double check syllabus matching</span>
                )}
              </div>

              <div>
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={handleStep1Submit}
                    className="flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-[#2563EB] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all cursor-pointer"
                  >
                    <span>Proceed to Delivery Info</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : step === 2 ? (
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-[#2563EB] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
                  >
                    <CreditCard className="h-4 w-4 text-blue-100" />
                    <span>Proceed to UPI Payment</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isVerifying}
                    onClick={handleConfirmPaymentDone}
                    className="flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-xs font-extrabold text-white shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isVerifying ? (
                      <>
                        <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Success footer */}
          {step === 4 && (
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex items-center justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-blue-600 hover:bg-[#2563EB] px-5 py-2.5 text-xs font-semibold text-white tracking-wide cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Blinking Order Confirmation Pop-Up Modal Overlay */}
      {showOrderPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-7 text-center shadow-2xl border-4 border-emerald-500 animate-blink-popup">
            <button
              type="button"
              onClick={() => setShowOrderPopup(false)}
              className="absolute top-3 right-3 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 animate-bounce">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
            </div>

            <h3 className="font-heading text-2xl font-black text-slate-900 tracking-tight mb-2">
              Your Kit has Been Ordered!
            </h3>

            <div className="my-3 rounded-xl bg-emerald-50 border border-emerald-200 py-3 px-4">
              <p className="text-base font-extrabold text-emerald-700 animate-pulse">
                It will be delivered in 2-3 hours.
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium mt-3">
              Thank you! Your payment receipt has been successfully received and verified for <strong className="text-slate-800">{formData.studentName}</strong>. Your study kit will be delivered to your WhatsApp/Email within 2-3 hours.
            </p>

            <button
              type="button"
              onClick={() => setShowOrderPopup(false)}
              className="mt-5 w-full rounded-full bg-emerald-600 hover:bg-emerald-700 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-200 transition-all cursor-pointer transform hover:scale-[1.02]"
            >
              Got It! View My Order Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
