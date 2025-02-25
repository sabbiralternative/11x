import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import Rules from "../../modals/Rules/Rules";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const [showRules, setShowRules] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Handle logout */
  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <>
      {showRules && <Rules setShowRules={setShowRules} />}
      <div className="ng-star-inserted">
        <aside id="sidebar" className="sidebar">
          <ul id="sidebar-nav" className="sidebar-nav">
            <img className="mobile-logo" src="/src/assets/images/logo.png" />

            <li className="nav-item">
              <Link to="/" className="nav-link final-link">
                <img src="/src/assets/images/menu-home.png" />
                <span>home</span>
              </Link>
            </li>
            <li className="nav-item ng-star-inserted">
              <Link
                to="/multi-market"
                className="nav-link multi-market final-link"
              >
                <img src="/src/assets/images/menu-market.png" />
                <span>Multi Market</span>
              </Link>
            </li>

            <li className="nav-item ng-star-inserted">
              <Link to="/profit-loss" className="nav-link final-link">
                <img
                  src="/src/assets/images/profitloss.svg"
                  className="img-fluid"
                />
                <span>profit &amp; loss</span>
              </Link>
            </li>

            <li className="nav-item ng-star-inserted">
              <Link
                to="/account-statement"
                className="nav-link final-link nmm-active"
              >
                <img
                  src="/src/assets/images/statement.svg"
                  className="img-fluid"
                />
                <span>Account statement</span>
              </Link>
            </li>

            <li className="nav-item ng-star-inserted">
              <Link to="/unsettled-bets" className="nav-link final-link">
                <img src="/src/assets/images/bets.svg" className="img-fluid" />
                <span>unsettled bets</span>
              </Link>
            </li>

            <li onClick={() => setShowRules(true)} className="nav-item">
              <Link className="nav-link final-link">
                <img src="/src/assets/images/terms.svg" className="img-fluid" />
                <span>rules</span>
              </Link>
            </li>
            <li className="nav-item ng-star-inserted">
              <Link to="/edit-stake" className="nav-link final-link">
                <img src="/src/assets/images/edit.svg" className="img-fluid" />
                <span>edit stake</span>
              </Link>
            </li>

            <li className="nav-item ng-star-inserted">
              <Link to="/profile" className="nav-link final-link">
                <img
                  src="/src/assets/images/profile_image.png"
                  className="img-fluid"
                />
                <span>Profile ({user})</span>
              </Link>
            </li>

            <li
              onClick={handleLogout}
              className="nav-item nav-highlight ng-star-inserted"
            >
              <Link className="nav-link final-link">
                <img
                  src="/src/assets/images/logout.svg"
                  className="img-fluid"
                />
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
