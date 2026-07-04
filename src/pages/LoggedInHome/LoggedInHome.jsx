import { useSelector } from "react-redux";
import CasinoProvider from "../../components/modules/LoggedInHome/CasinoProvider";
import ExtraTab from "../../components/modules/LoggedInHome/ExtraTab";
import GroupEvents from "../../components/modules/LoggedInHome/GroupEvents/GroupEvents";
import WhatsApp from "./WhatsApp";
import { useState } from "react";
import MiniGames from "../../components/modules/LoggedInHome/MiniGames";
import { useLocation } from "react-router-dom";
import IndianCardGames from "../../components/modules/LoggedInHome/IndianCardGames";
import TopGames from "../../components/modules/LoggedInHome/TopGames";
import NewLaunch from "../../components/modules/LoggedInHome/NewLaunch";
import { useGetIndex } from "../../hooks";
import HighlightThumbnails from "../../components/modules/LoggedInHome/HighlightThumbnails";

const LoggedInHome = () => {
  const { data } = useGetIndex({
    type: "11x_homepage",
  });
  const { data: casinoData } = useGetIndex({
    type: "99_casino_dashboard",
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tab = params.get("tab");
  const [showMiniGamesModal, setShowMiniGamesModal] = useState(false);
  const { group } = useSelector((state) => state.global);

  return (
    <>
      <WhatsApp />
      <div
        role="tabpanel"
        aria-labelledby
        className="tab-pane active ng-star-inserted"
      >
        <ExtraTab />
        {data?.top_games?.length > 0 && (
          <TopGames top_games={data?.top_games} />
        )}

        {data?.new_launch?.length > 0 && (
          <NewLaunch new_launch={data?.new_launch} />
        )}
        <HighlightThumbnails highlight_casino={casinoData?.highlight_casino} />

        <GroupEvents />
        {tab === null && (
          <CasinoProvider our_provider={casinoData?.our_provider} />
        )}
        {tab === null && <IndianCardGames />}
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
    </>
  );
};

export default LoggedInHome;
