import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SobreMiPageProps {
  onOpenBookingModal: () => void;
  onNavigateHome: () => void;
  onNavigatePlanes: () => void;
}

export const SobreMiPage: React.FC<SobreMiPageProps> = ({
  onOpenBookingModal,
  onNavigateHome,
  onNavigatePlanes
}) => {
  const { language } = useLanguage();

  const openWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20he%20le%C3%ADdo%20tu%20historia%20en%20Sobre%20M%C3%AD%20y%20quiero%20conocer%20tu%20m%C3%A9todo',
      '_blank'
    );
  };

  return (
    <article id="sobre-mi-page" className="w-full bg-[#F6F1EA] text-[#201415] pb-24">
      {/* Breadcrumb Header */}
      <section className="border-b border-[#C7A46B]/20 bg-white/40 backdrop-blur-sm py-4">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between text-[13px]">
          <nav className="flex items-center gap-2 text-[#685354]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#EE295C] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{language === 'es' ? 'Inicio' : language === 'fr' ? 'Accueil' : 'Home'}</span>
            </button>
            <span>/</span>
            <span className="text-[#201415] font-semibold">
              {language === 'es' ? 'Sobre mí' : language === 'fr' ? 'À propos' : 'About me'}
            </span>
          </nav>
          <span className="text-[11px] uppercase tracking-widest text-[#C7A46B] font-bold hidden sm:inline-block">
            Mentora & Autora de El Código Diosa
          </span>
        </div>
      </section>

      {/* Hero Statement */}
      <header className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8CFD5]/40 text-[#EE295C] text-[12px] font-bold tracking-widest uppercase mb-4 fine-border">
          <span className="w-2 h-2 rounded-full bg-[#EE295C] animate-pulse" />
          <span>{language === 'es' ? 'Tu código no es tu destino' : language === 'fr' ? 'Votre code n\'est pas votre destin' : 'Your code is not your destiny'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#201415] font-bold tracking-tight leading-[1.15] max-w-3xl">
          {language === 'es'
            ? 'Reprograma tu biología: El arte de habitar en ti.'
            : language === 'fr'
            ? 'Reprogrammez votre biologie : L\'art d\'habiter son corps.'
            : 'Reprogram your biology: The art of dwelling within yourself.'}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#685354] max-w-2xl font-light leading-relaxed">
          {language === 'es'
            ? 'Soberanía Biológica: Ciencia rigurosa y conciencia corporal puestas al servicio de tu longevidad y vitalidad femenina tras los 40.'
            : language === 'fr'
            ? 'Souveraineté biologique : Science rigoureuse et conscience corporelle au service de votre vitalité après 40 ans.'
            : 'Biological Sovereignty: Rigorous science and somatic awareness serving your longevity and vitality beyond 40.'}
        </p>
      </header>

      {/* Story & Personal Journey */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl fine-border bg-[#201415]">
              <img
                src="https://carolinabarcellona.com/wp-content/uploads/2025/03/image00022-768x1152.jpeg"
                alt="Carolina Barcellona"
                referrerPolicy="no-referrer"
                className="w-full h-[520px] object-cover object-top hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201415]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-serif text-xl font-bold">Carolina Barcellona</p>
                <p className="text-[#F8CFD5] text-xs uppercase tracking-widest font-semibold mt-0.5">
                  Especialista en Medicina del Estilo de Vida & Epigenética
                </p>
              </div>
            </div>

            {/* Floating Credential Pill */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl fine-border max-w-[260px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#EE295C] text-[20px]">verified</span>
                <span className="text-[12px] font-bold text-[#201415]">UCM Nirakara Labs</span>
              </div>
              <p className="text-[11px] text-[#685354] leading-snug">
                Medicina del Estilo de Vida • Universidad Complutense de Madrid
              </p>
            </div>
          </div>

          {/* Written Bio / Narrative from carolinabarcellona.com */}
          <div className="lg:col-span-7 space-y-6 text-[#201415]">
            <div className="border-l-2 border-[#EE295C] pl-5">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201415]">
                {language === 'es' ? 'Hola, soy Carolina' : language === 'fr' ? 'Bonjour, je suis Carolina' : 'Hello, I am Carolina'}
              </h2>
              <p className="text-[15px] text-[#EE295C] font-semibold mt-1">
                {language === 'es' ? 'No siempre habité mi cuerpo en paz.' : 'I did not always inhabit my body in peace.'}
              </p>
            </div>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#685354] leading-relaxed">
              <p>
                {language === 'es'
                  ? 'Durante años, mi vida transcurrió entre shootings fotográficos y aeropuertos internacionales de moda mientras, en silencio, mi cuerpo reflejaba el impacto acumulativo de vivir desconectada de mi propia biología.'
                  : 'For years, my life unfolded between high-pace photo shoots and international airports while, in silence, my body reflected the cumulative toll of living disconnected from my own biology.'}
              </p>
              <p>
                {language === 'es'
                  ? 'Mi piel, mis niveles de energía, mi relación con la comida y mi salud general se convirtieron en señales de alarma de un desequilibrio mucho más profundo. Pero fue la maternidad la que me obligó a detenerme por completo, escucharme de verdad y reconstruirme desde los mismos cimientos.'
                  : 'My skin, my energy levels, my relationship with food, and my overall health became warning signals of a deeper imbalance. But it was motherhood that compelled me to pause completely, truly listen to myself, and rebuild from the ground up.'}
              </p>
              <p>
                {language === 'es'
                  ? 'Ese fue el inicio de un camino de transformación que no comenzó en un aula teórica, sino en la necesidad vital de recuperar mi propio equilibrio físico, hormonal y mental. Comencé a estudiar, investigar y experimentar en mi propio organismo la íntima relación entre nutrición celular, sistema nervioso autónomo, inflamación crónica, movimiento consciente, descanso y presencia corporal.'
                  : 'That was the start of a transformation journey that began not in a theoretical classroom, but from the imperative need to reclaim my own physical, hormonal, and mental equilibrium.'}
              </p>
              <p className="font-medium text-[#201415] bg-[#F8CFD5]/20 p-4 rounded-2xl border border-[#EE295C]/20">
                {language === 'es'
                  ? '«Y comprendí algo esencial: el cuerpo responde a cómo pensamos, respiramos, descansamos, nos alimentamos y nos relacionamos con nosotras mismas. Cuando el organismo recupera su coherencia, cambia la energía, cambia la frecuencia.»'
                  : '«And I understood something essential: the body responds to how we think, breathe, rest, nourish ourselves, and relate to ourselves. When the organism regains its coherence, energy transforms, frequency shifts.»'}
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                id="sobre-mi-booking-btn"
                onClick={onOpenBookingModal}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white font-bold text-[14px] shadow-md hover:shadow-lg hover:scale-102 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{language === 'es' ? 'Reserva tu sesión informativa gratuita' : 'Book free introductory session'}</span>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </button>

              <button
                id="sobre-mi-whatsapp-btn"
                onClick={openWhatsApp}
                className="px-6 py-3 rounded-full bg-white fine-border text-[#201415] hover:text-[#EE295C] font-semibold text-[14px] shadow-xs hover:bg-[#F8CFD5]/30 transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-emerald-600">chat</span>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Credentials: El Respaldo Detrás de la Transformación */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] block mb-2">
            Rigor Científico & Acreditación
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#201415] font-bold">
            {language === 'es' ? 'El Respaldo Detrás de la Transformación' : 'The Clinical Backing Behind Transformation'}
          </h2>
          <p className="text-[#685354] text-[15px] mt-3">
            {language === 'es'
              ? 'He unido mi experiencia vital con una formación académica de excelencia para ofrecerte resultados medibles y sostenibles:'
              : 'Combining real personal experience with rigorous academic training for measurable, sustainable results:'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl fine-border shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#EE295C]/10 text-[#EE295C] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">local_hospital</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#201415]">
              Medicina del Estilo de Vida
            </h3>
            <p className="text-[13px] text-[#EE295C] font-semibold mt-1">
              Universidad Complutense de Madrid
            </p>
            <p className="text-[12px] text-[#685354] mt-2 leading-relaxed">
              Formación avanzada en Nirakara Labs y Facultad de Medicina UCM sobre modificación de hábitos y reversión de factores de riesgo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl fine-border shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#C7A46B]/15 text-[#C7A46B] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">biotech</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#201415]">
              Nutrición Ortomolecular
            </h3>
            <p className="text-[13px] text-[#C7A46B] font-semibold mt-1">
              UCAM (Univ. Católica de Murcia)
            </p>
            <p className="text-[12px] text-[#685354] mt-2 leading-relaxed">
              Equilibrio celular de micronutrientes, aminoácidos, cofactores enzimáticos y modulación mitocondrial individualizada.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl fine-border shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FF6161]/15 text-[#FF6161] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">dna</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#201415]">
              Nutrigenética & Epigenética
            </h3>
            <p className="text-[13px] text-[#FF6161] font-semibold mt-1">
              Instituto de Nutrigenómica
            </p>
            <p className="text-[12px] text-[#685354] mt-2 leading-relaxed">
              Interpretación de polimorfismos y modulación de la expresión génica a través de alimentos bioactivos y ritmos circadianos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl fine-border shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#F69C05]/15 text-[#F69C05] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">self_improvement</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#201415]">
              Kundalini Yoga & Mindfulness
            </h3>
            <p className="text-[13px] text-[#F69C05] font-semibold mt-1">
              Instructora Certificada IKYTA
            </p>
            <p className="text-[12px] text-[#685354] mt-2 leading-relaxed">
              Técnicas de regulación del tono vagal, respiración diafragmática y coherencia cardíaca para calmar el sistema simpático.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Transformation Ritual from carolinabarcellona.com */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20">
        <div className="bg-gradient-to-br from-[#201415] to-[#2F1D1F] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] block mb-2">
              Tu Ritual de Transformación
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              {language === 'es' ? 'El Método Código Diosa' : 'The Goddess Code Method'}
            </h2>
            <p className="text-[#F6F1EA]/80 text-[15px] max-w-2xl mb-10">
              {language === 'es'
                ? 'Mi método no es una dieta restrictiva: es una reprogramación integral para recuperar tu soberanía biológica en 3 fases secuenciales.'
                : 'My method is not a restrictive diet: it is an integral reprogramming to reclaim your biological sovereignty.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <span className="font-serif text-3xl font-bold text-[#FF6161]">01</span>
                <h3 className="font-serif text-lg font-bold mt-2 text-white">
                  Diagnóstico Epigenético
                </h3>
                <p className="text-xs text-[#C7A46B] uppercase tracking-wider font-semibold mt-1">
                  Alta Precisión Celular
                </p>
                <p className="text-[13px] text-[#F6F1EA]/70 mt-3 leading-relaxed">
                  Evaluamos tus biomarcadores sanguíneos, composición tisular por bioimpedancia y niveles de estrés celular para saber exactamente dónde empezar.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <span className="font-serif text-3xl font-bold text-[#EE295C]">02</span>
                <h3 className="font-serif text-lg font-bold mt-2 text-white">
                  Protocolo Biohacking
                </h3>
                <p className="text-xs text-[#F8CFD5] uppercase tracking-wider font-semibold mt-1">
                  Nutrición & Longevidad
                </p>
                <p className="text-[13px] text-[#F6F1EA]/70 mt-3 leading-relaxed">
                  Estructuramos tu plan nutricional antiinflamatorio, sincronización circadiana, fuerza progresiva y suplementación ortomolecular precisa.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <span className="font-serif text-3xl font-bold text-[#C7A46B]">03</span>
                <h3 className="font-serif text-lg font-bold mt-2 text-white">
                  Mentoría Continua
                </h3>
                <p className="text-xs text-[#C7A46B] uppercase tracking-wider font-semibold mt-1">
                  Acompañamiento 1 a 1
                </p>
                <p className="text-[13px] text-[#F6F1EA]/70 mt-3 leading-relaxed">
                  Sesiones quincenales directas con Carolina, resolución de dudas por canal privado y ajustes basados en tu evolución para sostener los cambios de por vida.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[14px] text-[#F6F1EA]/80 font-medium">
                ¿Lista para descifrar tu código biológico y vivir en coherencia?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onNavigatePlanes}
                  className="px-5 py-2.5 rounded-full bg-white text-[#201415] hover:bg-[#F8CFD5] text-[13px] font-bold transition-all cursor-pointer"
                >
                  Ver Planes & Precios
                </button>
                <button
                  onClick={onOpenBookingModal}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  Reservar Cita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
