import Image from "next/image";
import scss from "./New.module.scss";
import mouse from "@/assets/mouseLogitech.jpg";
import airPods from "@/assets/airPods.jpg";
import samsung from "@/assets/mouseLogitech.jpg";
import tv from "@/assets/TV.jpg";

const New = () => {
  return (
    <div className={scss.new}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inscription}>
            <div className={scss.info}>
              <h1>New Arrivals</h1>
              <br />
              <p>Check out our latest products and stay ahead of the curve</p>
            </div>
            <div className={scss.link}>
              <a href="#">View All Products →</a>
            </div>
          </div>
          <div className={scss.boxes}>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={mouse} alt="Product 1" />
              </div>
              <div className={scss.box_info}>
                <h3>Logitech MX Master 3</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$99.00</h2>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={samsung} alt="Product 2" />
              </div>
              <div className={scss.box_info}>
                <h3>Samsung Galaxy Tab S8</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$699.00</h2>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={airPods} alt="Product 3" />
              </div>
              <div className={scss.box_info}>
                <h3>AirPods Pro</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$249.00</h2>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={tv} alt="Product 3" />
              </div>
              <div className={scss.box_info}>
                <h3>iPad Air</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$599.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
