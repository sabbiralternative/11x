import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../../hooks/currentBets";
import useBalance from "../../../../hooks/balance";
import { useExposure } from "../../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
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

const MobileBetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();
  const { data: socialLink } = useWhatsApp();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake, predictOdd } = useSelector(
    (state) => state?.event,
  );

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

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
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,
        site: Settings.siteUrl,
        nounce: uuidv4(),
        isbetDelay: socialLink?.bet_delay,
        apk: closePopupForForever ? true : false,
      },
    ];
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

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);
        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();
          setBetDelay("");
          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
          setBetDelay("");
          setBetDelay(false);
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong. Please try again.");
        setBetDelay("");
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

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
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
    <div className="col-lg-12 col-md-12 col-12 px-0 d-lg-none ng-star-inserted">
      <div>
        <div
          className={`place-bet-content black-bg-theme place-bet ${
            placeBetValues?.back ? "back" : "lay"
          } ng-star-inserted `}
        >
          <div id="goto-8.888104010-52877485" />
          <div className="table-responsive palce-tab-content">
            {loading && (
              <div className="full-overlay ng-star-inserted">
                <div className="spinner"></div>
              </div>
            )}

            <form noValidate className="ng-untouched ng-pristine ng-valid">
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
                            value={price}
                          />
                          {!placeBetValues?.isWeak && (
                            <div
                              onClick={() => {
                                handleIncreasePrice(
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
                            className="btn btn-secondary m-l-5 m-b-5 ng-star-inserted"
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
                        type="button"
                        onClick={() => dispatch(setStake(100))}
                        className="clear-both btn btn-secondary m-l-5 m-b-5 min-stake"
                      >
                        min
                      </button>
                      <button
                        type="button"
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
                        type="button"
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
                  onClick={handleCancelBet}
                  type="button"
                  className="btn btn-sm btn-danger"
                >
                  cancel
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-success"
                  disabled={!stake}
                  onClick={handleOrderBets}
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

export default MobileBetSlip;
