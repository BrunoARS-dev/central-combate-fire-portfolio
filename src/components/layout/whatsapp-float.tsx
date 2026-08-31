import { MessageCircle } from "lucide-react";

import { whatsappUrl } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp">
      <MessageCircle aria-hidden="true" />
      <span>Orçamento</span>
    </a>
  );
}
