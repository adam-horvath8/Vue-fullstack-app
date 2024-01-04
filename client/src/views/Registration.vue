<script lang="ts" setup>
import axios from "axios";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter } from "vue-router";
import zod from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const router = useRouter();

const validationSchema = toTypedSchema(
  zod.object({
    username: zod
      .string()
      .min(4, { message: "Username must be at least 4 characters" })
      .max(15, { message: "Username must be at most 15 characters" }),
    password: zod
      .string()
      .min(6, { message: "Password must be minumum 6 characters long" })
      .max(20, { message: "Password can't be longar than 20 characters" }),
  })
);

const handleSubmit = async (values: any) => {
  try {
    await axios.post("http://localhost:3004/auth", values);
    router.push({ name: "Login" });
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="display-3 text-center">Registration</h1>
      <Form
        @submit="handleSubmit"
        :validation-schema="validationSchema"
        class="col-10 col-sm-6 col-lg-4"
      >
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            class="form-control"
            aria-describedby="usernameHelp"
          />
          <ErrorMessage name="username" class="errorMsg" />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            class="form-control textarea"
            rows="5"
            aria-describedby="passwordHelp"
          />
          <ErrorMessage name="password" class="errorMsg" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </Form>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
