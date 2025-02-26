import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { Status } from "../../../const";
import MobileBetSlip from "./BetSlip/MobileBetSlip";
import { setShowLogin } from "../../../redux/features/global/globalSlice";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true
  );

  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLogin(true));
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (marketId) => {
    const res = await getLadder({ marketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <>
      {fancyData?.length > 0 && (
        <div className="newtab_collect tab-container">
          <div className="tab-content">
            <tab role="tabpanel" aria-labelledby className="tab-pane active">
              <div className="market_section">
                <p>
                  <span className="mrkname">FANCY</span>
                  <span className="min-max">
                    <a
                      className="ms-2 game-rules-icon"
                      style={{ background: "none !important" }}
                    >
                      <span>
                        <i className="bi bi-info-circle-fill" />
                      </span>
                    </a>
                  </span>
                </p>
                <div>
                  <div className="fancy-tab-content">
                    <div className="row align-items-center oddsHeader">
                      <div className="col-md-7 col-8 px-0" />
                      <div className="col-md-3 col-4 px-0">
                        <div className="btn-group">
                          <button className="lay w-100">no</button>
                          <button className="back w-100">yes</button>
                        </div>
                      </div>
                      <div className="col-md-2 col-4 px-0 d-none d-md-block" />
                    </div>
                    {fancyData?.map((game) => {
                      const pnl =
                        pnlBySelection?.find(
                          (pnl) => pnl?.MarketId === game?.id
                        ) || {};
                      return (
                        <div key={game?.id} className="fancy-detail-list">
                          <div>
                            <div className="row mx-0 align-items-center tablist-content">
                              <div className="col-md-6 col-6 px-0">
                                <div className="name_of_fancy">
                                  <a className="add-pin">
                                    <i className="bi bi-star" />
                                  </a>

                                  <span className="marketevent">
                                    {game?.name}
                                  </span>
                                </div>
                                <span className="min-max-fancy">
                                  Min: 100 Max: {game?.maxLiabilityPerBet}
                                </span>
                              </div>
                              <div className="col-md-1 col-1 px-0"></div>
                              <div className="col-md-3 col-5 px-0">
                                <div className="cs-cls">
                                  <div className="btn-group">
                                    <button
                                      onClick={() =>
                                        handleBetSlip(
                                          "lay",
                                          game,
                                          game?.runners?.[0],
                                          game?.runners?.[0]?.lay?.[0]?.line
                                        )
                                      }
                                      className="lay w-100"
                                    >
                                      <span>
                                        {" "}
                                        {game?.runners?.[0]?.lay?.[0]?.line}
                                      </span>
                                      <small>
                                        {" "}
                                        {game?.runners?.[0]?.lay?.[0]?.price}
                                      </small>
                                    </button>

                                    <button
                                      onClick={() =>
                                        handleBetSlip(
                                          "back",
                                          game,
                                          game?.runners?.[0],
                                          game?.runners?.[0]?.back?.[0]?.line
                                        )
                                      }
                                      className="back w-100"
                                    >
                                      <span>
                                        {" "}
                                        {game?.runners?.[0]?.back?.[0]?.line}
                                      </span>
                                      <small>
                                        {game?.runners?.[0]?.back?.[0]?.price}
                                      </small>
                                    </button>
                                    {game?.status === Status.SUSPENDED && (
                                      <div className="suspended">suspended</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2 col-4 px-0 d-none d-md-block">
                                <button className="two-odds-min-max">
                                  <span className="d-block">Min Bet: 100</span>
                                  <span className="d-block">
                                    Max Bet: {game?.maxLiabilityPerBet}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          {game?.id === runnerId && <MobileBetSlip />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </tab>
          </div>
        </div>
      )}
    </>
  );
};

export default Fancy;
