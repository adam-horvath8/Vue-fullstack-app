import Home from "../views/Home.vue";
import CreatePost from "../views/CreatePost.vue";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";
import Post from "../views/Post.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/create", name: "CreatePost", component: CreatePost },
  { path: "/login", name: "Login", component: Login },
  { path: "/registration", name: "Registration", component: Registration },
  { path: "/post/:id", name: "Post", component: Post, props: true },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
