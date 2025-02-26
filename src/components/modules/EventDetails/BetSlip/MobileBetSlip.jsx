import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../../hooks/currentBets";
import useBalance from "../../../../hooks/balance";
import { useExposure } from "../../../../hooks/exposure";
import { useOrderMutation } from "../../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../../redux/features/events/eventSlice";
import { Settings } from "../../../../api";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../../utils/editBetSlipPrice";

const MobileBetSlip = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null
      )
    );
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
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
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
        isbetDelay: Settings.betDelay,
      },
    ];
    setLoading(true);
    setBetDelay(placeBetValues?.betDelay);
    const delay = Settings.betDelay ? placeBetValues?.betDelay * 1000 : 0;
    // Introduce a delay before calling the API
    setTimeout(async () => {
      const res = await createOrder(payloadData).unwrap();
      if (res?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        dispatch(setRunnerId(null));
        refetchCurrentBets();
        setBetDelay("");
        toast.success(res?.result?.result?.placed?.[0]?.message);
      } else {
        setLoading(false);
        toast.error(
          res?.error?.status?.[0]?.description || res?.error?.errorMessage
        );
        setBetDelay("");
      }
    }, delay);
  };

  useEffect(() => {
    if (betDelay > 0) {
      setTimeout(() => {
        setBetDelay((prev) => prev - 1);
      }, 1000);
    } else {
      setBetDelay(null);
    }
  }, [setBetDelay, betDelay]);

  console.log(placeBetValues);

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
                              onClick={() =>
                                handleDecreasePrice(
                                  price,
                                  placeBetValues,
                                  dispatch,
                                  setPrice
                                )
                              }
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
                            onChange={(e) => dispatch(setPrice(e.target.value))}
                            value={price}
                          />
                          {!placeBetValues?.isWeak && (
                            <div
                              onClick={() =>
                                handleIncreasePrice(
                                  price,
                                  placeBetValues,
                                  dispatch,
                                  setPrice
                                )
                              }
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
                          onChange={(e) => dispatch(setStake(e.target.value))}
                          value={stake !== null && stake}
                          placeholder={0}
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
                            onClick={() => dispatch(setStake(button?.value))}
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
                                ?.value
                            )
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
                    dispatch(setRunnerId(null));
                  }}
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
          {/**/}
        </div>
        {/**/}
      </div>
    </div>
  );
};

export default MobileBetSlip;
