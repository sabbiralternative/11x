import { useNavigate } from "react-router-dom";
import "./CasinoProvider.css";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const CasinoProvider = ({ our_provider }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleClick = (casino) => {
    if (token) {
      navigate(
        `/casino?product=${casino?.product}&category=${casino?.category}`,
      );
    } else {
      toast.error("Please login to play this game");
    }
  };
  return (
    <>
      <div className="extra">
        <div className="bet-table-header">
          <span className="list-sport-title">
            <img
              src="/images/download (1).png"
              className="img-fluid game-icon-img"
            />{" "}
            &nbsp; casino provider{" "}
          </span>
        </div>
        <div className="csn_div">
          {our_provider?.map((item) => {
            return (
              <div
                onClick={() => handleClick(item)}
                key={item?.id}
                className="csn_thumb"
              >
                <img className="img-fluid" src={item?.url_thumb} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CasinoProvider;
