import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ContactoPageProps {
  onNavigateHome: () => void;
  onNavigatePrivacy: () => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({
  onNavigateHome,
  onNavigatePrivacy
}) => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    email: '',
    phone: '',
    consultationReason: 'Quiero mejorar mi salud',
    aspectsToImprove: [] as string[],
    triedBefore: 'no',
    whatWorked: '',
    message: '',
    privacyConsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const availableAspects = [
    'Digestión / Hinchazón',
    'Peso / Grasa visceral',
    'Energía / Fatiga',
    'Calidad del Sueño',
    'Inflamación / Dolores',
    'Claridad Mental',
    'Equilibrio Hormonal',
    'Hábitos Sostenibles'
  ];

  const handleToggleAspect = (aspect: string) => {
    setFormData((prev) => {
      const exists = prev.aspectsToImprove.includes(aspect);
      if (exists) {
        return {
          ...prev,
          aspectsToImprove: prev.aspectsToImprove.filter((a) => a !== aspect)
        };
      } else {
        return {
          ...prev,
          aspectsToImprove: [...prev.aspectsToImprove, aspect]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.privacyConsent) {
      alert('Por favor completa todos los campos requeridos y acepta la política de privacidad.');
      return;
    }
    setSubmitted(true);
  };

  const sendWhatsAppSummary = () => {
    const text = `Hola Carolina! Acabo de enviar mi formulario de consulta inicial:%0A%0A*Nombre:* ${encodeURIComponent(formData.fullName)}%0A*Fecha Nacimiento:* ${encodeURIComponent(formData.birthDate || 'No indicada')}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Tel:* ${encodeURIComponent(formData.phone)}%0A*Motivo:* ${encodeURIComponent(formData.consultationReason)}%0A*Aspectos:* ${encodeURIComponent(formData.aspectsToImprove.join(', '))}%0A*Métodos previos:* ${formData.triedBefore === 'yes' ? 'Sí' : 'No'}%0A*Detalles:* ${encodeURIComponent(formData.whatWorked || 'Ninguno')}%0A*Mensaje:* ${encodeURIComponent(formData.message || 'Sin mensaje adicional')}`;
    window.open(`https://api.whatsapp.com/send/?phone=34601317959&text=${text}`, '_blank');
  };

  return (
    <article id="contacto-page" className="w-full bg-[#F6F1EA] text-[#201415] pb-24">
      {/* Breadcrumb Header */}
      <section className="border-b border-[#C7A46B]/20 bg-white/40 backdrop-blur-sm py-4">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between text-[13px]">
          <nav className="flex items-center gap-2 text-[#685354]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#EE295C] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
            </button>
            <span>/</span>
            <span className="text-[#201415] font-semibold">
              {language === 'es' ? 'Contacto Nutricionista' : 'Contact Nutritionist'}
            </span>
          </nav>
          <span className="text-[11px] uppercase tracking-widest text-[#EE295C] font-bold">
            Nutrissia Wellness • Pozuelo / Madrid
          </span>
        </div>
      </section>

      {/* Header */}
      <header className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8CFD5]/50 text-[#EE295C] text-[12px] font-bold tracking-widest uppercase mb-4 fine-border">
          <span className="w-2 h-2 rounded-full bg-[#EE295C]" />
          <span>Consulta Inicial sin coste</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#201415] tracking-tight">
          Contacto Nutricionista
        </h1>

        <p className="mt-3 text-lg text-[#EE295C] font-serif italic">
          Carolina Barcellona — Nutrissia Wellness
        </p>

        <p className="mt-2 text-sm sm:text-base text-[#685354] max-w-xl mx-auto">
          Cuéntame tu momento vital y tus objetivos. Responderé personalmente en menos de 24 horas laborables.
        </p>
      </header>

      {/* Main Layout: Form + Clinic Info */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8 bg-white rounded-3xl fine-border shadow-xl p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#201415]">
                  ¡Formulario Enviado con Éxito!
                </h2>
                <p className="text-[#685354] text-sm max-w-md mx-auto">
                  Gracias por tu confianza, <strong className="text-[#201415]">{formData.fullName}</strong>. He recibido tus respuestas y me pondré en contacto contigo a la brevedad.
                </p>

                {/* Direct WhatsApp Action */}
                <div className="pt-4 max-w-md mx-auto">
                  <button
                    onClick={sendWhatsAppSummary}
                    className="w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>Enviar también este resumen a mi WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#685354] mt-2">
                    Si deseas agilizar tu cita, puedes enviarme un mensaje directo ahora mismo.
                  </p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-[#EE295C] underline font-bold cursor-pointer"
                >
                  Enviar otro formulario
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-xl font-bold text-[#201415] border-b border-[#C7A46B]/20 pb-3">
                  Cuestionario de Valoración Inicial
                </h2>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej. María Gómez"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-sm text-[#201415] focus:outline-none focus:ring-2 focus:ring-[#EE295C]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-1">
                      Fecha de Nacimiento *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-sm text-[#201415] focus:outline-none focus:ring-2 focus:ring-[#EE295C]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="maria@ejemplo.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-sm text-[#201415] focus:outline-none focus:ring-2 focus:ring-[#EE295C]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-sm text-[#201415] focus:outline-none focus:ring-2 focus:ring-[#EE295C]/40"
                    />
                  </div>
                </div>

                {/* Motivo de Consulta */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-2">
                    ¿Cuál es tu motivo principal de consulta?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Quiero mejorar mi salud',
                      'Bajar de peso y grasa',
                      'Verme y sentirme mejor'
                    ].map((reason) => (
                      <button
                        type="button"
                        key={reason}
                        onClick={() => setFormData({ ...formData, consultationReason: reason })}
                        className={`p-3 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                          formData.consultationReason === reason
                            ? 'bg-[#EE295C] text-white shadow-xs'
                            : 'bg-[#F6F1EA] text-[#685354] fine-border hover:bg-[#F8CFD5]/40'
                        }`}
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Aspectos a Mejorar (chips) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-2">
                    Aspectos prioritarios que deseas mejorar:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableAspects.map((aspect) => {
                      const isSelected = formData.aspectsToImprove.includes(aspect);
                      return (
                        <button
                          type="button"
                          key={aspect}
                          onClick={() => handleToggleAspect(aspect)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#201415] text-white'
                              : 'bg-[#F6F1EA] text-[#685354] fine-border hover:border-[#EE295C]'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {aspect}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Métodos Previos */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-1">
                    ¿Has probado antes otros métodos, dietas o terapias?
                  </label>
                  <div className="flex gap-4 mb-2">
                    <label className="inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="triedBefore"
                        checked={formData.triedBefore === 'yes'}
                        onChange={() => setFormData({ ...formData, triedBefore: 'yes' })}
                        className="text-[#EE295C]"
                      />
                      <span>Sí, he probado antes</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="triedBefore"
                        checked={formData.triedBefore === 'no'}
                        onChange={() => setFormData({ ...formData, triedBefore: 'no' })}
                        className="text-[#EE295C]"
                      />
                      <span>No, es mi primera vez</span>
                    </label>
                  </div>

                  {formData.triedBefore === 'yes' && (
                    <textarea
                      rows={2}
                      value={formData.whatWorked}
                      onChange={(e) => setFormData({ ...formData, whatWorked: e.target.value })}
                      placeholder="¿Qué funcionó y qué no funcionó en esas experiencias?"
                      className="w-full px-4 py-2 rounded-xl bg-[#F6F1EA] fine-border text-xs text-[#201415] focus:outline-none focus:ring-2 focus:ring-[#EE295C]/40"
                    />
                  )}
                </div>

                {/* Mensaje Adicional */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#685354] mb-1">
                    Mensaje Adicional o Síntomas Particulares
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame cualquier detalle de tu día a día, horarios o sensaciones..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-sm text-[#201415] focus:outline-none focus:ring-2 focus:ring-[#EE295C]/40"
                  />
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="privacy-consent-input"
                    required
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 text-[#EE295C] cursor-pointer"
                  />
                  <label htmlFor="privacy-consent-input" className="text-[11.5px] text-[#685354] leading-tight">
                    Acepto el tratamiento de mis datos de acuerdo con la{' '}
                    <button
                      type="button"
                      onClick={onNavigatePrivacy}
                      className="text-[#EE295C] underline font-bold cursor-pointer"
                    >
                      Política de Privacidad
                    </button>
                    . Tus datos están seguros y nunca serán cedidos a terceros.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-101 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Enviar Consulta Inicial a Carolina</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Clinic Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl fine-border shadow-md p-6 space-y-5">
              <h3 className="font-serif text-lg font-bold text-[#201415] border-b border-[#C7A46B]/20 pb-2">
                Studio & Consultas
              </h3>

              <div className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-[#EE295C] shrink-0 mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="font-bold text-[#201415]">Dirección</p>
                  <p className="text-xs text-[#685354]">
                    Calle Camino de los Bonetes 2, 28250 Madrid (Pozuelo de Alarcón / Madrid)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-[#EE295C] shrink-0 mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="font-bold text-[#201415]">Horario de Atención</p>
                  <p className="text-xs text-[#685354]">
                    Lunes a Jueves: 9:00 - 17:00
                  </p>
                  <p className="text-xs text-[#685354]">
                    Viernes: Evaluaciones online con cita previa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-[#EE295C] shrink-0 mt-0.5">
                  call
                </span>
                <div>
                  <p className="font-bold text-[#201415]">Teléfono / WhatsApp</p>
                  <p className="text-xs text-[#685354]">+34 601 31 79 59</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-[#EE295C] shrink-0 mt-0.5">
                  mail
                </span>
                <div>
                  <p className="font-bold text-[#201415]">Correo Electrónico</p>
                  <p className="text-xs text-[#685354]">info@nutrissiawellness.com</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#C7A46B]/20">
                <a
                  href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20quiero%20hacerte%20una%20consulta%20directa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Online / Worldwide Banner */}
            <div className="bg-[#201415] text-white rounded-3xl p-6 shadow-md">
              <span className="text-xs text-[#C7A46B] font-bold uppercase tracking-wider block mb-1">
                Atención Internacional
              </span>
              <p className="font-serif text-lg font-bold">
                ¿Vives fuera de Madrid o España?
              </p>
              <p className="text-xs text-white/70 mt-2 leading-relaxed">
                El 65% de nuestras pacientes realizan el método de forma 100% online por videoconferencia, con envío de kits epigenéticos a domicilio en Europa y América.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
