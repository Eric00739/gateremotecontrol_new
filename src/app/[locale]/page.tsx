import HeroSection from '@/components/HeroSection';
import ProductCategoriesSection from '@/components/ProductCategoriesSection';
import BrandCompatibilitySection from '@/components/BrandCompatibilitySection';
import RiskControlSection from '@/components/RiskControlSection';
import CompatibilityWorkflowSection from '@/components/CompatibilityWorkflowSection';
import CapabilityHighlightsSection from '@/components/CapabilityHighlightsSection';
import ApplicationScenariosSection from '@/components/ApplicationScenariosSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesSection />
      <CapabilityHighlightsSection />
      <BrandCompatibilitySection />
      <CompatibilityWorkflowSection />
      <ApplicationScenariosSection />
      <RiskControlSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
