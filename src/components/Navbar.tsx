import React, { useState, useEffect, useRef } from 'react';
import { BrandMark } from './BrandMark';
import { useLanguage, AVAILABLE_LANGUAGES } from '../context/LanguageContext';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenProgramModal: () => void;
  onOpenWaitlistModal: (areaTitle: string) => void;
  onOpenDiagnosticModal: () => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const n = t.nav;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
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
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePageClick = (page: PageId) => {
    setDrawerOpen(false);
    setLangDropdownOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLangObj = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0];

  const navLinks: { label: string; page: PageId }[] = [
    { label: n.inicio, page: 'inicio' },
    { label: n.sobreMi, page: 'sobre-mi' },
    { label: 'El Método', page: 'el-metodo' },
    { label: n.planes, page: 'planes' },
    { label: n.blog, page: 'blog' },
    { label: n.contacto, page: 'contacto' },
  ];

  const isElMetodoActive = currentPage === 'el-metodo' || currentPage === 'planes';

  return (
    <>
      <header
        id="navbar-header"
        className="fixed top-0 w-full z-50 bg-[#F6F1EA]/95 backdrop-blur-xl border-b border-[#C7A46B]/25 transition-all shadow-xs"
      >
        <div className="h-20 max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo & Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handlePageClick('inicio')}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          >
            <BrandMark className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-[17px] tracking-tight text-[#201415] font-semibold leading-tight">
                CAROLINA BARCELLONA
              </span>
              <span className="text-[9px] text-[#C7A46B] tracking-[0.22em] font-semibold uppercase">
                HEALTH & LONGEVITY 40+
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.page === 'el-metodo'
                  ? isElMetodoActive
                  : currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handlePageClick(link.page)}
                  className={`text-[14px] font-semibold tracking-wide transition-all relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#EE295C] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE295C]'
                      : 'text-[#685354] hover:text-[#201415]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs, Language Picker & Drawer Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                id="language-switcher-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white fine-border text-[12px] font-semibold text-[#201415] hover:text-[#EE295C] transition-all cursor-pointer shadow-xs"
                aria-label="Cambiar idioma / Change language"
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase font-bold">{currentLangObj.code}</span>
                <span className="material-symbols-outlined text-[14px] text-[#C7A46B]">
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

            {/* Quick WhatsApp Action */}
            <a
              id="nav-quick-whatsapp"
              href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20estoy%20visitando%20tu%20web%20y%20quiero%20hacerte%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white fine-border flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors shadow-xs"
              title="Contactar por WhatsApp"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>

            {/* Aplicar al Método CTA Button */}
            <button
              id="nav-btn-booking"
              onClick={onOpenBookingModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              Aplicar al Método
            </button>

            {/* Person icon */}
            <div className="w-8 h-8 rounded-full bg-[#EE295C] flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              id="menu-toggle-btn"
              aria-label="Abrir menú de navegación"
              onClick={() => setDrawerOpen(true)}
              className="w-10 h-10 rounded-full bg-white fine-border flex items-center justify-center text-[#201415] hover:text-[#EE295C] hover:bg-[#F8CFD5]/30 transition-all focus:outline-none shadow-xs cursor-pointer lg:hidden"
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay Backdrop */}
      {drawerOpen && (
        <div
          id="drawer-backdrop"
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-[#201415]/60 backdrop-blur-sm z-50 transition-opacity animate-fadeIn"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        id="navigation-drawer"
        aria-label="Menú móvil"
        className={`fixed top-0 right-0 h-full w-[330px] max-w-[85vw] bg-[#F6F1EA] z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#C7A46B]/20 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="font-serif text-[15px] tracking-tight text-[#201415] font-bold">
                CAROLINA BARCELLONA
              </span>
              <span className="text-[8px] text-[#C7A46B] tracking-[0.2em] font-semibold uppercase">
                LONGEVITY STUDIO
              </span>
            </div>
          </div>
          <button
            id="drawer-close-btn"
            aria-label="Cerrar menú"
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-5 py-4 flex-1 overflow-y-auto space-y-5">
          {/* Language Selector inside Drawer */}
          <div>
            <span className="text-[10px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] block mb-2">
              {n.idioma} / Language
            </span>
            <div className="grid grid-cols-3 gap-2">
              {AVAILABLE_LANGUAGES.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code)}
                  className={`py-1.5 px-2 rounded-xl text-[12px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    language === item.code
                      ? 'bg-[#EE295C] text-white shadow-xs'
                      : 'bg-white fine-border text-[#685354]'
                  }`}
                >
                  <span>{item.flag}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Pages List */}
          <div>
            <p className="text-[10px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] mb-2">
              {n.navegacionPrincipal}
            </p>
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.page === 'el-metodo'
                    ? isElMetodoActive
                    : currentPage === link.page;
                return (
                  <li key={link.page}>
                    <button
                      id={`drawer-link-${link.page}`}
                      onClick={() => handlePageClick(link.page)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-xl font-serif text-[16px] font-bold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#EE295C] shadow-xs'
                          : 'text-[#201415] hover:bg-white/60'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[16px] text-[#C7A46B]">
                        chevron_right
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="pt-2 border-t border-[#C7A46B]/20 space-y-2">
            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Aplicar al Método</span>
            </button>

            <a
              href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#25D366] text-white text-[13px] font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Directo</span>
            </a>
          </div>

          <p className="text-[10px] text-center text-[#685354] pt-2">
            {n.studioLocation}
          </p>
        </div>
      </aside>
    </>
  );
};
