import { useCurrentBets } from "../../hooks/currentBets";

const UnSettledBets = () => {
  const { data } = useCurrentBets();

  return (
    <main id="main" className="main">
      <div>
        <div className="section accounts">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="userscreen-title">Unsettled Bets</h2>
              <div className="table-responsive">
                <table
                  id="btDataTable"
                  className="datatable table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Event Name</th>
                      <th>Nation</th>
                      <th>Market Name</th>
                      <th>Side</th>
                      <th>Rate</th>
                      <th>Amount</th>
                      <th>Place Date</th>
                      <th>Match Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((bet, i) => {
                      return (
                        <tr
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
    </main>
  );
};

export default UnSettledBets;
