import Image from "next/image";
import {
  AlarmSmoke,
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  DoorOpen,
  DraftingCompass,
  Droplets,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import {
  cases,
  differentials,
  gallery,
  processSteps,
  services,
  siteContent,
  trustItems,
  whatsappUrl,
} from "@/content/site";
import { SectionHeading } from "@/components/sections/section-heading";

const serviceIcons = {
  drafting: DraftingCompass,
  tools: Wrench,
  alarm: AlarmSmoke,
  droplets: Droplets,
  door: DoorOpen,
  training: GraduationCap,
} as const;

const processIcons = [MessageCircle, ClipboardCheck, DraftingCompass, Wrench] as const;

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-copy">
        <div className="hero-line" aria-hidden="true" />
        <h1>Prevenção e combate a incêndios do projeto à manutenção</h1>
        <p className="hero-location"><MapPin aria-hidden="true" />{siteContent.region}</p>
        <p className="hero-description">Projeto, instalação e manutenção para empresas, indústrias, condomínios, estabelecimentos comerciais e organizações.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />Solicitar orçamento</a>
          <a className="button button-secondary" href="#servicos">Conhecer os serviços<ArrowDownRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-media">
        <Image src="/images/projetos/rede-hidrante-instalada.jpeg" alt="Rede de hidrante instalada com tubulação, registros e abrigo" fill sizes="(max-width: 800px) 100vw, (max-width: 1050px) 42vw, 50vw" preload />
        <div className="hero-media-caption"><span>Registro real</span><strong>Rede de hidrante</strong></div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Destaques do atendimento">
      <div className="container-shell trust-grid">
        {trustItems.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="section services-section">
      <div className="container-shell services-layout">
        <SectionHeading label="Serviços" title="Serviços de prevenção, proteção e combate a incêndios" description="Cada ambiente possui necessidades próprias. A atuação parte da avaliação e segue pela instalação e manutenção dos sistemas definidos para o local." />
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return <article key={service.title} className="service-row"><span className="service-number">0{index + 1}</span><Icon aria-hidden="true" /><div><h3>{service.title}</h3><p>{service.description}</p></div></article>;
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="section about-section">
      <div className="container-shell about-grid">
        <div>
          <SectionHeading label="Sobre a empresa" title="Proteção contra incêndios com visão técnica e atendimento próximo" />
          <p className="about-lead">A Central Combate Fire atende diferentes tipos de operação, considerando as características e necessidades de cada ambiente.</p>
          <p>O atendimento pode reunir projeto, instalação, manutenção e orientação técnica em uma mesma jornada, com atuação em Salvador, Região Metropolitana e cidades próximas.</p>
        </div>
        <div className="about-proof">
          <div><ShieldCheck aria-hidden="true" /><h3>Experiência prática</h3><p>Trabalhos reais em sistemas hidráulicos, elétricos, portas e sinalização.</p></div>
          <div><BadgeCheck aria-hidden="true" /><h3>Escopo personalizado</h3><p>Serviços orientados pelas necessidades identificadas em cada ambiente.</p></div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="trabalhos" className="section gallery-section">
      <div className="container-shell">
        <SectionHeading label="Galeria" title="Trabalhos e sistemas em campo" description="Registros reais de instalações, equipamentos e intervenções em diferentes ambientes." />
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure key={item.src} className={`gallery-item gallery-item-${index + 1}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container-shell">
        <SectionHeading label="Atendimento" title="Como funciona o atendimento" description="Um caminho direto para entender a necessidade e definir o escopo do serviço." />
        <ol className="process-list">
          {processSteps.map((step, index) => { const Icon = processIcons[index]; return <li key={step.title}><span className="process-number">0{index + 1}</span><div className="process-icon"><Icon aria-hidden="true" /></div><h3>{step.title}</h3><p>{step.description}</p></li>; })}
        </ol>
      </div>
    </section>
  );
}

export function CasesSection() {
  return (
    <section id="clientes" className="section cases-section">
      <div className="container-shell">
        <SectionHeading label="Clientes e cases" title="Experiência em diferentes tipos de operação" description="Atuações apresentadas no portfólio da Central Combate Fire, sem atribuição de fotografias a clientes específicos." />
        <div className="cases-grid">
          {cases.map((item, index) => <article key={item.name}><span>0{index + 1}</span><p className="case-segment">{item.segment}</p><h3>{item.name}</h3><p>{item.description}</p></article>)}
        </div>
      </div>
    </section>
  );
}

export function DifferentialsSection() {
  return (
    <section className="section differentials-section">
      <div className="container-shell differentials-grid">
        <SectionHeading light label="Diferenciais" title="Atuação técnica do planejamento à manutenção" description="Uma abordagem conectada para apoiar a proteção de pessoas, operações e patrimônios." />
        <ul>{differentials.map((item) => <li key={item}><ArrowRight aria-hidden="true" />{item}</li>)}</ul>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div className="container-shell final-cta-inner">
        <div><p className="section-label">Próximo passo</p><h2>Vamos conversar sobre a sua necessidade?</h2><p>Solicite uma avaliação ou orçamento para o seu imóvel ou operação.</p></div>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><Phone aria-hidden="true" />Falar com a equipe pelo WhatsApp</a>
      </div>
    </section>
  );
}
