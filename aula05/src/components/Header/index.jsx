import "./styles.css";
const Header = () => {
  return (
    <header>
      <h2>Empresa ABC Ltda.</h2>
      <link to={"/"}>Home</link>
      <link to={"/empresa"}>Empresa</link>
      <link to={"/noticias"}>Notícias</link>
      <link to={"/contato"}>Contato</link>
      <link to={"/sobre"}>Sobre</link>
    </header>
  );
};

export default Header;
