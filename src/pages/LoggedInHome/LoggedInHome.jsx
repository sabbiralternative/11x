import { useSelector } from "react-redux";
import CasinoProvider from "../../components/modules/LoggedInHome/CasinoProvider";
import ExtraTab from "../../components/modules/LoggedInHome/ExtraTab";
import GroupEvents from "../../components/modules/LoggedInHome/GroupEvents/GroupEvents";
import Tab from "../../components/modules/LoggedInHome/Tab";
import WhatsApp from "./WhatsApp";

const LoggedInHome = () => {
  const { group } = useSelector((state) => state.global);
  return (
    <>
      <WhatsApp />
      <main id="main" className="main">
        <div className="ng-star-inserted">
          <div className="">
            <div className="main_navigation_menu">
              <div className="tab-container">
                <Tab />
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    aria-labelledby
                    className="tab-pane active ng-star-inserted"
                  >
                    <ExtraTab />
                    <GroupEvents />
                    {group === 0 && <CasinoProvider />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoggedInHome;
