import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLiveCasinoIframeMutation } from "../../redux/features/casino/casino.api";
import { useSelector } from "react-redux";
import { Settings } from "../../api";

const CasinoIFrame = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [handleGetIFrame, { data }] = useLiveCasinoIframeMutation();
  const { gameId } = useParams();

  useEffect(() => {
    const payload = {
      gameId: gameId,
      isHome: false,
      mobileOnly: true,
      casinoCurrency: Settings.casinoCurrency,
    };

    handleGetIFrame(payload);
  }, [handleGetIFrame, gameId]);
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
            src={data?.gameUrl}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CasinoIFrame;
