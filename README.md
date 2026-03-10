<div align="center">
  
  # ⏳ Cronômetro
  
  **Um cronômetro livre de distrações (e anúncios). Focado na gestão de tempo para estudantes.**
  
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide-F472B6?style=flat-square&logo=lucide&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=flat-square&logo=opensourceinitiative&logoColor=white)


  
[Acesse a aplicação online aqui!](https://cronometro-minimalista.netlify.app/)

<br>

</div>

## Sobre o Projeto

Aplicação web desenvolvida com o objetivo de auxiliar estudantes no gerenciamento de tempo durante sessões de estudo, simulados e redações. A ideia do projeto nasceu de uma experiência real: o cansaço de depender de cronômetros genéricos repletos de anúncios e distrações desnecessárias.

<br>

## Funcionalidades

- 🎯 **Modos de Estudo:**
  - **Modo ENEM (Presets):** Tempos pré-configurados (Pomodoro 25 min, Redação 1h30, ENEM Dia 1, ENEM Dia 2).
  - **Modo Livre (Sandbox):** Entrada de tempo dinâmica e inteligente. Digite formatos como `1h 30m`, `45m` ou `90s` e o cronômetro interpreta automaticamente.
- ⌨️ **Atalho de Teclado:** Pressione `Espaço` a qualquer momento para iniciar ou pausar o cronômetro de forma ágil.
- 🚨 **Alerta Visual:** Quando o tempo chega no último minuto (< 60 segundos), o relógio muda de cor e pulsa, alertando visualmente sobre o fim do prazo.
- 탭 **Título Dinâmico:** O tempo restante é atualizado dinamicamente no título da aba do navegador, permitindo que você acompanhe o progresso mesmo navegando em outras guias.

<br>

## Stack Tecnológica

- **[React 19](https://react.dev/)** - Biblioteca principal para construção da interface.
- **[Vite](https://vitejs.dev/)** - Bundler ultrarrápido para desenvolvimento local.
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Estilização baseada em classes utilitárias.
- **[Lucide React](https://lucide.dev/)** - Pacote de ícones minimalistas e consistentes.

<br>

## Como executar o projeto localmente

### Pré-requisitos
Antes de começar, você precisará ter o [Node.js](https://nodejs.org) instalado em sua máquina.

### Instalação

1. Clone este repositório:
```bash
git clone https://github.com/gitbleus/cronometro.git
```

2. Abra a pasta:
```bash
cd cronometro
```

3. Instale as dependências:
```bash
npm i
```

4. Execute o comando para rodar localmente:
```bash
npm run dev
```

5. Acesse http://localhost:5173/ (ou a porta informada no seu terminal).
