<template lang="">
  <textarea
    ref="input"
    v-model="content"
    placeholder="Note"
    class="bg-transparent h-full w-full resize-none rounded-b-md px-3 pt-2 focus:outline-none"
    aria-label="a new content"
    rows="6"
    required></textarea>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useNoteStore } from "../../../stores/useNoteStore";
  import { ref, onMounted } from "vue";

  const store = useNoteStore();
  const { content } = storeToRefs(store);
  const { saveNote } = store;

  const input = ref();

  onMounted(() => {
    input.value.focus();
  });
</script>
