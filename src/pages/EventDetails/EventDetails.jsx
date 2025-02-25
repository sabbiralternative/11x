import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import { useEffect } from "react";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import RightSidebar from "../../components/modules/EventDetails/RightSidebar";
import MatchOddsBookmaker from "../../components/modules/EventDetails/MatchOddsBookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";

const EventDetails = () => {
  const { eventTypeId, eventId } = useParams();
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };
  return (
    <main id="main" className="main">
      <div>
        <section className="section listing_page">
          <div className="row">
            <div className="col-md-12 col-lg-8 detail-center-column">
              <div className="middle-page-content details-page">
                <div className="card-header game-heading">
                  <span className="card-header-title">
                    {data?.result?.[0]?.eventName}
                  </span>

                  <span className="date-time">
                    ({data?.result?.[0]?.openDate})
                  </span>
                </div>

                <div className="sr-widget-1" />
                {data?.score?.tracker && (
                  <div
                    style={{
                      width: "100%",
                      height: "125px",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <iframe
                      className="premium-iframe"
                      src={data?.score?.tracker}
                    ></iframe>
                  </div>
                )}

                <div>
                  <MatchOddsBookmaker data={data?.result} />

                  <Fancy data={data?.result} />
                </div>
              </div>
            </div>
            <RightSidebar />
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventDetails;
