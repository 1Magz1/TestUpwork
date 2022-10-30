<template>
  <div class="base-toast">
    <span class="base-toast__text">{{ text }}</span>
    <button @click="$emit('close')" class="base-toast__btn"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "base-toast",
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.base-toast {
  background-color: red;
  padding: 15px 30px;
  border-radius: 20px;
  position: relative;
  &__text {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #fff;
  }
  &__btn {
    position: absolute;
    top: 0;
    right: 5px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 0px;
    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      left: 1px;
      width: 15px;
      height: 2px;
      background-color: #fff;
      transform: translateY(-50%) rotate(45deg);
    }
    &:before {
      transform: translateY(-50%) rotate(135deg);
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
