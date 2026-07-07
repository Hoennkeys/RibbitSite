# Diretrizes Estéticas e Design System: RibbitSite

Este documento estabelece o guia estético e de design do **RibbitSite**, extraído dos conceitos visuais e dinâmicas de criação de sites premium (estilo "R$ 25.000") apresentados no vídeo *«Antigravity + Nano Banana 2 = Sites costing R$25,000 (Absurd)»* de Enzo Barbatto. 

A proposta estética une a herpetologia e a bioacústica com a alta tecnologia através de um design futurista, interfaces escuras de alto contraste, elementos translúcidos e animações cinéticas fluidas.

---

## 1. Paleta de Cores (Dark Techno-Organic)

A paleta de cores foca no alto contraste do tema escuro combinado com acentos neon que imitam a luminescência e a bioacústica dos anfíbios.

| Função | Cor Hex | Descrição |
| :--- | :--- | :--- |
| **Fundo Principal** | `#030712` | Cinza-preto ultra profundo que fornece contraste e profundidade infinita. |
| **Fundo de Cards** | `#0F172A` | Azul-cinza escuro e fechado para superfícies e blocos da Bento Grid. |
| **Acento 1 (Bioacústico)** | `#34C759` | Verde folha/neon elétrico vibrante, cor principal de destaque do app. |
| **Acento 2 (Tecnologia)** | `#0071E3` | Azul elétrico puro e brilhante para caminhos secundários e marcações. |
| **Acento 3 (Profundidade)** | `#8B5CF6` | Roxo cyber de preenchimento para luzes desfocadas (ambient glow). |
| **Highlight / Texto** | `#F9FAFB` | Branco gelo brilhante para tipografia e linhas de destaque ultra-finas. |
| **Bordas / Grade** | `#1E293B` | Cinza-azul sutil para desenhar linhas de grade e divisores de forma discreta. |

---

## 2. Tipografia e Estilos

A tipografia deve transmitir robustez tecnológica e legibilidade impecável sob o fundo escuro.

### Título (Headers)
* **Família**: `Plus Jakarta Sans` ou `Syne` (fontes geométricas modernas com curvas acentuadas).
* **Pesos**: `Bold (700)` e `ExtraBold (800)`.
* **Tracking (Espaçamento de Letras)**: `-0.03em` a `-0.05em` (levemente condensado para dar um aspecto robusto e monolítico aos títulos de marketing).
* **Transformação**: Caixa alta sutil para chamadas de seção e subtítulos de categoria.

### Corpo (Body Text)
* **Família**: `Geist Sans` ou `Inter` (fontes focadas em interfaces de alta resolução, desenvolvidas com foco geométrico).
* **Pesos**: `Regular (400)` e `Medium (500)`.
* **Tracking**: `0em` (neutro para leitura corrente) e `+0.05em` em fontes muito pequenas (caps/tags) para melhorar a leitura contra o fundo escuro.

---

## 3. Ritmo de Animação e Motion Patterns

As transições no site seguem o ritmo inercial físico (cinético), simulando peso e materialidade de alta fidelidade:

1. **Entrada do Hero Section (Hero Fade-In & Scale)**:
   * **Duração**: `0.85s`
   * **Curva**: `cubic-bezier(0.16, 1, 0.3, 1)` (Desaceleração ultra-suave pós-impacto rápido).
   * **Descrição**: O título e o mockup 3D sobem levemente (`translateY(30px) → 0`) enquanto a opacidade vai de 0% a 100%.
2. **Entrada de Blocos Bento Grid (Staggered Entrance)**:
   * **Duração**: `0.45s` por bloco.
   * **Delay**: incremental de `0.1s` por elemento.
   * **Descrição**: Cards surgem em sequência fluida da esquerda para a direita, dando ritmo visual durante a rolagem.
3. **Loop da Frequência Acústica (Hero Background Wave)**:
   * **Duração**: `12.0s` (Contínuo)
   * **Curva**: `linear`
   * **Descrição**: Uma onda orgânica de partículas ou grade vetorial em 3D flutua suavemente em loop infinito ao fundo do site.
4. **Desconstrução do Produto no Scroll (Scroll-Triggered Assembly)**:
   * **Duração**: Sincronizada 1:1 com a rolagem do usuário (*Scroll-Driven*).
   * **Suavização (Scrub)**: `1.2s` de lag inercial.
   * **Descrição**: À medida que o usuário rola a página, os componentes do app (interface, espectrograma, banco de dados) se montam ou explodem em 3D no espaço.
5. **Micro-interações de Botão (Hover Accent Glow)**:
   * **Duração**: `0.2s`
   * **Curva**: `ease-out`
   * **Descrição**: Um halo de luz neon radial segue o ponteiro do mouse na superfície do botão e as bordas acendem em verde elétrico.

---

## 4. Descritores Visuais (Estética Core)

1. **Bento Grid Layout**: Organização de informações em painéis de formatos variados com cantos arredondados de `20px` e divisores de grade minimalistas de `#1E293B`, gerando visual limpo de dashboard premium.
2. **Glassmorphism**: Painéis translúcidos em camadas sobre o fundo escuro com preenchimento leve `rgba(15, 23, 42, 0.65)`, efeito de desfoque `backdrop-filter: blur(24px)` e contornos finos de 1px com opacidade gradual.
3. **Ambient Glow (Halos de Luz)**: Grandes círculos coloridos desfocados (`radial-gradient` com blur de `120px` e opacidades entre `10%` e `20%`) flutuando atrás de blocos importantes, criando atmosfera imersiva e tridimensional.
4. **Grade Vetorial Científica**: Backgrounds com padrões de linhas de grade de design de engenharia (`grid patterns` ou `dots`) na cor `#1E293B` com opacidade de `5%`, evocando o rigor de pesquisas biológicas acadêmicas.
5. **Dynamic Gradient (Gradiente Orgânico)**: Transições cromáticas suaves entre o Verde Ribbit (`#34C759`) e o Azul Tecnologia (`#0071E3`) aplicadas a botões de conversão e elementos dinâmicos interativos.
6. **Parallax de Profundidade de Camada**: Separação física de componentes e textos sobrepostos que flutuam em velocidades ligeiramente desiguais ao longo da página, gerando percepção física de relevo e sofisticação.

---

## 5. Referências de Design (Screenshots Estilizadas)

As descrições abaixo servem de diretriz detalhada para a construção de imagens conceituais e mockups de alta fidelidade para o site:

### Screenshot 1: O Hero Bioacústico Tridimensional (Primeira Dobra)
* **Composição**: Um mockup 3D de um smartphone flutua inclinado em perspectiva à direita da tela. Da tela do aparelho, "vazam" ondas brilhantes tridimensionais (filamentos verdes e azuis brilhantes) representando o coaxar de um sapo. À esquerda, um título em caixa alta com fonte bold gigante diz *"A VOZ DOS ANFÍBIOS REVELADA PELA CIÊNCIA"*, seguido de dois botões em vidro brilhante e contorno verde neon para download do app.
* **Camadas**:
  * *Fundo*: Preto puro com uma grade vetorial fina e um grande halo de luz roxa de fundo desfocada atrás do celular.
  * *Intermediária*: Mockup tridimensional do celular com detalhes metálicos e as linhas brilhantes do espectrograma 3D que avançam pelo espaço virtual.
  * *Frente*: Textos nítidos em branco e verde elétrico e botões flutuantes que projetam sombras suaves sobre o fundo.
* **Cores**: Tons de cinza, verde elétrico (`#34C759`), azul elétrico (`#0071E3`) e branco gelo (`#F9FAFB`).

### Screenshot 2: A Bento Grid Científica (Destaque de Recursos)
* **Composição**: Um painel horizontal composto por 4 cards de tamanhos e formatos diferentes agrupados em uma grade minimalista. 
  * O card principal exibe uma simulação visual do "Assistente Wizard" com botões de opções que parecem lapidados em vidro fosco.
  * O segundo card exibe o avatar do usuário e seu progresso com um indicador circular de nível de gamificação brilhando em verde.
  * O terceiro card mostra um espectrograma de áudio animado de 6 segundos em loop.
  * O quarto card apresenta um mapa do Brasil com geolocalização brilhante por pins em neon azul.
* **Camadas**:
  * *Fundo*: Fundo escuro texturizado com halos suaves de luz azul esmeralda que iluminam os cantos dos cards.
  * *Intermediária*: Estrutura dos cards em vidro fosco com bordas brilhantes.
  * *Frente*: Textos explicativos com tipografia cinza e branca, dados numéricos e ícones em neon.
* **Cores**: `#030712`, acentos em roxo violeta (`#8B5CF6`) e verde limão (`#34C759`).

### Screenshot 3: A Ficha Científica Dinâmica (Hub de Espécies)
* **Composição**: Tela dividida verticalmente. À esquerda, destaca-se uma fotografia macro de altíssima definição de uma perereca-verde sobre uma folha escura, com tags flutuantes em neon que mostram *"Bioma: Mata Atlântica"*, *"Vulnerabilidade: Pouco Preocupante"* e *"Canto: Frequência Aguda"*. À direita, um painel em glassmorphism exibe a descrição taxonômica e um player de som interativo com um espectrograma verde vibrante que brilha ativamente à medida que a barra de reprodução avança.
* **Camadas**:
  * *Fundo*: Cinza escuro com gradientes suaves de luz que iluminam o animal.
  * *Intermediária*: A imagem recortada do anfíbio e o bloco do painel de leitura com cantos arrendados.
  * *Frente*: Player de áudio com botões de controle e espectrograma aceso, cercados por tipografia nítida e de fácil leitura.
* **Cores**: Tons escuros, verde ácido (`#34C759`), azul (`#0071E3`) e textos em branco.
