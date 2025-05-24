import { useEffect, useState } from "react";
import DepositReport from "./DepositReport";
import WithdrawReport from "./WithdrawReport";

const DepositWithdrawReport = () => {
  const [tab, setTab] = useState("deposit");
  const [depositWithdraw, setDepositWithdraw] = useState("deposit");

  useEffect(() => {
    setTimeout(() => {
      setTab(depositWithdraw);
    }, 500);
  }, [depositWithdraw]);

  return (
    <main id="main" className="main a23_css">
      <div className="deposit-withdraw-btns  ">
        <div className="btns-animation ">
          <div className="btnBox ">
            <button
              onClick={() => setDepositWithdraw("deposit")}
              className={`btn-inactive `}
            >
              <span
                className={`${
                  tab === "deposit" && depositWithdraw === "deposit"
                    ? "text-white"
                    : ""
                }`}
              >
                Deposit
              </span>
            </button>
            <button
              onClick={() => setDepositWithdraw("withdraw")}
              className="btn-inactive "
            >
              <span
                className={`${
                  tab === "withdraw" && depositWithdraw === "withdraw"
                    ? "text-white"
                    : ""
                }`}
              >
                Withdraw
              </span>
            </button>
          </div>
          <div
            className={` ${
              depositWithdraw === "deposit"
                ? "animation-div-1"
                : "animation-div-2"
            }`}
          ></div>
        </div>
      </div>
      {depositWithdraw === "deposit" ? <DepositReport /> : <WithdrawReport />}
    </main>
  );
};

export default DepositWithdrawReport;
