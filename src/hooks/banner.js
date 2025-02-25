import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useBannerImage = () => {
  return useQuery({
    queryKey: ["bannerImage"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.banner);
      const data = res?.data;
      if (data?.success) {
        return data?.result?.homepage;
      }
    },
  });
};

export default useBannerImage;
