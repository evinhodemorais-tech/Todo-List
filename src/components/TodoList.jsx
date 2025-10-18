import React from "react";

const TodoList = React.memo(function TodoList({ tarefas, onToggle, onRemove }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          <div>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => onToggle(tarefa.id)}
            />
            <span className={tarefa.concluida ? "completed" : ""}>
              {tarefa.texto}
            </span>
          </div>
          <button className="remove-btn" onClick={() => onRemove(tarefa.id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
