import { useNavigate } from "react-router-dom";

const CasinoThumbnail = ({ casinoData }) => {
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    navigate(
      `/casino/${casino?.name?.replace(/ /g, "")}/${casino?.event_type_id}`
    );
  };
  return (
    <>
      {casinoData?.map((casino) => {
        return (
          <div
            onClick={() => handleNavigateToIFrame(casino)}
            key={casino?.id}
            className="col-md-2 col-4 ng-star-inserted"
          >
            <div className="d-inline-block casinoicons">
              <img
                className="img-fluid"
                alt="Dragon Tiger"
                src={casino?.url_thumb}
              />
              <div className="casino-name"> {casino?.name}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CasinoThumbnail;
