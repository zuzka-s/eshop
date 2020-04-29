<template>
  <div id="content" class="layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TheContent'
}
</script>

<style scoped lang="scss">
  @import './../style/variables.scss';

  #content {
    background: $bg-color;
  }
</style>
