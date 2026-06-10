import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { useState } from "react";
import WarningCondition from "../../UI/WarningCondition/WarningCondition";

const CasinoThumbnail = ({ casinoData }) => {
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (game) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      }
      if (Settings.casino_currency !== "AED") {
        navigate(`/casino/${game?.gameName.replace(/ /g, "")}/${game?.gameId}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.gameName, gameId: game?.gameId });
        setShowWarning(true);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      {casinoData?.map((casino) => {
        return (
          <div
            onClick={() => handleNavigateToIFrame(casino)}
            key={casino?.id}
            className="col-md-2 col-4 ng-star-inserted"
          >
            <div className="d-inline-block casinoicons">
              <img
                className="img-fluid"
                alt="Dragon Tiger"
                src={casino?.urlThumb}
              />
              <div className="casino-name"> {casino?.name}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CasinoThumbnail;
