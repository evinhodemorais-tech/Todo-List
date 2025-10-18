function Filtro({ filtroAtual, onFiltrar }) {
  const botoes = [
    { nome: "Todas", valor: "todas" },
    { nome: "Concluídas", valor: "concluidas" },
    { nome: "Pendentes", valor: "pendentes" },
  ];

  return (
    <div className="filtro-container">
      {botoes.map((btn) => (
        <button
          key={btn.valor}
          onClick={() => onFiltrar(btn.valor)}
          className={filtroAtual === btn.valor ? "active" : ""}
        >
          {btn.nome}
        </button>
      ))}
    </div>
  );
}

export default Filtro;
