import { Link, useLocation } from "react-router-dom";

const MobileFooter = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="footer_mobilemenu">
        <Link to="/" className={`${location.pathname === "/" ? "active" : ""}`}>
          <img src="/images/in-play.svg" className="img-fluid" />
          <span>in-play</span>
        </Link>

        <Link to="/?tab=0" className="ng-star-inserted">
          <img src="/images/place.svg" className="img-fluid" />
          <span>Home</span>
        </Link>

        <Link
          className={`${location.pathname === "/casino" ? "active" : ""}`}
          to="/casino"
        >
          <img src="/images/icon-casino.svg" className="img-fluid" />
          <span>Casino</span>
        </Link>
        <Link
          className={`${location.pathname === "/int-casino" ? "active" : ""}`}
          to="/int-casino"
        >
          <img src="/images/icon-casino.svg" className="img-fluid" />
          <span>ICasino</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileFooter;
