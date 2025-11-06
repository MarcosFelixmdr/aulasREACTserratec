import { Link } from "react-router-dom";
import Back from "../../assets/back.svg";
import * as styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to={"/"}>
          <img src={Back} alt="Voltar" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
