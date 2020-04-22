<template>
  <div class="home">
    <h1>Deskové hry</h1>
Doporučujeme:
  <div v-for="(val, index) of productData"
        :key="index"> 
      <ul v-if="(val.label=='recommend')">
        <li>
          <router-link :to="{name: 'Product', params: {id: val.url}}">{{ val.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      productData: {}
    }
  },
  mounted () {
    fetch(`http://localhost:3000/api/products/`)
      .then((response) => response.json())
      .then((data) => this.productData = data)
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>