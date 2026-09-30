import React, { useState } from 'react';
import { BrandMark } from './BrandMark';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onOpenProgramModal: () => void;
  onOpenDiagnosticModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenProgramModal,
  onOpenDiagnosticModal
}) => {
  const { t, language } = useLanguage();
  const ft = t.footer;

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mailHandoff, setMailHandoff] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    const subject = encodeURIComponent(ft.newsletterTitle);
    const body = encodeURIComponent(`Please add ${email.trim()} to the newsletter mailing list.`);
    setMailHandoff(`mailto:contacto@carolinabarcellona.com?subject=${subject}&body=${body}`);
    setSubscribed(true);
  };

  const handlePageClick = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="w-full bg-[#201415] text-[#F6F1EA] pt-14 pb-8 border-t border-[#C7A46B]/25">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <BrandMark className="h-9 w-auto" />
              <div className="flex flex-col">
                <span className="font-serif text-[17px] tracking-tight font-bold text-white">
                  CAROLINA BARCELLONA
                </span>
                <span className="text-[12px] text-[#C7A46B] tracking-[0.2em] font-semibold uppercase">
                  HEALTH & LONGEVITY 40+
                </span>
              </div>
            </div>
            <p className="text-[13px] text-[#F6F1EA]/75 max-w-sm mb-4 leading-relaxed">
              {ft.brandDesc}
            </p>
            <p className="text-[12px] text-[#C7A46B]">
              {ft.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="font-serif text-[15px] font-bold tracking-wider uppercase mb-4 text-[#F8CFD5]">
              {ft.exploreTitle}
            </p>
            <ul className="space-y-2 text-[13px] text-[#F6F1EA]/75">
              <li>
                <button
                  id="footer-link-inicio"
                  onClick={() => handlePageClick('inicio')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {ft.inicio}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-sobre-mi"
                  onClick={() => handlePageClick('sobre-mi')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {ft.sobreMi}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-planes"
                  onClick={() => handlePageClick('planes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Planes de Nutrición
                </button>
              </li>
              <li>
                <button
                  id="footer-link-blog"
                  onClick={() => handlePageClick('blog')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Blog de Biohacking
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contacto"
                  onClick={() => handlePageClick('contacto')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contacto Nutricionista
                </button>
              </li>
              <li>
                <button
                  id="footer-link-test"
                  onClick={onOpenDiagnosticModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {ft.testEvaluacion}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-5">
            <p className="font-serif text-[15px] font-bold tracking-wider uppercase mb-1 text-[#F8CFD5]">
              {ft.newsletterTitle}
            </p>
            <p className="text-[13px] text-[#F6F1EA]/75 mb-4 leading-relaxed">
              {ft.newsletterDesc}
            </p>

            {subscribed ? (
              <div
                id="newsletter-success"
                className="p-3 bg-[#EE295C]/20 border border-[#EE295C]/50 rounded-xl text-[13px] text-[#F8CFD5] flex flex-col items-start gap-2"
                role="status"
              >
                <span>{language === 'en' ? 'Your email is ready. Open your email app and send the message to request a subscription.' : language === 'fr' ? 'Votre demande est prête. Ouvrez votre messagerie et envoyez le message pour demander votre inscription.' : 'Tu solicitud está preparada. Abre tu correo y envía el mensaje para pedir el alta.'}</span>
                <a className="underline font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" href={mailHandoff}>
                  {language === 'en' ? 'Open email' : language === 'fr' ? 'Ouvrir le courriel' : 'Abrir correo'}
                </a>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="flex gap-2">
                <label className="sr-only" htmlFor="newsletter-email-input">{ft.newsletterPlaceholder}</label>
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  name="email"
                  placeholder={ft.newsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-white/10 fine-border rounded-full text-white placeholder-[#F6F1EA]/40 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#D6254F] to-[#B90040] text-white text-[13px] font-bold rounded-full hover:opacity-90 transition-opacity cursor-pointer shrink-0"
                >
                  {ft.newsletterBtn}
                </button>
              </form>
            )}

            {/* Payment & Security Badges — confirmed: Stripe + Klarna */}
            <div className="mt-4 flex items-center gap-2 text-[12px] text-[#F6F1EA]/50 font-semibold tracking-wider">
              <span>{ft.paymentMethods}</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white">STRIPE</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white">KLARNA</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#F6F1EA]/50 gap-4">
          <p>© {new Date().getFullYear()} Carolina Barcellona. {ft.allRights}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handlePageClick('condiciones')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {ft.legalNotice}
            </button>
            <span>•</span>
            <button
              onClick={() => handlePageClick('privacy')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {ft.privacyPolicy}
            </button>
            <span>•</span>
            <button
              onClick={() => handlePageClick('privacy')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {ft.cookiePolicy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
