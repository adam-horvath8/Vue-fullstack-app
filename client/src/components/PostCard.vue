<script lang="ts" setup>
import { useRouter } from "vue-router";

const { post } = defineProps(["post"]);

const router = useRouter();

const redirect = () => {
  router.push({ name: "Post", params: { id: post.id } });
};
</script>

<template>
  <div class="row justify-content-center">
    <div
      class="clickable card col-10 col-md-8 col-lg-6 p-0 my-2"
      @click="redirect"
    >
      <h5 class="card-header">{{ post.title }}</h5>
      <div class="card-body">
        <p class="card-text">{{ post.postText }}</p>
        <p class="card-text">
          {{ post.username }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.clickable {
  cursor: pointer;
}
</style>
