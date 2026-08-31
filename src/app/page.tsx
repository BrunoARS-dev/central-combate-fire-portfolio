import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import {
  AboutSection,
  CasesSection,
  DifferentialsSection,
  FinalCtaSection,
  GallerySection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  TrustStrip,
} from "@/components/sections/landing-sections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <ProcessSection />
        <CasesSection />
        <DifferentialsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
