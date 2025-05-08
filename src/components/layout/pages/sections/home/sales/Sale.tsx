import scss from "./Sale.module.scss";
import chip from "@/assets/head.jpg";
import Image from "next/image";

const Sale = () => {
  return (
    <div className={scss.sale}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.info}>
            <button className={scss.btn}>Limited Time Offer</button>
            <h1>Get 20% Off on All Headphones</h1>
            <p>
              Experience premium sound quality with our range of high-end
              headphones. Use code SOUND20 at checkout.
            </p>
            <button className={scss.btnClick}>Shop HeadPhones</button>
          </div>
          <div className={scss.img}>
            <Image
              style={{ width: 500, height: 350, borderRadius: "10px" }}
              src={chip}
              alt="chip"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
