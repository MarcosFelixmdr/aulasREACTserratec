import Curso from "./components/Curso.jsx";
import Botao from "./components/Botao.jsx";
import Aluno from "./components/Aluno.jsx";
import Usuario from "./components/Usuario.jsx";
import Lista from "./components/Lista.jsx";
import './App.css'
import Caixa from "./components/Caixa.jsx";
const App = () => {

  const texto = {
    fontSize: "48px",
    color:"orange"
  }
  return (
    <div>
      <h2>Sobre o curso</h2>
      <Curso style = {texto} nome = "React"/>
      <Botao texto = "Clique aqui"/>
      <h2>Meus dados</h2>
      <Aluno nome = "Marcos Felix" email = "MarcosFelixdev@gmail.com" profissao= "Desenvolvedor" idade = "29"/>
      <h2>Lista de carros</h2>
      <Lista />
      <h2 style={{color: "red", fontSize: "32px"}}>Lista de usuários</h2>
      <Usuario />
      <h2 className="frase">Teste de CSS</h2>
      <Caixa cor="blue"/>
    </div>
  );
};

export default App;
