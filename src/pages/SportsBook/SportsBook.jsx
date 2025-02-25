import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SportsBook = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="ng-star-inserted">
        <div className="casino_division">
          <h2 className="userscreen-title">
            <button onClick={() => navigate(-1)} className="btn-xs casino-back">
              Back
            </button>
            <span>{user}</span>
          </h2>
          <iframe
            style={{ minHeight: "100vh", width: "100%" }}
            allowfullscreen="true"
            title="game"
            id="casino-link"
            src="https://sports-v3.mysportsfeed.io/auth?token=af9b6742-7e75-4b72-aa81-d08ea97a61a4&operatorId=21exch&partnerId=ECPID01&providerId=SportRadar&lobby=SportBook&currency=INR"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SportsBook;
