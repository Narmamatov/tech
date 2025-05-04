import Image from "next/image";
import scss from "./Category.module.scss";
import img from "./../../../../../../assets/phot.jpg";
import img2 from "./../../../../../../assets//lap.jpg";
import img3 from "./../../../../../../assets/head.jpg";
import img4 from "./../../../../../../assets/head2.jpg";
import img5 from "./../../../../../../assets/acces.jpg";

const Category = () => {
  return (
    <div className={scss.category}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.info}>
            <h1>Browse Categories</h1>
            <p>
              Find exactly what you need from our wide range of electronic
              categories.
            </p>
          </div>
          <div className={scss.category}>
            <div className={scss.box}>
              <div className={scss.image}>
                <Image src={img} alt="" />
              </div>
              <h3>SmartPhones</h3>
              <p>- products</p>
            </div>
            <div className={scss.box}>
              <div className={scss.image}>
                <Image src={img2} alt="" />
              </div>
              <h3>Laptops</h3>
              <p>- products</p>
            </div>
            <div className={scss.box}>
              <div className={scss.image}>
                <Image src={img3} alt="" />
              </div>
              <h3>HeadPhones</h3>
              <p>- products</p>
            </div>
            <div className={scss.box}>
              <div className={scss.image}>
                <Image src={img4} alt="" />
              </div>
              <h3>Tablets</h3>
              <p>- products</p>
            </div>
            <div className={scss.box}>
              <div className={scss.image}>
                <Image src={img5} alt="" />
              </div>
              <h3>Accessories</h3>
              <p>- products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
