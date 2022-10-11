import { defineStore } from "pinia";
import axios from "axios";

export const useTwitterStore = defineStore("searchApi", {
  state: () => ({
    Search: {
      id: {},
      url: {},
      mediaurl: {},
    },
  }),
  actions: {
    async searchByTweet(tweet) {
      try {
        /*         var { id } = await axios.get(
          `https://api.twitter.com/2/tweets/search/recent?query=${tweet}&start_time=2022-09-11T19:46:00Z&end_time=2022-09-16T19:46:00Z&max_results=10&media.fields=preview_image_url,url,media_key`,
          {
            headers: {
              Autorization:
                "Bearer AAAAAAAAAAAAAAAAAAAAAOwxhAEAAAAApZJAbtqXgO6092ZP33PzipOwtps%3DPEEFdfNgUmpkWvEXeQhgkriXvCtGaMYilxqTa35OkVsvFqxBSs",
            },
          }
        );
        this.Search.id = id[0]; */

        const api = axios.create({
          baseURL: `https://api.twitter.com/2/tweets/search/recent`,
        });

        api.defaults.headers.common["Bearer"] = `${
          import.meta.env.VITE_BEARER_TOKEN
        }`;

        const { data, status } = await api.get(
          `query=${tweet}&start_time=2022-10-04T19:46:00Z&end_time=2022-10-10T19:46:00Z&max_results=10&media.fields=preview_image_url,url,media_key`
        );

        console.log("Data");
        console.log(data);

        /*   this.Search.id = id[0]; */
      } catch (error) {
        throw error;
      }
    },
  },
});
