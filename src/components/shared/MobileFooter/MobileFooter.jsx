import { Link, useLocation } from "react-router-dom";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const MobileFooter = () => {
  const { getLanguage } = useLanguage();
  const location = useLocation();

  return (
    <div>
      <nav className="footer_mobilemenu">
        <Link to="/" className={`${location.pathname === "/" ? "active" : ""}`}>
          <img src="/images/in-play.svg" className="img-fluid" />
          <span>{getLanguage(LanguageKey.IN_PLAY)}</span>
        </Link>

        <Link to="/?tab=0" className="ng-star-inserted">
          <img src="/images/place.svg" className="img-fluid" />
          <span>{getLanguage(LanguageKey.HOME)}</span>
        </Link>

        <Link
          className={`${location.pathname === "/mac88" ? "active" : ""}`}
          to="/mac88"
        >
          <img src="/images/icon-casino.svg" className="img-fluid" />
          <span>{getLanguage(LanguageKey.MAC88)}</span>
        </Link>
        <Link
          className={`${location.pathname === "/casino" ? "active" : ""}`}
          to="/casino"
        >
          <img src="/images/icon-casino.svg" className="img-fluid" />
          <span>{getLanguage(LanguageKey.CASINO)}</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileFooter;
