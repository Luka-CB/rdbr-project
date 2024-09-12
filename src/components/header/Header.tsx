import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={{ pathname: "/" }}>
        <img src="/logo.png" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
