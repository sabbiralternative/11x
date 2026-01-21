/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import moment from "moment";
import { useGetIndex } from "../../hooks";

const ReferralStatement = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 7)),
  );
  const [endDate, setEndDate] = useState(new Date());

  const payload = {
    type: "referral_statement",
    from_date: moment(startDate).format("YYYY-MM-DD"),
    to_date: moment(endDate).format("YYYY-MM-DD"),
  };
  const { data } = useGetIndex(payload);
  return (
    <main id="main" className="main a23_css">
      <div className="main-content">
        <p>Referral Date</p>
        <div
          className="bg-secondary"
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            padding: "10px 2px",
            borderRadius: "4px",
          }}
        >
          <div>
            <p
              style={{
                marginBottom: "2px",
                marginLeft: "4px",
                fontSize: "12px",
              }}
            >
              From Date
            </p>
            <DatePicker
              onChange={(date) => setStartDate(date)}
              defaultValue={startDate}
            />
          </div>
          <div>
            <p
              style={{
                marginBottom: "2px",
                marginLeft: "4px",
                fontSize: "12px",
              }}
            >
              To Date
            </p>
            <DatePicker
              onChange={(date) => setEndDate(date)}
              defaultValue={endDate}
            />
          </div>

          <button
            style={{
              backgroundColor: "var(--theme-secondary-color)",
              border: "none",
              padding: "10px 20px",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
              height: "34px",
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Submit
          </button>
        </div>
        {data && (
          <div style={{ marginTop: "20px" }}>
            <div
              className="bg-secondary"
              style={{
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <div>
                <ul>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      fontSize: "11px",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        flex: 1,
                      }}
                    >
                      Total Clients <span>{data?.total_clients}</span>
                    </p>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        flex: 1,
                      }}
                    >
                      Total Deposit <span>{data?.total_deposit}</span>
                    </p>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        width: "100%",
                        flex: 1,
                      }}
                    >
                      <span>Total Withdraw</span>
                      <span style={{ marginRight: "70px" }}>
                        {data?.total_withdraw}
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ReferralStatement;
