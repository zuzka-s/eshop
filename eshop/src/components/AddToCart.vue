<template>
    <div>
      {{ count }}
      <button @click="changeQuantity(-5)" :disabled="availability===0">-5</button>
      <button @click="changeQuantity(-1)" :disabled="availability===0">-</button>
      <input type="text" v-model.number="count" size="3" :disabled="availability===0">
      <button @click="changeQuantity(1)" :disabled="availability===0">+</button>
      <button @click="changeQuantity(5)" :disabled="availability===0">+5</button>
    </div>
</template>

<script>
export default {
  name: 'AddToCart',
  props: {
    productId: {
      type: String,
      required: true
    },
    availability: {
      type: Number,
      default: 0
    }
  },
  computed: {
    count: {
      get () {
        return this.$store.getters.countProductItems(this.productId)
      },
      set (newValue) {
        if (newValue < 0) {
          newValue = 0
        }
        if (newValue > this.availability) {
          newValue = this.availability
        }
        this.$store.commit(
          'setCartItemQuantity',
          {
            productId: this.productId,
            quantity: newValue
          }
        )
      }
    }
  },
  methods: {
    changeQuantity (delta = 0) {
      this.count += delta
    }
  }
}
</script>

<style scoped>

</style>
