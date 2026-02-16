import { useNavigate, useParams } from "react-router-dom";
import { Status } from "../../../const";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { Settings } from "../../../api";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";
import MobileBetSlip from "./BetSlip/MobileBetSlip";
import { setShowLogin } from "../../../redux/features/global/globalSlice";
import { isGameSuspended } from "../../../utils/isOddSuspended";
import SpeedCashOut from "../../modals/SpeedCashOut/SpeedCashOut";

const MatchOdds = ({ data }) => {
  const navigate = useNavigate();
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

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
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
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
        exposure: updatedPnl,
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }
    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }
    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  return (
    <>
      {speedCashOut && (
        <SpeedCashOut
          speedCashOut={speedCashOut}
          setSpeedCashOut={setSpeedCashOut}
        />
      )}
      {data?.length > 0 &&
        data?.map((games) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === games?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === games?.id && profit?.speedCashOut,
          );
          return (
            <div key={games?.id} className="market_section">
              <p>
                <span className="mrkname">
                  <a className="add-pin">
                    <i className="bi bi-star" />
                  </a>
                  {games?.name?.toUpperCase()}
                  {Settings.cashout &&
                    games?.runners?.length !== 3 &&
                    games?.status === "OPEN" &&
                    games?.name !== "toss" &&
                    !speedCashOut && (
                      <button
                        onClick={() =>
                          handleCashOutPlaceBet(
                            games,
                            "lay",
                            dispatch,
                            pnlBySelection,
                            token,
                            navigate,
                            teamProfitForGame,
                          )
                        }
                        className="btn_cashout"
                      >
                        cashout{" "}
                        {teamProfitForGame?.profit &&
                          `(${teamProfitForGame.profit.toFixed(2)})`}
                      </button>
                    )}
                  {Settings.cashout &&
                    games?.runners?.length !== 3 &&
                    games?.status === "OPEN" &&
                    games?.name !== "toss" &&
                    speedCashOut && (
                      <button
                        style={{ background: "#82371b" }}
                        onClick={() =>
                          setSpeedCashOut({
                            ...speedCashOut,
                            market_name: games?.name,
                            event_name: games?.eventName,
                          })
                        }
                        disabled={isGameSuspended(games)}
                        className="btn_cashout"
                      >
                        Speed Cashout
                      </button>
                    )}
                </span>
                <span className="min-max">
                  Min: 100 | Max: {games?.maxLiabilityPerBet}
                  <a className="ms-2 game-rules-icon">
                    <span>
                      <i className="bi bi-info-circle-fill" />
                    </span>
                  </a>
                  <b
                    data-bs-target="#Match_Odds"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    className="collapsed"
                  />
                </span>
              </p>
              <div id="Match_Odds" className="collapse show">
                <div>
                  <div>
                    <div className="row align-items-center oddsHeader">
                      <div className="col-md-5 col-7 px-0" />
                      <div className="col-md-7 col-5 px-0">
                        <div className="btn-group">
                          <button className="ex-bl d-none d-md-block" />
                          <button className="ex-bl d-none d-md-block" />
                          <button className="back">back</button>
                          <button className="lay">lay</button>
                          <button className="ex-bl d-none d-md-block" />
                          <button className="ex-bl d-none d-md-block" />
                        </div>
                      </div>
                    </div>
                    {games?.runners?.map((runner) => {
                      const pnl = pnlBySelection?.find(
                        (pnl) => pnl?.RunnerId === runner?.id,
                      );
                      const predictOddValues = predictOdd?.find(
                        (val) => val?.id === runner?.id,
                      );
                      return (
                        <div
                          key={runner?.id}
                          className="row mx-0 align-items-center"
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className="col-md-5 col-7 px-0"
                          >
                            <span className="marketevent">{runner?.name}</span>

                            <div
                              style={{
                                marginRight: "3px",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              {pnl && (
                                <span
                                  style={{ position: "static", float: "none" }}
                                  className={`mrkt-volume  ng-star-inserted ${
                                    pnl?.pnl > 0 ? "green" : "red"
                                  }`}
                                >
                                  {pnl?.pnl}
                                </span>
                              )}

                              {stake && runnerId && predictOddValues && (
                                <span
                                  style={{ position: "static", float: "none" }}
                                  className={`mrkt-volume ${
                                    predictOddValues?.exposure > 0
                                      ? "text-green"
                                      : "text-red"
                                  } ng-star-inserted`}
                                >
                                  &nbsp;({predictOddValues?.exposure})
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-7 col-5 px-0">
                            <div className="btn-group">
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    games,
                                    runner,
                                    runner?.back[2]?.price,
                                  )
                                }
                                className="back back-1 d-md-block d-none"
                              >
                                <span> {runner?.back?.[2]?.price}</span>
                                <small> {runner?.back?.[2]?.size}</small>
                              </button>
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    games,
                                    runner,
                                    runner?.back[1]?.price,
                                  )
                                }
                                className="back back-2 d-md-block d-none"
                              >
                                <span>{runner?.back?.[1]?.price}</span>
                                <small> {runner?.back?.[1]?.size}</small>
                              </button>
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    games,
                                    runner,
                                    runner?.back[0]?.price,
                                  )
                                }
                                className="back"
                              >
                                <span>{runner?.back?.[0]?.price}</span>
                                <small> {runner?.back?.[0]?.size}</small>
                              </button>
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    games,
                                    runner,
                                    runner?.lay[0]?.price,
                                  )
                                }
                                className="lay"
                              >
                                <span>{runner?.lay?.[0]?.price}</span>
                                <small>{runner?.lay?.[0]?.size}</small>
                              </button>
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    games,
                                    runner,
                                    runner?.lay?.[1]?.price,
                                  )
                                }
                                className="d-md-block d-none lay lay-2"
                              >
                                <span>{runner?.lay?.[1]?.price}</span>
                                <small>{runner?.lay?.[1]?.size}</small>
                              </button>
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    games,
                                    runner,
                                    runner?.lay?.[2]?.price,
                                  )
                                }
                                className="d-md-block d-none lay lay-1"
                              >
                                <span>{runner?.lay?.[2]?.price}</span>
                                <small>{runner?.lay?.[2]?.size}</small>
                              </button>
                              {runner?.status === Status.SUSPENDED && (
                                <div className="suspended">suspended</div>
                              )}
                            </div>
                          </div>
                          {runner?.id === runnerId && (
                            <MobileBetSlip currentPlaceBetEvent={games} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default MatchOdds;
