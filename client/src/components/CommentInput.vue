<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { commentsType } from "../types/commnetsType";
import { useAuthStore } from "../stores/AuthStore";

interface ICommentInputProps {
  comments: commentsType;
}

const newComment = ref("");

const route = useRoute();

const authStore = useAuthStore();

const { comments } = defineProps<ICommentInputProps>();

const handleSubmit = async () => {
  try {
    const res = await axios.post(
      "http://localhost:3004/comments",
      {
        commentBody: newComment.value,
        PostId: route.params.id,
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    );

    if (res.data.error) {
      alert(res.data.error);
    } else {
      const commentToAdd = {
        id: res.data.id,
        commentBody: newComment.value,
        username: res.data.username,
      };
      comments.push(commentToAdd);
      newComment.value = "";
    }
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <form @submit="handleSubmit" class="mb-4">
    <label for="comment" class="form-label">Comment</label>
    <input
      type="text"
      class="form-control mb-2"
      id="comment"
      aria-describedby="emailHelp"
      v-model="newComment"
    />
    <button
      type="submit"
      :class="[
        'btn',
        'btn-primary',
        { disabled: !authStore.authState },
      ]"
    >
      Add Comment
    </button>
  </form>
</template>

<style lang="css" scoped></style>
