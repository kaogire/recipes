import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const footerRowLinks = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 10px",
  margin: "20px 0px 0px 0px",
  backgroundColor: "rgba(94, 151, 255, 0.4)",
};
const icons = {
  color: "white",
  fontSize: "20px",
  padding: "0px 5px",
};
const footerColumnLinks = {
  display: "inline-block",
  alignItems: "center",
  padding: "0px 0px",
};

const links = {
  fontWeight: "bold",
  display: "block",
  marginTop: "10px",
};

const copyright = {
  textAlign: "center",
};

function Footer() {
  return (
    <div>
      <div style={footerRowLinks}>
        <div style={footerColumnLinks}>
          <a style={links} href="/">
            About Us
          </a>
          <a style={links} href="/">
            News
          </a>
        </div>
        <div style={footerColumnLinks}>
          <a style={links} href="/">
            Terms of Use
          </a>
          <a style={links} href="/">
            Privacy Policy
          </a>
        </div>
        <div style={footerColumnLinks}>
          <a style={links} href="/">
            Contact Us
          </a>
          <a style={links} href="/">
            FAQ
          </a>
        </div>
        <div style={footerColumnLinks}>
          <a style={links} href="/">
            Follow Us
          </a>
          <div style={links}>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} style={icons} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} style={icons} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} style={icons} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faYoutube} style={icons} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 style={copyright}>© Copyright 2022</h3>
      </div>
    </div>
  );
}

export default Footer;
