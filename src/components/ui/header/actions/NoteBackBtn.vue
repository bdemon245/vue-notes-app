<template>
  <IconBtn @click="saveNote">
    <slot>
      <i-mdi-arrow-left />
    </slot>
  </IconBtn>
</template>

<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { useRouter, useRoute } from "vue-router";
  import { useNoteStore } from "../../../../stores/useNoteStore";

  const store = useNoteStore();
  const route = useRouter();
  const {
    path,
    params: { id },
  } = useRoute();

  function saveNote() {
    if (path == "/note/create") {
      store.saveNote();
    } else {
      store.updateNote(id);
    }
    route.push("/");
  }
</script>
