# Deploy — GitHub + Vercel

## Pré-requisitos
- Git instalado e configurado.
- Conta no GitHub.
- Conta na Vercel (pode entrar com GitHub).

## 1. Conferir build local
```powershell
cd "C:\Users\Pedro Soares\PortfolioDesign"
npm install
npm run build
npm run preview
```
O build deve terminar sem erros e gerar `dist/`.

## 2. Subir para o GitHub
Se o repositório já existe localmente (este projeto já tem `.git`):
```powershell
git add .
git commit -m "Cria portfólio de Pedro Soares"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio-pedro-soares.git
git push -u origin main
```

Se o remote `origin` já existir, use:
```powershell
git remote set-url origin https://github.com/SEU-USUARIO/portfolio-pedro-soares.git
git push -u origin main
```

## 3. Publicar na Vercel
1. Acesse https://vercel.com/new.
2. Importe o repositório do GitHub.
3. Confirme as configurações:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Clique em **Deploy**.
5. Após o deploy, a Vercel gera uma URL pública (ex.: `https://portfolio-pedro-soares.vercel.app`).

## 4. Atualizações futuras
```powershell
git add .
git commit -m "Atualiza portfólio"
git push
```
A Vercel faz deploy automático a cada push na branch principal.

## 5. Checagem rápida antes da entrevista
- Abrir a URL no celular e no desktop.
- Testar links: Behance, YouTube, âncoras do menu.
- Confirmar que as imagens carregam.
- Conferir LinkedIn em `src/data/site.js` (botão fica oculto se `[PREENCHER]`).