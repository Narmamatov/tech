import scss from "./Reception.module.scss";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

const Reception = () => {
  return (
    <div className={scss.reception}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.info}>
            <div className={scss.let}>
              <h1>Get in Touch</h1>
              <p>
                Have questions about our products or services? We're here to
                help and answer any question you might have.
              </p>
            </div>
            <div className={scss.address}>
              <div className={scss.one}>
                <div className={scss.icon}>
                  <span>
                    <MdLocationOn />
                  </span>
                </div>
                <div className={scss.add}>
                  <h3>Address</h3>
                  <p>123 Tech Street, Digital City</p>
                </div>
              </div>
              <div className={scss.one}>
                <div className={scss.icon}>
                  <span>
                    <HiOutlineMail />
                  </span>
                </div>
                <div className={scss.add}>
                  <h3>Email</h3>
                  <p>info@techstore.com</p>
                </div>
              </div>
              <div className={scss.one}>
                <div className={scss.icon}>
                  <span>
                    <FaPhone />
                  </span>
                </div>
                <div className={scss.add}>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.write}>
            <h1>Send us a message</h1>
            <div className={scss.box}>
              <div className={scss.one}>
                <h5>Name</h5>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={scss.one}>
                <h5>Email</h5>
                <input type="text" placeholder="Your email" />
              </div>
            </div>
            <div className={scss.one}>
              <h5>Subject</h5>
              <input type="text" placeholder="Subject" />
            </div>
            <div className={scss.one}>
              <h5>Message</h5>
              <textarea placeholder="Your message"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reception;
