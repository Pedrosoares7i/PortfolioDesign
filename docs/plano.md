# Plano — Portfólio Pedro Soares (versão aprovada)

## Objetivo
Site de página única, publicável hoje, para apresentar 9 trabalhos do Pedro com curadoria, clareza e posicionamento profissional.

## Fatos confirmados (base dos textos)
- Todos os trabalhos: autorais do Pedro. Sem cliente real confirmado. Rótulos: **Projeto autoral** ou **Exercício/Exercício de redesign**.
- Sem imagens de “antes” nos redesigns. Sem comparações antes/depois.
- Visto E2: briefing não lembrado; descrever apenas intenção informada (conversão como objetivo de design, destaque visual, mudança estratégica de cores, hierarquia, CTA). Sem métrica/resultado.
- Clínica Financeira Barracred: teste/exercício, Photopea.
- Barra Bonita: atividade do curso Barracred Conecta; protótipo de site para a cidade; 8 telas; Figma; design por Pedro.
- Capa Fince: capa de **playlist** do canal Fince no YouTube; Photopea.
- Luggi e Barracred Segurança: exercícios de redesign autorais.
- Contatos: LinkedIn, Behance, YouTube. Sem e-mail/WhatsApp. LinkedIn em constante editável; botão oculto se vazio.
- Sem datas na página. Sobre inclui retomada com maturidade, sem pedir desculpas.

## Estrutura
Hero → Sobre → Projetos selecionados (5) → Estudos de caso (5) → Galeria complementar (4) → Audiovisual → Processo criativo → Ferramentas/habilidades → Contato/Footer. Navegação por âncoras, barra de progresso, seção ativa.

## Direção visual
Futurista/moderna: base escura `#0B0E11`, seções claras `#F2F5F7`, acento elétrico `#B8FF3C` (família lima extraída das peças, uso disciplinado), Space Grotesk + JetBrains Mono, grade editorial, numeração, imagens protagonistas, revelação suave ao rolar, `prefers-reduced-motion`.

## Stack
React + Vite (JS), CSS próprio com variáveis, Lucide React pontual. Dados em `src/data/projects.js` e `src/data/videos.js`. Imagens em `public/images/projects/` e `public/images/profile/`.

## Critérios
Build sem erros, responsivo 360/768/1280+, acessível, sem dados inventados, imagens com dimensões/lazy.