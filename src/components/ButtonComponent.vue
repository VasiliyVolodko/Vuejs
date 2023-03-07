<template>
  <button
    :disabled="props.disabled"
    @click="onClick"
    :class="{ active: active }"
  >
    {{ props.text }}
  </button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  text: string;
  disabled?: boolean;
  active?: boolean;
  position?: "left" | "right" | "middle" | "single";
  width?: string;
  height?: string;
  onClick: () => void;
}>();
</script>
<style scoped>
button {
  width: v-bind(width);
  height: v-bind(height);
  font-size: calc(v-bind(height) - 20px);
  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: grey;
}
button:hover {
  opacity: 0.5;
}
.active {
  background-color: red;
}
</style>
