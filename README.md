# RibbitSite — Portal Institucional e Científico

O **RibbitSite** é o portal institucional e central científica do aplicativo **RibbitApp** (aplicativo mobile para mapeamento bioacústico de anfíbios brasileiros). O objetivo do site é converter novos observadores, explicar as funcionalidades do app, hospedar uma demo interativa de coaxares com espectrogramas, centralizar discussões acadêmicas e documentar as integrações com o Supabase.

---

## 🚀 Como Rodar Localmente

Certifique-se de que possui o **Node.js (versão >= 22.11.0)** instalado.

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Inicialize o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) no seu navegador para ver o site rodando.

---

## 📁 Estrutura de Pastas

A estrutura básica do repositório está organizada da seguinte forma:

```
[RibbitSite]
├── content/                     # Copywriting e textos em português
│   ├── copy-hero.md             # Variações de copy para a primeira dobra (Hero)
│   └── features-copy.md         # Textos dos cards Bento Grid e microcopy de UI
├── design-system/               # Arquivos de tokens e motion design do site
│   ├── design-system.json       # Tokens estruturados e especificações de componentes
│   └── hero-animation-spec.md   # Especificações de motion e roteiro de animação do Hero
├── docs/                        # Documentações técnicas e guias estéticos
│   ├── auditoria.md             # Auditoria técnica do app mobile e base do Supabase
│   └── estetica.md              # Diretrizes estéticas, cores, tipografia e screenshots
├── public/                      # Arquivos estáticos servidos diretamente
│   └── assets/                  # Imagens, ícones e SVGs (inclui hero-fallback.svg)
├── scripts/                     # Scripts utilitários de scaffold e automação
│   └── init-project.sh          # Script Shell de inicialização e instalação de pacotes
└── src/                         # Código-fonte da aplicação Web
    ├── components/              # Componentes de interface do React (ex: FeatureCard.tsx)
    │   └── __tests__/           # Testes unitários Jest + React Testing Library
    └── styles/                  # Estilos globais e arquivos CSS
        └── tokens.css           # Variáveis CSS (:root) e estilos de glassmorphism
```

---

## 🔗 Links Úteis e Documentos de Design

*   [Auditoria de Funcionalidades e Supabase](file:///c:/RibbitSite/docs/auditoria.md)
*   [Diretrizes Estéticas e Referência Visual](file:///c:/RibbitSite/docs/estetica.md)
*   [Especificação de Animação do Hero (Lottie/Framer)](file:///c:/RibbitSite/design-system/hero-animation-spec.md)
*   [Tokens do Design System (JSON)](file:///c:/RibbitSite/design-system/design-system.json)
*   [Variáveis CSS Globais (:root)](file:///c:/RibbitSite/src/styles/tokens.css)
*   [Copywriting do Hero (Variações)](file:///c:/RibbitSite/content/copy-hero.md)
*   [Copywriting de Recursos & Microcopy](file:///c:/RibbitSite/content/features-copy.md)

---

## 🤖 Diretrizes para Agentes Autônomos (AI Agents)

Se você é um agente de IA pair programming neste projeto, siga estas instruções:
*   **Documentação**: Qualquer auditoria, análise técnica adicional, guia de arquitetura ou relatório de usabilidade deve ser obrigatoriamente salvo na pasta `/docs` em formato Markdown (.md).
*   **Componentização**: Componentes reutilizáveis devem ser colocados em `/src/components` com a respectiva tipagem TypeScript e acompanhados de testes unitários na pasta `__tests__`.
*   **Padrões de Cores e Estilo**: Utilize estritamente os tokens de estilo declarados em `/src/styles/tokens.css`. Não declare cores ou blurs ad-hoc que fujam da paleta estabelecida.
