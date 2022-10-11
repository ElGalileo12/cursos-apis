<script setup></script>

<template>
  <div class="mt-56 flex flex-col justify-center items-center">
    <div>Este es solo el comienzo</div>
    <router-link to="/twitter"
      ><button
        type="button"
        class="mt-10 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 shadow-lg shadow-pink-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Api Twitter <i class="ml-3 bi bi-twitter"></i>
      </button>
    </router-link>
    <router-link to="/cats"
      ><button
        type="button"
        class="mt-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Api Cats <i class="ml-3 bi bi-bell-fill"></i>
      </button>
    </router-link>
    <router-link to="/movies"
      ><button
        type="button"
        class="mt-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Api Movies <i class="ml-3 bi bi-film"></i>
      </button>
    </router-link>
  </div>
</template>

<style></style>
