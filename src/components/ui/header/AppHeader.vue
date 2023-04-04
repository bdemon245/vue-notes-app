<template>
  <header class="z-10 navbar bg-base-100 fixed top-0 left-0 shadow-md">
    <div class="navbar-start">
      <IconBtn @click="action.toggleSidebar">
        <i-clarity-menu-line
          v-show="!action.sidebar"
          :class="
            action.sidebar ? 'scale-out-horizontal' : 'scale-in-hor-center'
          "></i-clarity-menu-line>
        <i-clarity-close-line
          v-show="action.sidebar"
          :class="
            !action.sidebar ? 'scale-out-horizontal' : 'scale-in-hor-center'
          "></i-clarity-close-line>
      </IconBtn>
    </div>
    <SearchBar class="navbar-center"></SearchBar>
    <div class="navbar-end">
      <IconBtn
        @click="action.toggleSearchBar"
        class="btn-sm md:btn-md">
        <div v-show="!action.searchBar">
          <i-clarity-search-line></i-clarity-search-line>
        </div>
        <div v-show="action.searchBar">
          <i-carbon-chevron-right></i-carbon-chevron-right>
        </div>
      </IconBtn>
      <router-link to="/note/create">
        <IconBtn class="btn-sm md:btn-md">
          <i-clarity-note-line></i-clarity-note-line>
        </IconBtn>
      </router-link>
      <IconBtn
        @click="action.toggleUserMenu"
        class="btn-sm md:btn-md">
        <i-clarity-user-line></i-clarity-user-line>
      </IconBtn>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import IconBtn from "./actions/IconBtn.vue";
  import { useActionStore } from "../../../stores/useActionStore";
  import SearchBar from "./SearchBar.vue";

  const action = useActionStore();
</script>
