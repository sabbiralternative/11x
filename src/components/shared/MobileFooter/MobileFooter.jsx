const MobileFooter = () => {
  return (
    <div>
      <nav className="footer_mobilemenu">
        <a href="dashboard.html" className="active">
          <img src="/src/assets/images/in-play.svg" className="img-fluid" />
          <span>in-play</span>
        </a>
        <a href="javascript:void(0)">
          <img src="/src/assets/images/multi.svg" className="img-fluid" />
          <span>Multi</span>
        </a>
        <a href="dashboard.html" className="ng-star-inserted">
          <img src="/src/assets/images/place.svg" className="img-fluid" />
          <span>Home</span>
        </a>

        <a href="https://11xplay.com/sports/99999">
          <img src="/src/assets/images/icon-casino.svg" className="img-fluid" />
          <span>Casino</span>
        </a>
        <a href="https://11xplay.com/sports/99998">
          <img src="/src/assets/images/icon-casino.svg" className="img-fluid" />
          <span>ICasino</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileFooter;
