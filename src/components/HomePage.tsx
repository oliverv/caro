import type { FC } from 'react';
import { AudioWelcome } from './AudioWelcome';
import { BibleSheetSection } from './BibleSheetSection';
import { BioStory } from './BioStory';
import { ClinicalEvidence } from './ClinicalEvidence';
import { Collaborations } from './Collaborations';
import { CtaSection } from './CtaSection';
import { DiagnosticSection } from './DiagnosticSection';
import { FaqSection } from './FaqSection';
import { Hero } from './Hero';
import { LongevityCalculator } from './LongevityCalculator';
import { MethodPillars } from './MethodPillars';
import { PracticalAreas } from './PracticalAreas';
import { Testimonials } from './Testimonials';
import { WhoIsItFor } from './WhoIsItFor';

interface HomePageProps {
  onContactCarolina: () => void;
  onExploreMethod: () => void;
  onOpenCalculator: () => void;
  onOpenDiagnosticModal: () => void;
  onOpenProgramModal: () => void;
  onOpenTrajectoryModal: () => void;
  onOpenWaitlistModal: (areaTitle: string) => void;
}

/**
 * Canonical landing-page composition.
 *
 * The sequence follows the consolidated editorial journey from the final
 * reference export: promise, Carolina, lived need, method, evidence, tools,
 * application, social proof and contact.
 */
export const HomePage: FC<HomePageProps> = ({
  onContactCarolina,
  onExploreMethod,
  onOpenCalculator,
  onOpenDiagnosticModal,
  onOpenProgramModal,
  onOpenTrajectoryModal,
  onOpenWaitlistModal,
}) => (
  <>
    <Hero
      onOpenProgramModal={onOpenProgramModal}
      onExploreMethod={onExploreMethod}
      onOpenCalculator={onOpenCalculator}
    />
    <AudioWelcome />
    <BioStory
      onContactCarolina={onContactCarolina}
      onOpenTrajectoryModal={onOpenTrajectoryModal}
    />
    <WhoIsItFor />
    <MethodPillars />
    <PracticalAreas
      onOpenProgramModal={onOpenProgramModal}
      onOpenWaitlistModal={onOpenWaitlistModal}
    />
    <ClinicalEvidence />
    <LongevityCalculator />
    <DiagnosticSection onOpenDiagnosticModal={onOpenDiagnosticModal} />
    <BibleSheetSection />
    <Testimonials />
    <FaqSection />
    <Collaborations />
    <CtaSection onContact={onContactCarolina} />
  </>
);
