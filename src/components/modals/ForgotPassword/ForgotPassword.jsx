import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

import {
  setShowForgotPassword,
  setShowLogin,
} from "../../../redux/features/global/globalSlice";
import {
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../../redux/features/auth/authApi";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const forgotPasswordRef = useRef();
  const navigate = useNavigate();
  const [handleForgotPassword] = useForgotPasswordMutation();
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState({});
  const [getOTP] = useGetOtpMutation();
  const { register, handleSubmit } = useForm();
  useCloseModalClickOutside(forgotPasswordRef, () => {
    closeForgotPassword();
  });

  const closeForgotPassword = () => {
    dispatch(setShowForgotPassword(false));
    dispatch(setShowLogin(false));
  };

  const handleMobileInputChange = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const handleOTP = async () => {
    if (mobile.length > 0) {
      const res = await getOTP({ mobile }).unwrap();

      if (res?.success) {
        setOTP({
          orderId: res?.result?.orderId,
          otpMethod: "sms",
        });
        toast.success(res?.result?.message);
      } else {
        toast.error(res?.error?.errorMessage);
      }
    }
  };

  const onSubmit = async (data) => {
    const forgotPasswordData = {
      username: mobile,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      orderId: OTP.orderId,
      otpMethod: OTP.otpMethod,
    };

    const result = await handleForgotPassword(forgotPasswordData).unwrap();
    if (result.success) {
      toast.success(result?.message);
      navigate("/login");
    } else {
      toast.error(result?.error?.loginName?.[0]?.description);
    }
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
        <div className="modal-content" ref={forgotPasswordRef}>
          <div className="modal-body">
            <button
              onClick={closeForgotPassword}
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
                        Mobile No
                      </label>
                      <input
                        onChange={(e) => handleMobileInputChange(e)}
                        type="text"
                        placeholder="Enter Mobile No."
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <button
                      onClick={handleOTP}
                      type="button"
                      className="btn btn-login"
                    >
                      {" "}
                      Get OTP
                    </button>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        OTP
                      </label>
                      <input
                        {...register("otp", { required: true })}
                        type="text"
                        placeholder="Enter OTP"
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
                        placeholder="Enter Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        Confirm Password
                      </label>
                      <input
                        {...register("confirmPassword", { required: true })}
                        type="password"
                        placeholder="Enter Confirm Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>

                    <button type="submit" className="btn btn-login">
                      {" "}
                      Change Password
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

export default ForgotPassword;
