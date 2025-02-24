import { useDispatch, useSelector } from "react-redux";
import { homeTab } from "../../../static/group";
import { setGroup } from "../../../redux/features/global/globalSlice";

const Tab = () => {
  const { group } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleActiveTab = (tab) => {
    if (tab?.id === 0 || tab?.id === 1 || tab?.id === 4 || tab?.id === 2) {
      dispatch(setGroup(tab?.id));
    }
  };
  return (
    <ul role="tablist" className="nav nav-pills" aria-label="Tabs">
      {homeTab?.map((tab) => {
        return (
          <li
            onClick={() => handleActiveTab(tab)}
            key={tab?.id}
            className={`active nav-item ng-star-inserted`}
          >
            <a
              role="tab"
              className={`nav-link ${group === tab?.id ? "active" : ""}`}
              aria-controls
              aria-selected="true"
              id
            >
              <span />
              <img className="img-fluid ng-star-inserted" src={tab.imageSrc} />
              <span className="ml-2 ng-star-inserted" id="staticTab-0">
                {tab?.name}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
