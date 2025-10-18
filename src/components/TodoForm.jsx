import { useState } from "react";

function TodoForm({ onAdd }) {
  const [texto, setTexto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (texto.trim() === "") return;
    onAdd(texto);
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
