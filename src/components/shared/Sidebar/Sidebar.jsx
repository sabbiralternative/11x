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

const Sidebar = ({ setIsOpenSidebar }) => {
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
                <span>home</span>
              </Link>
            </li>
            <li onClick={() => setIsOpenSidebar(false)} className="nav-item">
              <Link to="/deposit" className="nav-link final-link">
                <img src={img.profileWallet} />
                <span>deposit</span>
              </Link>
            </li>
            <li onClick={() => setIsOpenSidebar(false)} className="nav-item">
              <Link to="/withdraw" className="nav-link final-link">
                <img src={img.profileWallet} />
                <span>withdraw</span>
              </Link>
            </li>
            <li onClick={() => setIsOpenSidebar(false)} className="nav-item">
              <Link
                to="/deposit-withdraw-report"
                className="nav-link final-link"
              >
                <img src={img.profileWallet} />
                <span>Deposit Withdraw Report</span>
              </Link>
            </li>

            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/betting-profit-loss" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>profit &amp; loss</span>
              </Link>
            </li>

            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/my-bank-details" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>My Bank Details</span>
              </Link>
            </li>
            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/bonus-statement" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>Bonus Statement</span>
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
                  <span>Affiliate</span>
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
                <span>Promos & Bonus</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setIsOpenSidebar(false);
              }}
              className="nav-item ng-star-inserted"
            >
              <Link to="/loss-back-claims" className="nav-link final-link">
                <img src={img.bettingProfitLoss} className="img-fluid" />
                <span>Loss Back Claims</span>
              </Link>
            </li>
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
                <span>unsettled bets</span>
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
                <span>rules</span>
              </Link>
            </li>
            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/edit-stake" className="nav-link final-link">
                <img src="/images/edit.svg" className="img-fluid" />
                <span>edit stake</span>
              </Link>
            </li>

            <li
              onClick={() => setIsOpenSidebar(false)}
              className="nav-item ng-star-inserted"
            >
              <Link to="/profile" className="nav-link final-link">
                <img src="/images/profile_image.png" className="img-fluid" />
                <span>Profile ({user})</span>
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
                  <span>All Support </span>
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
                  <span>Deposit Support </span>
                </a>
              </li>
            )}

            <li
              onClick={handleLogout}
              className="nav-item nav-highlight ng-star-inserted"
            >
              <Link className="nav-link final-link">
                <img src="/images/logout.svg" className="img-fluid" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
