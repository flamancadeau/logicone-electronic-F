import HeroSection from '../features/home/HeroSection';
import QuickActionsSection from '../features/home/QuickActionsSection';
import ServicesSection from '../features/home/ServicesSection';
import WorkflowSection from '../features/home/WorkflowSection';
import MarketPreviewSection from '../features/home/MarketPreviewSection';
import TrainingPreviewSection from '../features/home/TrainingPreviewSection';
import TrustSection from '../features/home/TrustSection';
import AiTriageBanner from '../features/home/AiTriageBanner';
import TestimonialsSection from '../features/home/TestimonialsSection';
import FinalCtaSection from '../features/home/FinalCtaSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <QuickActionsSection />
      <ServicesSection />
      <WorkflowSection />
      <MarketPreviewSection />
      <TrainingPreviewSection />
      <TrustSection />
      <AiTriageBanner />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
