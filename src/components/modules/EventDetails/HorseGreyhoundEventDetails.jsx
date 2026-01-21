import { useParams } from "react-router-dom";
import { Status } from "../../../const";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import MobileBetSlip from "./BetSlip/MobileBetSlip";
import { setShowLogin } from "../../../redux/features/global/globalSlice";

const HorseGreyhoundEventDetails = ({ data }) => {
  const { eventId } = useParams();
  const { data: exposure } = useExposure(eventId);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { runnerId } = useSelector((state) => state.event);

  const [timeDiff, setTimeDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    if (!data?.[0]?.openDate) return;

    const targetDateStr = data[0].openDate;
    const [date, time] = targetDateStr.split(" ");
    const [day, month, year] = date.split("/");
    const [hour, minute, second] = time.split(":");

    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;

        if (diffInMs <= 0) {
          clearInterval(interval);
          setTimeDiff({ day: 0, hour: 0, minute: 0, second: 0 });
          return;
        }

        const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minute = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setTimeDiff({ day, hour, minute, second });
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

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
        selectedBetName: runner?.horse_name,
        name: games.runners.map((runner) => runner.horse_name),
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
        dispatch(setRunnerId(runner?.id));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLogin(true));
    }
  };

  return (
    <>
      <div className="horse-banner">
        <img
          style={{ width: "100%" }}
          src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
          className="img-fluid"
        />
        <div className="horse-banner-detail">
          <div className="text-success">OPEN</div>
          {timeDiff?.day ||
          timeDiff?.hour ||
          timeDiff?.minute ||
          timeDiff?.second ? (
            <div className="horse-timer">
              <span style={{ display: "flex", gap: "5px" }}>
                {timeDiff?.day > 0 && (
                  <span>
                    {timeDiff?.day} <small>Day</small>
                  </span>
                )}
                {timeDiff?.hour > 0 && (
                  <span>
                    {timeDiff?.hour} <small>Hour</small>
                  </span>
                )}
                {timeDiff?.minute > 0 && (
                  <span>
                    {timeDiff?.minute} <small>Minutes</small>
                  </span>
                )}
                {timeDiff?.hour === 0 && timeDiff?.minute < 60 && (
                  <span>
                    {timeDiff?.second} <small>Seconds</small>
                  </span>
                )}
              </span>
              <span>Remaining</span>
            </div>
          ) : null}

          <div className="time-detail">
            <p>{data?.[0]?.eventName}</p>
            <h5>
              <span>{data?.[0]?.openDate}</span>
              <span>| {data?.[0]?.raceType}</span>
            </h5>
          </div>
        </div>
      </div>
      {data?.result?.map((games) => {
        return (
          <div key={games?.id} className="market_section">
            <p>
              <span className="mrkname">
                <a className="add-pin">
                  <i className="bi bi-star" />
                </a>
                {games?.name?.toUpperCase()}
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
                          <span className="marketevent">
                            {" "}
                            {runner?.horse_name}
                          </span>
                          <div
                            className="jockey-detail sm-d-none d-md-flex"
                            style={{ display: "flex" }}
                          >
                            {runner?.jocky && (
                              <span className="jockey-detail-box">
                                <b>Jockey:</b>
                                <span style={{ fontWeight: "normal" }}>
                                  {runner?.jocky}
                                </span>
                              </span>
                            )}
                            {runner?.trainer && (
                              <span className="jockey-detail-box">
                                <b>Trainer:</b>
                                <span style={{ fontWeight: "normal" }}>
                                  {runner?.trainer}
                                </span>
                              </span>
                            )}
                            {runner?.age && (
                              <span className="jockey-detail-box">
                                <b>Age:</b>
                                <span style={{ fontWeight: "normal" }}>
                                  {runner?.age}
                                </span>
                              </span>
                            )}
                          </div>
                          <div
                            style={{
                              marginRight: "3px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          ></div>
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

export default HorseGreyhoundEventDetails;
