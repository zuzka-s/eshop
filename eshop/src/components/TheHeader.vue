<template>
  <div id="header" class="layout">
    <router-link to="/">Dice</router-link>
    <the-cart />
  </div>
</template>

<script>
import TheCart from './TheCart'
export default {
  name: 'TheHeader',
  components: { TheCart }
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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