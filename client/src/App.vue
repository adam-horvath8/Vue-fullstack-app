<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main>
    <router-view />
  </main>
</template>

<style lang="css" scoped>
main{
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 1rem;
}
</style>
