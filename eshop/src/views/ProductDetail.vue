<template>
  <div>
    <div v-if="isLoading">Stránka se načítá...</div>
    <div v-else>
      <h1>{{ productData.title }}</h1>
      <p>Cena: {{ productData.price.current }} Kč</p>
      <p>Počet kusů na skladě: {{ productData.availability }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      isLoading: true,
      productData: {}
    }
  },
  mounted () {
    const productId = this.$route.params.id
    fetch(`http://localhost:3000/api/product/${productId}/`)
      .then((response) => response.json())
      .then((data) => this.productData = data)
      .then(() => this.isLoading = false)
  }
}
</script>

<style scoped>

</style>
