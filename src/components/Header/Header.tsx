import "./Header.css";
import { Link } from "react-router-dom";
interface Props {
  blackHeader: boolean;
}

const Header = ({ blackHeader }: Props) => {
  return (
    <header className={blackHeader ? "black" : ""}>
      <div className="header--logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </Link>
      </div>
      <div className="header--user">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Meu perfil"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
