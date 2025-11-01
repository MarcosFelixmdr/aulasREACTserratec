const ExemploEvento = () => {
  let nome = "Ana";
  const handleClick = () => {
    alert("Clicou no botão");
  };

  const handleChangeName = () => {
    nome = "Maria";
    alert("Clicou no botão nome")
  };

  return (
    <div>
      <p>Exemplo Evento</p>
      <button onClick={handleClick}>Evento de click</button>

      <p>Segundo Botão</p>
      <button onClick={() => alert("Clicou no segundo botão")}>
        Evento de click 2
      </button>

      <button onClick={handleChangeName}>Alterar nome</button>
    </div>
  );
};

export default ExemploEvento;
