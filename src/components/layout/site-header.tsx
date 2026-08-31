"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

import { navigation, siteContent, whatsappUrl } from "@/content/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <a className="brand-link" href="#inicio" aria-label="Central Combate Fire - início">
          <Image src="/images/marca/logo-central-combate-fire.jpg" alt="" width={72} height={72} />
          <span>{siteContent.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button-primary header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento</a>
        <div className="mobile-menu" onKeyDown={(event) => {
          if (event.key === "Escape") {
            setMenuOpen(false);
          }
        }}>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu aria-hidden="true" />
          </button>
          {menuOpen ? (
            <nav id="mobile-navigation" aria-label="Navegação móvel">
              {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Solicitar orçamento</a>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
