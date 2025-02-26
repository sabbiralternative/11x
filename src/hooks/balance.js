import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosSecure } from "../lib/AxiosSecure";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../api";
import { setShowLogin } from "../redux/features/global/globalSlice";

export const useBalance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  return useQuery({
    queryKey: ["balance"],
    enabled: token ? true : false,
    queryFn: async () => {
      const res = await AxiosSecure.post(API.balance);
      if (res?.data?.success === false && token) {
        localStorage.clear();
        navigate("/home");
        dispatch(setShowLogin(true));
      } else if (res?.data?.success && token) {
        const data = res.data?.result;
        return data;
      }
    },
    refetchInterval: 6000,
  });
};

export default useBalance;
