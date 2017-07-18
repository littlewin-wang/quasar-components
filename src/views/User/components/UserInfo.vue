<template>
  <div class="user-info">
    <div class="info-group" v-for="item in user" v-bind:key="item.key">
      <span class="label info-key">{{item.key}}:</span>
      <span class="label info-value">{{item.value}}</span>
      <button v-if="item.modify" class="primary outline small" @click="$refs.basicModal.open()">
        修改
      </button>
    </div>
    <q-modal ref="basicModal" :content-css="{borderRadius: '0'}">
      <div class="modal-header">
        <span class="title">修改密码</span>
        <i class="close" @click="$refs.basicModal.close()">close</i>
      </div>
      <div class="modal-body">
        <div class="modal-body-msg">修改密码</div>
        <div class="modal-body-list"></div>
      </div>
      <div class="modal-bottom">
        <button class="primary small">
          确认
        </button>
        <button class="primary small">
          取消
        </button>
      </div>
    </q-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      user: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .info-group
    height: 2rem
    line-height: 2rem
    margin: 0.2rem 0
    font-size: 14px
    .info-key
      display: inline-block
      width: 60px
      text-align: left

  .modal-header
    padding: 0 20px
    font-size: 16px
    line-height: 50px
    min-height: 50px
    position: relative
    border-bottom: 1px solid #dadde0
    .title
      font-weight: 700
      float: left
    .close
      position: absolute
      right: 20px
      cursor: pointer
      &:hover
        color: #027be3
  .modal-body
    padding: 20px
    border: 1px solid #dadde0
    min-height: 50px
  .modal-bottom
    padding: 10px
    min-height: 30px
    background: #f0f4f7
    border: 1px solid #dadde0
    border-top: 0
    position: relative
    text-align: center
    button
      margin: 0 5px
</style>
