# To-Do List React

## Nome do Projeto
To-Do List React (Lista de Tarefas)

## Descrição
Uma aplicação de lista de tarefas desenvolvida em React, utilizando CSS puro com abordagem **Mobile First**.  
A aplicação permite adicionar, marcar como concluída, remover e filtrar tarefas (Todas, Concluídas, Pendentes) com persistência de dados no `localStorage`.  
Inclui **Context API** para estado global e **hook customizado** para manipulação do `localStorage`.

---

## Tecnologias Utilizadas
- [React](https://reactjs.org/)  
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- [CSS puro](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  
- [Context API](https://pt-br.reactjs.org/docs/context.html)  
- [Hooks customizados](https://pt-br.reactjs.org/docs/hooks-custom.html)  
- LocalStorage para persistência de dados  

---

## Estrutura de Pastas
src/
├── components/
│ ├── TodoForm.jsx
│ ├── TodoList.jsx
│ └── Filtro.jsx
├── context/
│ └── TarefasContext.jsx
├── hooks/
│ └── useLocalStorage.js
├── App.jsx
├── main.jsx
└── index.css

## Funcionalidades

- Adicionar novas tarefas  
- Marcar tarefas como concluídas  
- Remover tarefas  
- Filtrar tarefas:
  - Todas
  - Concluídas
  - Pendentes  
- Persistência de dados no `localStorage`  
- Layout responsivo **Mobile First**  

Como Rodar o Projeto Localmente

Clone o repositório

git clone <https://github.com/evinhodemorais-tech/Todo-List.git>


Entre na pasta do projeto

cd todo-list


Instale as dependências

npm install


Inicie o servidor de desenvolvimento

npm start


Acesse a aplicação

Abra o navegador em: http://localhost:3000