import { Link } from "react-router-dom";

const ExtraTab = () => {
  return (
    <div className="extra ng-star-inserted">
      <div className="row mx-0 mb-1 d-none d-md-flex">
        <div className="col-md-4 px-0">
          <Link to="/casino" className="button_dakred">
            Our casino
          </Link>
        </div>
        <div className="col-md-4 px-1">
          <Link to="/int-casino" className="button_darkyellow">
            Int casino
          </Link>
        </div>
        <div className="col-md-4 px-0">
          <Link to="/sports-book" className="button_orange">
            Sports Book
          </Link>
        </div>
      </div>
      {/* {group === 0 && (
        <>
          <div className="row mx-0 d-flex d-md-none ng-star-inserted">
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/ak47_teenpatti.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/lucky_5.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/lucky_15.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/andarbahar.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/dragontiger.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/dragontigerlion.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/dragontigeroneday.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/baccarat.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img className="img-fluid" src="/src/assets/images/sicbo.png" />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/roulette.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/20-20poker.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/pokeroneday.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/lucky7.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/onedayteenpatti.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/testteenpatti.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/muflisteenpatti.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/teenpatti2020.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/2cardteenpatti.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/32cards.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img className="img-fluid" src="/src/assets/images/aaa.png" />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/3cardjudgement.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/queenrace.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/race2020.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/worlimatka.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img className="img-fluid" src="/src/assets/images/trio.png" />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/bollywoodcasino.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/duskadum.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/1-card-20-20.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/one-card-one-day.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/note-number.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/raceto2nd.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/lottery.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/superover.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/fivecricket.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/casinowar.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/29baccarat.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/6playerpoker.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/raceto17.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/cricket2020.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/openteenpatti.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/centrecard1day.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/highlow.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/baccaratoneday.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/10-10-cricket.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/dragon-tiger-2.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/teen-patti2-20-20.png"
                />
              </a>
            </div>
            <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
              <a>
                <img
                  className="img-fluid"
                  src="/src/assets/images/instant-2-card-teenpatti.png"
                />
              </a>
            </div>

            <div className="col-12">
              <a href="javascript:;" className="btn_allgames more-btn d-block">
                More Games &gt;&gt;
              </a>
              <a href="javascript:;" className="btn_allgames less-btn d-none">
                &lt;&lt; Less Games
              </a>
            </div>
          </div>

          <div className="row mx-0 d-flex d-md-none">
            <div className="col-6 px-1 mb-1 position-relative">
              <img
                src="/src/assets/images/aviator-730-280.gif"
                className="img-fluid"
              />
            </div>
            <div className="col-6 px-1 mb-1 position-relative">
              <img
                src="/src/assets/images/evoplay-730-280.gif"
                className="img-fluid"
              />
            </div>
            <div className="col-6 px-1 position-relative">
              <a >
                <img
                  src="/src/assets/images/fungames-730_280.gif"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-6 px-1 position-relative">
              <a >
                <img
                  src="/src/assets/images/wingogames-730-280.gif"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body card-content p-0">
                  <div
                    data-bs-toggle="collapse"
                    href="#HorseRacing"
                    aria-expanded="true"
                    aria-controls="HorseRacing"
                    className="bet-table-header"
                  >
                    <span className="list-sport-title">
                      <img
                        src="/src/assets/images/menu-horse.png"
                        className="img-fluid game-icon-img"
                      />
                      Next Horse Racing
                    </span>
                  </div>
                  <div
                    id="HorseRacing"
                    className="bet-table-body collapse show"
                  >
                    <div className="race-section ng-star-inserted">
                      <a
                        href="https://11xplay.com/game-detail/33938341/1.238202914"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Horse" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            10:52 AM{" "}
                          </span>
                          <span className="race-name">R5 1609m Pace M</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33935746/1.238156485"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Horse" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:00 AM{" "}
                          </span>
                          <span className="race-name">R7 1450m Hcap</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938356/1.238203064"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Horse" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:12 AM{" "}
                          </span>
                          <span className="race-name">R5 1660m Pace M</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33935746/1.238156493"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Horse" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:30 AM{" "}
                          </span>
                          <span className="race-name">R8 1600m Hcap</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938341/1.238202917"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Horse" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:33 AM{" "}
                          </span>
                          <span className="race-name">R6 1609m Pace M</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938304/1.238202058"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Horse" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:42 AM{" "}
                          </span>
                          <span className="race-name">R1 1800m Pace M</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body card-content p-0">
                  <div
                    data-bs-toggle="collapse"
                    href="#GreyRacing"
                    aria-expanded="true"
                    aria-controls="GreyRacing"
                    className="bet-table-header"
                  >
                    <span className="list-sport-title">
                      <img
                        src="/src/assets/images/menu-greyhound.png"
                        className="img-fluid game-icon-img"
                      />
                      Next Greyhound Racing
                    </span>
                  </div>
                  <div id="GreyRacing" className="bet-table-body collapse show">
                    <div className="race-section ng-star-inserted">
                      <a
                        href="https://11xplay.com/game-detail/33938380/1.238203399"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Greyhound" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            10:57 AM{" "}
                          </span>
                          <span className="race-name">R6 520m Heat</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938333/1.238202515"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Greyhound" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:02 AM{" "}
                          </span>
                          <span className="race-name">R5 300m Rest</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938380/1.238203404"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Greyhound" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:17 AM{" "}
                          </span>
                          <span className="race-name">R7 431m Gr4/5</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938333/1.238202520"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Greyhound" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:24 AM{" "}
                          </span>
                          <span className="race-name">R6 411m Gr5</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938380/1.238203409"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Greyhound" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:37 AM{" "}
                          </span>
                          <span className="race-name">R8 431m Gr3/4</span>
                        </div>
                      </a>
                      <a
                        href="https://11xplay.com/game-detail/33938333/1.238202525"
                        className="chip ng-star-inserted"
                      >
                        <img alt="Greyhound" src="/src/assets/images/au.png" />
                        <div className="race_detail">
                          <span
                            className="race_time"
                            style={{ fontWeight: 700 }}
                          >
                            11:44 AM{" "}
                          </span>
                          <span className="race-name">R7 484m Gr5</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
};

export default ExtraTab;
