<template>
  <div class="login-page">
    <!-- <HeaderNav></HeaderNav>  -->
    <!-- <SideBar></SideBar>
    <StateBox :state="state"></StateBox> -->
    <DataTable :dataTable="dataTable" ></DataTable>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderNav from 'components/Header/HeaderNav'
  import SideBar from 'components/Menu/SideBar'
  import StateBox from 'components/StateBox/StateBox'
  import DataTable from 'components/Table/DataTable'

  import { Platform } from 'quasar'
  import table from '../data/table.json'

  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      HeaderNav,
      SideBar,
      StateBox,
      DataTable
    },
    data () {
      return {
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
        }
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
    background: #efeeee
    .data-table
      width: 80%
</style>
