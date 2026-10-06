import HeroSection from '@/components/HeroSection';
import ProductCategoriesSection from '@/components/ProductCategoriesSection';
import BrandCompatibilitySection from '@/components/BrandCompatibilitySection';
import RiskControlSection from '@/components/RiskControlSection';
import CompatibilityWorkflowSection from '@/components/CompatibilityWorkflowSection';
import CapabilityHighlightsSection from '@/components/CapabilityHighlightsSection';
import ApplicationScenariosSection from '@/components/ApplicationScenariosSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import ProductionScenes from '@/components/ProductionScenes';
import ResourcesSection from '@/components/ResourcesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilityHighlightsSection />
      <ProductCategoriesSection />
      <BrandCompatibilitySection />
      <CompatibilityWorkflowSection />
      <ProductionScenes />
      <ApplicationScenariosSection />
      <RiskControlSection />
      <ResourcesSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
