<script setup>
/* import { useSearch } from "../../composable/useSearchTwitter";
const { search } = useSearch(); */
</script>

<template>
  <table class="bg-white text-gray-900 w-full shadow-none mr-6">
    <thead>
      <tr>
        <th class="bg-blue-700 text-white p-2 w-1/4">ID</th>
        <th class="bg-blue-700 text-white p-2 w-1/4">Link Publicación</th>
        <th class="bg-blue-700 text-white p-2 w-1/4">Medio URL</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="searchs in search"
        :key="searchs.id"
        class="bg-blue-100 text-blue-900"
      >
        <td class="p-2">{{ searchs.id }}</td>
        <td class="p-2">
          <a class="flex justify-center" :href="searchs.url">{{
            searchs.url
          }}</a>
        </td>
        <td class="p-2 flex justify-center">
          <a :href="searchs.mediaUrl"><i class="bi bi-eye-fill"></i></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
