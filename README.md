# User Dashboard

Dashboard moderno para visualização e navegação de usuários, construído com Vue 3, Pinia e Vue Router.

[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-Store-f7c942?style=for-the-badge)](https://pinia.vuejs.org/)
[![Cypress](https://img.shields.io/badge/Cypress-E2E-17202c?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![API](https://img.shields.io/badge/API-REST-blue?style=for-the-badge&logo=express&logoColor=white)](https://restfulapi.net/)
[![Vue Router](https://img.shields.io/badge/Vue%20Router-v4-42b883?style=for-the-badge&logo=vue.js&logoColor=white)](https://router.vuejs.org/)

## Deploy

Aplicação em produção na Vercel:  
**https://dashboard-user-vue.vercel.app/**

## Visão Geral

O projeto consome a API pública `randomuser.me` para exibir uma lista de usuários com:

- Busca por nome e e-mail
- Filtro por gênero
- Estado de carregamento
- Navegação para tela de detalhes
- Retorno para a listagem

## Funcionalidades

- **Listagem de usuários** com nome, e-mail e foto
- **Filtro textual** (nome/sobrenome/e-mail)
- **Filtro por gênero** (`All`, `Female`, `Male`)
- **Página de detalhes** com informações pessoais e de localização
- **UI responsiva** para desktop e mobile
- **Gestão de estado centralizada** com Pinia
- **Testes unitários** com Vitest
- **Testes E2E** com Cypress

## Stack Tecnológica

- **Frontend:** Vue 3 + Vite
- **Estado global:** Pinia
- **Roteamento:** Vue Router
- **Ícones:** lucide-vue-next
- **Testes unitários:** Vitest + Vue Test Utils
- **Testes E2E:** Cypress
- **Deploy:** Vercel

## Estrutura do Projeto

```txt
src/
  api/
    users.api.ts
  components/
    menu.vue
    searchUser.vue
    listUsers.vue
    userDetail.vue
  router/
    index.ts
  stores/
    users.store.ts
  tests/
    unit/
      components/
      stores/
    e2e/
      users.cy.ts
  view/
    UsersView.vue
    UserDetailsView.vue
```

## Arquitetura (Resumo)

- `users.api.ts`: camada de acesso à API externa.
- `users.store.ts`: estado global de usuários, loading, erro, busca e gênero.
- `searchUser.vue`: entrada de busca e seletor de gênero.
- `listUsers.vue`: lista filtrada + botão para detalhes.
- `UserDetailsView.vue` + `userDetail.vue`: visão detalhada de um usuário.

## Como Rodar Localmente

### Pré-requisitos

- Node.js `^20.19.0` ou `>=22.12.0`
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## Testes

### Unitários (Vitest)

```bash
npm run test
```

ou em modo run:

```bash
npm run test:run
```

### E2E (Cypress)

Com o app rodando (`npm run dev`) em outro terminal:

```bash
npm run cypress:run
```

Para abrir a interface do Cypress:

```bash
npm run cypress:open
```

Rodando apenas o spec de usuários:

```bash
npm run cypress:run -- --spec src/tests/e2e/users.cy.ts
```

## Qualidade e Boas Práticas

- Organização por responsabilidade (API, store, views e componentes)
- Estado derivado com `getters` para filtros
- Cobertura de fluxo crítico com testes E2E
- Testes unitários para comportamento do store e componentes principais

## Autor

Projeto desenvolvido por **Yuri Romeu**.
