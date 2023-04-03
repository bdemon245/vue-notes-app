<template>
  <div
    :class="{ 'grid-cols-1': action.sidebar }"
    class="grid gap-3 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
    <router-link
      v-for="(note, index) in notes"
      :key="note.id"
      :to="`note/${note.id}`">
      <div
        class="card card-compact gap-0 bg-slate-200 shadow-lg rounded-md text-slate-700">
        <h2 class="card-title leading-4 px-2 pt-2 text-sm">{{ note.title }}</h2>
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
  console.log("listitem rendered");
</script>
<style></style>
