<template>
  <div id="header" class="layout">
    <router-link to="/">Dice</router-link>
    <div class="the-cart">
      <the-cart />
    <div class="cart-list"> 
      <cart-list/>
     </div>
    </div>
  </div>
</template>

<script>
import TheCart from './TheCart';
import CartList from './CartList'
export default {
  name: 'TheHeader',
  components: { TheCart, CartList }
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
  .cart-list {
    display: none;
    width: 600px;
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #ffffff;
    padding: 1em;
    flex-direction: column;
    border: 2px solid $accent7;
  }

    .the-cart {
    position: relative;
    }

  .the-cart:hover .cart-list{
      display: flex;
  }
 

</style>