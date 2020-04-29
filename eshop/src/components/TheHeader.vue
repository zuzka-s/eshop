<template>
  <div id="header" class="layout">
    <router-link to="/">Dice</router-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="scss">
  @import './../style/variables.scss';
  #header {
    background-color: #ffffff;
    border-bottom: 1px solid $accent8;
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1em 2em;
    a {
      font-size: 2em;
      color: $accent7;
      font-weight: bold;
      text-decoration: none;
      font-family: $headlines;
      font-weight: 900;
    }

  }
</style>