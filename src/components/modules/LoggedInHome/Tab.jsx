import { useState } from "react";
import { Settings } from "../../../api";
import { homeTab } from "../../../static/group";
import { useLocation, useNavigate } from "react-router-dom";
import WarningCondition from "../../UI/WarningCondition/WarningCondition";

const Tab = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let tab = 0;
  if (params.get("tab")) {
    tab = parseInt(params.get("tab"));
  }

  const navigate = useNavigate();

  const handleActiveTab = (tab) => {
    if (tab?.group || tab?.group === 0) {
      navigate(`/?tab=${tab?.group}`);
    }
    if (tab?.iframe) {
      if (Settings.casino_currency !== "AED") {
        navigate(`/casino/${tab?.label}/${tab?.id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: tab?.label, gameId: tab?.id });
        setShowWarning(true);
      }
    }

    if (tab?.to) {
      navigate(tab?.to);
    }
  };
  return (
    <ul role="tablist" className="nav nav-pills" aria-label="Tabs">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      {homeTab?.map((t) => {
        return (
          <li
            onClick={() => handleActiveTab(t)}
            key={t?.id}
            className={`active nav-item ng-star-inserted`}
          >
            <a
              role="tab"
              className={`nav-link ${
                tab == t?.group
                  ? "active"
                  : location.pathname === t.to
                    ? "active"
                    : ""
              }`}
            >
              <span />
              <img className="img-fluid ng-star-inserted" src={t.imageSrc} />
              <span className="ml-2 ng-star-inserted" id="staticTab-0">
                {t?.name}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
