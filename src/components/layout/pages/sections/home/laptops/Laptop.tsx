import Image from "next/image";
import scss from "./Laptop.module.scss";
import laptop from "@/assets/lap.jpg";
import laptop2 from "@/assets/laptopDark.jpg";

const Laptop = () => {
  return (
    <div className={scss.laptop}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inscription}>
            <div className={scss.info}>
              <h1>Laptops</h1>
              <br />
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
                <h3>MacBook Pro M3</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$1999.00</h2>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.box_img}>
                <Image src={laptop2} alt="Product 2" />
              </div>
              <div className={scss.box_info}>
                <h3>Dell XPS 15</h3>
                <br />
                <h2 style={{ color: "#1e40af" }}>$1599.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
