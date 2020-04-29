<template>
  <div id="app">
    <TheHeader />
    <TheContent />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from './components/TheFooter'
import TheHeader from './components/TheHeader'
import TheContent from './components/TheContent'

export default {
   components: { TheContent, TheHeader, TheFooter }
}
</script>

<style lang="scss">
  @import './style/global.scss';
</style>
