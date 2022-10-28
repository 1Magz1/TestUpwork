<template>
  <div class="about">
    <user-card :data="userInfo" />
    <button @click="exit">Exit</button>
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
});
</script>
