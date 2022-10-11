<script setup>
import { ref } from "vue";
import { useTwitter } from "../../composable/useApiTwitter";

const { searchByTweet } = useTwitter();

/* const search = (tweetSearch) => {
  console.log(tweetSearch);
}; */

async function search(tweetSearch) {
  try {
    await searchByTweet(tweetSearch);
  } catch (error) {
    console.log(error);
  }
}

var tweet = ref("");
</script>

<template>
  <div
    class="w-3/5 h-24/2 mt-0 p-6 max-w-2/5 bg-blue-400 rounded-lg border border-gray-200 drop-shadow-2xl hover:bg-blue-500"
  >
    <h2 class="relative font-semibold text-xl">
      Escribe el hashtag que quieres buscar:
    </h2>
    <div class="relative flex items-center justify-around my-6">
      <input
        type="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="PLATE"
        required
        v-model="tweet"
      />
      <button
        @click="search(tweet)"
        type="submit"
        class="ml-6 text-white bg-blue-800 hover:bg-blue-200 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Buscar
      </button>
    </div>
  </div>
</template>
