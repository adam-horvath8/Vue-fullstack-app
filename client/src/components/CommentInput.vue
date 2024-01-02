<script lang="ts" setup>
import { ref } from "vue";

const comment = ref("");
</script>

<template>
  <form action="" class="mb-4">
    <label for="comment" class="form-label">Comment</label>
    <input
      type="text"
      class="form-control mb-2"
      id="comment"
      aria-describedby="emailHelp"
      v-model="comment"
    />
    <p>{{ comment }}</p>
    <button type="submit" class="btn btn-primary">Add Comment</button>
  </form>
</template>

<style lang="css" scoped></style>
