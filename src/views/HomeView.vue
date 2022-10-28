<template>
  <div class="home page">
    <div class="wrapper">
      <h2 class="title">Please login</h2>
      <div class="home__card card">
        <form @submit.prevent="requestLogin">
          <BaseInput
            class="home__card-input"
            @inputValue="updateLoginInput"
            :options="textInputOptions"
          />
          <BaseInput
            class="home__card-input"
            @inputValue="updatePasswordInput"
            :options="passwordInputOptions"
          />
          <button class="btn" type="submit">Login</button>
        </form>
      </div>
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
      userInfo: USER_GETTERS.GET_USER_INFO,
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
  beforeMount() {
    const isLogin = sessionStorage.getItem("isLogin");
    if (isLogin === "true" && Object.keys(this.userInfo).length > 0) {
      store.dispatch("logIn");
      this.$router.push("/info");
    }
  },
});
</script>

<style scoped lang="scss">
.home {
  &__card-input {
    margin-bottom: 15px;
  }
}
</style>
