<template>
  <div class="data-table">
    <q-data-table :data="dataTable.table" :config="dataTable.config" :columns="dataTable.columns" @refresh="refresh">
      <template slot="selection" scope="props">
        <button class="primary clear" @click="deleteRow(props)">
          <i>delete</i>
        </button>
      </template>
    </q-data-table>
  </div>
</template>

<script>
export default {
  props: {
    dataTable: Object
  },
  methods: {
    deleteRow (props) {
      props.rows.forEach(row => {
        console.log('删除第', row.index + 1, '行')
      })
    },
    refresh (done) {
      this.timeout = setTimeout(() => {
        done()
      }, 5000)
    }
  },
  beforeDestroy () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
