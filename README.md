# Portfólio — Pedro Soares

Site de portfólio de página única (React + Vite + CSS próprio).

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Como adicionar/editar um projeto

1. Coloque a imagem em `public/images/projects/`.
2. Edite `src/data/projects.js` e adicione/ajuste um objeto no array `projects`.
3. Campos principais:
   - `id`: identificador único (usado na âncora `#case-id`).
   - `index`: número exibido (ex.: `"10"`).
   - `title`, `category`, `type`: informações visíveis.
   - `tools`: array de ferramentas (use `[confirmar ferramenta]` se faltar).
   - `behance`: URL do projeto.
   - `cover`: caminho da imagem de capa (`/images/projects/...`).
   - `images`: array de imagens do estudo de caso.
   - `dims`: array `[largura, altura]` na mesma ordem de `images` (evita layout shift).
   - `featured`: `true` para destaque + estudo de caso; `false` para galeria complementar.
   - `context`, `objective`, `decisions`, `learning`: textos do estudo de caso.
4. Para vídeos, edite `src/data/videos.js`.
5. Para contatos e textos do perfil, edite `src/data/site.js`.

## Deploy (GitHub + Vercel)

### 1. Subir no GitHub
```bash
git add .
git commit -m "Portfólio Pedro Soares"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### 2. Publicar no Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub.
2. Clique em **Add New... > Project**.
3. Importe o repositório.
4. Configurações (detectadas automaticamente pelo Vite):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. A cada `git push` na branch principal, a Vercel publica novamente.

## Pendências
Veja `docs/pendencias.md` para itens que dependem de confirmação do Pedro.