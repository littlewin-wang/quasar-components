<template>
  <div class="action-card">
    <div class="action-state">
      最近操作
      <div class="action-all">查看全部</div>
    </div>
    <div class="action-container">
      <div class="action-list">
        <div class="action-list-content">
          <h6>
            删除路由器
          </h6>
          <span class="during">16秒</span>
          <div class="time">2017-07-09 10:57:52</div>
          <span class="object">路由器: gw</span>
        </div>
      </div>
      <div class="action-list">
        <div class="action-list-content">
          <h6>
            删除路由器
          </h6>
          <span class="during">23秒</span>
          <div class="time">2017-07-09 10:57:52</div>
          <span class="object">路由器: gw</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" scoped>
  .action-card
    min-width: 250px
    border-top: none
    .action-state
      display: inline-block
      margin-left: 20px
      font-size: 1rem
      font-weight: 700
      .action-all
        display: inline-block
        font-size: 12px
        font-weight: normal
    .action-container
      margin-left: 25px
      border-left: 2px solid #ccc
      .action-list
        position: relative
        padding-left: 20px
        &:before
          display: block
          width: 10px
          height: 10px
          position: absolute
          top: 0
          left: -1px
          background: #0262b4
          content: ''
          border-radius: 50%
          transform: translate(-50%, -50%)
          z-index: 200
        &:after
          display: block
          width: 18px
          height: 18px
          position: absolute
          top: 0
          left: -1px
          background: white
          border: 1px solid #0262b4
          content: ''
          border-radius: 50%
          transform: translate(-50%, -50%)
        .action-list-content
          background: #ddd
          margin-right: 20px
          margin-bottom: 20px
          border-radius: 4px
          h6
            display: inline-block
            margin-left: 10px
            font-size: 14px
          .during
            margin-left: 2rem
          .time
            margin-left: 10px
            height: 12px
            line-height: 12px
            font-size: 12px
          .object
            margin-left: 10px
</style>
