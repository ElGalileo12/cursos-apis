<script setup>
import { useCat } from "../../composable/useApiCat";
const { aleatory, aleatoryCat } = useCat();
</script>

<template>
  <section class="flex flex-col justify-center items-center">
    <h1 class="mt-10">Api del michi</h1>
    <img
      :src="aleatory.cat.url"
      alt="Aquí habrá un michi"
      style="width: 50%; height: 50%"
    />
    <button
      class="text-gray-900 mt-10 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      @click="aleatoryCat()"
    >
      Dale click a ver
    </button>
  </section>
</template>
