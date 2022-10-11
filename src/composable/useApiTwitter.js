import { useTwitterStore } from "../store/search/axiosTwitter";
import { storeToRefs } from "pinia";

export const useTwitter = () => {
  const searchApi = useTwitterStore();
  const { searchByTweet } = searchApi;

  const { Search } = storeToRefs(searchApi);

  return { Search, searchByTweet };
};
