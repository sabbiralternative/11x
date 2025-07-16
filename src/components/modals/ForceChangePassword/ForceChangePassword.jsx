import { useDispatch } from "react-redux";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  setForceChangePassword,
  setShowLogin,
} from "../../../redux/features/global/globalSlice";

const ForceChangePassword = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [handleChangePassword] = useChangePasswordMutation();

  const onSubmit = async ({ password, oldPassword, passVerify }) => {
    const payload = {
      oldPassword,
      password,
      passVerify,
    };
    const data = await handleChangePassword(payload).unwrap();
    if (data.success) {
      localStorage.removeItem("changePassword");
      toast.success(data?.result?.message);
      localStorage.clear();
      closeForceChangePassword();
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  const closeForceChangePassword = () => {
    dispatch(setForceChangePassword(false));
    dispatch(setShowLogin(true));
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
        <div className="modal-content">
          <div className="modal-body">
            <button
              onClick={closeForceChangePassword}
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
                        Old Password
                      </label>
                      <input
                        {...register("oldPassword", { required: true })}
                        type="password"
                        placeholder="Current Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        New Password
                      </label>
                      <input
                        {...register("password", {
                          required: true,
                        })}
                        type="password"
                        id="newPassword"
                        placeholder="New Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        RE-TYPE PASSWORD
                      </label>
                      <input
                        {...register("passVerify", {
                          required: true,
                        })}
                        type="password"
                        id="renewPassword"
                        placeholder="Re-Type New Password"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                    </div>

                    <button
                      style={{ marginBottom: "1px" }}
                      type="submit"
                      className="btn btn-login"
                    >
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

export default ForceChangePassword;
