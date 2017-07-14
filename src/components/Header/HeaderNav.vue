<template>
  <div slot="header" class="header toolbar dark">
    <button>
      <i class="on-left">cloud_queue</i>
      天元云
    </button>
    <q-toolbar-title></q-toolbar-title>
    <LabelMenu :title="title1" :lists="mailLists"></LabelMenu>
    <LabelMenu :title="title2" :lists="mailLists"></LabelMenu>
    <LabelMenu :title="title3" :lists="userActions"></LabelMenu>
    <LabelMenu :title="title4"></LabelMenu>
  </div>
</template>

<script>
  import LabelMenu from './LabelMenu'
  export default {
    data () {
      return {
        title1: {
          label: '工单',
          icon: '',
          state: ''
        },
        title2: {
          label: '',
          icon: 'mail',
          state: '3'
        },
        title3: {
          label: '',
          icon: 'people',
          state: ''
        },
        title4: {
          label: '',
          icon: 'history',
          state: ''
        },
        userActions: [
          {
            content: '个人信息',
            clickFun: () => {
              console.log('Click Item One')
            }
          },
          {
            content: '修改密码',
            clickFun: () => {
              console.log('Click Item Two')
            }
          },
          {
            content: '注销',
            clickFun: () => {
              console.log('Click Item Three')
            }
          }
        ],
        mailLists: [
          {
            content: 'Item One',
            clickFun: () => {
              console.log('Click Item One')
            }
          },
          {
            content: 'Item Two',
            clickFun: () => {
              console.log('Click Item Two')
            }
          },
          {
            content: 'Item Three',
            clickFun: () => {
              console.log('Click Item Three')
            }
          },
          {
            content: 'Item Four',
            clickFun: () => {
              console.log('Click Item Four')
            }
          }
        ]
      }
    },
    components: {
      LabelMenu
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    .label
      position: reltive
      line-height
      cursor: pointer
      .list
        position: relative
    .f12
      font-size: 12px
</style>
