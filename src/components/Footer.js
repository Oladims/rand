import logo from "../logo.svg";
import instagram from "../icons/instagram.svg";
import linkedIn from "../icons/linkedIn.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import telegram from "../icons/telegram.svg";

let icons = [telegram, instagram, facebook, twitter, linkedIn];

const Footer = () => {
  return (
    <div className="">
      <div id="footer">
        <div className="between">
          <img src={logo} className="appLogoFooter" alt="logo" />
          <div className="iconContainer">
            {icons.map((icon) => (
              <div className="smIcons">
                <img src={icon} className="appLogoFooter" alt={icon} />
              </div>
            ))}
          </div>
        </div>
        <p className="copyright">
          © 2020 Design Jobcaster. All rights reserved
        </p>
      </div>
      <div className="bottomFooter between">
        <div className="flex flex1">
          <div>About us</div>
          <div>Find Jobs</div>
          <div>Contact us</div>
          <div>Blog</div>
        </div>
        <div className="flex2 flex">
          <div>Privacy</div>
          <div>Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
