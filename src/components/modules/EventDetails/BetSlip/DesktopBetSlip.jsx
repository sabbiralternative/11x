import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useCurrentBets } from "../../../../hooks/currentBets";
import useBalance from "../../../../hooks/balance";
import { useExposure } from "../../../../hooks/exposure";
import { useGetEventDetailsQuery } from "../../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPredictOdd,
  setPrice,
  setStake,
} from "../../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../../api";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../../utils/editBetSlipPrice";
import useWhatsApp from "../../../../hooks/whatsapp";
import { AxiosJSEncrypt } from "../../../../lib/AxiosJSEncrypt";

const DesktopBetSlip = () => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const { pathname } = useLocation();
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventId, eventTypeId } = useParams();
  const dispatch = useDispatch();
  const { price, stake, placeBetValues, predictOdd } = useSelector(
    (state) => state.event,
  );
  const { data: socialLink } = useWhatsApp();
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchExposure } = useExposure(eventId);
  const [betDelay, setBetDelay] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [createOrder] = useOrderMutation();
  const { data: eventData } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
      skip: !pathname.includes("/event-details"),
    },
  );
  const currentPlaceBetEvent = eventData?.result?.find(
    (item) => item?.id === placeBetValues?.marketId,
  );

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize.toFixed(2)
          : null,
      ),
    );

    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  useEffect(() => {
    if (betDelay <= 0) {
      setBetDelay(null);
    }
    dispatch(setPredictOdd([]));
  }, [placeBetValues, dispatch, betDelay]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const payloadData = [
      {
        ...payload,
        site: Settings.siteUrl,
        nounce: uuidv4(),
        isbetDelay: socialLink?.bet_delay,
        apk: closePopupForForever ? true : false,
      },
    ];
    setLoading(true);
    let delay = 0;
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 3 &&
      placeBetValues?.name?.length === 2
    ) {
      delay = 9000;
    }
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 7 &&
      placeBetValues?.name?.length === 3
    ) {
      delay = 9000;
    } else {
      setBetDelay(currentPlaceBetEvent?.betDelay);
      delay = socialLink?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
    }

    setTimeout(async () => {
      const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

      if (data?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        refetchCurrentBets();
        setBetDelay("");
        toast.success(data?.result?.result?.placed?.[0]?.message);
        dispatch(setPlaceBetValues(null));
        dispatch(setStake(null));
      } else {
        setLoading(false);
        toast.error(
          data?.error?.status?.[0]?.description || data?.error?.errorMessage,
        );
        setBetDelay(null);
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  const selectedEvent = predictOdd?.find(
    (odd) => odd?.id === placeBetValues?.selectionId,
  );

  return (
    <div className="card mb-1 place-bet">
      <div className="card-header">
        <h6 className="card-header game-heading">Place Bet</h6>
      </div>
      <div
        id="bet-popup"
        style={{ display: placeBetValues ? "block" : "none" }}
      >
        <div
          className={`place-bet-content black-bg-theme place-bet ${
            placeBetValues?.back ? "back" : "lay"
          }`}
        >
          <div id="goto-8.88897596-5728188" />
          <div className="table-responsive palce-tab-content">
            {loading && (
              <div className="full-overlay ng-star-inserted">
                <div className="spinner"></div>
              </div>
            )}
            <form noValidate className="ng-untouched ng-pristine ng-valid">
              <h5>{placeBetValues?.selectedBetName}</h5>
              {placeBetValues?.name
                ?.filter((name) => name !== placeBetValues?.selectedBetName)
                ?.map((n) => {
                  return <h6 key={n}>{n}</h6>;
                })}

              <table className="coupon-table table table-borderedless">
                <tbody>
                  <tr className="middlesex-col">
                    <td className="bet-odds">
                      <div>
                        <small>odds</small>
                        <div className="input-group">
                          {!placeBetValues?.isWeak && (
                            <div
                              onClick={() => {
                                handleDecreasePrice(
                                  price,
                                  placeBetValues,
                                  dispatch,
                                  setPrice,
                                );
                                setIsCashOut(false);
                              }}
                              className="input-group-prepend disabled"
                            >
                              <span className="input-group-text">
                                <i className="bi bi-dash" />
                              </span>
                            </div>
                          )}

                          <input
                            placeholder={0}
                            type="text"
                            onChange={(e) => {
                              dispatch(setPrice(e.target.value));
                              setIsCashOut(false);
                            }}
                            className="form-control ng-untouched ng-pristine ng-valid"
                            value={price}
                          />
                          {!placeBetValues?.isWeak && (
                            <div
                              className="input-group-prepend disabled"
                              onClick={() => {
                                handleIncreasePrice(
                                  price,
                                  placeBetValues,
                                  dispatch,
                                  setPrice,
                                );
                                setIsCashOut(false);
                              }}
                            >
                              <span className="input-group-text">
                                <i className="bi bi-plus" />
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="bet-stakes">
                      <div className="form-group">
                        <small>stakes</small>
                        <input
                          onChange={(e) => {
                            dispatch(setStake(e.target.value));
                            setIsCashOut(false);
                          }}
                          placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                          value={stake !== null && stake}
                          type="number"
                          style={{ width: "100%" }}
                          className="ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="value-buttons">
                      {parseButtonValues?.map((button, i) => {
                        return (
                          <button
                            onClick={() => handleButtonValue(button?.value)}
                            key={i}
                            type="button"
                            className="btn btn-secondary m-l-5 m-b-5"
                          >
                            <i className="bi bi-plus" />
                            {button?.value}
                          </button>
                        );
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="mmac_btns">
                      <button
                        onClick={() => dispatch(setStake(100))}
                        className="clear-both btn btn-secondary m-l-5 m-b-5 min-stake"
                      >
                        min
                      </button>
                      <button
                        onClick={() =>
                          dispatch(
                            setStake(
                              parseButtonValues[parseButtonValues?.length - 1]
                                ?.value,
                            ),
                          )
                        }
                        className="btn btn-secondary m-l-5 m-b-5 max-stake"
                      >
                        max
                      </button>
                      {/* <button className="btn btn-secondary m-l-5 m-b-5 all-in-stake">
                          Edit Stake
                        </button> */}
                      <button
                        onClick={() => {
                          dispatch(setStake(null));
                        }}
                        className="btn btn-secondary m-l-5 m-b-5 clear-stake"
                      >
                        clear
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="col-md-12 px-0 d-flex justify-content-between">
                <button
                  onClick={() => {
                    dispatch(setPlaceBetValues(null));
                    dispatch(setStake(null));
                  }}
                  type="button"
                  className="btn btn-sm btn-danger"
                  id="close-popup"
                >
                  cancel
                </button>
                <button
                  disabled={!stake}
                  onClick={handleOrderBets}
                  type="button"
                  className="btn btn-sm btn-success"
                >
                  place bet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopBetSlip;
