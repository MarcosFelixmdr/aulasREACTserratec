const Filtro = () => {

    const nomes = ["Ana", "João", "Maria", "Pedro", "Marcos", "Joaquim", "Mariana"];

    // Retornar um filtro com os nomes com mais de 5 letras
  return (
    <div>
      <h2>Filtro de nomes</h2>
      <h2>Nomes originais separados por ;</h2>
      <h2>Os nomes com mais de 5 letras são: </h2>
      <p>{nomes.join("; ")}</p>
      <p>
        {nomes.filter((nome) => nome.length >= 5).map((nome, i) => (
          <li key={i}>{nome}</li>
        ))}
      </p>
    </div>
  );
};

export default Filtro;
