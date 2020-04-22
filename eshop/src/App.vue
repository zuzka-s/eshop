<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from './TheFooter'

export default {
  components: { TheFooter }
}
</script>

<style lang="scss">

</style>
