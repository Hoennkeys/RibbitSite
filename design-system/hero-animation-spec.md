# Especificação Técnica de Animação: Hero RibbitSite

Este documento define as especificações de motion design para a animação principal da seção **Hero** do site, estruturada para exportação via **Lottie** (JSON) e implementação programática usando **Framer Motion** (React).

---

## 1. Camadas da Composição (Layout de Animação)

A composição visual da animação do Hero está dividida em 5 camadas principais, ordenadas do plano de fundo para o primeiro plano:

```
[Camada 5: CTA Pulse]            -> Efeitos interativos e micro-interações de clique
[Camada 4: Foreground UI Mockup] -> Mockup 3D de celular e elementos de interface móvel
[Camada 3: Glow Layer]           -> Halos de luz neon desfocados pulsares
[Camada 2: Partículas]           -> Ondas flutuantes simulando frequências de áudio
[Camada 1: Background Gradiente] -> Base escura com linhas de grade estáticas
```

---

## 2. Cronograma de Movimento (Motion Specs)

A tabela abaixo especifica os parâmetros exatos para cada uma das camadas do Hero, garantindo um movimento fluido e cinético:

| Camada (Layer) | Parâmetro | Duração (s) | Easing (Curva de Tempo) | Delay (s) | Loop | Transformações Físicas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Background** | `grid_bg` | Estático | - | 0.0s | False | Opacidade: `0% → 100%` (fade-in inicial em `1.5s`). |
| **2. Partículas** | `sound_waves` | `12.0s` | `linear` | 0.4s | **True** | Translação: `translateX(0) → translateX(-300px)`<br>Distorção senoidal orgânica (onda física). |
| **3. Glow Layer** | `ambient_glows`| `8.0s` | `ease-in-out` | 0.0s | **True** | Escala: `1.0 → 1.15 → 1.0`<br>Opacidade: `15% → 25% → 15%` (efeito pulsar lento). |
| **4. Foreground** | `phone_mockup`  | `0.85s` | `cubic-bezier(0.16, 1, 0.3, 1)` | 0.2s | False | Translação: `translateY(40px) → 0px`<br>Rotação: `rotate(-5deg) → -2deg`<br>Opacidade: `0% → 100%`. |
| **4.1 Card Flutuante** | `species_card` | `3.5s` | `ease-in-out` | 0.8s | **True** | Translação: `translateY(0) → translateY(-8px) → translateY(0)` (efeito hover flutuante contínuo). |
| **5. CTA Pulse** | `btn_download`  | `2.0s` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | 1.0s | **True** | Escala do glow: `1.0 → 1.08`<br>Opacidade do glow: `30% → 0%` (efeito sonar radial). |

---

## 3. Instruções de Exportação para Lottie (Adobe After Effects)

Para que a animação seja exportada com sucesso do **After Effects** para formato Lottie (JSON) com máxima otimização:

### Nomenclatura Recomendada de Camadas
*   `#bg_grid`: Camada de vetores estáticos representando a grade.
*   `#wave_part_01` e `#wave_part_02`: Traçados vetoriais (Shape Layers) com o efeito *Trim Paths* e *Wave Warp* aplicados para criar a movimentação acústica.
*   `#neon_glow_radial`: Preenchimento com degradê radial simples e opacidade variável.
*   `#phone_container`: Pré-composição contendo as camadas de máscara vetorial do smartphone e glassmorphism.
*   `#match_card`: Card de espécie flutuante com sombra suave.

### Efeitos Suportados vs. Restrições Lottie
*   > [!WARNING]
    > **Evite o efeito Gaussian Blur (Desfoque Gaussiano)** nativo do After Effects para a camada de glow. O Lottie processa isso com grande perda de performance. 
    > *Alternativa*: Exporte os halos de luz como imagens PNG otimizadas de baixa resolução com blur já aplicado no Photoshop, e use o Lottie apenas para mover/escalar o asset da imagem.
*   Use apenas **Shape Layers** (Camadas de Forma) para desenhar o celular e a grade de fundo. Evite importar vetores complexos do Illustrator diretamente sem convertê-los em formas.
*   Não aplique efeitos tridimensionais complexos de câmera do After Effects. Caso precise de profundidade 3D, anime os eixos `X`, `Y` e `Scale` manualmente para simular o efeito parallax.

### Recomendações de Compressão
*   Utilize o plugin **Bodymovin** atualizado para exportar o JSON.
*   Selecione a opção **Include Assets in JSON** (caso utilize a imagem de glow mencionada acima) para gerar um arquivo único e evitar caminhos quebrados de imagens.
*   Habilite a compactação **GZip** no servidor web que hospedará o arquivo `.json` do Lottie.
*   *Meta de tamanho*: O arquivo final `.json` não deve ultrapassar **250 KB**.

---

## 4. Implementação com Framer Motion (React)

Para implementar os elementos de primeiro plano interativos de forma limpa, utilize o **Framer Motion** no Next.js/React. Exemplo de implementação do **Foreground UI Mockup** e **Card Flutuante**:

```jsx
import { motion } from 'framer-motion';

export default function HeroMockup() {
  return (
    <div className="relative w-full h-[500px]">
      {/* 1. Glow Layer de Fundo */}
      <motion.div
        className="absolute w-[350px] h-[350px] bg-primary-glow rounded-full filter blur-[100px] -z-10"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 2. Phone Mockup Container */}
      <motion.div
        className="absolute right-10 top-0 w-[240px] h-[480px] card-glass border border-white/8 rounded-[40px] overflow-hidden"
        initial={{ y: 50, opacity: 0, rotate: -5 }}
        animate={{ y: 0, opacity: 1, rotate: -2 }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        {/* Conteúdo Interno do Mockup do Aplicativo */}
        <div className="p-6">
          <span className="text-xs text-primary font-bold">Gravando coaxar...</span>
          <div className="h-[120px] bg-slate-900/50 rounded-2xl mt-4 flex items-center justify-center">
            {/* Onda sonora animada */}
          </div>
        </div>
      </motion.div>

      {/* 3. Card Flutuante de Espécie (Efeito Parallax + Float) */}
      <motion.div
        className="absolute right-0 bottom-24 w-[160px] p-4 bg-slate-950/95 border border-primary/30 rounded-2xl shadow-xl"
        initial={{ y: 80, opacity: 0 }}
        animate={{
          y: [0, -10, 0],
          opacity: 1
        }}
        transition={{
          // Animação de entrada
          opacity: { duration: 0.6, delay: 0.8 },
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8 // Inicia a flutuação após a entrada
          }
        }}
      >
        <span className="text-[10px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full">
          96% Match
        </span>
        <h4 className="text-sm font-bold text-white mt-2">Sapo-cururu</h4>
        <p className="text-[11px] text-slate-400 italic">Rhinella diptycha</p>
      </motion.div>
    </div>
  );
}
```

---

## 5. Fallback Estático

Para navegadores antigos ou conexões móveis lentas onde o JavaScript/Lottie esteja desabilitado, utilize a imagem vetorial de fallback estática em SVG salva em:
[hero-fallback.svg](file:///c:/RibbitSite/public/assets/hero-fallback.svg).

Essa imagem replica fielmente a composição e proporção da dobra inicial do site sem consumo de processamento de animação.
