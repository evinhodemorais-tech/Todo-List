import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TarefasContext = createContext();

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useLocalStorage("tarefas", []);

  function adicionarTarefa(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto, concluida: false }]);
  }

  function alternarConclusao(id) {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  return (
    <TarefasContext.Provider
      value={{ tarefas, adicionarTarefa, alternarConclusao, removerTarefa }}
    >
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  return useContext(TarefasContext);
}
