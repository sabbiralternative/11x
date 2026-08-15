import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import { useRef, useState } from "react";
import Rules from "../../modals/Rules/Rules";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import useLogo from "../../../hooks/useLogo";
// import Referral from "../../modals/Referral/Referral";
import useWhatsApp from "../../../hooks/whatsapp";
import img from "../../../assets/img";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const Sidebar = ({ setIsOpenSidebar }) => {
  const { getLanguage } = useLanguage();
  const { closePopupForForever } = useSelector((state) => state.global);
  const { data: socialLink } = useWhatsApp();
  // const [showReferral, setShowReferral] = useState(false);
  const { logo } = useLogo();
  const sidebarRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const [showRules, setShowRules] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useCloseModalClickOutside(sidebarRef, () => {
    setIsOpenSidebar(false);
  });

  /* Handle logout */
  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
  };

  const navigateWhatsApp = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {showRules && <Rules setShowRules={setShowRules} />}
      <div className="a23_css">
        {/* {showReferral && <Referral setShowReferral={setShowReferral} />} */}
      </div>
      <div className="ng-star-inserted">
        <aside ref={sidebarRef} id="sidebar" className="sidebar">
          <ul id="sidebar-nav" className="sidebar-nav">
            <img className="mobile-logo" src={logo} />

            <li onClick={() => setIsOpenSidebar(false)} className="nav-item">
              <Link to="/" className="nav-link final-link">
                <img src="/images/menu-home.png" />
                <span> {getLanguage(LanguageKey.HOME)}</span>
              </Link>
            </li>
            <li onClick={() => setIsOpenSidebar(false)} className="nav-item">
              <Link to="/deposit" className="nav-link final-link">
                <img src={img.profileWallet} />
                <span>{getLanguage(LanguageKey.DEPOSIT)}</span>
              </Link>
            </li>
            <li onClick={() => setIsOpenSidebar(false)} className="nav-item">
              <Link to="/withdraw" className="nav-link final-link">
                <img src={img.profileWallet} />
                <span>{getLanguage(LanguageKey.WITHDRAW)}</span>
              </Link>
            </li>
            <li onClick={() => setIsOpenSidebar(false)} className="nav-item">
              <Link
                to="/deposit-withdraw-report"
                className="nav-link final-link"
              >
                <img src={img.profileWallet} />
                <span>{getLanguage(LanguageKey.DEPOSIT_WITHDRAW_REPORT)}</span>
              </Link>
            </li>

            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/betting-profit-loss" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>{getLanguage(LanguageKey.PROFIT_LOSS)}</span>
              </Link>
            </li>

            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/my-bank-details" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>{getLanguage(LanguageKey.MY_BANK_DETAILS)}</span>
              </Link>
            </li>
            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/bonus-statement" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>{getLanguage(LanguageKey.BONUS_STATEMENT)}</span>
              </Link>
            </li>
            {socialLink?.referral && (
              <li
                onClick={() => {
                  setIsOpenSidebar(false);
                }}
                className="nav-item ng-star-inserted"
              >
                <Link to="/affiliate" className="nav-link final-link">
                  <img src={img.bettingProfitLoss} className="img-fluid" />
                  <span>{getLanguage(LanguageKey.AFFILIATE)}</span>
                </Link>
              </li>
            )}

            <li
              onClick={() => {
                setIsOpenSidebar(false);
              }}
              className="nav-item ng-star-inserted"
            >
              <Link to="/promotions" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>{getLanguage(LanguageKey.PROMOTION_AND_BONUSES)}</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setIsOpenSidebar(false);
              }}
              className="nav-item ng-star-inserted"
            >
              <Link to="/lossback-bonus" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>{getLanguage(LanguageKey.LOSSBACK_BONUS)}</span>
              </Link>
            </li>
            {closePopupForForever && (
              <li
                onClick={() => {
                  setIsOpenSidebar(false);
                }}
                className="nav-item ng-star-inserted"
              >
                <Link to="/app-only-bonus" className="nav-link final-link">
                  <img src={img.bettingProfitLoss} className="img-fluid" />
                  <span>{getLanguage(LanguageKey.APP_ONLY_BONUS)}</span>
                </Link>
              </li>
            )}

            {/* <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/referral-statement" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>Referral Statement</span>
              </Link>
            </li> */}

            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/unsettled-bets" className="nav-link final-link">
                <img src="/images/bets.svg" className="img-fluid" />
                <span>{getLanguage(LanguageKey.OPEN_BETS)}</span>
              </Link>
            </li>

            <li
              onClick={() => {
                setShowRules(true);
                setIsOpenSidebar(false);
              }}
              className="nav-item"
            >
              <Link className="nav-link final-link">
                <img src="/images/terms.svg" className="img-fluid" />
                <span>{getLanguage(LanguageKey.RULES)}</span>
              </Link>
            </li>
            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/edit-stake" className="nav-link final-link">
                <img src="/images/edit.svg" className="img-fluid" />
                <span>{getLanguage(LanguageKey.STAKE_SETTING)}</span>
              </Link>
            </li>

            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/profile" className="nav-link final-link">
                <img src="/images/profile_image.png" className="img-fluid" />
                <span>
                  {getLanguage(LanguageKey.PROFILE)} ({user})
                </span>
              </Link>
            </li>
            {socialLink?.whatsapplink && (
              <li
                onClick={() => {
                  navigateWhatsApp(socialLink?.whatsapplink);
                  setIsOpenSidebar(false);
                }}
                className="nav-item ng-star-inserted"
              >
                <a className="nav-link final-link">
                  <img src={img.whatsapp} className="img-fluid" />
                  <span>{getLanguage(LanguageKey.ALL_SUPPORT)} </span>
                </a>
              </li>
            )}
            {socialLink?.branchWhatsapplink && (
              <li
                onClick={() => {
                  navigateWhatsApp(socialLink?.branchWhatsapplink);
                  setIsOpenSidebar(false);
                }}
                className="nav-item ng-star-inserted"
              >
                <a className="nav-link final-link">
                  <img src={img.whatsapp} className="img-fluid" />
                  <span>{getLanguage(LanguageKey.CUSTOMER_SUPPORT)} </span>
                </a>
              </li>
            )}

            <li
              onClick={handleLogout}
              className="nav-item nav-highlight ng-star-inserted"
            >
              <Link className="nav-link final-link">
                <img src="/images/logout.svg" className="img-fluid" />
                <span>{getLanguage(LanguageKey.LOGOUT)}</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
