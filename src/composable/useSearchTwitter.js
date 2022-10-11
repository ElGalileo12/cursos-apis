import { useSearchTwitter } from "../store/search/twitter";
import { storeToRefs } from "pinia";

export const useSearch = () => {
  const useTwitter = useSearchTwitter(); //Se crea una instancia

  const { search } = storeToRefs(useTwitter);  //como el ref reactividad  solo para getters y state

  return {
    search,
  };
};
