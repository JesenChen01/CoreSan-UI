<template>
  <button :class="['m-button', `m-button--${type}`]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

type ButtonType = "default" | "primary" | "danger";

const props = defineProps<{
  type?: ButtonType;
}>();
console.log("👊 ~ props:", props)

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<style scoped>
/* 简单的移动端样式模拟 */
.m-button {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.m-button--default {
  background-color: #f7f8fa;
  color: #323233;
}

.m-button--primary {
  background-color: #1989fa;
  color: #fff;
}

.m-button--danger {
  background-color: #ee0a24;
  color: #fff;
}
</style>
