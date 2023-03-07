<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    v-model="value"
    @change="$emit('value', value)"
  />
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps<{
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  disabled?: boolean;
  placeholder?: string;
  width: string;
  height: string;
}>();

const value = ref("");
</script>
<style scoped>
input {
  width: v-bind(width);
  height: v-bind(height);
  box-sizing: border-box;
  font-size: calc(v-bind(height) - 15px);
  padding-left: 15px;
  border: none;
}
input:focus {
  outline: none;
}
</style>
