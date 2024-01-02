<script lang="ts" setup>
import { ref, onMounted } from "vue";
import getPosts from "../utils/getPosts";
import { postsType } from "../types/postsType";
import PostCard from "../components/PostCard.vue";

let posts = ref<postsType>([]);

onMounted(async () => {
  posts.value = await getPosts();
  console.log(posts.value);
});
</script>

<template>
  <div class="container-fluid">
    <div v-for="post in posts" :key="post.id">
        <PostCard :post="post" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
