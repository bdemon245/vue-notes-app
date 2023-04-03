<template>
  <div class="bg-base-200 z-10 h-screen">
    <div
      class="flex flex-col items-center justify-center h-full w-screen gap-3">
      <div class="max-w-sm px-3">
        <div class="flex items-center mb-16">
          <CloseBtn class="text-xs">
            <router-link to="/">back</router-link>
          </CloseBtn>
          <AppLogo class="mx-auto text-primary font-bold" />
        </div>
        <form
          @submit.prevent="login"
          class="">
          <input
            v-model="store.email.value"
            :class="{ 'shake-hr outline outline-error': store.email.error }"
            class="w-full mt-3 px-2 py-1 bg-base-100 rounded-md shadow-md focus:outline-primary"
            aria-label="email field"
            placeholder="Email"
            type="text" />
          <span
            v-show="store.email.error"
            class="text-error font-bold">
            {{ store.email.error }}
          </span>
          <input
            v-model="store.password.value"
            :class="{ 'shake-hr outline outline-error': store.password.error }"
            class="w-full mt-3 px-2 py-1 bg-base-100 rounded-md shadow-md focus:outline-primary"
            aria-label="password field"
            placeholder="Password"
            type="password" />
          <span
            v-show="store.password.error"
            class="text-error font-bold">
            {{ store.password.error }}
          </span>

          <div class="flex gap-3 mt-3 pr-3">
            <AcceptBtn class="btn-info w-1/2 p-0 m-0"> sign up </AcceptBtn>
            <AcceptBtn class="btn-primary w-1/2 p-0 m-0 text-base-100">
              Login
            </AcceptBtn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import AppLogo from "../components/AppLogo.vue";
  import AcceptBtn from "../components/ui/main/actions/AcceptBtn.vue";
  import CloseBtn from "../components/ui/main/actions/CloseBtn.vue";
  import Cipher from "../services/Cipher";
  import { useUserStore } from "../stores/useUserStore";

  const store = useUserStore();
  const router = useRouter();
  function login() {
    store.login().then((isLogin) => {
      isLogin && router.push("/");
    });
  }
</script>
