const img = (file) => `/images/projects/${file}`;

export const projects = [
  {
    id: 'e2',
    index: '01',
    title: 'Campanha Visto E2',
    category: 'Campanha visual',
    type: 'Projeto autoral',
    tools: ['[confirmar ferramenta]'],
    behance: 'https://www.behance.net/gallery/236719059/Design-de-Alta-Conversao-Campanha-Full-Funnel',
    cover: img('E2-1.PNG'),
    images: ['E2-1.PNG', 'E2-2.PNG', 'E2-3.PNG', 'E2-4.PNG', 'E2-5.PNG', 'E2-6.PNG'].map(img),
    dims: [
      [864, 863], [865, 866], [865, 866], [866, 863], [864, 863], [862, 862],
    ],
    featured: true,
    context:
      'Projeto autoral de campanha visual, composto por seis peças, com foco em conversão como intenção de design.',
    objective:
      'Criar peças de campanha com destaque visual e comunicação orientada à ação, usando hierarquia e chamada para ação (CTA).',
    decisions: [
      'Mudança estratégica de cores para reforçar destaque visual.',
      'Hierarquia visual para organizar a leitura das informações.',
      'Uso de CTA para direcionar a ação do público.',
      'Consistência entre peças para manter unidade da campanha.',
    ],
    learning:
      'A campanha reforçou a importância de alinhar hierarquia, cor e CTA quando o objetivo da peça é conduzir uma ação.',
  },
  {
    id: 'luggi',
    index: '02',
    title: 'Redesign Post Luggi',
    category: 'Social media',
    type: 'Exercício de redesign',
    tools: ['[confirmar ferramenta]'],
    behance: 'https://www.behance.net/gallery/236869637/Redesign-post-Luggi-instrumentos-Musicais',
    cover: img('PostLuggi.PNG'),
    images: [img('PostLuggi.PNG')],
    dims: [[865, 863]],
    featured: true,
    context:
      'Exercício de redesign autoral para post de instrumentos musicais, com foco em comunicação comercial.',
    objective:
      'Reorganizar a mensagem do post para deixar a proposta de valor mais clara e facilitar a leitura.',
    decisions: [
      'Hierarquia visual para priorizar a informação principal.',
      'Contraste para dar destaque aos elementos-chave.',
      'Proposta de valor apresentada de forma mais direta.',
      'CTA para orientar o próximo passo do público.',
    ],
    learning:
      'Em peças comerciais, clareza na proposta de valor e na hierarquia reduz ruído e torna a comunicação mais objetiva.',
  },
  {
    id: 'clinica',
    index: '03',
    title: 'Post Clínica Financeira Barracred',
    category: 'Social media',
    type: 'Exercício',
    tools: ['Photopea'],
    behance: 'https://www.behance.net/gallery/230362083/Post-Clinica-Financeira-Barracred',
    cover: img('PostClinicaFinanceira.PNG'),
    images: [img('PostClinicaFinanceira.PNG')],
    dims: [[541, 675]],
    featured: true,
    context:
      'Exercício autoral desenvolvido no Photopea, com tema de educação financeira sobre variações de juros.',
    objective:
      'Comunicar um tema financeiro de forma clara, facilitando a compreensão da mensagem principal.',
    decisions: [
      'Hierarquia visual para organizar informação técnica.',
      'Contraste para destacar pontos relevantes da mensagem.',
      'Composição voltada à legibilidade em formato de post.',
    ],
    learning:
      'Temas complexos pedem síntese visual e priorização da informação para que a mensagem seja entendida rapidamente.',
  },
  {
    id: 'barra-bonita',
    index: '04',
    title: 'Protótipo Site Turístico Barra Bonita',
    category: 'Web design',
    type: 'Projeto autoral',
    tools: ['Figma'],
    behance: 'https://www.behance.net/gallery/230772719/Projeto-de-site-turistico-Barra-Bonita',
    cover: img('BarraBonita1.PNG'),
    images: [
      'BarraBonita1.PNG', 'BarraBonita2.PNG', 'BarraBonita3.PNG', 'BarraBonita4.PNG',
      'BarraBonita5.PNG', 'BarraBonita6.PNG', 'BarraBonita7.PNG', 'BarraBonita8.PNG',
    ].map(img),
    dims: [
      [1201, 677], [1405, 392], [1406, 391], [1407, 660],
      [1200, 670], [1400, 391], [1402, 393], [1404, 678],
    ],
    featured: true,
    context:
      'Atividade do curso Barracred Conecta, com a proposta de criar um protótipo de site para a cidade de Barra Bonita. O design foi feito por Pedro Soares no Figma.',
    objective:
      'Organizar informações turísticas em um protótipo de site com navegação clara e estrutura visual consistente.',
    decisions: [
      'Estruturação das telas para apresentar conteúdos da cidade em seções distintas.',
      'Organização visual para facilitar a navegação pelo protótipo.',
      'Uso de componentes e repetição visual para manter consistência entre as telas.',
    ],
    learning:
      'Prototipar um site exige pensar na experiência como um fluxo completo, não apenas em telas isoladas.',
  },
  {
    id: 'barracred-seguranca',
    index: '05',
    title: 'Redesign Post Barracred',
    category: 'Social media',
    type: 'Exercício de redesign',
    tools: ['[confirmar ferramenta]'],
    behance: 'https://www.behance.net/gallery/224338903/Redesign-Post-Barracred',
    cover: img('RedesignPostBarracred.PNG'),
    images: [img('RedesignPostBarracred.PNG')],
    dims: [[1402, 787]],
    featured: true,
    context:
      'Exercício de redesign autoral de post sobre segurança de dados, com foco em comunicação institucional.',
    objective:
      'Tornar a mensagem sobre segurança de dados mais objetiva e visualmente organizada.',
    decisions: [
      'Hierarquia visual para guiar a leitura.',
      'Identidade visual aplicada com consistência.',
      'Comunicação institucional com linguagem direta.',
      'Organização dos elementos para reforçar objetividade.',
    ],
    learning:
      'Em comunicação institucional, objetividade e hierarquia ajudam a transmitir confiança e clareza.',
  },
  {
    id: 'bmw',
    index: '06',
    title: 'Design BMW S1000RR',
    category: 'Projeto autoral',
    type: 'Projeto autoral',
    tools: ['[confirmar ferramenta]'],
    behance: 'https://www.behance.net/gallery/224351085/Design-da-Moto-BMW-S1000RR',
    cover: img('BMW.PNG'),
    images: [img('BMW.PNG')],
    dims: [[469, 635]],
    featured: false,
    context:
      'Projeto autoral inspirado na moto BMW S1000RR, com foco em estética esportiva, velocidade e tecnologia.',
    objective:
      'Criar uma composição visual que transmitisse energia e característica esportiva.',
    decisions: [
      'Composição orientada à sensação de velocidade.',
      'Direção visual alinhada a uma estética esportiva e tecnológica.',
    ],
    learning:
      'Projetos autorais são úteis para explorar linguagem visual e tomar decisões de composição com mais liberdade.',
  },
  {
    id: 'agua',
    index: '07',
    title: 'Dia Mundial da Água',
    category: 'Peça temática',
    type: 'Projeto autoral',
    tools: ['[confirmar ferramenta]'],
    behance: 'https://www.behance.net/gallery/224351415/-Dia-Mundial-da-Agua',
    cover: img('DiaMundialDaAgua.PNG'),
    images: [img('DiaMundialDaAgua.PNG')],
    dims: [[1403, 792]],
    featured: false,
    context:
      'Projeto autoral de peça temática sobre preservação da água e conscientização.',
    objective:
      'Comunicar a mensagem de conscientização com clareza e leveza visual.',
    decisions: [
      'Comunicação visual voltada à conscientização.',
      'Tratamento visual com leveza para apoiar a mensagem.',
    ],
    learning:
      'Em peças temáticas, a mensagem precisa ser imediata e o visual deve apoiar o tema sem competir com ele.',
  },
  {
    id: 'motivacao',
    index: '08',
    title: 'Design de Motivação',
    category: 'Peça autoral',
    type: 'Projeto autoral',
    tools: ['[confirmar ferramenta]'],
    behance: 'https://www.behance.net/gallery/224790949/Design-Motivacao',
    cover: img('Motivacao.PNG'),
    images: [img('Motivacao.PNG')],
    dims: [[600, 601]],
    featured: false,
    context:
      'Projeto autoral com tema de estudos, disciplina e crescimento pessoal.',
    objective:
      'Traduzir uma mensagem motivacional em uma peça visual direta.',
    decisions: [
      'Mensagem central priorizada na composição.',
      'Estrutura visual simples para reforçar a leitura.',
    ],
    learning:
      'Peças de mensagem direta exigem controle de hierarquia para que o conteúdo seja lido sem distrações.',
  },
  {
    id: 'fince-playlist',
    index: '09',
    title: 'Capa de Playlist Fince',
    category: 'Audiovisual / YouTube',
    type: 'Projeto autoral',
    tools: ['Photopea'],
    behance: 'https://www.behance.net/gallery/230839985/Capa-YouTube',
    cover: img('CapaYouTube.PNG'),
    images: [img('CapaYouTube.PNG')],
    dims: [[1400, 781]],
    featured: false,
    context:
      'Capa de playlist do canal Fince no YouTube, desenvolvida no Photopea.',
    objective:
      'Criar uma capa de playlist legível e identificável no contexto do YouTube.',
    decisions: [
      'Composição pensada para leitura em formato de capa digital.',
      'Elementos visuais organizados para reconhecimento no ambiente do canal.',
    ],
    learning:
      'Em peças para YouTube, a legibilidade em diferentes tamanhos de exibição é uma decisão essencial.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const galleryProjects = projects.filter((p) => !p.featured);
