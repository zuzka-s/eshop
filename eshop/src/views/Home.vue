<template>
  <div class="home">

       <ProductsList :products-list="productsList" />

    <p>
      <router-link :to="{name: 'Products'}">Zobrazit všechny produkty</router-link>
    </p>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList'
export default {
  name: 'Home',
  components: { ProductsList },
  data () {
    return {
      productsList: {}
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

<style scoped>
</style>