import React, { useState } from 'react';

interface AiBiomarkerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
}

interface AssessmentResult {
  summaryTitle: string;
  executiveSummary: string;
  keyBiomarkersToTest: Array<{ name: string; reason: string }>;
  epigeneticPillars: Array<{ title: string; action: string }>;
  recommendedProgram: string;
}

const SYMPTOM_OPTIONS = [
  'Grasa visceral / hinchazón abdominal persistente',
  'Despertares nocturnos (3-4 AM) o sueño ligero',
  'Niebla mental, falta de concentración o pérdida de memoria ágil',
  'Sofocos, sudores nocturnos o palpitaciones',
  'Caída de energía a media tarde (16:00 - 18:00)',
  'Deseos incontrolables de dulce o carbohidratos refinados',
  'Pérdida de tono o fuerza muscular',
  'Digestiones pesadas o intolerancias alimentarias sobrevenidas'
];

export const AiBiomarkerModal: React.FC<AiBiomarkerModalProps> = ({
  isOpen,
  onClose,
  onOpenBookingModal
}) => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [age, setAge] = useState('45-49 años');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    'Grasa visceral / hinchazón abdominal persistente',
    'Despertares nocturnos (3-4 AM) o sueño ligero'
  ]);
  const [energyLevel, setEnergyLevel] = useState<number>(5);
  const [sleepHours, setSleepHours] = useState('6 horas (interrumpido)');
  const [dietType, setDietType] = useState('Mediterránea tradicional con algo de ultraprocesados');
  const [exerciseType, setExerciseType] = useState('Caminata o poco tiempo para entrenar fuerza');

  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleGenerateAssessment = async () => {
    setStep('loading');
    setError(null);

    try {
      const response = await fetch('/api/ai/analyze-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age,
          symptoms: selectedSymptoms,
          energyLevel,
          sleepHours,
          dietType,
          exerciseType
        })
      });

      if (!response.ok) {
        throw new Error('Error al conectar con el servidor de análisis epigenético.');
      }

      const data = await response.json();
      setResult(data.result);
      setStep('result');
    } catch (err: any) {
      setError(err.message || 'No fue posible generar el informe en este momento.');
      setStep('form');
    }
  };

  const handleReset = () => {
    setStep('form');
    setResult(null);
  };

  return (
    <div
      id="ai-biomarker-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#201415]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="ai-biomarker-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F6F1EA] rounded-3xl max-w-2xl w-full p-6 sm:p-8 fine-border shadow-2xl relative animate-scaleUp my-8 max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] transition-colors cursor-pointer shadow-xs"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5 pr-10">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF6161] to-[#EE295C] text-white flex items-center justify-center shadow-md shrink-0">
            <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#EE295C] uppercase tracking-[0.2em]">
              Inteligencia Artificial Epigenética
            </span>
            <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#201415] leading-tight">
              Evaluación Metabólica y Celular 40+
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto pr-1">
          {step === 'form' && (
            <div className="space-y-5">
              <p className="text-[13px] text-[#685354] leading-relaxed">
                Selecciona tus biomarcadores sintomáticos actuales. Nuestro motor clínico con IA analizará los interruptores epigenéticos implicados y te recomendará las pruebas clave y la estrategia adecuada.
              </p>

              {/* Age & Sleep */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#201415] uppercase tracking-wider mb-1.5">
                    Rango de Edad
                  </label>
                  <select
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white fine-border text-xs text-[#201415] focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                  >
                    <option>40-44 años (Pre-perimenopausia)</option>
                    <option>45-49 años (Perimenopausia activa)</option>
                    <option>50-54 años (Transición menopáusica)</option>
                    <option>55+ años (Postmenopausia y Longevidad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#201415] uppercase tracking-wider mb-1.5">
                    Sueño y Descanso
                  </label>
                  <select
                    value={sleepHours}
                    onChange={(e) => setSleepHours(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white fine-border text-xs text-[#201415] focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                  >
                    <option>Menos de 6 horas o muy fragmentado</option>
                    <option>6-7 horas pero me despierto cansada</option>
                    <option>7-8 horas con despertares a las 3 AM</option>
                    <option>8 horas reparadoras y profundas</option>
                  </select>
                </div>
              </div>

              {/* Energy Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-[#201415] uppercase tracking-wider">
                    Nivel de Energía Vital Diario
                  </label>
                  <span className="text-xs font-bold text-[#EE295C] px-2 py-0.5 rounded-full bg-[#F8CFD5]/40">
                    {energyLevel} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={energyLevel}
                  onChange={(e) => setEnergyLevel(Number(e.target.value))}
                  className="w-full accent-[#EE295C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#685354]">
                  <span>Agotamiento crónico (1)</span>
                  <span>Energía moderada (5)</span>
                  <span>Vitalidad radiante (10)</span>
                </div>
              </div>

              {/* Symptoms checkboxes */}
              <div>
                <label className="block text-[11px] font-bold text-[#201415] uppercase tracking-wider mb-2">
                  Síntomas o desafíos que experimentas (selecciona todos los que apliquen)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SYMPTOM_OPTIONS.map((sym, idx) => {
                    const isSelected = selectedSymptoms.includes(sym);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleSymptom(sym)}
                        className={`text-left p-2.5 rounded-xl text-xs flex items-start gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#F8CFD5]/50 border border-[#EE295C] text-[#201415] font-semibold'
                            : 'bg-white fine-border text-[#685354] hover:bg-white/90'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[16px] shrink-0 mt-0.5 ${
                            isSelected ? 'text-[#EE295C]' : 'text-[#C7A46B]'
                          }`}
                        >
                          {isSelected ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span className="leading-snug">{sym}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                  {error}
                </div>
              )}

              <button
                id="btn-run-ai-assessment"
                onClick={handleGenerateAssessment}
                disabled={selectedSymptoms.length === 0}
                className="w-full py-3.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13.5px] font-bold rounded-2xl shadow-md hover:shadow-lg hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>Generar Diagnóstico Epigenético con IA</span>
              </button>
            </div>
          )}

          {step === 'loading' && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6161] to-[#EE295C] text-white flex items-center justify-center animate-pulse shadow-xl">
                <span className="material-symbols-outlined text-[32px]">biotech</span>
              </div>
              <h4 className="font-serif text-[18px] font-bold text-[#201415]">
                Analizando tus interruptores epigenéticos...
              </h4>
              <p className="text-[12.5px] text-[#685354] max-w-sm leading-relaxed">
                Gemini está cruzando tu perfil sintomático con la evidencia clínica de longevidad celular, resistencia a la insulina y marcadores hormonales para mujeres 40+.
              </p>
            </div>
          )}

          {step === 'result' && result && (
            <div className="space-y-5 animate-fadeIn">
              {/* Report Header Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#201415] to-[#362224] text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#C7A46B] font-bold block mb-1">
                  Dictamen Celular Preliminar
                </span>
                <h4 className="font-serif text-[18px] font-bold text-[#F8CFD5] mb-2">
                  {result.summaryTitle}
                </h4>
                <p className="text-[12.5px] text-[#F6F1EA]/85 leading-relaxed">
                  {result.executiveSummary}
                </p>
              </div>

              {/* Biomarkers to Test */}
              <div>
                <h5 className="font-serif text-[15px] font-bold text-[#201415] flex items-center gap-2 mb-2.5">
                  <span className="material-symbols-outlined text-[#EE295C] text-[18px]">bloodtype</span>
                  <span>Biomarcadores Analíticos Sugeridos</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {result.keyBiomarkersToTest.map((bio, i) => (
                    <div key={i} className="p-3 bg-white fine-border rounded-xl">
                      <p className="text-xs font-bold text-[#EE295C]">{bio.name}</p>
                      <p className="text-[11px] text-[#685354] mt-0.5 leading-snug">{bio.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Epigenetic Pillars */}
              <div>
                <h5 className="font-serif text-[15px] font-bold text-[#201415] flex items-center gap-2 mb-2.5">
                  <span className="material-symbols-outlined text-[#C7A46B] text-[18px]">bolt</span>
                  <span>Pilares de Acción Inmediata</span>
                </h5>
                <div className="space-y-2">
                  {result.epigeneticPillars.map((pil, i) => (
                    <div key={i} className="p-3 bg-white fine-border rounded-xl flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#F8CFD5]/50 text-[#EE295C] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-[#201415]">{pil.title}</p>
                        <p className="text-[11.5px] text-[#685354] mt-0.5 leading-snug">{pil.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Program */}
              <div className="p-4 rounded-2xl bg-white border border-[#C7A46B]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-[#C7A46B] uppercase tracking-wider">
                    Protocolo Clínico Recomendado
                  </span>
                  <p className="font-serif text-[15px] font-bold text-[#201415]">
                    {result.recommendedProgram}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBookingModal();
                  }}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-xs font-bold rounded-xl shadow-md hover:scale-102 transition-all shrink-0 cursor-pointer"
                >
                  Solicitar Consulta 1:1
                </button>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#685354] hover:text-[#201415] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[15px]">refresh</span>
                  <span>Repetir evaluación</span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(
                      `${result.summaryTitle}\n\n${result.executiveSummary}\n\nBiomarcadores:\n${result.keyBiomarkersToTest.map((b) => `- ${b.name}: ${b.reason}`).join('\n')}`
                    );
                    alert('¡Informe copiado al portapapeles!');
                  }}
                  className="text-xs text-[#EE295C] font-semibold hover:underline cursor-pointer"
                >
                  Copiar informe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
