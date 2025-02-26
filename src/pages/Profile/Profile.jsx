import { useDispatch, useSelector } from "react-redux";
import useBalance from "../../hooks/balance";
import { useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { setShowLogin } from "../../redux/features/global/globalSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data } = useBalance();

  const navigate = useNavigate();
  const [handleChangePassword] = useChangePasswordMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ password, oldPassword, passVerify }) => {
    const payload = {
      oldPassword,
      password,
      passVerify,
    };
    const data = await handleChangePassword(payload).unwrap();
    if (data.success) {
      toast.success(data?.result?.message);
      localStorage.clear();
      navigate("/home");
      dispatch(setShowLogin(true));
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  return (
    <main id="main" className="main">
      <div className="ng-star-inserted">
        <div className="section profile">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="userscreen-title text-center">
                    <b>profile</b>
                  </h2>
                  <ul>
                    <li>
                      <p>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM2.25 22c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75Z"
                            fill="#fff"
                          />
                        </svg>
                        Username: <b>{user}</b>
                      </p>
                    </li>
                    <li>
                      <p>
                        <svg
                          fill="#fff"
                          height="20px"
                          width="20px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 330 330"
                          xmlSpace="preserve"
                        >
                          <g id="XMLID_229_">
                            <path
                              id="XMLID_230_"
                              d="M329.946,13.925c-0.017-0.237-0.033-0.474-0.061-0.708c-0.029-0.239-0.069-0.476-0.109-0.713    c-0.042-0.252-0.083-0.504-0.138-0.752c-0.049-0.22-0.11-0.436-0.169-0.654c-0.067-0.253-0.134-0.507-0.215-0.754 c-0.07-0.218-0.155-0.432-0.236-0.647c-0.09-0.236-0.176-0.473-0.277-0.703c-0.098-0.225-0.21-0.444-0.32-0.665 c-0.105-0.211-0.207-0.424-0.321-0.629c-0.124-0.223-0.263-0.438-0.398-0.656c-0.123-0.196-0.243-0.393-0.376-0.583 c-0.141-0.204-0.295-0.4-0.447-0.598c-0.15-0.196-0.301-0.391-0.46-0.578c-0.149-0.176-0.31-0.345-0.468-0.515 c-0.186-0.198-0.372-0.393-0.568-0.582c-0.066-0.063-0.123-0.133-0.19-0.195c-0.099-0.091-0.205-0.167-0.305-0.254 c-0.205-0.181-0.413-0.356-0.628-0.526c-0.183-0.144-0.368-0.282-0.557-0.416c-0.206-0.148-0.417-0.291-0.631-0.428 c-0.206-0.132-0.413-0.258-0.624-0.379c-0.21-0.121-0.424-0.235-0.64-0.346c-0.221-0.113-0.442-0.221-0.667-0.321 c-0.221-0.099-0.443-0.191-0.668-0.279c-0.229-0.09-0.459-0.175-0.691-0.253c-0.23-0.077-0.463-0.148-0.697-0.214 c-0.237-0.067-0.476-0.129-0.716-0.184c-0.233-0.054-0.468-0.101-0.705-0.144c-0.253-0.046-0.507-0.084-0.763-0.117 c-0.227-0.029-0.454-0.053-0.684-0.072c-0.274-0.022-0.549-0.035-0.823-0.042C315.262,0.017,315.133,0,315,0h-60 c-8.284,0-15,6.716-15,15s6.716,15,15,15h25.669l-91.085,98.371l-38.978-38.978c-2.882-2.883-6.804-4.448-10.892-4.391 c-4.076,0.078-7.945,1.811-10.717,4.801l-125,134.868c-5.631,6.076-5.271,15.566,0.805,21.198 c2.888,2.676,6.545,3.999,10.193,3.999c4.03,0,8.05-1.615,11.006-4.803L140.41,121.624l38.983,38.983 c2.884,2.884,6.847,4.483,10.895,4.391c4.077-0.078,7.948-1.814,10.718-4.806L300,53.278V75c0,8.284,6.716,15,15,15 c8.284,0,15-6.716,15-15V15c0-0.094-0.012-0.184-0.014-0.277C329.981,14.457,329.965,14.191,329.946,13.925z"
                            />
                            <path
                              id="XMLID_231_"
                              d="M315,300H15c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15 C330,306.716,323.284,300,315,300z"
                            />
                          </g>
                        </svg>
                        P/L: <b>0.00/-</b>
                      </p>
                    </li>
                    <li>
                      <p>
                        <svg
                          fill="#fff"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          id="down-up-arrow"
                          data-name="Flat Line"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon flat-line"
                        >
                          <polyline
                            id="primary"
                            points="19 7 16 4 13 7"
                            style={{
                              fill: "#fff",
                              stroke: "#fff",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                            }}
                          />
                          <polyline
                            id="primary-2"
                            data-name="primary"
                            points="5 17 8 20 11 17"
                            style={{
                              fill: "#fff",
                              stroke: "#fff",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                            }}
                          />
                          <path
                            id="primary-3"
                            data-name="primary"
                            d="M16,4V20M8,20V4"
                            style={{
                              fill: "#fff",
                              stroke: "#fff",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                            }}
                          />
                        </svg>
                        Exposure: <b>{data?.deductedExposure}/-</b>
                      </p>
                    </li>
                    <li>
                      <p>
                        <svg
                          fill="#fff"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22,9V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V18H19.5a.5.5,0,0,0,.5-.5V8h1A1,1,0,0,1,22,9ZM2,15V5A1,1,0,0,1,3,4H17a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H3A1,1,0,0,1,2,15Zm11-5a1,1,0,0,0,1,1h1a1,1,0,0,0,0-2H14A1,1,0,0,0,13,10ZM8,10a2,2,0,1,0,2-2A2,2,0,0,0,8,10ZM4,10a1,1,0,0,0,1,1H6A1,1,0,0,0,6,9H5A1,1,0,0,0,4,10Z" />
                        </svg>
                        Balance:
                        <b className="green">{data?.availBalance}/-</b>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h2 className="userscreen-title text-center">
                    <b>change password</b>
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="changePass ng-untouched ng-pristine ng-invalid"
                  >
                    <div className="form-group">
                      <label htmlFor="currentPassword">OLD PASSWORD</label>
                      <input
                        {...register("oldPassword", { required: true })}
                        type="password"
                        id="currentPassword"
                        placeholder="Current Password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="newPassword">NEW PASSWORD</label>
                      <input
                        {...register("password", {
                          required: true,
                        })}
                        type="password"
                        id="newPassword"
                        placeholder="New Password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="renewPassword">RE-TYPE PASSWORD</label>
                      <input
                        {...register("passVerify", {
                          required: true,
                        })}
                        type="password"
                        id="renewPassword"
                        placeholder="Re-Type New Password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                    <div className="feedback">
                      <p className="small m-0">
                        <i>
                          <b>Note:</b> The New Password field must be at least 6
                          characters
                        </i>
                      </p>
                      <p className="small m-0">
                        <i>
                          <b>Note:</b> The New Password must contain at least: 1
                          uppercase letter, 1 lowercase letter, 1 number
                        </i>
                      </p>
                    </div>
                    <button type="submit" className="btn cp-pass-btn">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
