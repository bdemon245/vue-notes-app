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
import { toast } from "vue-sonner";

  const store = useNoteStore();
  const route = useRouter();
  const {
    path,
    params: { id },
  } = useRoute();

  function saveNote() {
    if (path == "/note/create") {
      store.saveNote();
      toast.success('Note Created')
    } else {
      store.updateNote(id);
      toast.success('Note Updated')
    }
    route.push("/");
  }
</script>
