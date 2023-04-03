<template>
  <header class="z-10 navbar bg-base-100 fixed top-0 shadow-md">
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
    <!-- <div class="navbar-center">
      <AppLogo />
    </div> -->
    <div class="navbar-end">
      <router-link to="/note/create">
        <IconBtn class="btn-sm">
          <i-clarity-note-line></i-clarity-note-line>
        </IconBtn>
      </router-link>
      <IconBtn class="btn-sm">
        <i-clarity-search-line></i-clarity-search-line>
      </IconBtn>
      <IconBtn class="btn-sm">
        <i-clarity-user-line></i-clarity-user-line>
      </IconBtn>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import SideBar from "./SideBar.vue";
  import IconBtn from "./actions/IconBtn.vue";
  import AppLogo from "../../AppLogo.vue";
  import { useActionStore } from "../../../stores/useActionStore";

  const action = useActionStore();
</script>
