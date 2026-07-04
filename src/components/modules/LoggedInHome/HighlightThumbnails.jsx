import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HighlightThumbnails = ({ highlight_casino }) => {
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
    <div className="row d-flex d-md-none highlights_games">
      {highlight_casino?.map((item) => {
        return (
          <div
            key={item?.id}
            className="col-3 position-relative"
            style={{ paddingRight: "4px", paddingLeft: "0px" }}
          >
            <a onClick={() => handleClick(item)}>
              <img className="img-fluid" src={item?.url_thumb} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightThumbnails;
