import { useLocation, useNavigate } from "react-router-dom";
import { useGroupQuery } from "../../../../redux/features/events/events";
import { useEffect, useState } from "react";
import useLanguage from "../../../../hooks/useLanguage";
import { languageValue } from "../../../../utils/language";
import { LanguageKey } from "../../../../const";
import { FilterLiveVirtual } from "../../../../utils/filter-live-virtual";

const GroupEvents = () => {
  const [liveVirtual, setLiveVirtual] = useState([]);
  const { valueByLanguage } = useLanguage();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let tab = 0;
  if (params.get("tab")) {
    tab = parseInt(params.get("tab"));
  }

  const eventName = {
    4: languageValue(valueByLanguage, LanguageKey.CRICKET),
    2: languageValue(valueByLanguage, LanguageKey.TENNIS),
    1: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
  };
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const { data } = useGroupQuery(
    { sportsType: tab },
    {
      pollingInterval: 1000,
    },
  );
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  //   const filterSports =
  //     data &&
  //     Object.keys(data)?.filter((key) => {
  //       return data?.[key]?.visible === true && data?.[key]?.inPlay === 1;
  //     });

  useEffect(() => {
    if (data) {
      /* create a array with all unique category for data */
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible) // Only include items where visible is true
            .map((item) => item.eventTypeId),
        ),
      );
      /* Sort the category for cricket > tennis > football */
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 2: 1, 1: 2, 5: 3 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);

  const onChangeLiveVirtual = (type, eventTypeId, isChecked) => {
    const obj = { type, eventTypeId, isChecked };

    setLiveVirtual((prev) => {
      const index = prev.findIndex(
        (item) => item.eventTypeId === eventTypeId && item.type === type,
      );

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          isChecked,
        };
        return updated;
      }

      return [...prev, obj];
    });
  };

  return (
    <div className="ng-star-inserted">
      {categories?.map((category) => {
        const groupedData = FilterLiveVirtual(
          liveVirtual,
          category,
          data,
          // 1,
        );
        return (
          <div key={category} className="ng-star-inserted">
            <div className="ng-star-inserted">
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
                                  src={`/images/menu-${category}.png`}
                                />
                                &nbsp; {eventName[category]}
                              </span>
                              <a
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                className="collapseIcon"
                                aria-controls="sportOne-4"
                              >
                                <i />
                              </a>
                              <ul className="live_virtual">
                                <li>
                                  <input
                                    onChange={(e) =>
                                      onChangeLiveVirtual(
                                        "live",
                                        category,
                                        e.target?.checked,
                                      )
                                    }
                                    type="checkbox"
                                    defaultValue="Order one"
                                    id={`checkboxOne${category}-inplay`}
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <label
                                    htmlFor={`checkboxOne${category}-inplay`}
                                  >
                                    LIVE
                                  </label>
                                </li>
                                <li>
                                  <input
                                    onChange={(e) =>
                                      onChangeLiveVirtual(
                                        "virtual",
                                        category,
                                        e.target?.checked,
                                      )
                                    }
                                    type="checkbox"
                                    defaultValue="Order Two"
                                    id={`checkboxTwo${category}-inplay`}
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <label
                                    htmlFor={`checkboxTwo${category}-inplay`}
                                  >
                                    VIRTUAL
                                  </label>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-2 text-center d-none d-md-block">
                              1
                            </div>
                            <div className="col-md-2 text-center d-none d-md-block">
                              x
                            </div>
                            <div className="col-md-2 text-center d-none d-md-block">
                              2
                            </div>
                          </div>
                        </div>
                        <div
                          className="bet-table-body collapse show ng-star-inserted"
                          id="sportOne-4"
                        >
                          <div className="ng-star-inserted">
                            {data && (tab || tab === 0)
                              ? groupedData.map(([key], index) => {
                                  return (
                                    <div
                                      onClick={() => navigateGameList(key)}
                                      key={index}
                                      className="bet-table-row ng-star-inserted"
                                    >
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="game-box">
                                            <div className="game-left-col">
                                              <div className="game-name">
                                                <a>
                                                  <p className="team-name text-left team-event">
                                                    {data[key]?.date}
                                                  </p>
                                                  <p className="team-name text-left">
                                                    {data[key]?.eventName}
                                                  </p>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="game-icons">
                                              <div className="icons_market">
                                                {data[key]?.isFancy === 1 ? (
                                                  <span className="icon_fancy ng-star-inserted">
                                                    F
                                                  </span>
                                                ) : (
                                                  <span
                                                    style={{
                                                      height: "20px",
                                                      width: "20px",
                                                      marginLeft: "4px",
                                                    }}
                                                    className="ng-star-inserted"
                                                  />
                                                )}
                                                {data[key]?.isBookmaker ===
                                                1 ? (
                                                  <span className="icon_bookmaker ng-star-inserted">
                                                    BM
                                                  </span>
                                                ) : (
                                                  <span
                                                    style={{
                                                      height: "20px",
                                                      width: "20px",
                                                      marginLeft: "4px",
                                                    }}
                                                    className="ng-star-inserted"
                                                  />
                                                )}
                                                {/* {data?.[key]?.isTv === 1 && (
                                                    <span className="icon_fancy ng-star-inserted">
                                                      T
                                                    </span>
                                                  )} */}
                                                {data?.[key]?.isTv === 1 ? (
                                                  <span className="icon_game ng-star-inserted">
                                                    <img
                                                      src="/images/tv.svg"
                                                      className="img-fluid"
                                                    />
                                                  </span>
                                                ) : (
                                                  <span
                                                    style={{
                                                      height: "20px",
                                                      width: "20px",
                                                      marginLeft: "4px",
                                                    }}
                                                    className="ng-star-inserted"
                                                  />
                                                )}
                                              </div>
                                              {data?.[key]?.inPlay === 1 ? (
                                                <div className="game-date inplay ng-star-inserted">
                                                  <span>Live</span>
                                                </div>
                                              ) : (
                                                <span
                                                  style={{
                                                    height: "20px",
                                                    width: "20px",
                                                    marginLeft: "4px",
                                                  }}
                                                  className="ng-star-inserted"
                                                />
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6 text-center">
                                          <div className="row g-0 ng-star-inserted">
                                            <div className="col-md-4 col-4">
                                              <div className="h-backLay">
                                                <div className="back bl-box">
                                                  <span className="d-block bet-button-price">
                                                    {data?.[key]?.[0]?.ex
                                                      ?.availableToBack[0]
                                                      ?.price || "-"}
                                                  </span>
                                                </div>
                                                <div className="bl-box lay">
                                                  <span className="d-block bet-button-price">
                                                    {data?.[key]?.[0]?.ex
                                                      ?.availableToLay[0]
                                                      ?.size || "-"}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-4 col-4">
                                              <div className="h-backLay">
                                                <div className="back bl-box">
                                                  <span className="d-block bet-button-price">
                                                    {data?.[key]?.[2]?.ex
                                                      ?.availableToBack[0]
                                                      ?.price || "-"}
                                                  </span>
                                                </div>
                                                <div className="bl-box lay">
                                                  <span className="d-block bet-button-price">
                                                    {data?.[key]?.[2]?.ex
                                                      ?.availableToLay[0]
                                                      ?.price || "-"}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-4 col-4">
                                              <div className="h-backLay">
                                                <div className="back bl-box">
                                                  <span className="d-block bet-button-price">
                                                    {data?.[key]?.[1]?.ex
                                                      ?.availableToBack[0]
                                                      ?.price || "-"}
                                                  </span>
                                                </div>
                                                <div className="bl-box lay">
                                                  <span className="d-block bet-button-price">
                                                    {data?.[key]?.[1]?.ex
                                                      ?.availableToLay[0]
                                                      ?.price || "-"}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })
                              : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupEvents;
