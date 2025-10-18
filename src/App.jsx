import { useState } from "react";
import { useTarefas } from "./context/TarefasContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filtro from "./components/Filtro";
import "./index.css";

function App() {
  const { tarefas, adicionarTarefa, alternarConclusao, removerTarefa } = useTarefas();
  const [filtro, setFiltro] = useState("todas");

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "concluidas") return t.concluida;
    if (filtro === "pendentes") return !t.concluida;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <div className="card">
        <TodoForm onAdd={adicionarTarefa} />
        <Filtro filtroAtual={filtro} onFiltrar={setFiltro} />
        <TodoList
          tarefas={tarefasFiltradas}
          onToggle={alternarConclusao}
          onRemove={removerTarefa}
        />
      </div>
    </div>
  );
}

export default App;
