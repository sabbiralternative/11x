import { useEffect, useState } from "react";
import img from "../../../assets/img";
import DesktopBetSlip from "./BetSlip/DesktopBetSlip";
import { useAccessTokenMutation } from "../../../redux/features/casino/casino.api";
import { useParams } from "react-router-dom";

const RightSidebar = () => {
  const { eventTypeId, eventId } = useParams();
  const [showIFrame, setShowIFrame] = useState(false);
  const [getIFrame, { data: IFrame }] = useAccessTokenMutation();

  useEffect(() => {
    if (showIFrame) {
      const payload = {
        eventTypeId,
        eventId,
        type: "video",
      };
      getIFrame(payload);
    }
  }, [eventId, eventTypeId, getIFrame, showIFrame]);
  return (
    <div
      id="sidebar-right"
      className="col-md-12 col-lg-4 detail-right-column d-none d-lg-block"
    >
      <div className="card mb-1 ng-star-inserted">
        <div
          onClick={() => setShowIFrame((prev) => !prev)}
          className="card-header game-heading"
        >
          <span className="card-header-title"> Live Stream </span>
          <span className="float-right">
            <a
              aria-controls="collapseBasic"
              className="icon-livestream"
              aria-expanded="false"
            >
              <img src={img.tv} alt="" />
            </a>
          </span>
        </div>
        <div className="card-body p-0 ng-star-inserted">
          <div id="collapseBasic" aria-hidden="true" className="collapse show">
            {showIFrame && IFrame?.result?.url && (
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  height: "auto",
                  paddingBottom: "56.25%",
                }}
                className="embed-responsive embed-responsive-16by9 ng-star-inserted"
              >
                <iframe
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "0px",
                    position: "absolute",
                    left: "0",
                    top: "0",
                  }}
                  id="tvStr"
                  className="embed-responsive-item w-100"
                  src={IFrame?.result?.url}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      <DesktopBetSlip />
    </div>
  );
};

export default RightSidebar;
