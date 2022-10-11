import { defineStore } from "pinia";
import axios from "axios";

export const useCatStore = defineStore("catApi", {
  state: () => ({
    aleatory: {
      cat: {
        url: {},
        id: {},
      },
    },
    aleatorySome: {
      cat: {
        urls: {},
        id: {},
      },
    },
    aleatoryFav: {
      cats: [],
    },
  }),
  actions: {
    async aleatoryCat() {
      const url = `https://api.thecatapi.com/v1/images/search`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.aleatory.cat.url = data[0].url;
          this.aleatory.cat.id = data[0].id;
        });
    },
    async someCat() {
      const url = `https://api.thecatapi.com/v1/images/search?limit=3`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          var dates = [];
          var datesid = [];
          for (let i = 0; i < 3; i++) {
            dates.push(data[i].url);
            datesid.push(data[i].id);
          }
          this.aleatorySome.cat.urls = dates;
          this.aleatorySome.cat.id = datesid;
        });
    },
    async saveCat(id) {
      /*       const api = axios.create({
        baseURL: "https://api.thecatapi.com/v1",
      });

      api.defaults.headers.common["X-API-KEY"] = `${
        import.meta.env.VITE_APIKEY_CATS
      }`;

      const { data, status } = await api.post("/favourites", {
        image_id: id,
      }); */

      const url = `https://api.thecatapi.com/v1/favourites`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": `${import.meta.env.VITE_APIKEY_CATS}`,
        },
        body: JSON.stringify({
          image_id: id,
        }),
      });
      const data = await res.json();

      if (res.status !== 200) {
        spanError.innerHTML =
          "Hubo un error: " + res.status + " " + data.message;
      } else {
        console.log("Save");
        console.log(data);
        this.seeCat();
      }
    },
    async seeCat() {
      const url = `https://api.thecatapi.com/v1/favourites`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-API-KEY": `${import.meta.env.VITE_APIKEY_CATS}`,
        },
      });
      const data = await res.json();

      console.log("Favoritos");
      console.log(data);
      this.aleatoryFav.cats = data;
    },
    async deleteCat(id) {
      const url = `https://api.thecatapi.com/v1/favourites/${id}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "X-API-KEY": `${import.meta.env.VITE_APIKEY_CATS}`,
        },
      });
      const data = await res.json();
      try {
        this.aleatoryFav.cats = this.aleatoryFav.cats.filter(
          (cat) => cat.id != id
        );
      } catch (error) {
        throw error;
      }

      if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
      } else {
        console.log("Michi eliminado de favoritos");
      }
    },
    async changeCat(formData) {
      const url = `https://api.thecatapi.com/v1/images/upload`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "X-API-KEY": `${import.meta.env.VITE_APIKEY_CATS}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (res.status !== 201) {
        spanError.innerHTML =
          "Hubo un error: " + res.status + " " + data.message;
      } else {
        console.log("Load");
        console.log({ data });
        console.log(data.url);
        this.saveCat(data.id);
      }
    },
  },
});
