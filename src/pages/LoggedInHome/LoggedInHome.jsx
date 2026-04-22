import { useSelector } from "react-redux";
import CasinoProvider from "../../components/modules/LoggedInHome/CasinoProvider";
import ExtraTab from "../../components/modules/LoggedInHome/ExtraTab";
import GroupEvents from "../../components/modules/LoggedInHome/GroupEvents/GroupEvents";
import Tab from "../../components/modules/LoggedInHome/Tab";
import WhatsApp from "./WhatsApp";
import { useState } from "react";
import MiniGames from "../../components/modules/LoggedInHome/MiniGames";

const LoggedInHome = () => {
  const [showMiniGamesModal, setShowMiniGamesModal] = useState(false);
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
        <div
          onClick={() => setShowMiniGamesModal(true)}
          style={{
            position: "fixed",
            top: "calc(100dvh - 130px)",
            left: "0",
            height: "fit-content",
            cursor: "pointer",
            // zIndex: 999999,
          }}
        >
          <img
            style={{
              height: "70px",
            }}
            src="/images/uv_games-CkYT1PYz.gif"
          />
        </div>
        {showMiniGamesModal && (
          <MiniGames setShowMiniGamesModal={setShowMiniGamesModal} />
        )}
      </main>
    </>
  );
};

export default LoggedInHome;
