import { Link } from "react-router-dom";
function Navbar_button({ children, link, add }) {
  return (
    <button className="navbar-button">
      <Link to={link}>
        <img src={add} alt="" />
        <div className="linker">{children}</div>
      </Link>
    </button>
  );
}

export default Navbar_button;
