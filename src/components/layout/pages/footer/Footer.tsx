import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h2>TechStore</h2>
            <p>
              Your one-stop shop for the latest electronics and tech <br />
              products.
            </p>
          </div>

          <div className={scss.middle}>
            <h3>Quick Links</h3>
            <a href="#">Home</a> <br />
            <a href="#">Catalog</a> <br />
            <a href="#">Admin</a>
          </div>

          <div className={scss.right}>
            <h3>Contact</h3>
            <p>Email: info@techstore.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Street, Digital City</p>
          </div>
        </div>
        <br />
<hr />
        <div className={scss.bottom}>
          © 2025 TechStore. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;