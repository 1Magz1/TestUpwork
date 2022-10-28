<template>
  <div class="base-input">
    <label class="base-input__label" :for="options.id">{{
      options.label
    }}</label>
    <input
      class="base-input__input"
      v-model="inputValue"
      :id="options.id"
      :type="options.type"
      :placeholder="options.placeholder"
      @input="$emit('inputValue', inputValue)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseInputOptions from "@/types/components/ui/BaseInput";

export default defineComponent({
  name: "base-input",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    options: {
      type: Object as PropType<BaseInputOptions>,
      required: true,
    },
    value: {
      type: String as PropType<string>,
      required: false,
    },
  },
  beforeMount() {
    if (this.value) {
      this.inputValue = this.value;
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.inputValue = newValue;
      },
    },
  },
});
</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__label {
    font-size: 14px;
    margin-bottom: 10px;
  }
  &__input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid antiquewhite;
  }
}
</style>
