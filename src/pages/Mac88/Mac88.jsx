import { useEffect, useState } from "react";
import Tab from "../../components/modules/LoggedInHome/Tab";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGetMac88 from "../../hooks/useGetMac88";
import { setShowLogin } from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";

const Mac88 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [warnMessage, setWarnMessage] = useState("");
  const { token, bonusToken } = useSelector((state) => state.auth);
  const { data } = useGetMac88();

  const handleAuraCasino = (code, name) => {
    if (token) {
      if (bonusToken) {
        return setWarnMessage("Bonus wallet is available only on sports.");
      } else {
        navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
      }
    } else {
      dispatch(setShowLogin(true));
    }
  };

  useEffect(() => {
    if (warnMessage) {
      return toast.error(warnMessage);
    }
  }, [warnMessage]);
  return (
    <main id="main" className="main">
      <div className="ng-star-inserted">
        <div className="section listing_page">
          <div className="main_navigation_menu">
            <div className="tab-container">
              <Tab />
              <div className="tab-content">
                <div
                  role="tabpanel"
                  aria-labelledby
                  className="tab-pane active ng-star-inserted"
                >
                  <div className="ng-star-inserted">
                    <div className="row ng-star-inserted">
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body card-content p-0">
                            <div className="bet-table-header">
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <span className="list-sport-title">
                                    <img
                                      className="img-fluid game-icon-img"
                                      src="/images/menu-99999.png"
                                    />
                                    Mac88
                                  </span>
                                </div>
                                <div className="col-md-2 text-center d-none d-md-block" />
                                <div className="col-md-2 text-center d-none d-md-block" />
                                <div className="col-md-2 text-center d-none d-md-block" />
                              </div>
                            </div>
                            <div className="bet-table-body">
                              <div className="home-products-container mt-1 ng-star-inserted">
                                <div className="row row5">
                                  <div className="col-md-12 main_navigation_menu">
                                    <div className="casino_tabs_ul tab-container">
                                      <div className="tab-content">
                                        <div
                                          role="tabpanel"
                                          aria-labelledby
                                          className="tab-pane active ng-star-inserted"
                                        >
                                          <div className="icasino_ul_tabs">
                                            <div className="tab-container">
                                              <div className="tab-content">
                                                <div
                                                  role="tabpanel"
                                                  aria-labelledby
                                                  className="tab-pane active ng-star-inserted"
                                                >
                                                  <div className="row row-casino ng-star-inserted">
                                                    {data?.map((item, i) => {
                                                      return (
                                                        <div
                                                          onClick={() =>
                                                            handleAuraCasino(
                                                              item?.game_id,
                                                              item?.game_name,
                                                            )
                                                          }
                                                          key={i}
                                                          className="col-md-2 col-4 ng-star-inserted"
                                                        >
                                                          <div className="d-inline-block casinoicons">
                                                            <img
                                                              className="img-fluid"
                                                              alt="Dragon Tiger"
                                                              src={item?.img}
                                                            />
                                                            <div className="casino-name">
                                                              {" "}
                                                              {item?.game_name}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      );
                                                    })}
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
      </div>
    </main>
  );
};

export default Mac88;
