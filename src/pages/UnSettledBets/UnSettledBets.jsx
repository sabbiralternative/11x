import { useNavigate } from "react-router-dom";
import { useCurrentBets } from "../../hooks/currentBets";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const UnSettledBets = () => {
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const { data } = useCurrentBets();
  const navigateGameList = (item) => {
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };

  return (
    <div>
      <div className="section accounts">
        <div className="row">
          <div className="col-xl-12">
            <h2 className="userscreen-title">
              {getLanguage(LanguageKey.UNSETTLED_BETS)}
            </h2>
            <div className="table-responsive">
              <table
                id="btDataTable"
                className="datatable table table-striped table-bordered"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>{getLanguage(LanguageKey.NO)}</th>
                    <th>{getLanguage(LanguageKey.EVENT_NAME)}</th>
                    <th>{getLanguage(LanguageKey.NATION)}</th>
                    <th>{getLanguage(LanguageKey.MARKET_NAME)}</th>
                    <th>{getLanguage(LanguageKey.SIDE)}</th>
                    <th>{getLanguage(LanguageKey.RATE)}</th>
                    <th>{getLanguage(LanguageKey.AMOUNT)}</th>
                    <th>{getLanguage(LanguageKey.PLACE_DATE)}</th>
                    <th>{getLanguage(LanguageKey.MATCH_DATE)}</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((bet, i) => {
                    return (
                      <tr
                        onClick={() => navigateGameList(bet)}
                        key={bet?.betId}
                        className={`${
                          bet?.betType === "Back" ? "back" : "lay"
                        }`}
                      >
                        <td>{i + 1}</td>
                        <td>{bet?.title}</td>
                        <td>{bet?.nation}</td>
                        <td>{bet?.marketName}</td>
                        <td>{bet?.betType}</td>
                        <td>{bet?.userRate} </td>
                        <td>{bet?.amount}</td>
                        <td>{bet?.placeDate}</td>
                        <td>N/A</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnSettledBets;
