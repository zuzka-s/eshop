<template>
  <div>
    <button @click="lowerQuantity">-</button>
    <input type="text" v-model="itemsInCart" size="3">
    <button @click="addQuantity">+</button>
  </div>
</template>

<script>
export default {
  name: 'AddToCart',
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      itemsInCart: 0
    }
  },
  methods: {
    addQuantity () {
      this.$store.commit(
        'setCartItemQuantity',
        {
          productId: this.productId,
          quantity: this.itemsInCart++
        }
      )
    },
    lowerQuantity () {
      this.$store.commit(
        'setCartItemQuantity',
        {
          productId: this.productId,
          quantity: this.itemsInCart--
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
