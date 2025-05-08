import scss from "./Header.module.scss"; 
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h2>TechStore</h2>
          <nav className={scss.nav}>
            <a href="#">Home</a>
            <a href="#">Catalog</a>
          </nav>
          <div className={scss.search}>
            <input type="text" placeholder="Search products..." />
            <div className={scss.inputs}>
              <IoIosSearch />
              <PiShoppingCartSimpleThin />
              <MdAdminPanelSettings />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
