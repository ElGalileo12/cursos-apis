<script setup>
import { defineComponent } from "vue";
import ApiCats from "@/components/cats/api.cats.vue";
import FavoriteCats from "@/components/cats/favorite.cats.vue";
import DeleteCats from "@/components/cats/delete.cats.vue";
import FormCats from "@/components/cats/form.cats.vue";

defineComponent({
  components: { ApiCats, FavoriteCats, DeleteCats, FormCats },
});
</script>
<template>
  <section>
    <ApiCats />
    <FavoriteCats />
    <DeleteCats />
    <FormCats />
  </section>
</template>
