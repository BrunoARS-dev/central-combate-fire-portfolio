import Image from "next/image";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { navigation, siteContent, whatsappUrl } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contato" className="site-footer">
      <div className="container-shell footer-grid">
        <div className="footer-brand">
          <Image src="/images/marca/logo-central-combate-fire.jpg" alt="Central Combate Fire" width={108} height={108} />
          <p>Prevenção, proteção e combate a incêndios com atendimento técnico e próximo.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-contact">
          <h2>Contato</h2>
          <a href="tel:+5571988564957" aria-label={`Ligar para a Central Combate Fire no número ${siteContent.phone}`}><Phone aria-hidden="true" />{siteContent.phone}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />Solicitar orçamento pelo WhatsApp</a>
          <p><MapPin aria-hidden="true" />{siteContent.region}</p>
        </div>
      </div>
      <div className="container-shell footer-bottom">
        <p>© {new Date().getFullYear()} Central Combate Fire.</p>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  );
}
