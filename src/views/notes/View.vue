<template>
  <header class="">
    <BackBtn></BackBtn>
  </header>
  <div class="flex flex-col items-center px-5">
    <div class="relative min-h-screen rounded-lg border-base-200">
      <TextInput />
      <TextareaInput />
    </div>
  </div>
</template>
<script setup lang="ts">
  import TextareaInput from "../../components/forms/TextareaInput.vue";
  import TextInput from "../../components/forms/TextInput.vue";
  import IconBtn from "../../components/ui/header/actions/IconBtn.vue";
  import { useRoute } from "vue-router";
  import { useNoteStore } from "../../stores/useNoteStore";
  import BackBtn from "../../components/ui/header/actions/NoteBackBtn.vue";
  import { storeToRefs } from "pinia";
  import { onMounted } from "vue";

  const route = useRoute();
  const { id } = route.params;

  const noteStore = useNoteStore();
  onMounted(() => {
    const note = noteStore.notes.find((n) => n.id == id);
    if (note) {
      noteStore.title = note.title;
      noteStore.content = note.content;
    }
  });
</script>

<style></style>
