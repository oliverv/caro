import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from '../data';
import { useLanguage, AVAILABLE_LANGUAGES } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface NavbarProps {
  onOpenProgramModal: () => void;
  onOpenWaitlistModal: (areaTitle: string) => void;
  onOpenDiagnosticModal: () => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProgramModal,
  onOpenWaitlistModal,
  onOpenDiagnosticModal,
  onOpenBookingModal
}) => {
  const { language, setLanguage, t } = useLanguage();
  const n = t.nav;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        setDropdownOpen(false);
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setDrawerOpen(false);
    setDropdownOpen(false);
    setLangDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLangObj = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0];

  return (
    <>
      <header
        id="navbar-header"
        className="fixed top-0 w-full z-50 bg-[#F6F1EA]/92 backdrop-blur-xl border-b border-[#C7A46B]/25 crisp-shadow transition-all"
      >
        <div className="h-20 max-w-[1240px] mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
          {/* Brand Logo & Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-space-xs group text-left focus:outline-none cursor-pointer"
          >
            <img
              alt="Carolina Barcellona"
              className="h-10 w-auto mix-blend-luminosity invert transform group-hover:scale-105 transition-transform duration-300"
              src={ASSETS.logo}
            />
            <div className="hidden sm:flex flex-col ml-2.5">
              <span className="font-serif text-[17px] tracking-tight text-[#201415] font-semibold">
                CAROLINA BARCELLONA
              </span>
              <span className="text-[9.5px] text-[#C7A46B] tracking-[0.22em] font-semibold uppercase -mt-0.5">
                HEALTH & LONGEVITY 40+
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              id="nav-link-inicio"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[14px] text-[#EE295C] font-semibold tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE295C] cursor-pointer"
            >
              {n.inicio}
            </button>
            <button
              id="nav-link-sobre-mi"
              onClick={() => scrollToSection('sobre-mi')}
              className="text-[14px] text-[#685354] hover:text-[#201415] font-medium transition-colors cursor-pointer"
            >
              {n.sobreMi}
            </button>

            {/* Interactive Dropdown: Planes & Programas */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="planes-menu-btn"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1 text-[14px] text-[#685354] hover:text-[#201415] font-medium transition-colors py-2 focus:outline-none cursor-pointer"
              >
                <span>{n.planes}</span>
                <span
                  className={`material-symbols-outlined text-[17px] text-[#C7A46B] transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180 text-[#EE295C]' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown Card Menu */}
              {dropdownOpen && (
                <div
                  id="desktop-dropdown"
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-76 bg-white/95 backdrop-blur-2xl rounded-2xl p-3 shadow-2xl fine-border z-50 animate-fadeIn"
                >
                  <div className="p-2 border-b border-[#C7A46B]/15 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#C7A46B] font-bold">
                      {n.programasEspecializados}
                    </span>
                  </div>
                  <button
                    id="dropdown-item-diosa"
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenProgramModal();
                    }}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8CFD5]/25 transition-colors group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FF6161]/15 text-[#FF6161] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#201415] group-hover:text-[#EE295C]">
                        {n.diosaProgramTitle}
                      </p>
                      <p className="text-[11px] text-[#685354] leading-snug">
                        {n.diosaProgramDesc}
                      </p>
                    </div>
                  </button>
                  <button
                    id="dropdown-item-sueno"
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenWaitlistModal('Cronobiología & Sueño');
                    }}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8CFD5]/25 transition-colors group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C7A46B]/20 text-[#C7A46B] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#201415] group-hover:text-[#EE295C]">
                        {n.suenoProgramTitle}
                      </p>
                      <p className="text-[11px] text-[#685354] leading-snug">
                        {n.suenoProgramDesc}
                      </p>
                    </div>
                  </button>
                  <button
                    id="dropdown-item-mente"
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenWaitlistModal('Mente & Bio-Longevidad');
                    }}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8CFD5]/25 transition-colors group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F69C05]/20 text-[#F69C05] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#201415] group-hover:text-[#EE295C]">
                        {n.menteProgramTitle}
                      </p>
                      <p className="text-[11px] text-[#685354] leading-snug">
                        {n.menteProgramDesc}
                      </p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-link-calculadora"
              onClick={() => scrollToSection('calculadora-40')}
              className="text-[14px] text-[#685354] hover:text-[#201415] font-medium transition-colors cursor-pointer"
            >
              {n.calculadora}
            </button>

            <button
              id="nav-link-evidencia"
              onClick={() => scrollToSection('evidencia-clinica')}
              className="text-[14px] text-[#685354] hover:text-[#201415] font-medium transition-colors cursor-pointer"
            >
              {n.evidencia}
            </button>

            <button
              id="nav-link-testimonios"
              onClick={() => scrollToSection('testimonios')}
              className="text-[14px] text-[#685354] hover:text-[#201415] font-medium transition-colors cursor-pointer"
            >
              {n.testimonios}
            </button>

            <button
              id="nav-link-faq"
              onClick={() => scrollToSection('faq')}
              className="text-[14px] text-[#685354] hover:text-[#201415] font-medium transition-colors cursor-pointer"
            >
              {n.faq}
            </button>
          </nav>

          {/* Action CTAs, Language Picker & Drawer Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Desktop Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                id="language-switcher-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/80 fine-border text-[12.5px] font-semibold text-[#201415] hover:bg-white hover:text-[#EE295C] transition-all cursor-pointer shadow-xs"
                aria-label="Cambiar idioma / Change language"
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase">{currentLangObj.code}</span>
                <span className="material-symbols-outlined text-[15px] text-[#C7A46B]">
                  expand_more
                </span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-36 bg-white rounded-2xl p-1.5 shadow-xl fine-border z-50">
                  {AVAILABLE_LANGUAGES.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-[12.5px] flex items-center justify-between transition-colors cursor-pointer ${
                        language === item.code
                          ? 'bg-[#F8CFD5]/40 text-[#EE295C] font-bold'
                          : 'text-[#685354] hover:bg-[#F6F1EA] hover:text-[#201415]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span>{item.label}</span>
                      </span>
                      {language === item.code && (
                        <span className="material-symbols-outlined text-[16px] text-[#EE295C]">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Booking CTA Button */}
            <button
              id="nav-btn-booking"
              onClick={onOpenBookingModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 bg-white fine-border text-[#201415] hover:text-[#EE295C] hover:border-[#EE295C]/40 text-[13px] font-bold rounded-full shadow-xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px] text-[#EE295C]">calendar_month</span>
              <span>{n.reservaCita}</span>
            </button>

            {/* Discover CTA Button */}
            <a
              id="nav-cta-whatsapp"
              href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20quiero%20descubrir%20tu%20m%C3%A9todo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-semibold rounded-full shadow-[0_4px_16px_rgba(238,41,92,0.3)] hover:shadow-[0_8px_24px_rgba(238,41,92,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{n.descubreMetodo}</span>
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </a>

            {/* Hamburger / Drawer toggle */}
            <button
              id="menu-toggle-btn"
              aria-label="Abrir menú de navegación"
              onClick={() => setDrawerOpen(true)}
              className="w-10 h-10 rounded-full bg-white/90 fine-border flex items-center justify-center text-[#201415] hover:text-[#EE295C] hover:bg-[#F8CFD5]/30 transition-all focus:outline-none crisp-shadow cursor-pointer"
            >
              <span className="material-symbols-outlined text-[21px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay Backdrop */}
      {drawerOpen && (
        <div
          id="nav-backdrop"
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-[#201415]/60 backdrop-blur-md z-[90] transition-opacity duration-300"
        />
      )}

      {/* Slide-out Drawer */}
      <aside
        id="nav-drawer"
        className={`fixed top-0 right-0 w-full sm:w-[420px] h-full bg-[#FCFAF7] z-[100] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#C7A46B]/25 transform transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-[#C7A46B]/20">
          <div className="flex items-center gap-2.5">
            <img
              alt="Carolina Barcellona"
              className="h-8 w-auto mix-blend-luminosity invert"
              src={ASSETS.logo}
            />
            <div className="flex flex-col">
              <span className="font-serif text-[15px] tracking-tight text-[#201415] font-bold">
                CAROLINA BARCELLONA
              </span>
              <span className="text-[8.5px] text-[#C7A46B] tracking-[0.2em] font-semibold uppercase">
                LONGEVITY STUDIO
              </span>
            </div>
          </div>
          <button
            id="drawer-close-btn"
            aria-label="Cerrar menú"
            onClick={() => setDrawerOpen(false)}
            className="w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-6 py-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Language Selector inside Drawer */}
            <div className="mb-5 pb-4 border-b border-[#C7A46B]/20">
              <span className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] block mb-2">
                {n.idioma} / Language
              </span>
              <div className="grid grid-cols-3 gap-2">
                {AVAILABLE_LANGUAGES.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`py-2 px-2.5 rounded-xl text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      language === item.code
                        ? 'bg-[#EE295C] text-white shadow-sm'
                        : 'bg-white fine-border text-[#685354] hover:bg-[#F8CFD5]/30'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] mb-3">
              {n.navegacionPrincipal}
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  id="drawer-link-inicio"
                  onClick={() => {
                    setDrawerOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.inicio}</span>
                  <span className="material-symbols-outlined text-[#C7A46B] text-[18px]">chevron_right</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-sobre-mi"
                  onClick={() => scrollToSection('sobre-mi')}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.sobreMi}</span>
                  <span className="material-symbols-outlined text-[#C7A46B] text-[18px]">chevron_right</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-metodo"
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenProgramModal();
                  }}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.diosaProgramTitle}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F8CFD5] text-[#EE295C] text-[10px] font-bold tracking-wide uppercase">
                    Activo
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-calculadora"
                  onClick={() => scrollToSection('calculadora-40')}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.calculadora}</span>
                  <span className="material-symbols-outlined text-[#FF6161] text-[18px]">calculate</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-evidencia"
                  onClick={() => scrollToSection('evidencia-clinica')}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.evidencia}</span>
                  <span className="material-symbols-outlined text-[#EE295C] text-[18px]">biotech</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-autodiagnostico"
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenDiagnosticModal();
                  }}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.autodiagnostico}</span>
                  <span className="material-symbols-outlined text-[#FF6161] text-[18px]">clinical_notes</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-testimonios"
                  onClick={() => scrollToSection('testimonios')}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.testimonios}</span>
                  <span className="text-[#F69C05] text-xs">★★★★★</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-faq"
                  onClick={() => scrollToSection('faq')}
                  className="w-full flex items-center justify-between py-1.5 text-[#201415] hover:text-[#EE295C] font-serif text-[18px] font-semibold transition-colors text-left cursor-pointer"
                >
                  <span>{n.faq}</span>
                  <span className="material-symbols-outlined text-[#C7A46B] text-[18px]">help_outline</span>
                </button>
              </li>
            </ul>

            {/* Direct Contact Cards inside Drawer */}
            <div className="mt-5 pt-4 border-t border-[#C7A46B]/20">
              <p className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] mb-2.5">
                {n.atencionDirecto}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenBookingModal();
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white fine-border hover:bg-[#F8CFD5]/20 transition-all text-[#201415] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#EE295C] text-[19px]">calendar_today</span>
                  <span className="text-[12px] font-semibold">{n.reservaCita}</span>
                </button>

                <a
                  id="drawer-contact-whatsapp"
                  href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white fine-border hover:bg-[#F8CFD5]/20 transition-all text-[#201415]"
                >
                  <span className="material-symbols-outlined text-emerald-600 text-[19px]">chat</span>
                  <span className="text-[12px] font-semibold">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Footer CTA */}
          <div className="mt-5 pt-4 border-t border-[#C7A46B]/20">
            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] hover:opacity-95 text-white text-[13px] font-bold rounded-xl text-center shadow-[0_6px_18px_rgba(238,41,92,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{n.solicitarEvaluacion}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <p className="text-[10.5px] text-center text-[#685354] mt-2.5">
              {n.studioLocation}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
