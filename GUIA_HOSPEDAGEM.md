# Guia de Hospedagem - Legal Design Landing Page

Sua landing page está pronta para ser hospedada em plataformas **100% gratuitas**. Escolha uma das opções abaixo conforme sua preferência.

---

## Opção 1: Netlify (Recomendado - Mais Fácil)

### Passo a Passo:

1. **Acesse o Netlify**
   - Visite https://www.netlify.com
   - Clique em "Sign up" e crie uma conta (pode usar GitHub, Google ou email)

2. **Conecte seu Repositório**
   - Se você tiver os arquivos no GitHub, clique em "New site from Git"
   - Autorize o Netlify a acessar seu GitHub
   - Selecione o repositório com os arquivos da landing page

3. **Configure o Build**
   - Build command: `npm run build` (ou `pnpm build`)
   - Publish directory: `dist`
   - Clique em "Deploy"

4. **Seu Site Estará Online**
   - Netlify fornecerá um URL automático (ex: `seu-site-123.netlify.app`)
   - Você pode customizar o domínio depois

### Alternativa: Deploy Manual (Sem GitHub)

Se não quiser usar GitHub, você pode fazer upload direto:

1. Execute localmente: `npm run build`
2. Na pasta do projeto, você terá uma pasta `dist/` com todos os arquivos
3. No Netlify, arraste e solte a pasta `dist/` na área de upload
4. Pronto! Seu site estará online

---

## Opção 2: Vercel (Também Excelente)

### Passo a Passo:

1. **Acesse o Vercel**
   - Visite https://vercel.com
   - Clique em "Sign Up" e crie uma conta

2. **Importe seu Projeto**
   - Clique em "New Project"
   - Selecione seu repositório GitHub (ou faça upload de arquivos)
   - Vercel detectará automaticamente as configurações

3. **Deploy Automático**
   - Clique em "Deploy"
   - Seu site estará online em segundos

---

## Opção 3: GitHub Pages (Totalmente Gratuito)

### Passo a Passo:

1. **Crie um Repositório no GitHub**
   - Visite https://github.com/new
   - Nomeie como `seu-usuario.github.io`
   - Crie o repositório

2. **Faça Upload dos Arquivos**
   - Clone o repositório: `git clone https://github.com/seu-usuario/seu-usuario.github.io.git`
   - Copie os arquivos da pasta `dist/` para dentro do repositório
   - Faça commit e push: 
     ```bash
     git add .
     git commit -m "Deploy landing page"
     git push origin main
     ```

3. **Seu Site Estará Online**
   - Acesse: `https://seu-usuario.github.io`
   - GitHub Pages faz deploy automático a cada push

---

## Opção 4: Firebase Hosting (Google)

### Passo a Passo:

1. **Crie um Projeto Firebase**
   - Visite https://console.firebase.google.com
   - Clique em "Criar Projeto"
   - Siga as instruções

2. **Instale Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

3. **Configure e Faça Deploy**
   ```bash
   firebase init hosting
   # Selecione seu projeto
   # Public directory: dist
   npm run build
   firebase deploy
   ```

4. **Seu Site Estará Online**
   - Firebase fornecerá uma URL automática
   - Você pode customizar o domínio depois

---

## Opção 5: Surge.sh (Mais Simples Ainda)

### Passo a Passo:

1. **Instale Surge**
   ```bash
   npm install -g surge
   ```

2. **Faça Build**
   ```bash
   npm run build
   ```

3. **Deploy com Um Comando**
   ```bash
   surge dist/
   ```

4. **Pronto!**
   - Surge fornecerá um URL automático
   - Você pode customizar depois

---

## Como Usar com Facebook Ads

Depois de escolher uma plataforma e ter seu site online:

1. **Copie a URL do seu Site**
   - Exemplo: `https://seu-site.netlify.app`

2. **No Facebook Ads Manager**
   - Crie uma nova campanha
   - Selecione objetivo: "Conversões" ou "Tráfego"
   - Na seção "Anúncio", cole a URL do seu site
   - Configure seu público-alvo (advogados, Brasil, etc.)
   - Defina o orçamento e inicie a campanha

3. **Rastreamento**
   - Instale o Pixel do Facebook em seu site para rastrear conversões
   - Adicione este código no `<head>` do seu site:
     ```html
     <!-- Facebook Pixel Code -->
     <script>
       !function(f,b,e,v,n,t,s)
       {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
       n.callMethod.apply(n,arguments):n.queue.push(arguments)};
       // ... código completo do pixel
     </script>
     ```

---

## Dicas Importantes

### Domínio Personalizado

Todas as plataformas permitem usar um domínio personalizado (ex: `www.legaldesign.com.br`):

1. Compre um domínio em plataformas como:
   - Namecheap (https://www.namecheap.com)
   - GoDaddy (https://www.godaddy.com)
   - Registro.br (https://registro.br) - para domínios .br

2. Configure os DNS apontando para sua plataforma de hospedagem
3. A maioria das plataformas fornece guias passo a passo

### SSL/HTTPS

Todas as plataformas listadas fornecem **SSL gratuito** automaticamente. Seu site será seguro (https://).

### Performance

- **Netlify** e **Vercel**: Excelente performance, CDN global
- **GitHub Pages**: Boa performance, CDN global
- **Firebase**: Excelente performance, infraestrutura Google
- **Surge**: Boa performance para sites pequenos

### Suporte

- **Netlify**: Excelente documentação e suporte
- **Vercel**: Excelente documentação e suporte
- **GitHub Pages**: Documentação oficial do GitHub
- **Firebase**: Documentação Google (muito completa)
- **Surge**: Documentação simples e clara

---

## Próximos Passos Recomendados

1. **Escolha uma plataforma** (recomendamos Netlify por ser mais fácil)
2. **Faça o deploy** seguindo os passos acima
3. **Teste seu site** em diferentes dispositivos (mobile, tablet, desktop)
4. **Configure o Facebook Pixel** para rastrear conversões
5. **Crie suas campanhas no Facebook Ads** apontando para seu site
6. **Monitore os resultados** e otimize conforme necessário

---

## Suporte Técnico

Se encontrar dificuldades:

- **Netlify Support**: https://www.netlify.com/support/
- **Vercel Support**: https://vercel.com/support
- **GitHub Pages**: https://docs.github.com/en/pages
- **Firebase Support**: https://firebase.google.com/support
- **Surge Support**: https://surge.sh/help

---

## Resumo Rápido

| Plataforma | Facilidade | Performance | Domínio Grátis | Recomendação |
|-----------|-----------|------------|--------------|-------------|
| Netlify | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Sim | ✅ Melhor |
| Vercel | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Sim | ✅ Ótima |
| GitHub Pages | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Sim | ✅ Boa |
| Firebase | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Sim | ✅ Boa |
| Surge | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Sim | ✅ Simples |

---

Sua landing page está pronta para gerar conversões! Escolha uma plataforma e comece a vender seus produtos agora mesmo! 🚀
