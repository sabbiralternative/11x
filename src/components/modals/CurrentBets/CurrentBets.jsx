import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const CurrentBets = ({ setShowCurrentBets }) => {
  const currentBetRef = useRef();
  const { eventId } = useParams();
  const { data } = useCurrentBets(eventId);

  useCloseModalClickOutside(currentBetRef, () => {
    setShowCurrentBets(false);
  });

  return (
    <div>
      <div className="modal-backdrop fade in show" />
      <div
        role="dialog"
        tabIndex={-1}
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
      >
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
        <div role="document" className="bookModal modal-dialog">
          <div className="modal-content" ref={currentBetRef}>
            <div className="modal-content modal-content-centered">
              <div className="modal-header">
                <h5 className="modal-title">Open Bets</h5>
                <button
                  onClick={() => setShowCurrentBets(false)}
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body p-0">
                <div>
                  <div className="card mb-1 place-bet">
                    <div className="card-header">
                      <h6 className="card-header game-heading">Open Bets</h6>
                    </div>
                    <div className="card-body p-0">
                      <div id="OpenBets">
                        <select className="form-control mobile-hide ng-untouched ng-pristine ng-valid">
                          <option value={34058805}>
                            {data?.[0]?.eventName}
                          </option>
                          {/**/}
                        </select>
                        <div className="openBetsTabs accounts">
                          <div
                            type="tab nav-tabs-bordered"
                            className="tab-container"
                          >
                            <div className="tab-content">
                              <tab
                                id="tab1"
                                role="tabpanel"
                                aria-labelledby="tab1-link"
                                className="tab-pane active"
                              >
                                <div className="table-responsive">
                                  <table className="table table-striped table-bordered">
                                    <thead>
                                      <tr>
                                        <td>Selname</td>
                                        <td>Odds</td>
                                        <td>Stake</td>
                                        <td>Date/Time</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {data?.map((bet) => {
                                        return (
                                          <tr
                                            key={bet?.id}
                                            className={`${
                                              bet?.betType === "Back"
                                                ? "back"
                                                : "lay"
                                            }`}
                                          >
                                            <td>{bet?.nation}</td>
                                            <td>{bet?.userRate}</td>
                                            <td>{bet?.amount}</td>
                                            <td>{bet?.placeDate}</td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </tab>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default CurrentBets;
