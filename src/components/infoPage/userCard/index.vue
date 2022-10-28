<template>
  <div class="user-card">
    <span class="user-card__title">{{ data.name }} {{ data.secondName }}</span>
    <span class="user-card__text">{{ data.profession }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IUserInfo } from "@/types/api/user";

export default defineComponent({
  name: "user-card",
  props: {
    data: {
      type: Object as PropType<IUserInfo>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.user-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  background-color: bisque;
  width: 100%;
  max-width: 350px;
  &__title {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  &__text {
    font-size: 18px;
  }
}
</style>
