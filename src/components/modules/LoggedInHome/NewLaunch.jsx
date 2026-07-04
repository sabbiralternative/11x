import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewLaunch = ({ new_launch }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleClick = (item) => {
    if (token) {
      navigate(`/casino/game/${item?.id}`);
    } else {
      toast.error("Please login to play this game");
    }
  };
  return (
    <div className="row d-flex d-md-none new_launch_games">
      <div className="col-12 px-0">
        <h2 className="newlaunchtitle">new launch</h2>
      </div>
      {new_launch?.map((item) => {
        return (
          <div key={item?.id} className="col-3">
            <a onClick={() => handleClick(item)}>
              <img className="img-fluid" src={item?.imgUrl} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NewLaunch;
