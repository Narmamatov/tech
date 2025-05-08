import scss from "./Choose.module.scss";
import { GrCheckmark } from "react-icons/gr";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";

const Choose = () => {
  return (
    <div className={scss.choose}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.info}>
            <h1>Why Choose Us</h1>
            <p>
              We pride ourselves on providing the best shopping experience for
              all your tech needs.
            </p>
          </div>
          <div className={scss.boxes}>
            <div className={scss.box}>
              <span>
                <GrCheckmark />
              </span>
              <h1>Quality Products</h1>
              <p>
                We source only the highest quality products from trusted
                manufacturers and brands.
              </p>
            </div>
            <div className={scss.box}>
              <span>
                <RiMoneyDollarCircleLine />
              </span>
              <h1>Best Prices</h1>
              <p>
                We offer competitive prices and regular discounts to ensure you
                get the best deal.
              </p>
            </div>
            <div className={scss.box}>
              <span>
                <RiTeamFill />
              </span>
              <h1>Dedicated Support</h1>
              <p>
                Our customer support team is always ready to help with any
                questions or issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
