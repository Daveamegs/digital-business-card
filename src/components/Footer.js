import React from "react";
import FB_Icon from "../images/icons/icons8-facebook-50.png";
import Github_Icon from "../images/icons/icons8-github-50.png";
import in_icon from "../images/icons/icons8-linkedin-50.png";
import twitter_icon from "../images/icons/icons8-twitter-50.png";

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <a href="/">
          <img src={twitter_icon} alt="" />
        </a>
        <a href="/">
          <img src={FB_Icon} alt="" />
        </a>
        <a href="/">
          <img src={in_icon} alt="" />
        </a>
        <a href="/">
          <img src={Github_Icon} alt="" />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
