import logo from "../logo.svg";

const Header = () => {
  return (
    <div id="header">
      <img src={logo} className="appLogo" alt="logo" />
      <div className="part2">
        <div className="navLinks">
          <div className="presentLink"><span>Find Jobs</span></div>
          <div><span>About us</span></div>
          <div><span>Contact us</span></div>
          <div><span>Blog</span></div>
        </div>  
        <button className="btn">Post job</button>
      </div>
    </div>
  );
};

export default Header;
