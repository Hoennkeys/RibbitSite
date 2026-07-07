# Pull Request: Melhorias na UI, Carrossel Interativo e Seções Editoriais

## 📝 Descrição
Este Pull Request introduz melhorias cruciais na experiência visual e interativa da landing page do Ribbit, alinhando a navegação com a estética do Merlin Bird ID e expandindo a apresentação dos recursos do aplicativo móvel de forma editorial de alto contraste.

## 🛠️ O que foi feito
- [x] Implementação de novos componentes React / utilitários (`Navbar`, `TechSection`, `ChatSection`, `ExploreSection`, `Footer`).
- [x] Ajuste de estilização CSS ou novos tokens integrados ao Tailwind CSS v4.
- [x] Melhoria de usabilidade no carrossel de capturas de tela (deslizamento com toque no mobile e arrasto com clique de mouse no desktop).
- [x] Correções de acessibilidade (roles, aria-labels, navegabilidade e contraste).

## 🧪 Como testar as alterações
1. Faça o checkout para a branch: `git checkout feat/navbar-merlin`
2. Execute a instalação de pacotes: `npm install`
3. Inicie o servidor local: `npm run dev`
4. Acesse a URL `http://localhost:3000` e realize as seguintes validações:
   - [x] **Navbar**: Logotipo simplificado contendo o ícone de sapo e a palavra "Ribbit", sem divisor ou "HerpetoLab". O link "Home" possui borda verde apenas no hover, idêntico aos outros.
   - [x] **ScreensCarousel**: O carrossel de celulares agora exibe os textos descritivos centralizados na parte inferior, eliminando qualquer sobreposição com os telefones laterais. É possível deslizar as telas arrastando com o mouse no desktop e arrastando com o dedo no mobile.
   - [x] **Seções de Recursos (Sound ID, Chat, Explorar/Assistente)**: Três seções consecutivas de alto contraste com fundo branco, alinhamento editorial clássico e sapos ilustrativos isolados (`frog-cutout.png`, `frog-chat-cutout.png`, `frog-explore-cutout.png`) combinando com os respectivos mockups de tela.
   - [x] **Footer**: Rodapé completo com colunas institucionais, links úteis e botões de download de lojas de apps.

---

## ✅ Checklist de Revisão (QA Integration)
- [x] **Responsividade**: Testado em Mobile, Tablet e Desktop.
- [x] **Acessibilidade**: Contraste de texto de alto nível e navegação via tecla `Tab` com foco visível.
- [x] **SEO**: Apenas um elemento `<h1>` na página principal e meta tags estruturadas.
- [x] **Links**: URLs apontando corretamente.
- [x] **Qualidade de Código**: Código revisado, limpo de console.logs e variáveis não utilizadas.

---

## 🔗 Issues Relacionadas
- Relates to #2
