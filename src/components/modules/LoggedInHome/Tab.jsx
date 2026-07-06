import { useState } from "react";
import { Settings } from "../../../api";
import { useLocation, useNavigate } from "react-router-dom";
import WarningCondition from "../../UI/WarningCondition/WarningCondition";
import useLanguage from "../../../hooks/useLanguage";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Tab = () => {
  const { valueByLanguage } = useLanguage();

  const homeTab = [
    {
      group: 0,
      name: "Inplay",
      imageSrc: "/images/menu-in_play.png",
    },

    {
      name: "FIFA 2026",
      imageSrc: "/images/menu-99998.png",
      to: "/event-details/4/1780591416",
    },
    {
      group: 4,
      name: languageValue(valueByLanguage, LanguageKey.CRICKET),
      imageSrc: "/images/menu-4.png",
    },
    {
      group: 1,
      name: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
      imageSrc: "/images/menu-1.png",
    },
    {
      group: 2,
      name: languageValue(valueByLanguage, LanguageKey.TENNIS),
      imageSrc: "/images/menu-2.png",
    },
    // {
    //   name: "Int Casino",
    //   imageSrc: "/images/menu-99999.png",
    //   to: "/int-casino",
    // },
    {
      name: "Casino",
      imageSrc: "/images/menu-99998.png",
      to: "/casino?product=All&category=All",
    },
    {
      name: "Sports book",
      imageSrc: "/images/menu-99991.png",
      iframe: true,
      label: "sportsbook",
      id: "550000",
    },
    {
      name: languageValue(valueByLanguage, LanguageKey.HORSE),
      imageSrc: "/images/menu-7.png",
      to: "/horse-racing",
    },
    {
      name: languageValue(valueByLanguage, LanguageKey.GREYHOUND),
      imageSrc: "/images/menu-4339.png",
      to: "/greyhound-racing",
    },
    {
      name: "Binary",
      imageSrc: "/images/menu-99990.png",
    },
    {
      group: 5,
      name: languageValue(valueByLanguage, LanguageKey.KABADDI),
      imageSrc: "/images/menu-99994.png",
    },

    {
      group: 6,
      name: "Politics",
      imageSrc: "/images/menu-2378961.png",
    },
    {
      group: 9,
      name: "Basketball",
      imageSrc: "/images/menu-7522.png",
    },
    {
      group: 10,
      name: "Baseball",
      imageSrc: "/images/menu-7511.png",
    },
    {
      group: 11,
      name: "Table Tennis",
      imageSrc: "/images/menu-20.png",
    },
    {
      group: 12,
      name: "Volleyball",
      imageSrc: "/images/menu-998917.png",
    },
    {
      group: 13,
      name: "Ice Hockey",
      imageSrc: "/images/menu-7524.png",
    },
    {
      group: 14,
      name: "Rugby",
      imageSrc: "/images/menu-5.png",
    },
  ];

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
