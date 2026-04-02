import { CategoriesSection } from '@/components/categories-section';
import { CtaBanner } from '@/components/cta-banner';
import { Footer } from '@/components/footer';
import { GallerySection } from '@/components/gallery-section';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { InspirationSection } from '@/components/inspiration-section';
import { SplitHighlightSection } from '@/components/split-highlight-section';

export default function Home() {
  return (
    <div className="bg-white text-brand-text">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <SplitHighlightSection />
        <InspirationSection />
        <GallerySection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
