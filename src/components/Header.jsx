import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <ul>
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </>
      </ul>
    </header>
  );
}

export default Header;
