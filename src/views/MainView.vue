<template>
  <div class="login-page">
    <HeaderNav></HeaderNav>
    <div class="container">
      <SideBar :list="sideList"></SideBar>
      <div class="main">
        <div class="main-title">
          <BreadCrumb :breadList="breadList"></BreadCrumb>
        </div>
        <!-- <StateBox :state="state"></StateBox>
        <DataTable :dataTable="dataTable" ></DataTable> -->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderNav from 'components/Header/HeaderNav'
  import SideBar from 'components/Menu/SideBar'
  import StateBox from 'components/StateBox/StateBox'
  import DataTable from 'components/Table/DataTable'
  import BreadCrumb from 'components/BreadCrumb/BreadCrumb'

  import { Platform } from 'quasar'
  import table from '../data/table.json'

  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      HeaderNav,
      SideBar,
      StateBox,
      DataTable,
      BreadCrumb
    },
    data () {
      return {
        sideList: {
          title: '概览',
          items: [
            {
              content: '概览',
              isActive: true
            },
            {
              content: '设备',
              isActive: false
            },
            {
              content: '设备组',
              isActive: false
            },
            {
              content: '连接凭证',
              isActive: false
            },
            {
              content: '网络对象',
              isActive: false
            },
            {
              content: '服务对象',
              isActive: false
            }
          ]
        },
        dataTable: {
          table,
          config: {
            title: 'Data Table',
            refresh: true,
            columnPicker: true,
            leftStickyColumns: 1,
            rightStickyColumns: 2,
            bodyStyle: {
              maxHeight: Platform.is.mobile ? '50vh' : '500px'
            },
            rowHeight: '50px',
            responsive: true,
            pagination: {
              rowsPerPage: 15,
              options: [5, 10, 15, 30, 50, 500]
            },
            selection: 'multiple',
            messages: {
              noData: '<i>warning</i> No data available to show.',
              noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
            }
          },
          columns: [
            {
              label: 'Date',
              field: 'isodate',
              width: '120px',
              filter: true,
              sort: 'date',
              format (value) {
                return new Date(value).toLocaleString()
              }
            },
            {
              label: 'Service',
              field: 'serviceable',
              format (value) {
                if (value === 'Informational') {
                  return '<i class="text-positive">info</i>'
                }
                return value
              },
              width: '80px'
            },
            {
              label: 'Message',
              field: 'message',
              sort: true,
              filter: true,
              width: '500px'
            },
            {
              label: 'Source',
              field: 'source',
              sort: true,
              filter: true,
              format (value) {
                if (value === 'Audit') {
                  return `<span class='label text-white bg-primary'>${value}</span>`
                }
                else {
                  return `<span v-else class='label text-white bg-negative'>${value}</span>`
                }
              },
              width: '120px'
            },
            {
              label: 'Log Number',
              field: 'log_number',
              sort: true,
              width: '100px'
            }
          ]
        },
        state: {
          title: '设备',
          max: 10,
          min: 0,
          model: 8
        },
        breadList: [
          {
            title: '用户中心',
            to: ''
          },
          {
            title: '用户组管理',
            to: ''
          },
          {
            title: '添加用户',
            to: ''
          }
        ]
      }
    },
    computed: {
      ...mapGetters(['issues'])
    },
    methods: {
      ...mapActions(['getIssues'])
    },
    mounted () {
      this.getIssues()
    }
  }
</script>

<style lang="stylus" scoped>
  .login-page
    width: 100vw
    height: 100vh
    .container
      position: absolute
      top: 48px
      left: 0
      right: 0
      bottom: 0
    .main
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 200px
      .main-title
        margin: 0 20px
        min-height: 62px
        line-height: 62px
        position: relative
    .data-table
      width: 80%
</style>
