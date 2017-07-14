<template>
  <div class="bread-crumb text-primary">
    <span v-for="(list, index) in breadList" v-bind:key="list.title">
      <button class="bread-item clear">
        {{list.title}}
      </button>
      <span v-if="index < breadList.length - 1"> / </span>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      breadList: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .bread-item
    padding: 0.5rem
</style>
