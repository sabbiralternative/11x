import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../api";
import img from "../../assets/img";
import Header from "../../components/shared/Header/Header";
import Notification from "../../components/shared/Notification/Notification";
import useLogo from "../../hooks/useLogo";
import Banner from "./Banner";
import { useEffect } from "react";
import { setForceChangePassword } from "../../redux/features/global/globalSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { showLogin } = useSelector((state) => state.global);
  const { logo } = useLogo();

  useEffect(() => {
    const changePassword = localStorage.getItem("changePassword");
    if (changePassword) {
      dispatch(setForceChangePassword(true));
    }
  }, [showLogin, dispatch]);

  return (
    <div className={`fullpage`}>
      <div>
        <Header />
        <Notification />
        <main id="main" className="main">
          <div>
            <Banner />
            <section
              className="sportsSection"
              style={{ backgroundColor: "#0b0d2a" }}
            >
              <div className="container">
                <h2 className="titlehome">IN OUR EXCHANGE...</h2>
                <div className="row">
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img className="img-fluid" src={img.four} />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Cricket
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img className="img-fluid" src={img.one} />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Football
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img className="img-fluid" src={img.two} />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Tennis
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img className="img-fluid" src={img.intCasino} />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Int Casino
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img className="img-fluid" src={img.seven} />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Horse Racing
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img className="img-fluid" src={img.greyhound} />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Greyhound Racing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="marketing">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2>Instant Action?</h2>
                    <p>
                      Instant Withdrawal &amp; Deposit Live Stream Of Events
                      Famous International Casino Surety of Winning Rate 24/7
                      Customer Service
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img src="/images/casino-pic.png" className="img-fluid" />
                  </div>
                </div>
              </div>
            </section>
            <section className="casino">
              <div className="container">
                <h2 className="titlehome">OUR CASINOS</h2>
                <div className="row">
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/rummy.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/2020tp2.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/andarbahar.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/dragontiger.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/dragontigerlion.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/dragontigeroneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/dt2.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/baccarat.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/29baccarat.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/baccaratoneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/sicbo.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/roulette.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/20-20poker.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/poker.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/lucky7.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/onedayteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/teenpattitest.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/2cardsteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/muflisteenpattioneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/2020teenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/2cardonedayteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/openteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/32cards.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/amarakbaranthony.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/3cardjudgement.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/queenrace.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/race20.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/casinowar.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/worlimatka.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/trap.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/trio.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/bollywoodcasino.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/10kadum.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/1-card-20-20.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/one-card-one-day.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/race17.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/note-umber.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/raceto2nd.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/centercardoneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/lottery.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/superoveroneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/fivecricket.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/cricket2020.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/high_low.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img className="img-fluid" src="/images/6pp.webp" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/images/10-10-cricket.webp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="casino_marketing">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img src="/images/casino-pic.png" className="img-fluid" />
                  </div>
                  <div className="col-md-5">
                    <h2>Best to others?</h2>
                    <p>
                      11xplay.online is India’s first and most trusted betting
                      exchange that offers the likes of sports book and live
                      casino and live Indian card games. Unlike most other
                      betting sites, on FairPlay a user bets against other
                      players and not the house thus maintaining transparency
                      and increasing a player’s chances of winning.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="all-providers">
              <div className="container">
                <h2 className="titlehome">Game Providers</h2>
                <div className="row align-items-center">
                  <div className="col-lg-2 col-6">
                    <img src="/images/mac88.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/images/mac88virtualgame.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/aesexy.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/betgames.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/bombaylive.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/evolution.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/ezugi.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/gamzix.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/jili.webp" className="img-fluid" />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img src="/images/spribe.webp" className="img-fluid" />
                  </div>
                </div>
              </div>
            </section>
            <section className="footer_home">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="footer__logo">
                      <a href="https://11xplay.com/home">
                        <img alt="" className="img-fluid" src={logo} />
                      </a>
                      <hr />
                      <p>
                        © 2024 All rights reserved.
                        <a href="https://11xplay.com/">
                          {" "}
                          {Settings.siteTitle} most trusted and secure exchange
                          site in the world.
                        </a>
                      </p>
                      <img
                        src="/images/socialicon.png"
                        className="img-fluid mt-2"
                        style={{ width: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h2>Payment Partners</h2>
                    <img
                      src="/images/payment.png"
                      className="img-fluid"
                      style={{ width: "300px" }}
                    />
                    <img
                      src="/images/payment2.png"
                      className="img-fluid"
                      style={{ width: "300px" }}
                    />
                  </div>
                  <div className="col-lg-2">
                    <h2>Games</h2>
                    <div className="footer__nav">
                      <ul>
                        <li tabIndex={0}>
                          <a>Cricket</a>
                        </li>
                        <li tabIndex={0}>
                          <a>Football</a>
                        </li>
                        <li tabIndex={0}>
                          <a>Tennis</a>
                        </li>
                        <li tabIndex={0}>
                          <a>Int Casino</a>
                        </li>
                        <li tabIndex={0}>
                          <a>Horse Racing</a>
                        </li>
                        <li tabIndex={0}>
                          <a>Greyhound Racing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <h2>Security &amp; Game Integrity</h2>
                    <div className="securitylogo">
                      <img src="/images/18.png" className="img-fluid" />
                      <img
                        src="/images/responsible-play.png"
                        className="img-fluid"
                      />
                      <p className="mt-3">
                        Powered by
                        <img
                          src="/images/betfair.png"
                          className="img-fluid d-block"
                          style={{ height: "20px" }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <p className="bottom-links">
                      <a>Privacy Policy</a>
                      <a>Disconnection Policy</a>
                      <a>Responsible Gambling</a>
                      <a>Rules &amp; Regulations</a>
                      <a>Exclusion Policy</a>
                      <a>Restricted Territories</a>
                      <a>Terms And Conditions</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
        </main>
        <div>
          <nav className="footer_mobilemenu">
            <a href="dashboard.html">
              <img src="/images/in-play.svg" className="img-fluid" />
              <span>in-play</span>
            </a>
            <a>
              <img src="/images/multi.svg" className="img-fluid" />
              <span>Multi</span>
            </a>

            <a href="home.html" className="active">
              <img src="/images/place.svg" className="img-fluid" />
              <span>Home</span>
            </a>

            <a href="sportbook1.html">
              <img src="/images/icon-casino.svg" className="img-fluid" />
              <span>Casino</span>
            </a>
            <a href="sportbooklive.html">
              <img src="/images/icon-casino.svg" className="img-fluid" />
              <span>ICasino</span>
            </a>
          </nav>
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
