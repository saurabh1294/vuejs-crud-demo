<template lang="pug">
  div(id="app")
    Bank
</template>

<script>
import Bank from "./components/Bank.vue";

export default {
  name: "app",
  components: {
    Bank
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
