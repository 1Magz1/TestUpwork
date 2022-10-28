<template>
  <div class="info page">
    <h2 class="title">User info</h2>
    <div class="wrapper">
      <user-card class="info__card" :data="userInfo" />
      <button class="btn" @click="exit">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userCard from "@/components/infoPage/userCard/index.vue";
import { mapGetters } from "vuex";
import store from "@/store";
import { USER_GETTERS } from "@/types/store";

export default defineComponent({
  name: "info-page",
  components: {
    userCard,
  },
  computed: {
    ...mapGetters({
      userInfo: USER_GETTERS.GET_USER_INFO,
      isLogin: USER_GETTERS.GET_IS_USER_LOGIN,
    }),
  },
  methods: {
    exit() {
      store.dispatch("logOut");
      this.$router.push("/");
    },
  },
  beforeMount() {
    const isLogin = sessionStorage.getItem("isLogin");
    if (isLogin === "true" && Object.keys(this.userInfo).length > 0) {
      store.dispatch("logIn");
    } else {
      this.$router.push("/");
    }
  },
});
</script>

<style scoped lang="scss">
.info {
  &__card {
    margin-bottom: 30px;
  }
}
</style>
