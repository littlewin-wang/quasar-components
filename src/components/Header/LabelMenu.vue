<template>
  <span class="label">
    <!-- Text Label or Icon Label -->
    <span class="f14 hover-blue" v-if="title.label">{{title.label}}</span>
    <i class="hover-blue" v-else-if="title.icon">{{title.icon}}</i>
    <!-- state icon or arrow down icon -->
    <span class="f14 absolute-top-right bg-negative state" v-if="title.state">{{title.state}}</span>
    <i class="hover-blue" v-else-if="lists">keyboard_arrow_down</i>

    <q-popover v-if="lists" ref="popover" class="relative-top-right bg-dark text-white">
      <div class="list-label no-border">
        <div class="item item-link" v-for="list in lists" v-bind:key="list.content" @click="list.clickFun">
          <div class="item-content">
            {{list.content}}
          </div>
        </div>
      </div>
    </q-popover>
  </span>
</template>

<script>
  export default {
    props: {
      title: Object,
      lists: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .label
    position: relative
    cursor: pointer
    &:hover
      .hover-blue
        color: #027be3
    .state
      display: block
      width: 1rem
      height: 1rem
      border-radius: 50%
      font-size: 12px
  .f14
    font-size: 14px
  
  .item-content:hover
    color: #027be3
</style>
