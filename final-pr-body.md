## 📝 Descrição
Este Pull Request finaliza a primeira etapa do portal **RibbitSite**, consolidando os padrões de design system, copywriting comercial, carrossel interativo de telas e os cards de recursos em Bento Grid. O projeto está totalmente configurado, compilando sem warnings e com testes unitários em execução.

## 🛠️ O que foi feito
- [x] Implementação dos componentes React principais (`Hero.tsx`, `ScreensCarousel.tsx`, `FeatureCard.tsx`).
- [x] Integração da folha de estilos do design system (`tokens.css`, `globals.css` com as classes utilitárias `.btn-neon`, `.card-glass` e `.hero-bg`).
- [x] Geração de 5 screenshots vetoriais SVG do app em `/public/assets/screens/` para visualização real do carrossel.
- [x] Configuração e execução bem-sucedida de testes unitários Jest + React Testing Library.
- [x] Homologação de compilação 100% livre de warnings pelo Vite.
- [x] Documentação técnica completa e guia de testes em `/docs` (`release-notes-sprint1.md`, `qa-checklist.md`).

## 🧪 Como testar as alterações
1. Execute `npm install` para instalar as novas dependências de teste e plugins.
2. Inicie o servidor local com `npm run dev` e acesse `http://localhost:5173/`.
3. Valide a responsividade, o autoplay do carrossel de telas no desktop, a flutuação do mockup e gestos de swipe no mobile.
4. Execute `npm run build` para garantir que o compilador do Vite feche a entrega de build.
5. Execute `npm test` para rodar os testes Jest do `FeatureCard`.

---

## ✅ Checklist de Revisão (QA Integration)
- [x] **Responsividade**: Mobile, tablet e desktop validados e testados localmente.
- [x] **Acessibilidade**: Focos de teclado e contrastes do Apple Design System validados.
- [x] **Performance**: Build ultra leve gerado pelo Vite.
- [x] **SEO**: Tags de cabeçalho estruturadas e IDs definidos.
- [x] **Links**: Link do app direcionado para o repositório RibbitApp.
- [x] **Qualidade de Código**: TypeScript compilando limpo e sem warnings.

---

## 🔗 Issues Relacionadas
- Closes #1
