import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useLotusHomeLobby = (payload) => {
  const {
    data: lotusLobby,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: [`lotusHomeLobby`, payload],
    queryFn: async () => {
      const res = await AxiosSecure.post(`${API.lotusHomeLobby}`, payload);

      return res?.data;
    },
    refetchOnWindowFocus: false,
  });
  return { lotusLobby, isLoading, isSuccess };
};

export default useLotusHomeLobby;
