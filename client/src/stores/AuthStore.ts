import { defineStore } from "pinia";

interface IAuthState {
  authState: boolean;
  authUsername: string
}

export const useAuthStore = defineStore("authStore", {
  state: (): IAuthState => ({
    authState: false,
    authUsername: ""
  }),
  actions: {
    login() {
      this.authState = true;
    },
    updateUser(username: string){
      this.authUsername = username
    }
  },
});
