import scss from "./Recom.module.scss";
import img from "./../../../../../../assets/photo-1649972904349-6e44c42644a7.jpg";
import Image from "next/image";

const Recom = () => {
  return (
    <div className={scss.recom}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.info}>
            <h1>
              Latest Tech at Your <br /> Fingertips
            </h1>
            <p>
              Discover cutting-edge electronics and gadgets for every need. From
              smartphones to laptops, we've got you covered.
            </p>
            <div className={scss.btns}>
              <button className={scss.shopBtn}>Shop now</button>
              <button className={scss.saleBtn}>View Sales</button>
            </div>
          </div>
          <div className={scss.image}>
            <Image
              style={{ borderRadius: 20 }}
              src={img}
              alt=""
              width={450}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recom;
