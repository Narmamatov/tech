import Image from "next/image";
import scss from "./Future.module.scss";
import laptop from "@/assets/lap.jpg";
import code from "@/assets/phot.jpg";
import chip from "@/assets/head.jpg";

const Future = () => {
  return (
    <div className={scss.future}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inscription}>
            <div className={scss.info}>
              <h1>Featured Products</h1>
              <br />
              <p>Handpicked by our experts for exceptional quality and value</p>
            </div>
            <div className={scss.link}>
              <a href="#">View All Products →</a>
            </div>
          </div>
          <div className={scss.boxes}>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={laptop} alt="Product 1" />
              </div>
              <div className={scss.box_info}>
                <h2>Macbook Pro M3</h2>
                <p style={{ opacity: "60%" }}>
                  High-quality product with exceptional features.
                </p>
                <br />
                <br />
                <h1 style={{ color: "#1e40af" }}>$1999.00</h1>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={code} alt="Product 2" />
              </div>
              <div className={scss.box_info}>
                <h2>Macbook Pro M3</h2>
                <p style={{ opacity: "60%" }}>
                  High-quality product with exceptional features.
                </p>
                <br />
                <br />
                <h1 style={{ color: "#1e40af" }}>$1999.00</h1>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={chip} alt="Product 3" />
              </div>
              <div className={scss.box_info}>
                <h2>Macbook Pro M3</h2>
                <p style={{ opacity: "60%" }}>
                  High-quality product with exceptional features.
                </p>
                <br />
                <br />
                <h1 style={{ color: "#1e40af" }}>$1999.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
