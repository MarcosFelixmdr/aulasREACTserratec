import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [clientes, setClientes] = useState([]);

  const apiURL = "https://690a7b061a446bb9cc22a8de.mockapi.io/clientes";

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        const ordenados = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        setClientes(ordenados);
      })
      .catch(() => console.log("Erro ao buscar clientes"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { nome, email };

    axios
      .post(apiURL, newPost)
      .then((response) => {
        const novaLista = [response.data, ...clientes].slice(0, 5);
        setClientes(novaLista);
        setEnviado(true);
        setNome("");
        setEmail("");
        setTimeout(() => setEnviado(false), 2000);
      })
      .catch(() => console.log("Problemas na requisição"));
  };

  return (
    <div className="container mt-4">
      <h1>Cadastro de Aluno</h1>

      {enviado && (
        <div className="alert alert-success mt-3">
          Cliente enviado com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Enviar
        </button>
      </form>
      <br />
      <h3>Lista de Clientes</h3>
      <table className="table table-striped mt-3">
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>
                {cliente.nome} - {cliente.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
