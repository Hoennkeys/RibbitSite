# Relatório de Execução Local: RibbitSite

Este relatório confirma a configuração do ambiente local e a execução do servidor de desenvolvimento na porta `3000` para o portal **RibbitSite**.

---

## 1. Comandos Executados

Para configurar e rodar o projeto localmente, foram disparadas as seguintes instruções no PowerShell do Windows:

1.  **Ajuste do Servidor Vite**: Atualização do arquivo [vite.config.ts](file:///c:/RibbitSite/vite.config.ts) para forçar o servidor a utilizar a porta `3000`:
    ```typescript
    server: {
      port: 3000,
    }
    ```
2.  **Instalação de Dependências**:
    ```bash
    npm install
    ```
3.  **Execução do Servidor de Desenvolvimento**:
    ```bash
    npm run dev
    ```

---

## 2. URL de Acesso

O servidor Vite compilou todos os módulos TypeScript e recursos de estilo com sucesso, disponibilizando a aplicação no seguinte endereço local:

👉 **[http://localhost:3000/](http://localhost:3000/)**

---

## 3. Descrição Estrutural da Tela Inicial

Ao carregar o portal na porta 3000, a página inicial renderiza corretamente os seguintes blocos visuais e funcionais integrados ao design system:

1.  **Cabeçalho Flutuante (Navbar)**:
    *   Exibe o logotipo `🐸 Ribbit` com fonte em negrito acentuado à esquerda.
    *   Links de navegação âncoras ("Home", "Interface", "Funcionalidades").
    *   Botão de ação rápida à direita utilizando a classe utilitária de brilho `.btn-neon`.
2.  **Seção Hero (Apresentação)**:
    *   Carrega a classe utilitária de fundo `.hero-bg` (exibindo um degradê escuro com duas auras radiais em verde e roxo cyber nos extremos).
    *   Exibe o título principal: *"A voz dos anfíbios revelada pela ciência cidadã"* (onde o final possui gradiente de cores verde-azul).
    *   O parágrafo de subtítulo detalha a proposta de ciência cidadã na herpetologia.
    *   Dois botões de ação ("Baixar Ribbit App" em neon verde e "Como Funciona" com contorno).
    *   À direita, renderiza a imagem vetorial [hero-fallback.svg](file:///c:/RibbitSite/public/assets/hero-fallback.svg) com uma animação CSS contínua e suave de flutuação vertical.
3.  **Carrossel de Interface (ScreensCarousel)**:
    *   Exibe as telas do aplicativo dentro de mockups de smartphones centralizados.
    *   O autoplay avança os slides a cada 4 segundos de forma suave.
    *   Os textos de descrição à esquerda atualizam-se dinamicamente conforme a tela atual.
4.  **Grade de Recursos (Bento Grid)**:
    *   Renderiza 3 cards de recursos (`FeatureCard`) com preenchimento em vidro fosco (`.card-glass`), bordas finas com reflexo e halos de glow internos.
    *   Cada card exibe seu ícone SVG inline, título e descrição correspondente (Sound ID, Assistente Wizard e Sistema de XP).

---

## 4. Erros ou Warnings Encontrados

*   **Erros**: 0 (Nenhum erro de compilação ou execução).
*   **Warnings**: 0 (Vite inicializou a re-otimização das dependências e carregou o arquivo de configuração PostCSS e TS sem avisos de importação ou resolução de tipo).
