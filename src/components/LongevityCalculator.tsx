import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LongevityCalculator: React.FC = () => {
  const { t } = useLanguage();
  const c = t.calculator;

  const [age, setAge] = useState<number>(47);
  const [weight, setWeight] = useState<number>(65);
  const [activity, setActivity] = useState<'sedentary' | 'moderate' | 'strength'>('moderate');
  const [goal, setGoal] = useState<'metabolism' | 'muscle' | 'hormones'>('metabolism');
  const [copied, setCopied] = useState(false);

  // Compute calculated metrics
  const proteinMultiplier =
    activity === 'strength' ? 1.9 : activity === 'moderate' ? 1.7 : 1.5;
  const goalAdjustment = goal === 'muscle' ? 0.15 : goal === 'metabolism' ? 0.1 : 0.05;
  const totalDailyProtein = Math.round(weight * (proteinMultiplier + goalAdjustment));
  const proteinPerMealMin = Math.round(totalDailyProtein / 3);
  const leucineTarget = '2.8g – 3.2g';

  const weeklyStrengthSessions =
    activity === 'strength' ? '4 sesiones / semana' : activity === 'moderate' ? '3 sesiones / semana' : '2-3 sesiones adaptadas / semana';
  const stepsTarget = activity === 'sedentary' ? '7.500 - 9.000 pasos' : '9.000 - 11.000 pasos';

  const circadianWindow =
    goal === 'hormones' ? '12:12 (Priorizar descanso adrenal)' : '14:10 (Optimizar sensibilidad a la insulina)';

  const priorityBiomarkers = [
    { name: 'HOMA-IR & Insulina basal', note: 'Detecta resistencia antes que la glucosa' },
    { name: 'Proteína C Reactiva Ultra (hs-CRP)', note: 'Inflamación celular de bajo grado' },
    { name: 'Perfil Lipídico Avanzado (ApoB)', note: 'Riesgo cardiovascular post-40' },
    { name: 'Vitamina D3 + K2 & Ferritina', note: 'Salud ósea, tiroides y energía mitocondrial' }
  ];

  const handleCopy = () => {
    const summary = `Perfil de Longevidad 40+ (${age} años, ${weight}kg):
• Proteína diaria recomendada: ${totalDailyProtein}g/día (~${proteinPerMealMin}g/comida con ${leucineTarget} de leucina)
• Estímulo de fuerza: ${weeklyStrengthSessions} (${stepsTarget})
• Ventana circadiana: ${circadianWindow}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleConsultWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Carolina, he calculado mi perfil biológico 40+ en tu web (${age} años, ${weight}kg, meta: ${c.goalOptions[goal]}). Mi requerimiento sugerido es ${totalDailyProtein}g de proteína diaria. Me gustaría revisar mi caso y analíticas contigo.`
    );
    window.open(`https://api.whatsapp.com/send/?phone=34601317959&text=${text}`, '_blank');
  };

  return (
    <section id="calculadora-40" className="w-full bg-[#FCFAF7] py-space-4xl border-y border-[#C7A46B]/25">
      <div className="max-w-[1100px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="text-[12px] font-bold text-[#EE295C] tracking-[0.2em] uppercase block mb-space-2xs">
            {c.badge}
          </span>
          <h2
            id="calculator-heading"
            className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold tracking-tight mb-space-xs"
          >
            {c.title}
          </h2>
          <p className="text-[15px] text-[#685354] leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl fine-border crisp-shadow">
            <h3 className="font-serif text-[20px] font-bold text-[#201415] mb-5 pb-3 border-b border-[#C7A46B]/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF6161]">tune</span>
              <span>Personaliza tus parámetros</span>
            </h3>

            <div className="space-y-5">
              {/* Age Slider & Input */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[13px] font-bold text-[#201415]">{c.ageLabel}</label>
                  <span className="font-serif text-[17px] font-bold text-[#EE295C]">{age} años</span>
                </div>
                <input
                  type="range"
                  min="38"
                  max="68"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-[#EE295C] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#685354] mt-1">
                  <span>38</span>
                  <span>50</span>
                  <span>68+</span>
                </div>
              </div>

              {/* Weight Slider & Input */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[13px] font-bold text-[#201415]">{c.weightLabel}</label>
                  <span className="font-serif text-[17px] font-bold text-[#EE295C]">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="115"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-[#EE295C] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#685354] mt-1">
                  <span>45 kg</span>
                  <span>75 kg</span>
                  <span>115 kg</span>
                </div>
              </div>

              {/* Activity Level Selector */}
              <div>
                <label className="block text-[13px] font-bold text-[#201415] mb-2">{c.activityLabel}</label>
                <div className="space-y-2">
                  {(['sedentary', 'moderate', 'strength'] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActivity(key)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all flex items-center justify-between cursor-pointer ${
                        activity === key
                          ? 'bg-[#F8CFD5]/40 border-2 border-[#EE295C] text-[#201415] shadow-xs'
                          : 'bg-[#F6F1EA]/60 border border-[#C7A46B]/25 text-[#685354] hover:bg-[#F6F1EA]'
                      }`}
                    >
                      <span>{c.activityOptions[key]}</span>
                      {activity === key && (
                        <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check_circle</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal Selector */}
              <div>
                <label className="block text-[13px] font-bold text-[#201415] mb-2">{c.goalLabel}</label>
                <div className="space-y-2">
                  {(['metabolism', 'muscle', 'hormones'] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setGoal(key)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all flex items-center justify-between cursor-pointer ${
                        goal === key
                          ? 'bg-[#F8CFD5]/40 border-2 border-[#EE295C] text-[#201415] shadow-xs'
                          : 'bg-[#F6F1EA]/60 border border-[#C7A46B]/25 text-[#685354] hover:bg-[#F6F1EA]'
                      }`}
                    >
                      <span>{c.goalOptions[key]}</span>
                      {goal === key && (
                        <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check_circle</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-gradient-to-br from-[#201415] to-[#2B1D1E] text-white p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden fine-border-dark">
              {/* Background radiant ambient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6161]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold bg-[#FF6161]/20 text-[#F8CFD5] border border-[#FF6161]/30 inline-block mb-3">
                  Protocolo Calculado
                </span>
                <h3 className="font-serif text-[24px] font-bold text-white mb-6">
                  {c.resultsTitle}
                </h3>

                {/* Primary Metric Block: Protein Target */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm fine-border-dark">
                    <p className="text-[11px] text-[#F8CFD5] uppercase tracking-wider font-semibold mb-1">
                      {c.proteinTarget}
                    </p>
                    <p className="font-serif text-[34px] sm:text-[40px] font-bold text-white leading-none mb-1">
                      {totalDailyProtein} <span className="text-lg font-normal text-[#F6F1EA]/70">g/día</span>
                    </p>
                    <p className="text-[11px] text-[#F6F1EA]/60 leading-tight">
                      ~{(totalDailyProtein / weight).toFixed(1)} g por kg de peso
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm fine-border-dark">
                    <p className="text-[11px] text-[#F8CFD5] uppercase tracking-wider font-semibold mb-1">
                      {c.proteinPerMeal}
                    </p>
                    <p className="font-serif text-[34px] sm:text-[40px] font-bold text-[#F69C05] leading-none mb-1">
                      {proteinPerMealMin} <span className="text-lg font-normal text-[#F6F1EA]/70">g/comida</span>
                    </p>
                    <p className="text-[11px] text-[#F6F1EA]/60 leading-tight">
                      Activa vía mTOR celular ({leucineTarget} leucina)
                    </p>
                  </div>
                </div>

                {/* Secondary Specs */}
                <div className="space-y-2.5 text-[13px] bg-white/5 p-4 rounded-2xl fine-border-dark mb-6">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-[#F6F1EA]/80 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#FF6161] text-[18px]">fitness_center</span>
                      {c.trainingTarget}:
                    </span>
                    <span className="font-bold text-white">{weeklyStrengthSessions}</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-[#F6F1EA]/80 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F69C05] text-[18px]">directions_walk</span>
                      Actividad diaria:
                    </span>
                    <span className="font-bold text-white">{stepsTarget}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#F6F1EA]/80 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#C7A46B] text-[18px]">schedule</span>
                      {c.circadianWindow}:
                    </span>
                    <span className="font-bold text-[#F8CFD5]">{circadianWindow}</span>
                  </div>
                </div>

                {/* Recommended Biomarkers */}
                <div className="mb-6">
                  <p className="text-[11px] text-[#F8CFD5] uppercase tracking-widest font-bold mb-2">
                    {c.biomarkersTitle}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px]">
                    {priorityBiomarkers.map((bio, idx) => (
                      <div key={idx} className="bg-white/5 p-2.5 rounded-xl fine-border-dark flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#FF6161] text-[16px] shrink-0 mt-0.5">
                          science
                        </span>
                        <div>
                          <p className="font-semibold text-white leading-tight">{bio.name}</p>
                          <p className="text-[10px] text-[#F6F1EA]/60 leading-tight">{bio.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    id="btn-consultar-calculadora"
                    onClick={handleConsultWhatsApp}
                    className="flex-1 py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] hover:opacity-95 text-white text-[13px] font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>{c.consultCarolinaBtn}</span>
                  </button>

                  <button
                    id="btn-copiar-calculo"
                    onClick={handleCopy}
                    className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white text-[13px] font-semibold rounded-full fine-border-dark transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[17px]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? c.copiedMsg : c.copyBtn}</span>
                  </button>
                </div>

                <p className="text-[10px] text-[#F6F1EA]/50 mt-4 text-center italic">
                  {c.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
