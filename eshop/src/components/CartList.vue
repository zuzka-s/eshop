<template>
<div>
 <div
      v-for="(item, index) of listOfProductsInCart"
      :key="item"
    > 
       
  <div
      v-for="product of productsList"
      :key="product"
    > 
    <div v-if="(product.url === item)" class="cart-item">
      <div class="cart-title">
            {{ product.title }}
      </div>
          <div class="cart-image">
          <img :src="product.mediaId" :alt="product.title">
      </div>
       <div class="cart-count">
     {{ ProductsInCartEachCount[index] }} ks
     </div>
      <div class="cart-price">
        {{ product.price.current * (ProductsInCartEachCount[index]) }},- Kč
      </div>
    </div>
  </div>
  </div>
</div>



</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CartList',
    computed: {
    ...mapGetters(['countItems', 'listOfProductsInCart', 'ProductsInCartEachCount'])
},
  data () {
    return {
      productsList: {
      }
    }
  },
 mounted () {
    fetch(`http://localhost:3000/api/products/`)
      .then((response) => response.json())
      .then((data) => this.productsList = data)
       .then(() => this.isLoading = false)
  },
}
</script>

<style scoped lang="scss">
@import './../style/variables.scss';
.cart-image img{
  max-width: 100px; 
}

.cart-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.cart-item div{
  width: 20%;
}
</style>