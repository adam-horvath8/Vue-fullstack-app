<script lang="ts" setup>
import { useAuthStore } from "../stores/AuthStore";

const authStore = useAuthStore();

if (localStorage.getItem("accessToken")) {
  authStore.login();
}

console.log(authStore.authState);
</script>

<template>
  <nav class="navbar bg-body-secondary sticky-top">
    <div class="container-fluid justify-content-between">
      <div class="d-flex gap-2">
        <router-link :to="{ name: 'Home' }" class="btn btn-outline-primary">
          Home
        </router-link>
        <router-link
          :to="{ name: 'CreatePost' }"
          :class="[
            'btn',
            'btn-outline-primary',
            { disabled: !authStore.authState },
          ]"
        >
          Create Post
        </router-link>
      </div>
      <div v-if="!authStore.authState" class="d-flex gap-2">
        <router-link :to="{ name: 'Login' }" class="btn btn-outline-secondary">
          Login
        </router-link>
        <router-link
          :to="{ name: 'Registration' }"
          class="btn btn-outline-secondary"
        >
          Registration
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped></style>
