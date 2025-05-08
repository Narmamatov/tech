import Image from "next/image";
import scss from "./SmartPhone.module.scss";
import code from "@/assets/phot.jpg";
import tv from "@/assets/TV.jpg";

const SmartPhone = () => {
  return (
    <div className={scss.smartphone}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inscription}>
            <div className={scss.info}>
              <h1>Smartphones</h1>
              <br />
            </div>
            <div className={scss.link}>
              <a href="#">View All Products →</a>
            </div>
          </div>
          <div className={scss.boxes}>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={code} alt="Product 3" />
              </div>
              <div className={scss.box_info}>
                <h3>iPhone 15 Pro</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$899.00</h2>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={tv} alt="Product 3" />
              </div>
              <div className={scss.box_info}>
                <h3>Samsung Galaxy S23</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$999.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPhone;
