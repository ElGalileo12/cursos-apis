<script setup>
import { useCat } from "@/composable/useApiCat";
const { aleatorySome, someCat, saveCat } = useCat();
</script>

<template>
  <section class="mt-10 flex flex-col">
    <span id="spanError"></span>

    <div class="mt-10 flex flex-row items-center justify-around">
      <article v-for="favorites in aleatorySome.cat.urls" :key="favorites">
        <img :src="favorites" alt="" width="250" />
      </article>
    </div>
    <div class="mt-4 flex flex-row items-center justify-around">
      <div v-for="id in aleatorySome.cat.id" :key="id">
        <button
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="saveCat(id)"
        >
          Guardar <i class="m-2 bi bi-heart-fill"></i>
        </button>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="text-gray-900 w-2/12 flex justify-center mt-10 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="someCat()"
      >
        Actualizar a ver
      </button>
    </div>
  </section>
</template>
