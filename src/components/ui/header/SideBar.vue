<template>
  <div
    class="absolute shadow-md w-[--sidebar-w] z-20 bg-base-100 pl-2 -mt-2 overflow-y-scroll h-screen pb-4">
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <button class="btn btn-ghost btn-sm">
              <div class="flex items-center gap-1">
                <i-clarity-file-line></i-clarity-file-line>
                <span class="capitalize font-light mt-1">Notes</span>
              </div>
            </button>
          </router-link>
        </li>
        <li
          v-for="i in 100"
          :key="i">
          <button class="btn btn-ghost btn-sm">
            <div class="flex items-center gap-1">
              <i-mdi-light-label></i-mdi-light-label>
              <span class="capitalize font-light mt-1">Label {{ i }}</span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import { useActionStore } from "../../../stores/useActionStore";

  const action = useActionStore();
  onMounted(() => {
    console.log("sidebar rendered");
  });
</script>
