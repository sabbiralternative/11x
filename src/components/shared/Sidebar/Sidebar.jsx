import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Handle logout */
  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <div className="ng-star-inserted">
      <aside id="sidebar" className="sidebar">
        <ul id="sidebar-nav" className="sidebar-nav">
          <img className="mobile-logo" src="/src/assets/images/logo.png" />

          <li className="nav-item">
            <a href="dashboard.html" className="nav-link final-link">
              <img src="/src/assets/images/menu-home.png" />
              <span>home</span>
            </a>
          </li>
          <li className="nav-item ng-star-inserted">
            <a
              href="multimarket.html"
              className="nav-link multi-market final-link"
            >
              <img src="/src/assets/images/menu-market.png" />
              <span>Multi Market</span>
            </a>
          </li>

          <li className="nav-item ng-star-inserted">
            <a href="profitandLoss.html" className="nav-link final-link">
              <img
                src="/src/assets/images/profitloss.svg"
                className="img-fluid"
              />
              <span>profit &amp; loss</span>
            </a>
          </li>

          <li className="nav-item ng-star-inserted">
            <a href="Account.html" className="nav-link final-link nmm-active">
              <img
                src="/src/assets/images/statement.svg"
                className="img-fluid"
              />
              <span>Account statement</span>
            </a>
          </li>

          <li className="nav-item ng-star-inserted">
            <a href="unsettledbets.html" className="nav-link final-link">
              <img src="/src/assets/images/bets.svg" className="img-fluid" />
              <span>unsettled bets</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="rules.html" className="nav-link final-link">
              <img src="/src/assets/images/terms.svg" className="img-fluid" />
              <span>rules</span>
            </a>
          </li>
          <li className="nav-item ng-star-inserted">
            <a href="editstake.html" className="nav-link final-link">
              <img src="/src/assets/images/edit.svg" className="img-fluid" />
              <span>edit stake</span>
            </a>
          </li>

          <li className="nav-item ng-star-inserted">
            <a href="profile.html" className="nav-link final-link">
              <img
                src="/src/assets/images/profile_image.png"
                className="img-fluid"
              />
              <span>Profile (Demo123)</span>
            </a>
          </li>

          <li
            onClick={handleLogout}
            className="nav-item nav-highlight ng-star-inserted"
          >
            <a className="nav-link final-link">
              <img src="/src/assets/images/logout.svg" className="img-fluid" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
