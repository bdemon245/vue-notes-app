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
  import { onMounted } from "vue";
  import TextareaInput from "../../components/forms/custom/TextareaInput.vue";
  import TextInput from "../../components/forms/custom/TextInput.vue";
  import IconBtn from "../../components/ui/header/actions/IconBtn.vue";
  import BackBtn from "../../components/ui/header/actions/NoteBackBtn.vue";
  import { useNoteStore } from "../../stores/useNoteStore";
  onMounted(() => {
    useNoteStore().content = "";
    useNoteStore().title = "";
  });
</script>

<style></style>
