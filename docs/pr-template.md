# Pull Request Template: RibbitSite

## 📝 Descrição
Forneça um breve resumo das alterações feitas e a motivação por trás desta mudança técnica ou visual.

## 🛠️ O que foi feito
- [ ] Implementação de novos componentes React / utilitários.
- [ ] Ajuste de estilização CSS ou novos tokens.
- [ ] Correções de bugs ou melhoria de performance.
- [ ] Documentação técnica adicionada em `/docs` ou `/content`.

## 🧪 Como testar as alterações
Descreva passo a passo como o revisor pode executar o código localmente e validar as mudanças:
1. Faça o checkout para a branch: `git checkout <nome-da-branch>`
2. Execute a instalação de pacotes: `npm install`
3. Inicie o servidor local: `npm run dev`
4. Acesse a URL indicada e realize as seguintes validações:
   - [ ] Validação A: ...
   - [ ] Validação B: ...

---

## ✅ Checklist de Revisão (QA Integration)
*Por favor, marque com `[x]` as tarefas validadas e cumpridas antes de solicitar a revisão:*

- [ ] **Responsividade**: Testado em Mobile (320px), Tablet (768px) e Desktop (1024px+).
- [ ] **Acessibilidade**: Contraste de texto validado e navegável via tecla `Tab` com foco visível.
- [ ] **Performance**: Testado no Lighthouse atingindo as metas mínimas estabelecidas em [qa-checklist.md](file:///c:/RibbitSite/docs/qa-checklist.md).
- [ ] **SEO**: Apenas um elemento `<h1>` na página e meta tags básicas (title/description) presentes.
- [ ] **Links**: URLs apontando corretamente para o repositório [RibbitApp](https://github.com/Hoennkeys/RibbitApp) sem caminhos quebrados.
- [ ] **Qualidade de Código**: Sem variáveis não utilizadas, imports órfãos ou console.logs perdidos.

---

## 🔗 Issues Relacionadas
*Link das issues fechadas ou afetadas por este PR:*
- Closes #
- Relates to #
