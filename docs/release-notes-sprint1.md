# Notas de Release: Sprint 1 — RibbitSite

Este documento descreve as funcionalidades desenvolvidas na Sprint 1 para o portal institucional **RibbitSite**, acompanhadas das diretrizes de testes para a equipe de controle de qualidade (QA).

---

## 1. Resumo do que foi Implementado

Durante esta sprint, estruturamos a base conceitual, o design system e a interface inicial da primeira dobra do portal. As seguintes tarefas foram concluídas:

1.  **Auditoria Técnica**: Mapeamento completo do repositório móvel *RibbitApp* e do backend *Supabase*, documentando esquemas de tabelas, regras de RLS, permissões de usuários e diretrizes de API.
2.  **Design System**:
    *   Criação de tokens estruturados em JSON (`design-system.json`) e variáveis CSS globais (`tokens.css`) configurando paletas escuras de alto contraste com acentos neon.
    *   Configuração do *Tailwind CSS v4* e *PostCSS* mapeados diretamente para as variáveis CSS locais.
3.  **Componentes de UI**:
    *   **Hero**: Primeira dobra responsiva mobile-first com copywriting em português, botões interativos neon e mockup flutuante animado via fallback SVG.
    *   **ScreensCarousel**: Carrossel responsivo de screenshots do app móvel contendo 5 placeholders de alta qualidade (Dashboard, SoundID, Chat, Explorar e Assistente). Suporta autoplay e setas de navegação no desktop, e gestos de arrastar (swipe) e bullets de navegação em telas mobile.
    *   **FeatureCard**: Cards Bento Grid integrados ao Tailwind CSS e animados com entrada e hover dinâmicos via *Framer Motion*.
4.  **Qualidade de Código e CI**:
    *   Configuração completa do **Jest** + **React Testing Library** executando testes unitários e com cobertura passando no componente `FeatureCard`.
    *   Compilação de build de produção pelo Vite 100% livre de warnings ou erros TypeScript/PostCSS.

---

## 2. Instruções para QA Manual (Verificação Local)

Para validar a integridade visual e interativa das alterações localmente, siga os seguintes passos:

### Passo 1: Inicializar o Ambiente
1.  Faça o checkout para a branch de homologação:
    ```bash
    git checkout site/init
    ```
2.  Instale os pacotes npm:
    ```bash
    npm install
    ```
3.  Rode o servidor local:
    ```bash
    npm run dev
    ```
4.  Abra o navegador no endereço: 👉 **[http://localhost:5173/](http://localhost:5173/)**

### Passo 2: Roteiro de Testes
*   **Acessibilidade**: Use a tecla `Tab` do teclado para percorrer os links do cabeçalho e botões. Verifique se o anel de foco verde/azul neon é exibido de forma nítida em todos os elementos clicáveis.
*   **Responsividade**:
    *   Reduza a janela do navegador para largura móvel (ex.: `375px`).
    *   Verifique se o menu colapsa, o botão CTA principal se ajusta ao centro e o mockup do celular se posiciona ordenadamente abaixo dos títulos.
    *   A Bento Grid de recursos deve fluir para uma única coluna.
*   **Interações do Carrossel**:
    *   *Desktop*: Verifique se as imagens das telas avançam automaticamente a cada 4 segundos. Passe o mouse sobre o carrossel para confirmar que o autoplay é pausado. Use os botões de setas laterais para mudar de slide manualmente.
    *   *Mobile*: Clique e arraste as imagens com o mouse (simulando toque) e confirme se o gesto de swipe muda as telas de forma tridimensional. Teste os bullets de paginação inferiores.
*   **Animação do Hero**: Confirme que o mockup de celular à direita oscila de forma suave e flutuante continuamente.
