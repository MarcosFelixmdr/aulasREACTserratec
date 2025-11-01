const Caixa = (props) => {
  const caixa = {
    width: "100px",
    height: "80px",
    backgroundColor: props.cor,
  };

  return (
    <div>
      <h2>Curso de React</h2>
      <div style={caixa}>
        <p>Serratec - 2025.2</p>
      </div>
    </div>
  );
};

export default Caixa;
