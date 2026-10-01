import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API, Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { Fragment, useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import useWhatsApp from "../../../hooks/whatsapp";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import {
  setBanner,
  setShowLogin,
  setShowRegister,
} from "../../../redux/features/global/globalSlice";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";
import { FaMobileAlt, FaRegUser } from "react-icons/fa";
// import getOtpOnWhatsapp from "../../../utils/getOtpOnWhatsapp";

const Register = () => {
  const [tab, setTab] = useState(
    Settings.registration_mobile ? "mobile" : "username",
  );
  const { getLanguage } = useLanguage();
  const affnook_token = localStorage.getItem("affnook_token");
  const registerRef = useRef();
  const dispatch = useDispatch();
  const referralCode = localStorage.getItem("referralCode");
  const { refetch } = useWhatsApp();

  const [userData, setUserData] = useState({
    password: "",
    confirmPassword: "",
    mobileNo: "",
    otp: "",
    referralCode: "",
  });

  useCloseModalClickOutside(registerRef, () => {
    closeRegister();
  });

  const closeRegister = () => {
    dispatch(setShowRegister(false));
    dispatch(setShowLogin(false));
  };
  const handleShowLogin = () => {
    dispatch(setShowRegister(false));
    dispatch(setShowLogin(true));
  };

  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    orderId: "",
    otpMethod: "",
  });

  /* Handle register */
  const onSubmit = async () => {
    if (
      userData?.password !== userData?.confirmPassword &&
      userData?.confirmPassword?.length > 0
    ) {
      return toast.error("Password did not match !");
    } else if (userData?.password === "") {
      return toast.error("Password is required !");
    } else if (userData?.confirmPassword === "") {
      return toast.error("Confirm password is required !");
    } else if (userData?.mobileNo === "") {
      toast.error("Mobile no is required !");
    } else if (
      userData?.mobileNo?.length > 10 ||
      userData?.mobileNo?.length < 10
    ) {
      return toast.error("Enter ten digit mobile no !");
    } else if (userData?.otp === "") {
      return toast.error("OTP is required");
    } else if (userData?.otp?.length > 4 || userData?.otp?.length < 4) {
      return toast.error("Enter four digit OTP no");
    } else {
      const registerData = {
        username: userData?.username,
        password: userData?.password,
        confirmPassword: userData?.confirmPassword,
        mobile: userData?.mobileNo,
        otp: userData?.otp,
        referralCode: referralCode || userData.referralCode,
        orderId: order.orderId,
        otpMethod: order.otpMethod,
        affnook_token: affnook_token || null,
        registration_mobile: Settings.registration_mobile,
        registration_username: Settings.registration_username,
      };

      const { data } = await AxiosSecure.post(API.register, registerData);
      if (data?.success) {
        refetch();
        const token = data?.result?.token;
        const bonusToken = data?.result?.bonusToken;
        const user = data?.result?.loginName;
        const game = data?.result?.buttonValue?.game;
        const memberId = data?.result?.memberId;
        const banner = data?.result?.banner;
        dispatch(setUser({ user, token }));
        localStorage.setItem("memberId", memberId);
        localStorage.setItem("buttonValue", JSON.stringify(game));
        localStorage.setItem("token", token);
        localStorage.setItem("bonusToken", bonusToken);
        localStorage.setItem("token", data.result.token);
        if (banner) {
          dispatch(setBanner(banner));
        }
        if (data?.result?.changePassword === true) {
          navigate("/change-password-login");
        } else {
          toast.success(data?.result?.message);
          navigate("/");
        }
      } else {
        toast.error(data?.error?.description);
      }
    }
  };

  /* Get whats app api */
  const getOtp = async () => {
    const otpData = {
      mobile: userData?.mobileNo,
    };

    const res = await AxiosSecure.post(API.otp, otpData);
    const data = res.data;

    if (data?.success) {
      setOrder({
        orderId: data?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  const getOtpOnWhatsapp = async () => {
    const otpData = {
      mobile: userData?.mobileNo,
      type: "otpsend",
    };

    const res = await AxiosSecure.post(API.otpless, otpData);
    const data = res.data;

    if (data?.success) {
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  // const handleGetOtpOnWhatsapp = async () => {
  //   await getOtpOnWhatsapp(userData.mobileNo, setOrder, setShowRegister);
  // };

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
        <div className="modal-content" ref={registerRef}>
          <div className="modal-body">
            <button
              onClick={closeRegister}
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
                    className="login-form ng-dirty ng-touched ng-valid "
                  >
                    {Settings.registration_mobile &&
                      Settings.registration_username && (
                        <div
                          style={{
                            width: "100%",
                            background:
                              "color-mix(in srgb, var(--primary-color) 30%, transparent)",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <div
                              onClick={() => setTab("mobile")}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "5px",
                                width: "100%",
                                gap: "6px",
                                color: "white",
                                background:
                                  tab === "mobile"
                                    ? "var(--primary-color)"
                                    : undefined,
                              }}
                            >
                              <FaMobileAlt />

                              <span>{getLanguage(LanguageKey.BY_PHONE)}</span>
                            </div>

                            <div
                              onClick={() => setTab("username")}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "5px",
                                width: "100%",
                                gap: "6px",
                                color: "white",
                                background:
                                  tab === "username"
                                    ? "var(--primary-color)"
                                    : undefined,
                              }}
                            >
                              <FaRegUser />

                              <span>
                                {getLanguage(LanguageKey.BY_USERNAME)}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                    {tab === "mobile" && Settings.registration_mobile && (
                      <Fragment>
                        <div className="form-group">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="text-uppercase"
                          >
                            {getLanguage(LanguageKey.MOBILE_NUMBER)}
                          </label>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <select
                              style={{
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                padding: "10px 2px",
                                color: "white",
                              }}
                              id="dropdown-phone-button"
                              className="rounded-l-lg border py-1.5 bg-auth px-3"
                            >
                              {Settings.country_code?.map((item) => {
                                return (
                                  <option key={item} value={item}>
                                    {item}
                                  </option>
                                );
                              })}
                            </select>
                            <input
                              style={{
                                borderTopLeftRadius: "0px",
                                borderBottomLeftRadius: "0px",
                              }}
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  mobileNo: e.target.value,
                                })
                              }
                              type="text"
                              placeholder="Enter Mobile No."
                              className="form-control ng-dirty ng-valid ng-touched"
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          {Settings.otp_method?.includes("sms") && (
                            <button
                              style={{ fontSize: "12px" }}
                              onClick={getOtp}
                              type="button"
                              className="btn btn-login"
                            >
                              {" "}
                              {getLanguage(LanguageKey.GET_OTP_ON_MESSAGE)}
                            </button>
                          )}
                          {Settings.otp_method?.includes("whatsapp") && (
                            <button
                              onClick={getOtpOnWhatsapp}
                              type="button"
                              className="btn btn-login"
                              style={{ fontSize: "12px" }}
                            >
                              {" "}
                              {getLanguage(LanguageKey.GET_OTP_ON_WHATSAPP)}
                            </button>
                          )}
                        </div>
                      </Fragment>
                    )}

                    {tab === "username" && Settings.registration_username && (
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="text-uppercase"
                        >
                          {getLanguage(LanguageKey.USERNAME)}
                        </label>
                        <input
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              username: e.target.value,
                            });
                          }}
                          type="text"
                          placeholder="Enter Username"
                          className="form-control ng-dirty ng-valid ng-touched"
                          maxLength={6}
                        />
                      </div>
                    )}

                    {/* {Settings.otpWhatsapp && (
                      <button
                        onClick={handleGetOtpOnWhatsapp}
                        disabled={userData?.mobileNo?.length < 10}
                        type="button"
                        className="btn btn-login"
                      >
                        {" "}
                        Get OTP on Whatsapp
                      </button>
                    )} */}
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        {getLanguage(LanguageKey.PASSWORD)}
                      </label>
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            password: e.target.value,
                          });
                        }}
                        type="password"
                        placeholder="Enter Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        {getLanguage(LanguageKey.CONFIRM_PASSWORD)}
                      </label>
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            confirmPassword: e.target.value,
                          });
                        }}
                        type="password"
                        placeholder="Enter Confirm Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    {tab === "mobile" && Settings.registration_mobile && (
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="text-uppercase"
                        >
                          {getLanguage(LanguageKey.OTP)}
                        </label>
                        <input
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              otp: e.target.value,
                            });
                          }}
                          type="text"
                          placeholder="Enter OTP"
                          className="form-control ng-dirty ng-valid ng-touched"
                          maxLength={6}
                        />
                      </div>
                    )}

                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        {getLanguage(LanguageKey.REFERRAL_CODE)}
                      </label>
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            referralCode: e.target.value,
                          });
                        }}
                        type="password"
                        placeholder="Enter Referral Code"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <div
                      onClick={handleShowLogin}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <span>
                        {getLanguage(LanguageKey.ALREADY_HAVE_AN_ACCOUNT)}?{" "}
                        {getLanguage(LanguageKey.LOGIN)}{" "}
                      </span>
                    </div>
                    <button type="submit" className="btn btn-login">
                      {" "}
                      {getLanguage(LanguageKey.REGISTER)}
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

export default Register;
