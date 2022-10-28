<template>
  <div class="home">
    <div class="card">
      <h2>Please login</h2>
      <form @submit.prevent="requestLogin">
        <BaseInput @inputValue="updateLoginInput" :options="textInputOptions" />
        <BaseInput
          @inputValue="updatePasswordInput"
          :options="passwordInputOptions"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import BaseInput from "@/components/ui/BaseInput/index.vue";
import { mapGetters } from "vuex";
import { USER_GETTERS } from "@/types/store";

export default defineComponent({
  name: "home-page",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    BaseInput,
  },
  computed: {
    ...mapGetters({
      isLogin: USER_GETTERS.GET_IS_USER_LOGIN,
    }),
    textInputOptions() {
      return {
        id: "input1",
        label: "Email",
        type: "text",
        placeholder: "Please enter your email",
      };
    },
    passwordInputOptions() {
      return {
        id: "input2",
        label: "Password",
        type: "password",
        placeholder: "Please enter your password",
      };
    },
  },
  methods: {
    updateLoginInput(value: string) {
      this.email = value;
    },
    updatePasswordInput(value: string) {
      this.password = value;
    },
    async requestLogin() {
      const payload = {
        login: this.email,
        password: this.password,
      };
      try {
        const res = await store.dispatch("requestLogin", payload);
        if (res) {
          this.$router.push("/info");
        }
      } catch (e) {
        console.log("Toast error", e);
      }
    },
  },
  beforeCreate() {
    const isLogin = sessionStorage.getItem("isLogin");
    if (isLogin === "true") {
      this.$router.push("/info");
    }
  },
});
</script>
