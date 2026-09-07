export const whatsappNumber = "5571988564957";
export const whatsappMessage =
  "Olá! Conheci a Central Combate Fire pelo site e gostaria de solicitar um orçamento.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const siteContent = {
  name: "Central Combate Fire",
  title: "Central Combate Fire | Prevenção e combate a incêndios em Salvador",
  description:
    "Projeto, instalação e manutenção de sistemas de prevenção e combate a incêndios para empresas, indústrias, condomínios e comércios em Salvador e Região Metropolitana.",
  phone: "+55 71 98856-4957",
  region: "Salvador, Região Metropolitana e cidades próximas",
} as const;

export const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
] as const;

export const trustItems = [
  "Experiência prática",
  "Atendimento personalizado",
  "Instalação e manutenção",
  "Treinamento",
] as const;

export const services = [
  { icon: "drafting", title: "Consultoria e projeto", description: "Avaliação das necessidades do ambiente e planejamento dos sistemas de detecção, prevenção e combate a incêndios." },
  { icon: "tools", title: "Instalação e manutenção", description: "Implantação de equipamentos e manutenção preventiva e corretiva dos sistemas instalados." },
  { icon: "alarm", title: "Detecção e alarme", description: "Instalação e manutenção de centrais e dispositivos de detecção, sinalização e alarme de incêndio." },
  { icon: "droplets", title: "Hidrantes e sistemas hidráulicos", description: "Redes de hidrantes, pontos de combate, conjuntos de bombeamento e componentes hidráulicos." },
  { icon: "door", title: "Portas, sinalização e iluminação", description: "Portas corta-fogo, iluminação de emergência, sinalização e demarcações para equipamentos." },
  { icon: "training", title: "Treinamento e capacitação", description: "Treinamentos práticos e teóricos para brigadas, com orientações de resposta e evacuação." },
] as const;

export const gallery = [
  { src: "/images/servicos/quadro-comando-bombas.jpeg", alt: "Quadro de comando elétrico aberto com componentes organizados", caption: "Quadro de comando" },
  { src: "/images/projetos/conjunto-bomba-incendio.jpeg", alt: "Conjunto vermelho de bomba de incêndio com válvulas", caption: "Conjunto de bombeamento" },
  { src: "/images/servicos/porta-corta-fogo.jpeg", alt: "Porta corta-fogo cinza instalada e sinalizada", caption: "Porta corta-fogo" },
  { src: "/images/servicos/sinalizacao-hidrante.jpeg", alt: "Ponto de hidrante com placas de sinalização", caption: "Sinalização de hidrante" },
  { src: "/images/servicos/demarcacao-extintor.jpeg", alt: "Demarcação vermelha e amarela para equipamento de emergência", caption: "Demarcação de segurança" },
  { src: "/images/projetos/extintores-reunidos.jpeg", alt: "Grupo de extintores reunidos para serviço", caption: "Extintores" },
  { src: "/images/projetos/hidrante-caixa-piso.jpeg", alt: "Ponto de hidrante instalado em caixa no piso", caption: "Ponto de hidrante" },
  { src: "/images/servicos/iluminacao-emergencia.jpeg", alt: "Luminária de emergência instalada na parede", caption: "Iluminação de emergência" },
] as const;

export const processSteps = [
  { title: "Contato", description: "Você apresenta sua necessidade e o tipo de imóvel ou operação." },
  { title: "Avaliação", description: "A equipe reúne as informações e, quando aplicável, avalia o local." },
  { title: "Proposta", description: "O escopo e o orçamento são preparados conforme a necessidade identificada." },
  { title: "Execução e acompanhamento", description: "O serviço é programado e as orientações necessárias são alinhadas." },
] as const;

export const cases = [
  { name: "NovaBrink", segment: "Indústria", description: "Implantação de sistema de combate a incêndio em ambiente industrial." },
  { name: "Civil Tower", segment: "Condomínio residencial", description: "Atendimento relacionado a portas corta-fogo e extintores." },
  { name: "Rede Mix", segment: "Operação comercial", description: "Sistema de bombeamento, rede de tubulação e central de alarme." },
] as const;

export const differentials = [
  "Escopo definido conforme a necessidade de cada ambiente",
  "Atuação integrada entre projeto, instalação e manutenção",
  "Experiência prática demonstrada em trabalhos reais",
  "Atendimento técnico em Salvador e Região Metropolitana",
  "Manutenção preventiva e corretiva",
] as const;
