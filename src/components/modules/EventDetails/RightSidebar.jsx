import DesktopBetSlip from "./BetSlip/DesktopBetSlip";

const RightSidebar = () => {
  return (
    <div
      id="sidebar-right"
      className="col-md-12 col-lg-4 detail-right-column d-none d-lg-block"
    >
      <DesktopBetSlip />
    </div>
  );
};

export default RightSidebar;
