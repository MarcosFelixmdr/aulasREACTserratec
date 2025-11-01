import "./App.css";
import Button from "./components/Button";
import { BlueButton, RedButton, StyleButton } from "./components/Button.style";
import { Card } from "./components/Card.style";
import ExemploEvento from "./components/ExemploEvento";

const App = () => {
  return (
    <div>
      <Button />
      <button className="button">Clique aqui!!</button>
      <hr />
      <StyleButton onClick={() => alert("Funcionando")}>CSS</StyleButton>
      <RedButton>Curso de CSS</RedButton>
      <BlueButton>Curso de CSS</BlueButton>
      <Card>
        <h2>Titulo do Card</h2>
        <p>Conteúdo do card</p>
      </Card>
      <ExemploEvento />
    </div>
  );
};

export default App;
