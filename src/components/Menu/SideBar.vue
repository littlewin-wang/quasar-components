<template>
  <div class="side-bar">
    <div class="title">
      <span class="title-content">
        用户信息
      </span>
    </div>
    <div class="list no-border">
      <div class="item item-link active">
        <div class="item-content">
          用户信息
        </div>
      </div>
      <div class="item item-link">
        <div class="item-content">
          用户组管理
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  .side-bar
    max-width: 200px
    height: 100%
    background-color: #f0f6f6
    border-right: 1px solid #cedfea
    .title
      width: 80%
      margin: 0 auto 1rem auto
      padding: 1rem 0
      border-bottom: 1px solid #cadbe6
      font-size: 1.2rem
      font-weight: 200
    .list
      .item-content
        padding-left: 1rem
      .item-link:hover,
      .active
        color: #2277da
        background-color: #d5e2ef
</style>
