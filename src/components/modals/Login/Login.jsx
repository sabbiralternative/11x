import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import {
  setBanner,
  setForceChangePassword,
  setShowForgotPassword,
  setShowLogin,
  setShowRegister,
} from "../../../redux/features/global/globalSlice";

const Login = () => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const loginRef = useRef();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  useCloseModalClickOutside(loginRef, () => {
    closeLoginModal();
  });

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
    };
    const data = await handleLogin(loginData).unwrap();

    if (data.success) {
      const token = data?.result?.token;
      const bonusToken = data?.result?.bonusToken;
      const user = data?.result?.loginName;
      const game = data?.result?.buttonValue?.game;
      const memberId = data?.result?.memberId;
      console.log(data);
      dispatch(setUser({ user, token }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      const banner = data?.result?.banner;

      if (banner) {
        dispatch(setBanner(banner));
      }
      if (data?.result?.changePassword) {
        localStorage.setItem("changePassword", true);
        closeLoginModal();
        dispatch(setForceChangePassword(true));
      } else {
        closeLoginModal();
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(data?.error);
    }
  };

  const closeLoginModal = () => {
    dispatch(setShowLogin(false));
  };

  const showRegister = () => {
    dispatch(setShowLogin(false));
    dispatch(setShowRegister(true));
  };
  const showForgotPassword = () => {
    dispatch(setShowLogin(false));
    dispatch(setShowForgotPassword(true));
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
        <div className="modal-content" ref={loginRef}>
          <div className="modal-body">
            <button
              onClick={closeLoginModal}
              type="button"
              aria-label="Close"
              className="close pull-right"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div>
              <div>
                <div className="modal-body">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="login-form ng-dirty ng-touched ng-valid"
                  >
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="text-uppercase"
                      >
                        Username
                      </label>
                      <input
                        {...register("username", { required: true })}
                        type="text"
                        placeholder="Username"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        Password
                      </label>
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          defaultChecked
                          type="checkbox"
                          className="form-check-input"
                        />
                        <span>Remember Me?</span>
                      </label>
                    </div>
                    <button
                      style={{ marginBottom: "1px" }}
                      type="submit"
                      className="btn btn-login"
                    >
                      Log In
                    </button>
                    <div
                      onClick={showForgotPassword}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <span>Forgot Password?</span>
                    </div>
                    <button
                      style={{ marginTop: "10px" }}
                      onClick={showRegister}
                      className="btn btn-login"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
