# 🌎 Front-end - Vivências do Mundo

[![Node.js Version](https://img.shields.io/badge/node-22.14.0-brightgreen)](https://nodejs.org/) [![NPM Version](https://img.shields.io/badge/npm-v11.3.0-blue)](https://www.npmjs.com/)

## 📘 Descrição

A aplicação **Vivências do Mundo** é o front-end que permite aos usuários visualizarem **eventos, serviços e estabelecimentos** promovidos pela comunidade migrante em Salvador, BA.
Desenvolvida com **React e Vite**, proporciona uma experiência interativa e responsiva, integrando-se à API para exibição e manipulação de dados em tempo real.

## 💻 Tecnologias

### Core

![NodeJS](https://img.shields.io/badge/node.js-22.14.0-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-19.0-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-ES2024-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Vite](https://img.shields.io/badge/vite-6.2-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Estitilização

![Styled Components](https://img.shields.io/badge/styled--components-6.1.17-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Radix UI](https://img.shields.io/badge/radix%20ui-1.1.10-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)

### Integração

![Axios](https://img.shields.io/badge/axios-1.8.4-671ddf?&style=for-the-badge&logo=axios&logoColor=white)<br>

## 📋 Pré-requisitos

- **Node.js** (v18 ou superior)
- **npm** (v9 ou superior) ou **yarn** (v1.22+)

## 🚀 Como Executar

### Configuração Inicial

1. Clone o repositório:

```bash
git clone https://github.com/Projeto-Migrantes/cultural-agenda-website-front.git
cd cultural-agenda-website-front
```

### Instalação de Dependências

```bash
npm install
```

### Execução em Ambiente de Desenvolvimento

```bash
npm run dev
```

## 🛠️ Scripts Disponíveis

|      Comando      |                      Descrição                       |
| :---------------: | :--------------------------------------------------: |
|   `npm run dev`   | Executa o servidor de desenvolvimento usando o Vite  |
|  `npm run build`  |        Gera a versão de produção da aplicação        |
|  `npm run lint`   | Analisa o código para encontrar e corrigir problemas |
| `npm run preview` |   Visualiza localmente a build de produção gerada    |

## 🗂️ Estrutura de Pastas

```
src/
│
├── assets/          # Arquivos estáticos (imagens, ícones, fontes, etc.)
├── components/      # Componentes reutilizáveis da aplicação (botões, cards, inputs, etc.)
├── pages/           # Páginas principais da aplicação (Home, Eventos, etc.)
├── routes/          # Configurações de rotas da aplicação (Router)
├── utils/           # Funções utilitárias (formatadores, helpers, máscaras, etc.)
├── storage/         # Gerenciamento e armazenamento de estados da aplicação
└── theme/           # Estilização global (cores, tipografias, espaçamentos, temas)
```

## 🤝 Contribuição

Para contribuir com o projeto, siga as orientações abaixo:

- **Fluxo de Trabalho**:

  - Utilizar obrigatoriamente o **Gitflow** para criação das branches (ex: `feature/example-feature`).
  - Pull Requests (PRs) devem ser feitos para a branch `develop`.
  - PRs devem conter descrição clara das alterações realizadas.

- **Commits**:

  - Preferencialmente utilizar **Conventional Commits** (padrão opcional, mas recomendado).
  - Exemplos de commit:
    - `feat: adicionar novo endpoint de eventos`
    - `fix: corrigir bug no cadastro de usuários`
    - `docs: atualizar README com seção de contribuição`

- **Padronização**:
  - Seguir o estilo de código definido pelo projeto.
  - Manter a organização das pastas e arquivos.

## 📝 Licença

Este projeto é proprietário e está licenciado conforme [termos de uso](https://github.com/Projeto-Migrantes/cultural-agenda-website-front/blob/main/LICENSE).
