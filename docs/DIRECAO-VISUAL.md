# Direção visual inicial

## 1. Conceito

**Proteção técnica demonstrada em campo.**

A identidade da landing page deve transmitir precisão, prontidão e confiança,
sem parecer alarmista. A página deve ter base clara e usar o vermelho como
elemento de orientação e ação, enquanto as fotografias reais comprovam a
atuação prática.

## 2. Leitura da marca

A logomarca fornecida combina:

- cruz vermelha associada ao universo de emergência e combate a incêndios;
- capacete, machado, escada, mangueira/esguicho e hidrante;
- tipografia arqueada, pesada e com contorno;
- preto, branco e vermelho como cores dominantes;
- detalhes em cinza, dourado/ocre e azul;
- composição circular e de forte presença.

O arquivo é rasterizado, quadrado e possui faixas azul e vermelha na borda
inferior. Não há versão vetorial nem fundo transparente nos materiais.

### Recomendação para a marca

Usar o arquivo atual de forma contida na navbar e no rodapé. Solicitar uma
versão vetorial ou PNG transparente antes da implementação definitiva. Não
redesenhar, recortar ou remover elementos da marca sem autorização.

## 3. Paleta proposta

Valores iniciais aproximados, a validar na etapa de design:

- **Vermelho principal:** `#D9231A`
- **Vermelho profundo:** `#8F1713`
- **Grafite:** `#202124`
- **Cinza técnico:** `#5F6368`
- **Cinza claro:** `#EEF0F2`
- **Branco:** `#FFFFFF`
- **Azul secundário da marca:** `#526A96`
- **Ocre de apoio:** `#C98B3C`

O vermelho deve destacar CTAs, números de etapas, ícones e pequenos pontos de
ênfase. Fundos vermelhos podem aparecer em faixas curtas. Evitar uma página
inteira vermelha ou predominantemente escura.

## 4. Distribuição de fundos

- Navbar: branca ou grafite muito claro.
- Hero: base clara ou grafite pontual com fotografia real dominante.
- Serviços: branco.
- Sobre: cinza muito claro.
- Galeria: branco ou grafite apenas atrás das imagens.
- Processo: branco, com linha técnica ou numeração vermelha.
- Cases: cinza claro.
- CTA final: vermelho profundo ou grafite com botão contrastante.
- Rodapé: grafite.

## 5. Tipografia

- Títulos: sans-serif robusta, condensada apenas se mantiver boa leitura.
- Corpo: sans-serif neutra, de alta legibilidade.
- Textos técnicos: frases curtas, entrelinha confortável e contraste forte.
- Botões: peso semibold, sem caixa alta excessiva.

A tipografia do PDF é muito pesada e arredondada para textos longos. Ela pode
inspirar títulos pontuais, mas não deve ser reproduzida em toda a interface.

## 6. Fotografia

### Papel das fotos

As fotografias reais devem ser o principal recurso de credibilidade. Priorizar
detalhes nítidos de equipamentos, instalações completas e evidências de
execução.

### Tratamento recomendado

- respeitar a proporção vertical predominante;
- usar cortes editoriais consistentes, sem esconder o objeto principal;
- aplicar apenas correções leves de exposição e cor;
- evitar filtros dramáticos, fumaça artificial ou sobreposição vermelha forte;
- não inserir textos sobre áreas visualmente carregadas;
- usar `next/image` na futura implementação;
- fornecer texto alternativo factual, sem atribuir cliente não confirmado.

### Imagens ilustrativas do PDF

As cenas de bombeiros, extintor em fumaça, fábrica e dashboard aparentam ser
ilustrações ou imagens geradas. Podem inspirar atmosfera, mas não devem aparecer
como prova de trabalho nem substituir as fotografias reais na galeria.

## 7. Composição

- Grade ampla e bem alinhada, com bastante respiro.
- Blocos técnicos simples, sem excesso de cartões.
- Linhas, barras e numeração inspiradas em sinalização industrial.
- Cantos discretamente arredondados ou retos.
- Ícones Lucide usados apenas para orientar serviços e contatos.
- Evitar brilho, neon, fumaça animada, gradientes excessivos e efeitos de
  “emergência”.

## 8. Hero recomendado

Composição assimétrica:

- texto e CTA em uma coluna clara;
- fotografia real de rede de hidrante ou conjunto instalado ocupando a outra
  coluna;
- pequena informação regional próxima ao CTA;
- nenhum selo, métrica ou certificação inventada.

A fotografia `rede-hidrante-instalada.jpeg` é a melhor candidata inicial pelo
contraste, limpeza e leitura imediata do segmento. Como é vertical, o layout
deve preservar o enquadramento ou combinar duas fotos sem criar uma colagem
poluída.

## 9. Galeria

Variar proporções e escala para evitar uma grade repetitiva. Misturar:

- uma imagem maior de instalação completa;
- detalhes de portas, bombas e quadro de comando;
- imagens menores de sinalização, demarcação e extintores.

As legendas devem identificar apenas o serviço visível. Não associar as fotos a
clientes sem confirmação.

## 10. Acessibilidade e confiança

- Contraste mínimo adequado para textos e botões.
- Foco visível em links e CTAs.
- Botão flutuante de WhatsApp sem cobrir conteúdo no mobile.
- Ícones acompanhados de texto quando comunicarem uma ação.
- Movimento discreto e respeito a `prefers-reduced-motion`.
- Número de telefone legível, além do link de WhatsApp.

## 11. Restrições

- Não usar a foto da central de alarme que expõe código operacional e local.
- Não usar a captura de contas de e-mail.
- Não usar fotos borradas ou deterioradas como destaque.
- Não adicionar logos de clientes que não foram fornecidos/autorizados.
- Não usar selos de certificação ou normas sem documentação.
- Não sugerir que imagens geradas do PDF sejam trabalhos executados.
