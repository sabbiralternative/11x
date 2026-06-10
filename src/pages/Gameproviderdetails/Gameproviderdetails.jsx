import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import "./GameProviderDetails.css";
import useLotusHomeLobby from "../../hooks/lotusHomeLobby";
import { Settings } from "../../api";
import { setShowLogin } from "../../redux/features/global/globalSlice";
import WarningCondition from "../../components/UI/WarningCondition/WarningCondition";

const GameProviderDetails = () => {
  const { game_name } = useParams();
  const { lotusLobby, isSuccess } = useLotusHomeLobby({ provider: game_name });
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const navigate = useNavigate();
  const { token, bonusToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleNavigate = (game) => {
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }
      if (Settings.casino_currency !== "AED") {
        navigate(
          `/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`,
        );
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.game_name, gameId: game?.game_id });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLogin(true));
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }
  }, [error]);

  return (
    <>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}{" "}
      <div id="main-content-container" className="gpd-root">
        <main className="gpd-main app-bg">
          <div className="gpd-outer">
            <div className="gpd-content">
              <div className="gpd-section">
                <div className="gpd-inner">
                  {/* Back nav + breadcrumb */}
                  <div className="gpd-nav-bar app-bg">
                    <button
                      onClick={() => navigate(-1)}
                      className="gpd-back-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 7 12"
                        fill="none"
                      >
                        <path
                          d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                          fill="#000"
                        />
                      </svg>
                    </button>

                    <div className="gpd-breadcrumb">
                      <div className="gpd-breadcrumb-inner">
                        <div className="gpd-breadcrumb-text">
                          <span>Casino</span>
                          <span>/{game_name}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Games grid */}
                  <div className="gpd-grid">
                    {lotusLobby?.length > 0 &&
                      lotusLobby?.map((item) => (
                        <div
                          key={item?.game_id}
                          className="gpd-game-card"
                          onClick={() => handleNavigate(item)}
                        >
                          <div className="gpd-game-card-img-wrapper">
                            <img
                              src={item?.url_thumb}
                              alt="Lightning Storm"
                              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                              loading="lazy"
                              title="Lightning Storm - 10sports"
                            />
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Empty state */}
                  {lotusLobby?.length === 0 && isSuccess && (
                    <div className="gpd-empty">No game found!</div>
                  )}
                </div>
              </div>

              {/* Hidden SEO block */}
              <div className="gpd-seo">
                <h1>Play Live Casino Games | Best Online Casino</h1>
                <h2>
                  Play live casino games on 10sports. Enjoy classic games like
                  roulette, blackjack, and baccarat with top-notch online casino
                  games in India.
                </h2>
              </div>

              {/* Bottom spacer */}
              <div className="gpd-spacer" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GameProviderDetails;
