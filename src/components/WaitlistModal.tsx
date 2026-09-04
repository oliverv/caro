import React, { useState } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  areaTitle: string;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, areaTitle, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setGoal('');
    onClose();
  };

  return (
    <div
      id="waitlist-modal-backdrop"
      onClick={handleResetAndClose}
      className="fixed inset-0 bg-[#201415]/70 backdrop-blur-md z-[110] flex items-center justify-center p-4"
    >
      <div
        id="waitlist-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 fine-border shadow-2xl relative"
      >
        <button
          id="btn-close-waitlist"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#F8CFD5] text-[#EE295C] mx-auto flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
            </div>
            <h3 className="font-serif text-[24px] text-[#201415] font-bold mb-2">
              ¡Estás en la lista prioritaria!
            </h3>
            <p className="text-[14px] text-[#685354] max-w-sm mx-auto mb-6">
              Te avisaremos con acceso exclusivo y tarifa preferencial para el módulo{' '}
              <strong className="text-[#201415]">{areaTitle}</strong> en cuanto abramos plazas.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 bg-[#201415] text-white text-[13px] font-bold rounded-full hover:bg-black transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div>
            <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold bg-[#F6F1EA] text-[#C7A46B] border border-[#C7A46B]/30 inline-block mb-2">
              Lista de Espera Anticipada
            </span>
            <h3 className="font-serif text-[24px] text-[#201415] italic font-semibold mb-2">
              {areaTitle}
            </h3>
            <p className="text-[13px] text-[#685354] mb-5">
              Sé de las primeras en acceder a este nuevo protocolo con plazas limitadas y supervisión personalizada de Carolina.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[12px] font-bold text-[#201415] mb-1">Nombre completo</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/50 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#201415] mb-1">Correo electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/50 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#201415] mb-1">
                  ¿Cuál es tu mayor desafío en esta área? (Opcional)
                </label>
                <input
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
                  className="w-full py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold rounded-full shadow-md hover:opacity-95 transition-opacity cursor-pointer"
                >
                  Unirme a la lista prioritaria
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
