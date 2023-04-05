<script setup lang="ts">
  import { onMounted } from "vue";
  import { toast, Toaster } from "vue-sonner";
  onMounted(() => {
    toast.success("success");
  });
</script>

<template>
  <Toaster
    richColors
    position="top-center"></Toaster>
  <router-view></router-view>
</template>

<style></style>
