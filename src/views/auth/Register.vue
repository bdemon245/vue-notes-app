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
        <form class="">
          <div class="flex gap-3">
            <TextInput
              v-model:value="store.email.value"
              label="name"
              type="text"
              :error="store.email.error" />

            <TextInput
              v-model:value="store.email.value"
              label="username"
              type="text"
              :error="store.email.error" />
          </div>
          <TextInput
            v-model:value="store.email.value"
            label="email"
            type="email"
            :error="store.email.error" />
          <PasswordInput
            v-model:value="store.password.value"
            label="password"
            type="password"
            :error="store.password.error" />
          <PasswordInput
            v-model:value="store.password.value"
            label="confirm password"
            type="password"
            :error="store.password.error" />

          <div class="flex flex-col items-center gap-3 mt-3">
            <AcceptBtn class="btn-primary w-full p-0 m-0 text-base-100">
              Register
            </AcceptBtn>
            <div class="divider my-2 text-sm h-2 px-4">OR</div>
            <router-link to="/login">
              <div class="link link-primary text-sm">
                Login to existing account
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
  import TextInput from "../../components/forms/general/TextInput.vue";
  import PasswordInput from "../../components/forms/custom/PasswordInput.vue";

  const store = useUserStore();
  const router = useRouter();
  function login() {
    store.login().then((isLogin) => {
      isLogin && router.push("/");
    });
  }
</script>

<style scoped></style>
