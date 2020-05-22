<template>
  <div class="productsList">
    <ProductItem
      v-for="(val, key) of productsList"
      :key="key"
      :productData="val"
      :productId="key"
    />
  </div>

</template>

<script>
import LoadingIndicator from '../components/LoadingIndicator'
import ErrorIndicator from '../components/ErrorIndicator'

export default {
  name: 'ProductsList',
  components: {
  ProductItem: () => ({
      component: new Promise((resolve) => {
        setTimeout(() => {
          import('../components/ProductItem.vue')
            .then(resolve)
        }, 3000)
      }),
      loading: LoadingIndicator,
      error: ErrorIndicator,
      timeout: 5000,
      delay: 200
    })
  },
  props: {
    productsList: {
      type: Object,
      default: () => {return {}}
    }
  }
}
</script>

<style scoped lang="scss">
  .productsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    grid-column-gap: 1.8em;
    grid-row-gap: 1.8em;
  }
</style>
