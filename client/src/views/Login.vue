<script lang="ts" setup>
import { useAuthStore } from "../stores/AuthStore";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");

const authStore = useAuthStore();
const router = useRouter();

const handleSubmit = async () => {
  try {
    const data = { username: username.value, password: password.value };
    const res = await axios.post("http://localhost:3004/auth/login", data);

    if (res.data.error) {
      console.log(res.data.error);
    } else {
      localStorage.setItem("accessToken", res.data);
      authStore.login;
      console.log(authStore.authState);
      router.push({ name: "Home" });
    }
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <form @submit.prevent="handleSubmit" class="col-10 col-sm-6 col-lg-4">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
