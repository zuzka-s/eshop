<template>
  <div>
    🛒
    {{ countProducts }}
    ({{ countItems }})
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheCart',
  computed: {
    ...mapGetters(['countProducts', 'countItems'])
  }
}
</script>

<style scoped>
</style>