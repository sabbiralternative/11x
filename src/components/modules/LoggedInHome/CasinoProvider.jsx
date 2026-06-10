import { useNavigate } from "react-router-dom";
import useLotusHomeLobby from "../../../hooks/lotusHomeLobby";
import { useRef, useState } from "react";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";
import "./CasinoProvider.css";

const CasinoProvider = () => {
  const ref = useRef();
  const [showSeeAll, setShowSeeAll] = useState(false);
  const { lotusLobby } = useLotusHomeLobby();
  const navigate = useNavigate();
  const casinoProviders = lotusLobby?.casinoProviders || [];
  const handleNavigate = (game) => {
    navigate(`/game-provider/${game?.game_name}/${game?.game_id}`);
  };

  const sortedData =
    casinoProviders && casinoProviders?.length > 0
      ? casinoProviders?.sort((a, b) => a.sort - b.sort)
      : [];
  return (
    <>
      <div title="Casino" className="casino-provider-wrapper">
        <div className="casino-provider-card">
          {/* Header */}
          <div className="casino-provider-header">
            <svg
              className="casino-provider-header-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="var(--primary-color)"
            >
              <path
                d="M11.9802 5.61846C8.76732 3.66374 10.274 0.904781 10.3386 0.790102C10.4324 0.626906 10.4321 0.426129 10.3379 0.263215C10.2436 0.100301 10.0697 0 9.88143 0C8.22757 0 6.93248 0.469898 6.03217 1.39669C4.49377 2.9803 4.56513 5.445 4.59558 6.49751C4.59895 6.61409 4.60187 6.71484 4.60187 6.78966C4.60187 7.57111 4.72724 8.29255 4.83787 8.92905C4.90917 9.33922 4.97073 9.69346 4.98166 9.97196C4.99337 10.2701 4.93895 10.3384 4.93663 10.3412C4.92886 10.3504 4.86417 10.3848 4.68927 10.3848C4.48979 10.3848 4.34273 10.3196 4.21245 10.1736C3.70352 9.60289 3.66833 8.0447 3.76564 7.19698C3.78305 7.04749 3.73576 6.89773 3.63567 6.78537C3.53562 6.67301 3.39232 6.60874 3.24185 6.60874C1.87269 6.60874 0.849609 8.84777 0.849609 10.8497C0.849609 11.7908 1.03889 12.7127 1.41221 13.5898C1.77313 14.4377 2.28778 15.203 2.94193 15.8643C4.30431 17.2415 6.10055 18 7.99983 18C9.90674 18 11.7025 17.2522 13.0564 15.8945C14.4067 14.5403 15.1504 12.7486 15.1504 10.8496C15.1504 8.4266 13.2545 6.39369 11.9802 5.61846ZM7.99983 16.9453C4.69574 16.9453 1.90433 14.1539 1.90433 10.8496C1.90433 10.0461 2.09607 9.20257 2.43037 8.53548C2.50846 8.37963 2.58858 8.24593 2.66764 8.13329C2.67647 9.0033 2.81428 10.1893 3.42442 10.8745C3.75355 11.2441 4.19093 11.4395 4.6893 11.4395C5.15488 11.4395 5.50968 11.2983 5.74375 11.02C6.18137 10.4998 6.04704 9.72693 5.87702 8.74842C5.7737 8.15393 5.65659 7.48009 5.65659 6.78962C5.65659 6.69952 5.65346 6.59176 5.64988 6.46692C5.62102 5.46996 5.56093 3.39543 6.78869 2.13159C7.33984 1.56421 8.10934 1.2189 9.08282 1.10074C8.97292 1.46566 8.87817 1.92892 8.87452 2.44761C8.86643 3.59047 9.30356 5.22457 11.4321 6.51952C12.4619 7.14604 14.0957 8.87562 14.0957 10.8497C14.0957 14.2108 11.3611 16.9453 7.99983 16.9453Z"
                fill="var(--primary-color)"
              />
            </svg>

            <div className="casino-provider-header-content">
              <span className="casino-provider-title">casino Providers</span>

              <div className="casino-provider-controls">
                <button
                  onClick={() => setShowSeeAll((prev) => !prev)}
                  className="casino-provider-see-all-btn"
                  type="button"
                >
                  {showSeeAll ? "See Less" : "See All"}
                </button>

                <button
                  onClick={() => scrollToLeft(ref)}
                  className="casino-provider-scroll-btn"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                </button>

                <button
                  onClick={() => scrollToRight(ref)}
                  className="casino-provider-scroll-btn"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Grid Body */}
          <div ref={ref} id="scrollShow" className="casino-provider-body">
            <div
              className={`casino-provider-grid ${showSeeAll ? "expanded" : "compact"}`}
            >
              {sortedData?.map((game, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigate(game)}
                  className="casino-provider-item"
                  type="button"
                  title="Evolution Gaming"
                >
                  <div
                    title="InPlayAndPopulars"
                    id="banners"
                    className="casino-provider-img-wrapper"
                  >
                    <img
                      src={game?.url_thumb}
                      width="80"
                      height="40"
                      alt="Evolution Gaming"
                      loading="lazy"
                      title="Evolution Gaming"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasinoProvider;
