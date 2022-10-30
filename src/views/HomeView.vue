<template>
  <div class="home page">
    <div class="wrapper">
      <h2 class="title">Please login</h2>
      <div class="home__card card">
        <form @submit.prevent="requestLogin">
          <BaseInput
            class="home__card-input"
            @inputValue="updateLoginInput"
            :value="email"
            :options="textInputOptions"
          />
          <BaseInput
            class="home__card-input"
            @inputValue="updatePasswordInput"
            :value="password"
            :options="passwordInputOptions"
          />
          <button :disabled="isBtnDisabled" class="btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <div v-if="isShowToast" class="toast">
        <BaseToast @close="closeToast" :text="toastText" class="home__toast" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import BaseInput from "@/components/ui/BaseInput/index.vue";
import BaseToast from "@/components/ui/BaseToast/index.vue";
import { mapGetters } from "vuex";
import { USER_GETTERS } from "@/types/store";

export default defineComponent({
  name: "home-page",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      isShowToast: false,
      timerId: 0,
    };
  },
  components: {
    BaseInput,
    BaseToast,
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
    isBtnDisabled(): boolean {
      const isCompleteForm = this.email.length > 0 && this.password.length > 0;
      return this.isLoading ? this.isLoading : !isCompleteForm;
    },
    toastText() {
      return "The email address or password is incorrect.";
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
      this.isLoading = true;
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
        this.email = "";
        this.password = "";
        this.showToast();
        console.log("Error", e);
      } finally {
        this.isLoading = false;
      }
    },
    showToast() {
      this.isShowToast = true;
      this.timerId = setTimeout(() => {
        this.isShowToast = false;
        clearTimeout(this.timerId);
      }, 5000);
    },
    closeToast() {
      this.isShowToast = false;
      clearTimeout(this.timerId);
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
