<template>
  <div slot="header" class="header toolbar dark">
    <button>
      <i>menu</i>
    </button>
    <q-toolbar-title></q-toolbar-title>
    <LabelMenu :title="title1" :hasList="true" :lists="mailLists"></LabelMenu>
    <LabelMenu :title="title2" :hasList="true" :lists="mailLists"></LabelMenu>
    <LabelMenu :title="title3" :hasList="true" :lists="mailLists"></LabelMenu>
    <LabelMenu :title="title4" :hasList="true" :lists="mailLists"></LabelMenu>
  </div>
</template>

<script>
  import LabelMenu from './LabelMenu'
  export default {
    data () {
      return {
        title1: {
          label: '工单',
          icon: 'mail',
          state: '3'
        },
        title2: {
          label: '',
          icon: 'mail',
          state: '3'
        },
        title3: {
          label: '工单',
          icon: 'mail',
          state: ''
        },
        title4: {
          label: '',
          icon: 'mail',
          state: ''
        },
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
    position: fixed
    top: 0
    .label
      position: reltive
      line-height: 100%
      cursor: pointer
      .list
        position: relative
    .f12
      font-size: 12px
</style>
