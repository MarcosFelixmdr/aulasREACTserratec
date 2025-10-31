const Maiusculo = () => {
   const transformar = (texto) => {
    return texto.toUpperCase();
   };

   return(
    <div>
        <h2>Texto em maiusculo</h2>
        <p>{transformar("aula de componentes")}</p>
    </div>
   )
};

export default Maiusculo;