<template>
  <div class="bg-base-200 z-10 h-screen">
    <div
      class="flex flex-col items-center justify-center h-full w-screen gap-3">
      <div class="max-w-sm px-3">
        <div class="flex items-center mb-16">
          <router-link to="/">
            <IconBtn>
              <i-mdi-arrow-left></i-mdi-arrow-left>
            </IconBtn>
          </router-link>
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

          <div class="flex flex-col items-center gap-3 mt-3">
            <AcceptBtn class="btn-primary w-full p-0 m-0 text-base-100">
              Login
            </AcceptBtn>
            <div class="divider my-2 text-sm h-2 px-4">OR</div>
            <router-link to="/register">
              <div class="link link-primary text-sm">
                Register a new account
              </div>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import AppLogo from "../../components/AppLogo.vue";
  import IconBtn from "../../components/ui/header/actions/IconBtn.vue";
  import AcceptBtn from "../../components/ui/main/actions/AcceptBtn.vue";
  import { useUserStore } from "../../stores/useUserStore";

  const store = useUserStore();
  const router = useRouter();
  function login() {
    store.login().then((isLogin) => {
      isLogin && router.push("/");
    });
  }
</script>
