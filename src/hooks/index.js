import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useGetIndex = (payload, enabled) => {
  return useQuery({
    queryKey: ["index", payload],
    enabled: enabled ? true : false,
    queryFn: async () => {
      const res = await AxiosSecure.post(API.index, payload);
      const result = res?.data;
      if (result?.success) {
        return result?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
};

export default useGetIndex;
