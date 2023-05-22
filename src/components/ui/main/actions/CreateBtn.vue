<template>
  <button
    class="btn btn-ghost btn-circle fixed top-[calc(100vh-30vh)] left-[calc(100vw-25vw)] md:left-[calc(100vw-15vw)] xl:left-[calc(100vw-10vw)] text-xl bg-primary btn-normal shadow-lg shadow-slate-500 hover:shadow-inner transition-all hover:opacity-80 hover:bg-primary hover:shadow-slate-600">
    <slot>
      <i-clarity-note-line class="text-sm font-semibold text-white">
      </i-clarity-note-line>
    </slot>
  </button>
</template>

<script lang="ts" setup></script>
