import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDialogFocus } from '../hooks/useDialogFocus';

interface WaitlistModalProps {
  isOpen: boolean;
  areaTitle: string;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, areaTitle, onClose }) => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('');
  const [preparedMessageUrl, setPreparedMessageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const message = `Hola Carolina, soy ${name.trim()} y quiero solicitar acceso prioritario al módulo ${areaTitle}. Prefiero compartir mis datos y objetivos directamente contigo.`;
    setPreparedMessageUrl(`https://wa.me/34601317959?text=${encodeURIComponent(message)}`);
  };

  const handleResetAndClose = () => {
    setPreparedMessageUrl('');
    setName('');
    setEmail('');
    setGoal('');
    onClose();
  };

  const dialogRef = useDialogFocus<HTMLDivElement>(isOpen, handleResetAndClose);

  if (!isOpen) return null;

  return (
    <div
      id="waitlist-modal-backdrop"
      onClick={handleResetAndClose}
      onKeyDown={(event) => {
        if (event.key === 'Escape') handleResetAndClose();
      }}
      className="fixed inset-0 bg-[#201415]/70 backdrop-blur-md z-[110] flex items-center justify-center p-4"
    >
      <div
        ref={dialogRef}
        id="waitlist-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-modal-title"
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 fine-border shadow-2xl relative"
      >
        <button
          id="btn-close-waitlist"
          type="button"
          aria-label={language === 'en' ? 'Close waitlist form' : language === 'fr' ? "Fermer le formulaire d'attente" : 'Cerrar formulario de espera'}
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {preparedMessageUrl ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#F8CFD5] text-[#B90040] mx-auto flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
            </div>
            <h3 className="font-serif text-[24px] text-[#201415] font-bold mb-2">
              {language === 'en' ? 'Your request is ready' : language === 'fr' ? 'Votre demande est prête' : 'Tu solicitud está preparada'}
            </h3>
            <p className="text-[14px] text-[#685354] max-w-sm mx-auto mb-6">
              {language === 'en' ? 'WhatsApp will open with your request. Review it and press Send to contact Carolina about ' : language === 'fr' ? 'WhatsApp va ouvrir votre demande. Vérifiez-la puis appuyez sur Envoyer pour contacter Carolina au sujet de ' : 'Se abrirá WhatsApp con tu solicitud. Revísala y pulsa Enviar para contactar con Carolina sobre '}
              <strong className="text-[#201415]">{areaTitle}</strong>. {language === 'en' ? 'It has not been sent yet.' : language === 'fr' ? "Elle n'a pas encore été envoyée." : 'Aún no se ha enviado.'}
            </p>
            <a
              href={preparedMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#B90040] text-white text-[13px] font-bold rounded-full hover:opacity-90 transition-opacity mb-3"
            >
              {language === 'en' ? 'Open WhatsApp' : language === 'fr' ? 'Ouvrir WhatsApp' : 'Abrir WhatsApp'}
            </a>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-6 py-2.5 bg-[#201415] text-white text-[13px] font-bold rounded-full hover:bg-black transition-colors"
            >
              {language === 'en' ? 'Close' : language === 'fr' ? 'Fermer' : 'Cerrar'}
            </button>
          </div>
        ) : (
          <div>
            <span className="px-3 py-1 rounded-full text-[12px] tracking-wider uppercase font-bold bg-[#F6F1EA] text-[#7E5B20] border border-[#C7A46B]/30 inline-block mb-2">
              Lista de Espera Anticipada
            </span>
            <h3 className="font-serif text-[24px] text-[#201415] italic font-semibold mb-2">
              <span id="waitlist-modal-title">{areaTitle}</span>
            </h3>
            <p className="text-[13px] text-[#685354] mb-5">
              Sé de las primeras en acceder a este nuevo protocolo con plazas limitadas y supervisión personalizada de Carolina.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="waitlist-name" className="block text-[12px] font-bold text-[#201415] mb-1">{language === 'en' ? 'Full name' : language === 'fr' ? 'Nom complet' : 'Nombre completo'}</label>
                <input
                  id="waitlist-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/50 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                />
              </div>

              <div>
                <label htmlFor="waitlist-email" className="block text-[12px] font-bold text-[#201415] mb-1">{language === 'en' ? 'Email address' : language === 'fr' ? 'Adresse e-mail' : 'Correo electrónico'}</label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/50 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                />
              </div>

              <div>
                <label htmlFor="waitlist-goal" className="block text-[12px] font-bold text-[#201415] mb-1">
                  {language === 'en' ? 'What is your biggest challenge in this area? (Optional)' : language === 'fr' ? 'Quel est votre principal défi dans ce domaine ? (Facultatif)' : '¿Cuál es tu mayor desafío en esta área? (Opcional)'}
                </label>
                <input
                  id="waitlist-goal"
                  name="goal"
                  type="text"
                  placeholder="Ej: Despertares a las 3 AM, falta de concentración..."
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/50 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#D6254F] to-[#B90040] text-white text-[13px] font-bold rounded-full shadow-md hover:opacity-95 transition-opacity cursor-pointer"
                >
                  {language === 'en' ? 'Prepare request via WhatsApp' : language === 'fr' ? 'Préparer la demande sur WhatsApp' : 'Preparar solicitud por WhatsApp'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
