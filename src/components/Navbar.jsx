import { navbarMenu } from "../datas/navbarMenu.js";
import "../style/navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div>
        {navbarMenu.map((i, index) => (
          <div className="menu-item navbar-layout">{i.title}</div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
