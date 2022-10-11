<script setup>
import { useCat } from "@/composable/useApiCat";
const { changeCat } = useCat();

async function uploadCat() {
  const form = document.getElementById("uploadingForm");
  const formData = new FormData(form);

  await changeCat(formData);
}
</script>

<template>
  <section class="mt-20">
    <h2 class="flex justify-center">Ahora vamos a subir la foto de un michi</h2>
    <form class="flex flex-col items-center mt-6" id="uploadingForm">
      <input
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        id="file"
        type="file"
        name="file"
      />

      <button
        class="text-gray-900 mt-6 w-2/12 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        @click="uploadCat()"
      >
        Subir foto de michi
      </button>
    </form>
  </section>
</template>
