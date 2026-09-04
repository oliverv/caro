import React, { useState } from 'react';

interface AiMealBiohackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
}

interface MealBiohackResult {
  analysis: string;
  biohackAdjustments: string[];
  longevityScore: number;
  sirtuinBonusTip: string;
}

const SAMPLE_MEALS = [
  'Tostada de pan blanco con pavo y café con leche',
  'Ensalada de pasta con atún, maíz y mayonesa',
  'Pechuga de pollo a la plancha con arroz blanco',
  'Yogur con avena, plátano y miel'
];

export const AiMealBiohackModal: React.FC<AiMealBiohackModalProps> = ({
  isOpen,
  onClose,
  onOpenBookingModal
}) => {
  const [mealText, setMealText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MealBiohackResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleBiohack = async (textToUse?: string) => {
    const text = textToUse || mealText;
    if (!text.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/meal-biohack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mealDescription: text.trim() })
      });

      if (!response.ok) {
        throw new Error('Error al conectar con el optimizador de platos.');
      }

      const data = await response.json();
      setResult(data.result);
    } catch (err: any) {
      setError(err.message || 'No fue posible optimizar el plato en este momento.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="ai-meal-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#201415]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="ai-meal-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F6F1EA] rounded-3xl max-w-xl w-full p-6 sm:p-8 fine-border shadow-2xl relative animate-scaleUp my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] transition-colors cursor-pointer shadow-xs"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4 pr-10">
          <div className="w-11 h-11 rounded-2xl bg-[#C7A46B]/25 text-[#201415] flex items-center justify-center shadow-xs shrink-0">
            <span className="material-symbols-outlined text-[22px] text-[#C7A46B]">restaurant</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#C7A46B] uppercase tracking-[0.2em]">
              Bio-Hacker Nutricional 40+
            </span>
            <h3 className="font-serif text-[20px] font-bold text-[#201415]">
              Optimizador Epigenético de Platos
            </h3>
          </div>
        </div>

        <p className="text-[13px] text-[#685354] mb-4 leading-relaxed">
          Escribe qué has comido o qué planeas comer hoy. Nuestra IA clínica analizará el impacto en tu pico de glucosa, la masa muscular y activadores de sirtuinas.
        </p>

        {/* Input */}
        <div className="mb-3">
          <textarea
            rows={3}
            value={mealText}
            onChange={(e) => setMealText(e.target.value)}
            placeholder="Ej: Plato de pasta con tomate frito y queso rallado..."
            className="w-full p-3.5 rounded-2xl bg-white fine-border text-xs text-[#201415] placeholder-[#685354]/60 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
          />
        </div>

        {/* Quick Sample Buttons */}
        <div className="mb-4">
          <p className="text-[10px] font-bold text-[#C7A46B] uppercase tracking-wider mb-1.5">
            O prueba con un ejemplo habitual:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {SAMPLE_MEALS.map((sample, i) => (
              <button
                key={i}
                onClick={() => {
                  setMealText(sample);
                  handleBiohack(sample);
                }}
                className="text-[11px] px-2.5 py-1 bg-white fine-border rounded-full text-[#685354] hover:text-[#EE295C] hover:border-[#EE295C]/40 transition-colors cursor-pointer"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 mb-3">
            {error}
          </div>
        )}

        <button
          onClick={() => handleBiohack()}
          disabled={!mealText.trim() || isLoading}
          className="w-full py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold rounded-2xl shadow-md hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
              <span>Bio-hackeando plato con IA...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              <span>Optimizar este Plato para Longevidad</span>
            </>
          )}
        </button>

        {/* Results Box */}
        {result && (
          <div className="mt-5 p-4 rounded-2xl bg-white fine-border shadow-xs space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#C7A46B]/20 pb-2">
              <span className="text-xs font-bold text-[#201415]">
                Puntuación de Longevidad Celular
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                result.longevityScore >= 7
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {result.longevityScore} / 10
              </span>
            </div>

            <p className="text-[12.5px] text-[#685354] leading-relaxed">
              {result.analysis}
            </p>

            <div>
              <p className="text-[11px] font-bold text-[#EE295C] uppercase tracking-wider mb-1">
                Ajustes Epigenéticos Recomendados:
              </p>
              <ul className="space-y-1.5 text-xs text-[#201415]">
                {result.biohackAdjustments.map((adj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[15px] text-emerald-600 shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="leading-snug">{adj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-2.5 rounded-xl bg-[#F6F1EA] border border-[#C7A46B]/30 text-[11.5px] text-[#201415] flex items-start gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#C7A46B] shrink-0 mt-0.5">
                psychology
              </span>
              <div>
                <strong className="text-[#EE295C]">Tip de Sirtuinas: </strong>
                {result.sirtuinBonusTip}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
