# Guia: Como Inserir Links de Checkout da Kiwify

Este guia explica como obter os links de checkout da Kiwify e inseri-los corretamente na landing page.

---

## Passo 1: Acessar sua Conta Kiwify

1. Acesse https://www.kiwify.com.br
2. Faça login com suas credenciais
3. Vá para o painel de controle (dashboard)

---

## Passo 2: Encontrar os Links de Checkout

### Para o E-book Principal (Legal Design na Prática)

1. No dashboard, clique em **"Produtos"** ou **"Meus Produtos"**
2. Localize o produto **"Legal Design na Prática para Advogados"**
3. Clique no produto para abrir seus detalhes
4. Procure por um botão ou link que diga **"Link de Venda"**, **"URL de Checkout"** ou **"Compartilhar"**
5. Copie o link completo (algo como: `https://kiwify.com.br/seu-usuario/legal-design-na-pratica`)

### Para os Order Bumps

Repita o mesmo processo para:
- **Kit Profissional de Modelos em Legal Design** - copie o link
- **Legal Design Lucrativo** - copie o link

---

## Passo 3: Inserir os Links na Landing Page

Agora que você tem os links, você pode inserir de duas formas:

### Opção A: Editar Direto no Código (Mais Rápido)

1. Abra o arquivo `client/src/pages/Home.tsx` no seu editor de código
2. Procure por `href="https://kiwify.com.br"` (aparece várias vezes)
3. Substitua cada URL pelos links específicos:

**Para o E-book Principal (aparece 2 vezes):**
```jsx
// Encontre:
href="https://kiwify.com.br"

// Substitua por:
href="https://kiwify.com.br/seu-usuario/legal-design-na-pratica"
```

**Para o Kit Profissional (aparece 1 vez):**
```jsx
// Encontre (na seção Order Bump 1):
href="https://kiwify.com.br"

// Substitua por:
href="https://kiwify.com.br/seu-usuario/kit-profissional-modelos"
```

**Para o Legal Design Lucrativo (aparece 1 vez):**
```jsx
// Encontre (na seção Order Bump 2):
href="https://kiwify.com.br"

// Substitua por:
href="https://kiwify.com.br/seu-usuario/legal-design-lucrativo"
```

### Opção B: Usar a Interface do Manus (Mais Fácil)

Se estiver usando a plataforma Manus:

1. Abra o projeto no Manus
2. Clique em **"Preview"** para visualizar a página
3. Use o **Visual Editor** para selecionar cada botão
4. Clique no botão e procure pela opção **"Link"** ou **"URL"**
5. Cole o link da Kiwify correspondente
6. Salve as alterações

---

## Passo 4: Testar os Links

Depois de inserir os links:

1. Acesse sua landing page (localhost:3000 se estiver testando localmente)
2. Clique em cada botão "Acesso Imediato", "Comprar Agora" e "Adicionar ao Carrinho"
3. Verifique se você é redirecionado para a página correta na Kiwify
4. Certifique-se de que cada produto está sendo exibido corretamente

---

## Estrutura Completa dos Links

Aqui está onde cada link aparece na página:

| Seção | Botão | Link |
|-------|-------|------|
| Hero Section | Acesso Imediato | E-book Principal |
| Seção de Produtos - Card 1 | Comprar Agora | E-book Principal |
| Seção de Produtos - Card 2 | Adicionar ao Carrinho | Kit Profissional |
| Seção de Produtos - Card 3 | Adicionar ao Carrinho | Legal Design Lucrativo |
| Seção Final CTA | Acesso Imediato | E-book Principal |

---

## Dicas Importantes

### 1. Links com Parâmetros UTM (Para Rastreamento)

Se você quiser rastrear de onde vêm suas conversões, adicione parâmetros UTM aos links:

```
https://kiwify.com.br/seu-usuario/legal-design-na-pratica?utm_source=landing_page&utm_medium=hero&utm_campaign=legal_design
```

Parâmetros úteis:
- `utm_source`: origem (landing_page, facebook, instagram, etc.)
- `utm_medium`: tipo de mídia (hero, cta, footer, etc.)
- `utm_campaign`: nome da campanha

### 2. Abrir em Nova Aba

Os links já estão configurados para abrir em nova aba (`target="_blank"`), o que é bom para não perder o visitante da sua landing page.

### 3. Verificar Compatibilidade

Certifique-se de que:
- Os links funcionam no desktop
- Os links funcionam no mobile
- O checkout da Kiwify carrega corretamente

---

## Encontrando o Link Exato da Kiwify

Se não conseguir encontrar o link na Kiwify:

### Método 1: Copiar do Link de Compartilhamento
1. No produto, procure por um botão **"Compartilhar"** ou **"Copiar Link"**
2. Clique nele
3. O link será copiado para sua área de transferência

### Método 2: Verificar a URL do Produto
1. Clique no produto para abrir seus detalhes
2. Observe a URL na barra de endereços
3. Essa URL geralmente é o link de checkout

### Método 3: Contatar Suporte Kiwify
Se ainda tiver dúvidas:
- Acesse https://suporte.kiwify.com.br
- Procure por "Como obter o link de venda"
- Ou entre em contato com o suporte

---

## Exemplo Prático Completo

Suponha que seus links sejam:
- E-book: `https://kiwify.com.br/joao-silva/legal-design-na-pratica`
- Kit: `https://kiwify.com.br/joao-silva/kit-profissional`
- Lucrativo: `https://kiwify.com.br/joao-silva/legal-design-lucrativo`

Você substituiria no código assim:

```jsx
// Hero Section - Acesso Imediato
<a href="https://kiwify.com.br/joao-silva/legal-design-na-pratica" target="_blank">
  Acesso Imediato
</a>

// Card 1 - Comprar Agora
<a href="https://kiwify.com.br/joao-silva/legal-design-na-pratica" target="_blank">
  Comprar Agora
</a>

// Card 2 - Adicionar ao Carrinho
<a href="https://kiwify.com.br/joao-silva/kit-profissional" target="_blank">
  Adicionar ao Carrinho
</a>

// Card 3 - Adicionar ao Carrinho
<a href="https://kiwify.com.br/joao-silva/legal-design-lucrativo" target="_blank">
  Adicionar ao Carrinho
</a>
```

---

## Próximos Passos

Depois de inserir os links:

1. **Teste tudo**: Clique em cada botão e verifique se funciona
2. **Hospede o site**: Siga o guia de hospedagem (GUIA_HOSPEDAGEM.md)
3. **Configure o Facebook Pixel**: Para rastrear conversões
4. **Crie suas campanhas no Facebook Ads**: Aponte para sua landing page
5. **Monitore os resultados**: Acompanhe quantas pessoas clicam e compram

---

## Suporte

Se encontrar problemas:

- **Kiwify**: https://suporte.kiwify.com.br
- **Documentação Kiwify**: https://kiwify.com.br/ajuda
- **Comunidade**: Procure por tutoriais no YouTube sobre "Kiwify links de venda"

Boa sorte com suas vendas! 🚀
