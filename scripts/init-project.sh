#!/bin/bash

# Sair imediatamente caso algum comando falhe
set -e

echo "=========================================================="
echo "   Inicializando Projeto RibbitSite — Scaffold Script"
echo "=========================================================="

# 1. Verificar e configurar repositório Git
if [ ! -d ".git" ]; then
  echo "-> Inicializando repositório Git local..."
  git init
fi

# Criar e mudar para a branch 'site/init'
echo "-> Criando e ativando branch 'site/init'..."
git checkout -b site/init || git checkout site/init

# 2. Inicializar o package.json se não existir
if [ ! -f "package.json" ]; then
  echo "-> Inicializando arquivo package.json..."
  npm init -y
fi

# 3. Instalar dependências essenciais do React e Vite (TypeScript)
echo "-> Instalando React, React-DOM e TypeScript..."
npm install react react-dom
npm install -D vite @types/react @types/react-dom @vitejs/plugin-react typescript

# 4. Instalar dependências específicas de animação e utilitários
echo "-> Instalando Framer Motion e Lottie-web..."
npm install framer-motion lottie-web

# 5. Instalar e configurar Tailwind CSS
echo "-> Instalando e configurando o Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
if [ ! -f "tailwind.config.js" ]; then
  npx tailwindcss init -p
fi

# 6. Criar estrutura de pastas requerida no projeto
echo "-> Criando estrutura de diretórios (/public/assets e /src/components)..."
mkdir -p public/assets
mkdir -p src/components
mkdir -p src/components/__tests__
mkdir -p src/styles
mkdir -p docs
mkdir -p content
mkdir -p design-system
mkdir -p scripts

# 7. Criar arquivos de configuração padrão para rodar o Vite e TS (se não existirem)
if [ ! -f "vite.config.ts" ]; then
  echo "-> Gerando vite.config.ts básico..."
  cat <<EOT > vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
EOT
fi

if [ ! -f "tsconfig.json" ]; then
  echo "-> Gerando tsconfig.json básico..."
  cat <<EOT > tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Modos de Bundler */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Regras de Qualidade */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
EOT
fi

# 8. Atualizar scripts no package.json para habilitar npm run dev
echo "-> Configurando scripts npm no package.json..."
node -e '
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.scripts = {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
};
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));
'

echo "=========================================================="
echo "   Scaffold Concluído com Sucesso!"
echo "   Para rodar o portal localmente use: npm run dev"
echo "=========================================================="
EOT
