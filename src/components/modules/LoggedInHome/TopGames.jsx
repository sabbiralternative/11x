import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopGames = ({ top_games }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [slice, setSlice] = useState(4);

  const handleClick = (item) => {
    if (token) {
      navigate(`/casino/game/${item?.id}`);
    } else {
      toast.error("Please login to play this game");
    }
  };
  return (
    <div className="row mx-0 d-flex d-md-none">
      {top_games?.slice(0, slice)?.map((item) => {
        return (
          <div key={item?.id} className="col-3 px-1 mb-1 d-block">
            <a onClick={() => handleClick(item)}>
              <img className="img-fluid" src={item?.imgUrl} />
            </a>
          </div>
        );
      })}

      <div className="col-12">
        <a
          onClick={() => setSlice((prev) => prev + 8)}
          className="btn_allgames more-btn d-block"
        >
          More Games &gt;&gt;
        </a>

        {slice > 4 && (
          <a
            onClick={() => setSlice((prev) => (prev > 4 ? prev - 8 : prev))}
            className="btn_allgames less-btn d-block"
          >
            &lt;&lt; Less Games
          </a>
        )}
      </div>
    </div>
  );
};

export default TopGames;
