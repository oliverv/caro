import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MethodPillars } from './components/MethodPillars';
import { PracticalAreas } from './components/PracticalAreas';
import { WhoIsItFor } from './components/WhoIsItFor';
import { DiagnosticSection } from './components/DiagnosticSection';
import { BioStory } from './components/BioStory';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Collaborations } from './components/Collaborations';
import { Footer } from './components/Footer';
import { ProgramModal } from './components/ProgramModal';
import { WaitlistModal } from './components/WaitlistModal';
import { DiagnosticModal } from './components/DiagnosticModal';
import { TrajectoryModal } from './components/TrajectoryModal';

export function App() {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      {/* Fixed Navigation Header with blur backdrop */}
      <Navbar
        onOpenProgramModal={() => setIsProgramModalOpen(true)}
        onOpenWaitlistModal={handleOpenWaitlist}
        onOpenDiagnosticModal={() => setIsDiagnosticModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="pt-20 flex-1">
        {/* Hero Section */}
        <Hero
          onOpenProgramModal={() => setIsProgramModalOpen(true)}
          onExploreMethod={() => scrollToSection('metodo-diosa')}
        />

        {/* 4 Pillars: El Método Código Diosa */}
        <MethodPillars />

        {/* Practical Application in 3 Areas */}
        <PracticalAreas
          onOpenProgramModal={() => setIsProgramModalOpen(true)}
          onOpenWaitlistModal={handleOpenWaitlist}
        />

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
      </main>

      {/* Global Footer */}
      <Footer
        onOpenProgramModal={() => setIsProgramModalOpen(true)}
        onOpenDiagnosticModal={() => setIsDiagnosticModalOpen(true)}
      />

      {/* Floating Quick WhatsApp Button */}
      <aside
        id="floating-whatsapp-container"
        className="fixed bottom-6 right-6 z-40 flex items-center group"
      >
        <div className="hidden sm:block mr-2 px-3 py-1.5 rounded-full bg-white text-[#201415] text-[12px] font-semibold fine-border crisp-shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Hablar con Carolina
        </div>
        <button
          id="floating-whatsapp-btn"
          onClick={openWhatsAppChat}
          aria-label="Abrir chat de WhatsApp con Carolina"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[26px]">chat</span>
        </button>
      </aside>

      {/* Program Details Modal (Código Diosa 90 Días) */}
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

export default App;
