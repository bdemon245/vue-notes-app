<template>
  <div class="relative">
    <AppHeader />
    <UserMenu></UserMenu>
  </div>

  <SideBar :class="action.sidebar ? 'slide-in-left' : 'slide-out-left'" />
  <main
    :class="{ 'ml-[--sidebar-w]': action.sidebar }"
    class="px-3 relative min-h-screen transition-all mt-20">
    <NoteList v-if="notes.length > 0" />
    <router-link to="/note/create">
      <CreateBtn />
    </router-link>
  </main>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import AppHeader from "../components/ui/header/AppHeader.vue";
  import NoteList from "../components/ui/main/NoteList.vue";
  import NoteAPI from "../services/NoteAPI";
  import { useNoteStore } from "../stores/useNoteStore";
  import { onMounted } from "vue";
  import SideBar from "../components/ui/header/SideBar.vue";
  import { useActionStore } from "../stores/useActionStore";
  import CreateBtn from "../components/ui/main/actions/CreateBtn.vue";
  import UserMenu from "../components/ui/header/UserMenu.vue";
  //stores
  const noteStore = useNoteStore();
  const { notes } = storeToRefs(noteStore);
  const action = useActionStore();

  onMounted(() => {
    NoteAPI.getNotes();
  });
</script>
