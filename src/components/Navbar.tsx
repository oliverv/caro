import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from '../data';

interface NavbarProps {
  onOpenProgramModal: () => void;
  onOpenWaitlistModal: (areaTitle: string) => void;
  onOpenDiagnosticModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProgramModal,
  onOpenWaitlistModal,
  onOpenDiagnosticModal
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        setDropdownOpen(false);
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

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setDrawerOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className="fixed top-0 w-full z-50 bg-[#F6F1EA]/90 backdrop-blur-xl border-b border-[#C7A46B]/25 crisp-shadow"
      >
        <div className="h-20 max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
          {/* Brand Logo & Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-space-xs group text-left focus:outline-none"
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
          <nav className="hidden lg:flex items-center gap-7">
            <button
              id="nav-link-inicio"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[14.5px] text-[#EE295C] font-semibold tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE295C]"
            >
              Inicio
            </button>
            <button
              id="nav-link-sobre-mi"
              onClick={() => scrollToSection('sobre-mi')}
              className="text-[14.5px] text-[#685354] hover:text-[#201415] font-medium transition-colors"
            >
              Sobre mí
            </button>

            {/* Interactive Dropdown: Planes & Programas */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="planes-menu-btn"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1 text-[14.5px] text-[#685354] hover:text-[#201415] font-medium transition-colors py-2 focus:outline-none"
              >
                <span>Planes</span>
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
                  className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl p-3 shadow-2xl fine-border z-50"
                >
                  <div className="p-2 border-b border-[#C7A46B]/15 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#C7A46B] font-bold">
                      Programas Especializados
                    </span>
                  </div>
                  <button
                    id="dropdown-item-diosa"
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenProgramModal();
                    }}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8CFD5]/25 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FF6161]/15 text-[#FF6161] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#201415] group-hover:text-[#EE295C]">
                        Código Diosa 90 Días
                      </p>
                      <p className="text-[11px] text-[#685354] leading-snug">
                        Metabolismo, equilibrio hormonal y longevidad celular.
                      </p>
                    </div>
                  </button>
                  <button
                    id="dropdown-item-sueno"
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenWaitlistModal('Cronobiología & Sueño');
                    }}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8CFD5]/25 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C7A46B]/20 text-[#C7A46B] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#201415] group-hover:text-[#EE295C]">
                        Cronobiología & Sueño
                      </p>
                      <p className="text-[11px] text-[#685354] leading-snug">
                        Ritmo circadiano y arquitectura de descanso.
                      </p>
                    </div>
                  </button>
                  <button
                    id="dropdown-item-mente"
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenWaitlistModal('Mente & Bio-Longevidad');
                    }}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8CFD5]/25 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F69C05]/20 text-[#F69C05] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#201415] group-hover:text-[#EE295C]">
                        Mente & Bio-Longevidad
                      </p>
                      <p className="text-[11px] text-[#685354] leading-snug">
                        Claridad mental y bio-hacking para mujeres 40+.
                      </p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-link-testimonios"
              onClick={() => scrollToSection('testimonios')}
              className="text-[14.5px] text-[#685354] hover:text-[#201415] font-medium transition-colors"
            >
              Casos de Éxito
            </button>
            <button
              id="nav-link-faq"
              onClick={() => scrollToSection('faq')}
              className="text-[14.5px] text-[#685354] hover:text-[#201415] font-medium transition-colors"
            >
              Preguntas Frecuentes
            </button>
          </nav>

          {/* Action CTA & Drawer Trigger */}
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            <a
              id="nav-cta-whatsapp"
              href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20quiero%20descubrir%20tu%20m%C3%A9todo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 px-space-lg py-2.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-semibold rounded-full shadow-[0_4px_16px_rgba(238,41,92,0.3)] hover:shadow-[0_8px_24px_rgba(238,41,92,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Descubre mi método</span>
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </a>

            {/* Hamburger / Drawer toggle */}
            <button
              id="menu-toggle-btn"
              aria-label="Abrir menú de navegación"
              onClick={() => setDrawerOpen(true)}
              className="w-10 h-10 rounded-full bg-white/90 fine-border flex items-center justify-center text-[#201415] hover:text-[#EE295C] hover:bg-[#F8CFD5]/30 transition-all focus:outline-none crisp-shadow"
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
            className="w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-6 py-5 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] mb-4">
              Navegación Principal
            </p>
            <ul className="space-y-2.5">
              <li>
                <button
                  id="drawer-link-inicio"
                  onClick={() => {
                    setDrawerOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-between py-2 text-[#201415] hover:text-[#EE295C] font-serif text-[20px] font-semibold transition-colors text-left"
                >
                  <span>Inicio</span>
                  <span className="material-symbols-outlined text-[#C7A46B] text-[20px]">chevron_right</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-sobre-mi"
                  onClick={() => scrollToSection('sobre-mi')}
                  className="w-full flex items-center justify-between py-2 text-[#201415] hover:text-[#EE295C] font-serif text-[20px] font-semibold transition-colors text-left"
                >
                  <span>Sobre mí</span>
                  <span className="material-symbols-outlined text-[#C7A46B] text-[20px]">chevron_right</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-metodo"
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenProgramModal();
                  }}
                  className="w-full flex items-center justify-between py-2 text-[#201415] hover:text-[#EE295C] font-serif text-[20px] font-semibold transition-colors text-left"
                >
                  <span>Método Código Diosa</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F8CFD5] text-[#EE295C] text-[10px] font-bold tracking-wide uppercase">
                    Activo
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-planes"
                  onClick={() => scrollToSection('planes-areas')}
                  className="w-full flex items-center justify-between py-2 text-[#201415] hover:text-[#EE295C] font-serif text-[20px] font-semibold transition-colors text-left"
                >
                  <span>Planes & 3 Áreas Prácticas</span>
                  <span className="material-symbols-outlined text-[#C7A46B] text-[20px]">chevron_right</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-autodiagnostico"
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenDiagnosticModal();
                  }}
                  className="w-full flex items-center justify-between py-2 text-[#201415] hover:text-[#EE295C] font-serif text-[20px] font-semibold transition-colors text-left"
                >
                  <span>Autodiagnóstico 40+</span>
                  <span className="material-symbols-outlined text-[#FF6161] text-[20px]">clinical_notes</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-testimonios"
                  onClick={() => scrollToSection('testimonios')}
                  className="w-full flex items-center justify-between py-2 text-[#201415] hover:text-[#EE295C] font-serif text-[20px] font-semibold transition-colors text-left"
                >
                  <span>Casos Reales & Opiniones</span>
                  <span className="text-[#F69C05] text-xs">★★★★★</span>
                </button>
              </li>
              <li>
                <button
                  id="drawer-link-faq"
                  onClick={() => scrollToSection('faq')}
                  className="w-full flex items-center justify-between py-2 text-[#201415] hover:text-[#EE295C] font-serif text-[20px] font-semibold transition-colors text-left"
                >
                  <span>Preguntas Frecuentes</span>
                  <span className="material-symbols-outlined text-[#C7A46B] text-[20px]">help_outline</span>
                </button>
              </li>
            </ul>

            {/* Direct Contact Cards inside Drawer */}
            <div className="mt-6 pt-5 border-t border-[#C7A46B]/20">
              <p className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] mb-3">
                Atención & Contacto Directo
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id="drawer-contact-whatsapp"
                  href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white fine-border hover:bg-[#F8CFD5]/20 transition-all text-[#201415]"
                >
                  <span className="material-symbols-outlined text-emerald-600 text-[20px]">chat</span>
                  <span className="text-[12px] font-semibold">WhatsApp</span>
                </a>
                <a
                  id="drawer-contact-calendly"
                  href="https://calendly.com/coachcarolinabarcellona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white fine-border hover:bg-[#F8CFD5]/20 transition-all text-[#201415]"
                >
                  <span className="material-symbols-outlined text-[#FF6161] text-[20px]">calendar_month</span>
                  <span className="text-[12px] font-semibold">Calendly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Footer CTA */}
          <div className="mt-6 pt-5 border-t border-[#C7A46B]/20">
            <a
              id="drawer-evaluation-btn"
              href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20quiero%20empezar%20mi%20evaluaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] hover:opacity-95 text-white text-[13px] font-bold rounded-xl text-center shadow-[0_6px_18px_rgba(238,41,92,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <span>Solicitar Evaluación Inicial</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <p className="text-[11px] text-center text-[#685354] mt-3">
              Biolifestyle Studio • Pozuelo de Alarcón / Madrid
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
