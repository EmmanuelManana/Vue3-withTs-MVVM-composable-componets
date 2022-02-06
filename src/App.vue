<template>
  <Header />
  <Socks />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Socks from "./components/socks/Socks.vue";
import Header from "./components/header/Header.vue"

export default defineComponent({
  name: "App",
  components: {
    Socks,
    Header
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
