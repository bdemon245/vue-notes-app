<template>
  <div class="mb-3">
    <label
      :for="label"
      class="label py-0">
      <span class="label-text capitalize text-slate-500 font-semibold">{{
        label
      }}</span>
    </label>
    <div>
      <input
        :id="label"
        :value="value"
        @input="$emit('update:value', ($event.target as HTMLInputElement)?.value)"
        :class="{ 'shake-hr outline outline-error': error }"
        class="w-full px-2 py-2 bg-base-100 rounded-md shadow-md focus:outline-primary placeholder:capitalize"
        :placeholder="label"
        :type="type" />
    </div>
    <span
      v-show="error"
      class="text-error font-bold">
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">

  defineProps(["value", "label", "error", "type"]);
defineEmits([ "update:value" ]);


</script>

<style scoped></style>
