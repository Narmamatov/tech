import scss from "./Catalog.module.scss";

const Catalog= () => {
  return (
    <div className={scss.Catalog}>
      <div className="container">
        <div className={scss.content}>
          <h1>Catalog</h1>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
