import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useAccountStatement = (payload) => {
  return useQuery({
    queryKey: ["account-statement", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.accountStatement, payload);

      if (data?.success) {
        return data?.result;
      }
    },
    gcTime: 0,
  });
};
