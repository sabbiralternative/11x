import { homeTab } from "../../../static/group";
import { useLocation, useNavigate } from "react-router-dom";

const Tab = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let tab = 0;
  if (params.get("tab")) {
    tab = parseInt(params.get("tab"));
  }

  const navigate = useNavigate();

  const handleActiveTab = (tab) => {
    if (tab?.id === 0 || tab?.id === 1 || tab?.id === 4 || tab?.id === 2) {
      navigate(`/?tab=${tab?.id}`);
    }
    if (tab?.to) {
      navigate(tab?.to);
    }
  };
  return (
    <ul role="tablist" className="nav nav-pills" aria-label="Tabs">
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
                tab == t?.id
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
