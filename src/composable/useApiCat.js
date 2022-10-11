import { storeToRefs } from "pinia";
import { useCatStore } from "../store/cats/index";

export const useCat = () => {
  const useAleatoryCat = useCatStore();

  const { aleatory, aleatorySome, aleatoryFav } = storeToRefs(useAleatoryCat);
  const { aleatoryCat, someCat, saveCat, seeCat, deleteCat, changeCat } =
    useAleatoryCat;

  return {
    aleatory,
    aleatorySome,
    aleatoryFav,
    aleatoryCat,
    someCat,
    saveCat,
    seeCat,
    deleteCat,
    changeCat,
  };
};
