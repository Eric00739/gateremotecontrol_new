import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
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
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
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
      </main>
      <Footer />
    </>
  );
}
