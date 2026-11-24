# Pendências — dependem do Pedro

## Contato
- **LinkedIn:** preencher URL em `src/data/site.js` na constante `SITE.contacts.linkedin` (substituir `[PREENCHER]`). Enquanto estiver vazio, o botão não aparece no site.
- **E-mail/WhatsApp:** não incluídos por decisão atual; adicionar em `src/data/site.js` e no componente `src/components/Contact.jsx` se desejar.

## Audiovisual (Fince Conecta)
- **Títulos dos vídeos:** os 3 vídeos já estão incluídos com títulos provisórios (`Vídeo 01/02/03`) em `src/data/videos.js`. Pedro deve conferir e substituir pelo título real de cada YouTube.
- **Papel confirmado:** edição de vídeo, cortes, trilha musical, fade out e acabamento (já aplicado a todos). Não atribuir outras competências sem confirmação.
- Para adicionar/remover vídeos, editar o array `videos` em `src/data/videos.js` mantendo os campos `id`, `title`, `url`, `role`.

## Projetos / metadados
- **Ferramenta não confirmada:** Visto E2, Luggi, Barracred Segurança, BMW, Dia Mundial da Água, Design de Motivação. Preencher `tools` em `src/data/projects.js`.
- **Behance:** confirmar se o link do perfil `https://www.behance.net/pedrosoares` está correto.
- **Foto de perfil:** o arquivo `Perfil/PERFIL.jpg` tem baixa resolução (827x1067 px, ~8 KB). Se tiver versão melhor, substituir `public/images/profile/perfil.jpg`.
- **Imagem de fundo:** `Perfil/FUNDO.jpg` usada no hero; pode ser trocada por outra imagem profissional em `public/images/profile/fundo.jpg`.

## Revisão visual
- Validar recortes/cortes das imagens no layout responsivo, especialmente peças com texto.
- Confirmar se a ordem dos 5 destaques está ideal para a entrevista.
- Revisar textos dos estudos de caso e ajustar qualquer nuance que Pedro queira enfatizar.