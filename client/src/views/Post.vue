<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import { postType } from "../types/postsType";
import getSinglePost from "../utils/getSinglePost";
import { useRoute } from "vue-router";
import CommentInput from "../components/CommentInput.vue";
import getComments from "../utils/getComments";
import { commentsType } from "../types/commnetsType";

const post = ref<postType>();
const comments = ref<commentsType>([]);

const route = useRoute();

onMounted(async () => {
  post.value = await getSinglePost(route.params.id);
});

watchEffect(async () => {
  comments.value = await getComments(route.params.id);
  console.log(comments.value);
});
</script>

<template>
  <div class="container-fluid row h-100 justify-content-between">
    <div class="card col-md-5 p-0 align-self-center ">
      <h5 class="card-header bg-primary text-white">{{ post?.title }}</h5>
      <div class="card-body">
        <p class="card-text">{{ post?.postText }}</p>
        <p class="card-text">
          {{ post?.username }}
        </p>
      </div>
    </div>
    <div class="col-md-5 ">
      <CommentInput />
      <div class="d-flex flex-column gap-2">
         <div v-for="comment in comments" :key="comment.id" class="card ">
        <div class="card-body d-flex justify-content-between">
          <span class="card-text">{{ comment.commentBody }}</span>
          <span class="card-text">{{ comment.username }}</span>
        </div>
      </div>
      </div>
     
    </div>
  </div>
</template>

<style lang="css" scoped></style>
