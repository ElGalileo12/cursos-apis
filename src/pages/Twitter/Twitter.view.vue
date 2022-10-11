<script setup>
import { defineComponent } from "vue";
import SearchTwtter from "@/components/twitter/search.twtter.vue";
import TableTwitter from "@/components/twitter/table.twitter.vue";
import ApiCats from "@/components/cats/api.cats.vue";

defineComponent({
  components: { SearchTwtter, TableTwitter, ApiCats },
});
</script>

<template>
  <section>
    <div class="mt-56 grid overflow-hidden grid-cols-2 grid-rows-1 gap-2">
      <div class="box flex justify-center"><SearchTwtter /></div>
      <div class="box flex justify-center"><TableTwitter /></div>
    </div>
  </section>
</template>
