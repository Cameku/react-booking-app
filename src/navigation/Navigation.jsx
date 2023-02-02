import Booki from "../images/logo/Booki.png";
import "../scss/Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navContainer">
      <div className="navbar">
        <span className="logo">
          <img src={Booki} alt="Logo" />
        </span>
        <div className="navItems">
          <div className="item"> Accomodation </div>
          <div className="item"> Activites </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
