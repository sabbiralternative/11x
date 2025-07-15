import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { setBanner } from "../../../redux/features/global/globalSlice";

const Banner = () => {
  const { banner } = useSelector((state) => state.global);
  const ref = useRef();
  const dispatch = useDispatch();

  useCloseModalClickOutside(ref, () => {
    closeLoginModal();
  });

  const closeLoginModal = () => {
    dispatch(setBanner(null));
  };

  return (
    <div
      role="dialog"
      aria-labelledby="dialog-login-name"
      className="modal fade login-popup in show"
      aria-hidden="false"
      aria-modal="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content" ref={ref}>
          <div className="modal-body" style={{ padding: 0 }}>
            <button
              style={{ zIndex: 1000 }}
              onClick={closeLoginModal}
              type="button"
              aria-label="Close"
              className="close pull-right"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div>
              <div>
                <div className="modal-body" style={{ padding: 0 }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                    src={banner}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
