import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-lg-2">
            <h1 className="greatVibes fw-bold">ReCipe</h1>
          </div>
          <div className="col-lg-3">
            <div className="footer__Links">
              <h2>Links</h2>
              <Link className="footer__Link" to="">
                Our Products
              </Link>
              <Link className="footer__Link" to="">
                About Us
              </Link>
              <Link className="footer__Link" to="">
                Blog
              </Link>
              <Link className="footer__Link" to="">
                Join Us
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="contact">
              <h2>Contacts</h2>
              <p className="footer__Address">Address: 8567857, 4th Avenue</p>
              <p>
                Phone: <a href="tel:+254799820376">+254715578901</a>
              </p>
              <p>
                Gmail: <a href="mailto:Recipe@Gmail.Com">Tablefor2@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>Subscribe</h2>
            <div className="input__email mt-3">
              <span className="me-1">Email:</span>
              <input type="email" name="" id="" />
            </div>
            <div className="footer__Btn">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottom__Footer">
        <h5>© 2022 Copyright. All rights reserved.Use of and/or
          registration on any portion of this site constitutes acceptance of our
          User Agreement and Privacy Policy and Cookie
          Statement .
        </h5>
      </div>
    </div>
  );
};

export default Footer;
