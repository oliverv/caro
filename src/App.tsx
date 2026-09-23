import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudioWelcome } from './components/AudioWelcome';
import { MethodPillars } from './components/MethodPillars';
import { LongevityCalculator } from './components/LongevityCalculator';
import { PracticalAreas } from './components/PracticalAreas';
import { ClinicalEvidence } from './components/ClinicalEvidence';
import { WhoIsItFor } from './components/WhoIsItFor';
import { DiagnosticSection } from './components/DiagnosticSection';
import { BioStory } from './components/BioStory';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Collaborations } from './components/Collaborations';
import { Footer } from './components/Footer';
import { SobreMiPage } from './components/SobreMiPage';
import { PlanesPage } from './components/PlanesPage';
import { BlogPage } from './components/BlogPage';
import { ContactoPage } from './components/ContactoPage';
import { PrivacyPage } from './components/PrivacyPage';
import { ProgramModal } from './components/ProgramModal';
import { WaitlistModal } from './components/WaitlistModal';
import { DiagnosticModal } from './components/DiagnosticModal';
import { TrajectoryModal } from './components/TrajectoryModal';
import { BookingModal } from './components/BookingModal';

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'sobre-mi') return 'sobre-mi';
  if (hash === 'el-metodo') return 'el-metodo';
  if (hash === 'planes') return 'planes';
  if (hash === 'blog') return 'blog';
  if (hash === 'contacto') return 'contacto';
  if (hash === 'privacy') return 'privacy';
  return 'inicio';
}

function MainAppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [waitlistModalState, setWaitlistModalState] = useState<{
    isOpen: boolean;
    areaTitle: string;
  }>({
    isOpen: false,
    areaTitle: ''
  });
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState(false);
  const [isTrajectoryModalOpen, setIsTrajectoryModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Sync hash on browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'inicio' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWaitlist = (areaTitle: string) => {
    setWaitlistModalState({
      isOpen: true,
      areaTitle
    });
  };

  const handleCloseWaitlist = () => {
    setWaitlistModalState({
      isOpen: false,
      areaTitle: ''
    });
  };

  const scrollToSection = (id: string) => {
    if (currentPage !== 'inicio') {
      navigateToPage('inicio');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openWhatsAppChat = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20estoy%20interesada%20en%20tu%20m%C3%A9todo%20de%20salud%20y%20longevidad',
      '_blank'
    );
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-[#F6F1EA] text-[#201415]">
      {/* Fixed Navigation Header with Page Routing */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onOpenProgramModal={() => setIsProgramModalOpen(true)}
        onOpenWaitlistModal={handleOpenWaitlist}
        onOpenDiagnosticModal={() => setIsDiagnosticModalOpen(true)}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content: Switches between Inicio and Dedicated Pages */}
      <main id="main-content" className="pt-20 flex-1">
        {currentPage === 'inicio' && (
          <>
            {/* Hero Section */}
            <Hero
              onOpenProgramModal={() => setIsProgramModalOpen(true)}
              onExploreMethod={() => scrollToSection('metodo-diosa')}
              onOpenCalculator={() => scrollToSection('calculadora-40')}
            />

            {/* Audio Note & Welcome from Carolina */}
            <AudioWelcome />

            {/* 4 Pillars: El Método Código Diosa */}
            <MethodPillars />

            {/* Interactive Longevity & Protein Calculator */}
            <LongevityCalculator />

            {/* Practical Application in 3 Areas */}
            <PracticalAreas
              onOpenProgramModal={() => setIsProgramModalOpen(true)}
              onOpenWaitlistModal={handleOpenWaitlist}
            />

            {/* Real Clinical Evidence & Biomarkers */}
            <ClinicalEvidence />

            {/* Philosophy & Target: ¿Para quién es? */}
            <WhoIsItFor />

            {/* Autodiagnóstico 40+ with interactive assessment */}
            <DiagnosticSection
              onOpenDiagnosticModal={() => setIsDiagnosticModalOpen(true)}
            />

            {/* Carolina's Story, Credentials & Metrics */}
            <BioStory
              onContactCarolina={openWhatsAppChat}
              onOpenTrajectoryModal={() => setIsTrajectoryModalOpen(true)}
            />

            {/* Real Testimonials & Google Reviews */}
            <Testimonials />

            {/* FAQs Accordion */}
            <FaqSection />

            {/* Direct Call to Action */}
            <CtaSection onContact={openWhatsAppChat} />

            {/* Clinical Collaborations and Lab Partners in Madrid */}
            <Collaborations />
          </>
        )}

        {currentPage === 'sobre-mi' && (
          <SobreMiPage
            onOpenBookingModal={() => setIsBookingModalOpen(true)}
            onNavigateHome={() => navigateToPage('inicio')}
            onNavigatePlanes={() => navigateToPage('planes')}
          />
        )}

        {(currentPage === 'planes' || currentPage === 'el-metodo') && (
          <PlanesPage
            onOpenBookingModal={() => setIsBookingModalOpen(true)}
            onNavigateHome={() => navigateToPage('inicio')}
            onOpenProgramModal={() => setIsProgramModalOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigateHome={() => navigateToPage('inicio')}
            onOpenBookingModal={() => setIsBookingModalOpen(true)}
          />
        )}

        {currentPage === 'contacto' && (
          <ContactoPage
            onNavigateHome={() => navigateToPage('inicio')}
            onNavigatePrivacy={() => navigateToPage('privacy')}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage onNavigateHome={() => navigateToPage('inicio')} />
        )}
      </main>

      {/* Global Footer with Page Routing */}
      <Footer
        onNavigate={navigateToPage}
        onOpenProgramModal={() => setIsProgramModalOpen(true)}
        onOpenDiagnosticModal={() => setIsDiagnosticModalOpen(true)}
      />

      {/* Floating WhatsApp */}
      <aside
        id="floating-whatsapp-container"
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          id="floating-whatsapp-btn"
          href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20estoy%20interesada%20en%20tu%20m%C3%A9todo%20de%20salud%20y%20longevidad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_12px_32px_-4px_rgba(37,211,102,0.45)] hover:shadow-[0_16px_36px_-2px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
        </a>
      </aside>

      {/* Booking Consultation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Program Details Modal (Código Diosa 180 Días) */}
      <ProgramModal
        isOpen={isProgramModalOpen}
        onClose={() => setIsProgramModalOpen(false)}
      />

      {/* Waitlist Modal for Sleep & Brain protocols */}
      <WaitlistModal
        isOpen={waitlistModalState.isOpen}
        areaTitle={waitlistModalState.areaTitle}
        onClose={handleCloseWaitlist}
      />

      {/* Interactive 4-step Biological Self-Assessment */}
      <DiagnosticModal
        isOpen={isDiagnosticModalOpen}
        onClose={() => setIsDiagnosticModalOpen(false)}
      />

      {/* Trajectory & Credentials Modal */}
      <TrajectoryModal
        isOpen={isTrajectoryModalOpen}
        onClose={() => setIsTrajectoryModalOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}

export default App;
