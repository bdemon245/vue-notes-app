<template lang="">
  <input
    v-model="title"
    class="bg-transparent rounded-t-md px-2 p-1.5 w-full focus:outline-none"
    aria-label="a new note title"
    type="text"
    placeholder="Title" />
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useNoteStore } from "../../stores/useNoteStore";
  import { onMounted } from "vue";

  const store = useNoteStore();
  const { title } = storeToRefs(store);
  onMounted(() => {
  });
</script>
