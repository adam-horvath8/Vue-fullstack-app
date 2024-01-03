import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    authState: false,
  }),
  actions: {
    login() {
      this.authState = true;
    },
  },
});
