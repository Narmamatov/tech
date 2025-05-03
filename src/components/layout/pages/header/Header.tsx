import scss from "./Header.module.scss";

const Header= () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Header</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
