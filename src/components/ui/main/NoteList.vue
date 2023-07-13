<template>
  <div class="grid grid-cols-custom sm:grid-cols-custom-sm gap-3">
    <router-link
      v-for="note in notes"
      :key="note.id"
      :to="`note/${note.id}`">
      <div
        class="card h-full card-compact gap-0 shadow-lg rounded-md bg-base-200">
        <h2 class="card-title leading-4 px-2 pt-2 text-sm">
          {{ note.title }}
        </h2>
        <div
          class="card-body"
          style="padding: 0 16px 8px">
          {{ note.content }}
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useActionStore } from "../../../stores/useActionStore";
  import { useNoteStore } from "../../../stores/useNoteStore";

  const action = useActionStore();
  const { notes } = storeToRefs(useNoteStore());
</script>
<style>
  .grid-cols-custom {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  .grid-cols-custom-sm {
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
</style>