import React, { useState } from 'react';
import { ASSETS } from '../data';

interface FooterProps {
  onOpenProgramModal: () => void;
  onOpenDiagnosticModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProgramModal, onOpenDiagnosticModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="w-full bg-[#201415] text-[#F6F1EA] pt-space-4xl pb-space-2xl border-t border-[#C7A46B]/25">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-2xl pb-space-3xl border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-space-md">
              <img
                alt="Carolina Barcellona"
                className="h-9 w-auto mix-blend-luminosity invert"
                src={ASSETS.logo}
              />
              <div className="flex flex-col">
                <span className="font-serif text-[17px] tracking-tight font-bold text-white">
                  CAROLINA BARCELLONA
                </span>
                <span className="text-[9px] text-[#C7A46B] tracking-[0.2em] font-semibold uppercase">
                  HEALTH & LONGEVITY 40+
                </span>
              </div>
            </div>
            <p className="text-[13px] text-[#F6F1EA]/75 max-w-sm mb-space-md leading-relaxed">
              Nutrición Epigenética, optimización metabólica y medicina del estilo de vida para mujeres después de los 40.
            </p>
            <p className="text-[12px] text-[#C7A46B]">
              Biolifestyle Studio • Pozuelo de Alarcón / Madrid
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="font-serif text-[15px] font-bold tracking-wider uppercase mb-space-md text-[#F8CFD5]">
              Explorar
            </p>
            <ul className="space-y-space-xs text-[13px] text-[#F6F1EA]/75">
              <li>
                <button
                  id="footer-link-inicio"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  id="footer-link-sobre-mi"
                  onClick={() => scrollToSection('sobre-mi')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button
                  id="footer-link-metodo-diosa"
                  onClick={onOpenProgramModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Método Código Diosa 90
                </button>
              </li>
              <li>
                <button
                  id="footer-link-test"
                  onClick={onOpenDiagnosticModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Test de Autoevaluación
                </button>
              </li>
              <li>
                <button
                  id="footer-link-testimonios"
                  onClick={() => scrollToSection('testimonios')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Casos de Éxito
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-5">
            <p className="font-serif text-[15px] font-bold tracking-wider uppercase mb-space-xs text-[#F8CFD5]">
              Newsletter Celular 40+
            </p>
            <p className="text-[13px] text-[#F6F1EA]/75 mb-space-md leading-relaxed">
              Píldoras semanales de ciencia epigenética, cronobiología y recetas funcionales para potenciar tu metabolismo.
            </p>

            {subscribed ? (
              <div
                id="newsletter-success"
                className="p-3 bg-[#EE295C]/20 border border-[#EE295C]/50 rounded-xl text-[13px] text-[#F8CFD5] flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>¡Gracias por unirte a la comunidad de mujeres 40+! Te llegará un correo de bienvenida.</span>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-white/10 fine-border-dark rounded-full text-white placeholder-[#F6F1EA]/40 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold rounded-full hover:opacity-90 transition-opacity cursor-pointer shrink-0"
                >
                  Suscribirme
                </button>
              </form>
            )}

            {/* Payment & Security Badges */}
            <div className="mt-space-lg flex items-center gap-2 text-[10px] text-[#F6F1EA]/50 font-semibold tracking-wider">
              <span>MÉTODOS DE PAGO:</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white">BIZUM</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white">PAYPAL</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white">TRANSFERENCIA</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F6F1EA]/50 gap-4">
          <p>© {new Date().getFullYear()} Carolina Barcellona. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Aviso Legal</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidad</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
