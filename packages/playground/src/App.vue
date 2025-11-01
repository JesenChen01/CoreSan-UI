<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { Button } from "coresan";

const handleClick = () => {
  window.alert("Primary clicked!");
};
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div style="padding: 20px; margin-top: 20px">
    <Button type="primary" @click="handleClick">Primary Button</Button>
    <br /><br />
    <Button type="danger">Danger Button</Button>
    <br /><br />
    <Button type="default">Default Button</Button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
