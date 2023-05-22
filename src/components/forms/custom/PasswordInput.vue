<template>
  <div class="mb-3">
    <label
      :for="label"
      class="label py-0">
      <span class="label-text capitalize text-slate-500 font-semibold">{{
        label
      }}</span>
    </label>
    <div class="relative">
      <input
        ref="input"
        :value="value"
        @input="$emit('update:value', $event.target?.value)"
        :class="{ 'shake-hr outline outline-error': error }"
        class="w-full px-2 py-2 bg-base-100 rounded-md shadow-md focus:outline-primary placeholder:capitalize"
        :placeholder="label"
        :type="type" />
      <span class="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
        <i-mdi-light-eye
          v-show="user.password.isVisible"
          @click="togglePasswordVisibility"></i-mdi-light-eye>
        <i-mdi-light-eye-off
          v-show="!user.password.isVisible"
          @click="togglePasswordVisibility"></i-mdi-light-eye-off>
      </span>
    </div>
    <span
      v-show="error"
      class="text-error font-bold">
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useUserStore } from "../../../stores/useUserStore";

const props = defineProps([ "value", "label", "error", "type" ]);
  defineEmits(["update:value"]);

  const user = useUserStore();
  const input = ref();

  function togglePasswordVisibility() {
    let toggle = !user.password.isVisible;
    user.password.isVisible = toggle;
    if (user.password.isVisible) {
      input.value.type = "text";
    } else {
      input.value.type = "password";
    }
  }
</script>

<style scoped></style>
