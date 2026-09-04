import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const dm = t.diagnosticModal;

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const questions = dm.questions;
  const currentQ = questions[currentStep];

  const handleSelect = (score: number) => {
    const updated = { ...selectedAnswers, [currentQ.id]: score };
    setSelectedAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  // Calculate total score
  const totalScore = (Object.values(selectedAnswers) as number[]).reduce((a: number, b: number) => a + b, 0);

  const getResultRecommendation = () => {
    if (totalScore <= 3) {
      return dm.levels.low;
    } else if (totalScore <= 7) {
      return dm.levels.medium;
    } else {
      return dm.levels.high;
    }
  };

  const result = getResultRecommendation();

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Carolina, he completado tu test de autodiagnóstico 40+ y obtuve puntuación ${totalScore}/12 (${result.level}). Deseo revisar mi caso contigo.`
    );
    window.open(`https://api.whatsapp.com/send/?phone=34601317959&text=${text}`, '_blank');
  };

  return (
    <div
      id="diagnostic-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 bg-[#201415]/70 backdrop-blur-md z-[110] flex items-center justify-center p-4"
    >
      <div
        id="diagnostic-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 fine-border shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          id="btn-close-diagnostic"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!showResult ? (
          <div>
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-[#EE295C] uppercase tracking-[0.2em]">
                {dm.stepOf} {currentStep + 1} / {questions.length} • {currentQ.category}
              </span>
              <span className="text-[12px] font-semibold text-[#C7A46B]">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>

            <div className="w-full h-1.5 bg-[#F6F1EA] rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h3 className="font-serif text-[22px] sm:text-[26px] text-[#201415] font-semibold mb-6">
              {currentQ.title}
            </h3>

            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.score)}
                  className="w-full text-left p-4 rounded-2xl bg-[#F6F1EA]/70 hover:bg-[#F8CFD5]/30 border border-[#C7A46B]/25 hover:border-[#EE295C]/50 transition-all group flex items-start justify-between gap-3 cursor-pointer"
                >
                  <span className="text-[14px] text-[#201415] font-medium leading-relaxed">
                    {opt.text}
                  </span>
                  <span className="material-symbols-outlined text-[#C7A46B] group-hover:text-[#EE295C] text-[20px] shrink-0 mt-0.5">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>

            {currentStep > 0 && (
              <div className="mt-6 flex justify-start">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-[12px] font-semibold text-[#685354] hover:text-[#201415] flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  {dm.previous}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="text-center pb-4 border-b border-[#C7A46B]/20">
              <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold bg-[#F8CFD5] text-[#EE295C] inline-block mb-2">
                {dm.resultBadge}
              </span>
              <h3 className="font-serif text-[26px] text-[#201415] italic font-semibold">
                {dm.resultTitle}
              </h3>
            </div>

            <div className={`mt-5 p-4 rounded-2xl border ${result.color} mb-4`}>
              <p className="text-[12px] uppercase font-bold tracking-wider mb-1">
                {dm.resultStateLabel}
              </p>
              <p className="font-serif text-[18px] font-bold mb-2">{result.level}</p>
              <p className="text-[13px] leading-relaxed mb-3">{result.summary}</p>
              <div className="pt-2 border-t border-current/20 text-[12px] font-bold">
                {result.pillar}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F6F1EA] fine-border mb-6 text-[13px] text-[#685354]">
              <p className="font-bold text-[#201415] mb-1">{dm.nextStepTitle}</p>
              <p>{dm.nextStepDesc}</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={shareViaWhatsApp}
                className="w-full py-3.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[14px] font-bold rounded-full shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{dm.whatsappCta}</span>
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full py-2.5 text-[12px] text-[#685354] hover:text-[#201415] font-semibold text-center cursor-pointer"
              >
                {dm.retakeBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
