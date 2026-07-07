# Integração do Design System: RibbitSite

Este documento descreve os passos técnicos executados para integrar os tokens de estilo, variáveis CSS e classes utilitárias no portal do **RibbitSite**.

---

## 1. Passo a Passo da Integração

A integração foi realizada através das seguintes etapas:

### Passo 1: Copiar os Arquivos do Design System
*   Os arquivos [design-system.json](file:///c:/RibbitSite/design-system/design-system.json) e [tokens.css](file:///c:/RibbitSite/src/styles/tokens.css) foram confirmados e mantidos no diretório do projeto, servindo como a fonte única da verdade para estilos.

### Passo 2: Importar Estilos no Ponto de Entrada
*   Criamos o arquivo [globals.css](file:///c:/RibbitSite/src/styles/globals.css) contendo as diretivas globais do Tailwind CSS e importando o arquivo de tokens via `@import "./tokens.css"`.
*   O arquivo [main.tsx](file:///c:/RibbitSite/src/main.tsx) foi atualizado para importar o `globals.css`, aplicando todas as variáveis e estilizações globalmente na renderização da árvore do React.

### Passo 3: Configurar o Tailwind CSS
*   O arquivo [tailwind.config.js](file:///c:/RibbitSite/tailwind.config.js) foi criado para mapear as cores, tipografias, cantos arredondados e sombras de forma estrita para as variáveis CSS declaradas no `tokens.css`:
    *   `theme.extend.colors.background` → `var(--color-background)`
    *   `theme.extend.colors.primary` → `var(--color-primary)`
    *   `theme.extend.colors.accent` → `var(--color-accent)`
    *   `theme.extend.fontFamily.title` → `var(--font-family-title)`
    *   `theme.extend.borderRadius.lg` → `var(--radius-lg)`

### Passo 4: Criar Classes Utilitárias Customizadas
Definimos 3 classes utilitárias fundamentais no [globals.css](file:///c:/RibbitSite/src/styles/globals.css) para compor elementos premium:
1.  `.btn-neon`: Botão principal com a cor verde bioacústica e sombra neon pulsante (`--shadow-neon-primary`), transição com curvas cúbicas e aumento de brilho no hover.
2.  `.card-glass`: Painel com desfoque de fundo em glassmorphic utilizando a variável de blur `--glass-backdrop-filter` e contorno suave que reage a foco/hover.
3.  `.hero-bg`: Plano de fundo gradiente que mistura a base escura (`#030712`) com halos radiais suaves nas cores verde e roxo cyber nos cantos da tela.

---

## 2. Implementação e Teste do Componente App

Criamos o componente [App.tsx](file:///c:/RibbitSite/src/App.tsx) integrando todo o design system:
*   Layout responsivo e com semântica HTML5.
*   Primeira dobra com fundo `.hero-bg`, título estilizado com gradiente de texto e botões `.btn-neon`.
*   Bento Grid de recursos usando 3 instâncias do componente React `FeatureCard` com dados reais (Sound ID, Assistente Wizard e Sistema de XP).

---

## 3. Instruções de Verificação Local

O servidor de desenvolvimento do Vite foi configurado e iniciado com sucesso sem avisos ou erros de módulo:

*   **Comando de Execução**:
    ```bash
    npm run dev
    ```
*   **URL Local**:
    👉 [http://localhost:5173/](http://localhost:5173/)
*   **Comportamento do DOM**:
    *   As variáveis `:root` em `tokens.css` são injetadas no escopo global.
    *   O Tailwind renderiza classes utilitárias dinâmicas mapeadas para as variáveis CSS (ex: `bg-background` responde a `--color-background`).
    *   O mockup e o cabeçalho adotam o comportamento de glassmorphic sob a classe `.card-glass`.
