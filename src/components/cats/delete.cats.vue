<script setup>
import { useCat } from "@/composable/useApiCat";
const { aleatoryFav, seeCat, deleteCat } = useCat();
</script>

<template>
  <section>
    <div
      class="flex flex-row items-center justify-center"
      v-for="cat in aleatoryFav.cats"
      :key="cat.id"
    >
      <div class="mt-10 flex flex-col items-center justify-center">
        <article>
          <img :src="cat.image.url" alt="" width="250" />
        </article>
      </div>

      <div class="mt-4 flex flex-col items-center justify-around">
        <button
          @click="deleteCat(cat.id)"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Eliminar <i class="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="text-gray-900 w-2/12 flex justify-center mt-10 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="seeCat()"
      >
        Ver Favoritos
      </button>
    </div>
  </section>
</template>
