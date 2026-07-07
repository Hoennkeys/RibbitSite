# Checklist de QA (Garantia de Qualidade): RibbitSite

Este documento estabelece as métricas e critérios de aceitação visual, técnica e funcional necessários antes da aprovação de qualquer Pull Request na branch `site/init` ou em branches futuras de desenvolvimento do portal RibbitSite.

---

## 1. Responsividade e Fidelidade Visual
- [ ] **Mobile First (320px - 480px)**: O menu colapsa em hambúrguer ou nav flutuante, a Bento Grid reorganiza-se em coluna única e o mockup do celular se posiciona centralizado abaixo do texto do Hero.
- [ ] **Tablet (768px - 1024px)**: Layout equilibrado, tamanhos de fonte ajustados para evitar quebras em palavras longas e o espaçamento lateral de margens mantido em `--spacing-lg` (24px).
- [ ] **Desktop (1024px - 1440px+)**: Bento Grid operando em 3 colunas, mockups em perspectiva alinhados lado a lado com os títulos e limite de largura máxima do contêiner (`max-w-7xl` ou `1280px`).
- [ ] **Cross-Browser**: Testar renderização no Chrome (Blink), Safari (Webkit) e Firefox (Gecko), garantindo que filtros de desfoque (`backdrop-filter`) funcionem corretamente.

---

## 2. Metas de Performance (Lighthouse Targets)
Ao rodar a auditoria do **Google Lighthouse**, a página de produção deve atingir ou superar as seguintes pontuações:

*   **Métricas de Desempenho**:
    *   *Performance*: **> 90**
    *   *Acessibilidade*: **> 95**
    *   *Melhores Práticas*: **> 95**
    *   *SEO*: **100**
*   **Web Vitals**:
    *   *Largest Contentful Paint (LCP)*: `< 2.5s` (Carregamento rápido da imagem do Hero).
    *   *First Input Delay (FID)*: `< 100ms` (Respostar rápida de botões).
    *   *Cumulative Layout Shift (CLS)*: `< 0.1` (Evitar saltos na montagem das fontes e Lottie).

---

## 3. Acessibilidade (WCAG Compliance)
- [ ] **Contraste de Cores**: Todo texto deve respeitar a relação de contraste mínima da WCAG AA de `4.5:1` para textos comuns e `3.0:1` para títulos grandes contra o fundo escuro (`#030712`).
- [ ] **Navegação por Teclado**: Foco visível (`:focus` ou `:focus-visible`) ativo e nítido em todos os botões e links navegáveis usando a tecla `Tab`.
- [ ] **Semântica HTML5**: Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- [ ] **Leitores de Tela**: Imagens e ícones puramente visuais possuem `aria-hidden="true"` ou descrições alternativas (`alt` preenchido em mockups importantes).
- [ ] **ARIA Labels**: Botões que contêm apenas ícones possuem atributo `aria-label` descritivo explicativo.

---

## 4. SEO e Meta Tags
- [ ] **Meta Title**: Título único e descritivo por página (máximo 60 caracteres).
- [ ] **Meta Description**: Descrição atraente contendo palavras-chave e chamadas para conversão (máximo 160 caracteres).
- [ ] **Hierarquia de Títulos**: Apenas um único elemento `<h1>` na página principal (no Hero) e sequência correta de `<h2>` a `<h6>`.
- [ ] **Unique IDs**: Todos os elementos interativos e links âncoras principais possuem IDs exclusivos para testes automatizados.
- [ ] **Favicon e OpenGraph**: Tags OG (Facebook/LinkedIn) e Twitter Cards configuradas para compartilhamento de link contendo imagem mockada e título do Ribbit.

---

## 5. Links e Integrações
- [ ] **Link do App**: Verificar se todas as referências ao repositório ou download apontam diretamente para o repositório oficial do app: [https://github.com/Hoennkeys/RibbitApp](https://github.com/Hoennkeys/RibbitApp).
- [ ] **Formulários**: Validar campos de e-mail e formulário de inscrição com regex básico para evitar submissões em branco.
