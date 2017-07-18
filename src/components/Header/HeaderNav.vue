<template>
  <div slot="header" class="header bg-primary text-white">
    <ul class="header-nav">
      <li>
        帮助
        <div class="sub-nav">
          <div class="sub-nav-list">用户指南</div>
          <div class="sub-nav-list">常见问题</div>
          <div class="sub-nav-list">API Docs</div>
        </div>
      </li>
      <li>
        消息
        <div class="sub-nav">
          <InfoList></InfoList>
        </div>
      </li>
      <li>
        用户
        <div class="sub-nav">
          <div class="sub-nav-list">用户信息</div>
          <div class="sub-nav-list">用户安全</div>
          <div class="sub-nav-list">登出</div>
        </div>
      </li>
      <li>
        <i>history</i>
        <div class="sub-nav">
          <ActionList></ActionList>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import InfoList from './InfoList.vue'
  import ActionList from './ActionList.vue'
  export default {
    components: {
      InfoList,
      ActionList
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    position: relative
    padding-left: 20px
    width: 100%
    height: 48px
    .header-logo
      display: inline-block
      cursor: pointer
      .logo-wrapper
        display: inline-block
        line-height: 48px
        .logo
          height: 28px
          vertical-align: top
          margin-top: 10px
      .title
        display: inline-block
        height: 100%
        line-height: 48px
        padding-left: 4px
        font-weight: 500
    .header-nav
      position: absolute
      display: inline-block
      right: 0
      margin: 0
      padding: 0
      height: 100%
      vertical-align: middle
      list-style: none
      font-size: 0
      li
        display: inline-block
        position: relative
        height: 48px
        line-height: 48px
        padding: 0 20px
        vertical-align: middle
        font-size: 12px
        cursor: pointer
        i
          font-size: 1rem
        .sub-nav
          position: absolute
          top: 100%
          right: 0
          background-color: white
          color: #027be3
          display: none
          border: solid 1px #027be3
          border-top: none
          z-index: 100
          cursor: auto
          .sub-nav-list
            padding: 0 20px 0 10px
            width: 80px
            height: 3rem
            line-height: 3rem
            &:hover
              background-color: #027be3
              color: white
        &:hover
          background-color: #0262b4
          .sub-nav
            display: inline-block
    .label
      position: reltive
      line-height
      cursor: pointer
      .list
        position: relative
    .f12
      font-size: 12px
</style>
