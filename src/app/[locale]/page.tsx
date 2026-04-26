import LeadModalProvider from '@/components/LeadModalProvider';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import BrandCompatibilitySection from '@/components/BrandCompatibilitySection';
import RiskControlSection from '@/components/RiskControlSection';
import ProductCategoriesSection from '@/components/ProductCategoriesSection';
import CompatibilityWorkflowSection from '@/components/CompatibilityWorkflowSection';
import ApplicationScenariosSection from '@/components/ApplicationScenariosSection';
import OemOdmSection from '@/components/OemOdmSection';
import FactoryEvidenceSection from '@/components/FactoryEvidenceSection';
import QualitySection from '@/components/QualitySection';
import ResourcesSection from '@/components/ResourcesSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <LeadModalProvider>
      <HeroSection />
      <StatsSection />
      <BrandCompatibilitySection />
      <RiskControlSection />
      <ProductCategoriesSection />
      <CompatibilityWorkflowSection />
      <ApplicationScenariosSection />
      <OemOdmSection />
      <FactoryEvidenceSection />
      <QualitySection />
      <ResourcesSection />
      <FaqSection />
      <CtaSection />
    </LeadModalProvider>
  );
}
