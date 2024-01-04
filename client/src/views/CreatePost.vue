<script lang="ts" setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import zod from "zod";
import { useAuthStore } from "../stores/AuthStore";
import axios from "axios";
import { useRouter } from "vue-router";
import { postType } from "../types/postsType";

const authStore = useAuthStore();

const router = useRouter();

const validationSchema = toTypedSchema(
  zod.object({
    title: zod
      .string()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(100, { message: "Title must be at most 100 characters" }),
    postText: zod.string().min(1, { message: "Post text is required" }),
  })
);

const handleSubmit = async (values: any) => {
  try {
    const newPost: postType = {
      ...values,
      username: authStore.authUsername,
    };

    await axios.post("http://localhost:3004/posts", newPost);
    router.push({ name: "Home" });
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="display-3 text-center">Create Post</h1>
      <Form
        @submit="handleSubmit"
        :validation-schema="validationSchema"
        class="col-10 col-sm-6 col-lg-4"
      >
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <Field
            type="text"
            id="title"
            name="title"
            class="form-control"
            aria-describedby="titleHelp"
          />
          <ErrorMessage name="title" class="errorMsg" />
        </div>

        <div class="mb-3">
          <label for="postText" class="form-label">Post Text</label>
          <Field
            as="textarea"
            id="postText"
            name="postText"
            class="form-control textarea"
            rows="5"
            aria-describedby="postTextHelp"
          />
          <ErrorMessage name="postText" class="errorMsg" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </Form>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
