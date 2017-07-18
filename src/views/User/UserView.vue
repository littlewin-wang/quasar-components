<template>
  <div class="login-page">
    <HeaderNav></HeaderNav>
    <div class="container">
      <SideBar></SideBar>
      <div class="main">
        <div class="main-title">
          <BreadCrumb :breadList="breadList"></BreadCrumb>
        </div>
        <div class="main-container">
          <router-view :user="user"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderNav from 'components/Header/HeaderNav'
  import SideBar from 'components/Menu/SideBar'
  import BreadCrumb from 'components/BreadCrumb/BreadCrumb'

  import UserInfo from './components/UserInfo.vue'

  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      HeaderNav,
      SideBar,
      BreadCrumb,
      UserInfo
    },
    data () {
      return {
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
        ],
        user: [
          {
            key: '用户',
            value: 'littlewin',
            modify: false
          },
          {
            key: '密码',
            value: '12345',
            modify: true
          },
          {
            key: '邮箱',
            value: 'littlewin.wang@gmail.com',
            modify: true
          },
          {
            key: '权限',
            value: '管理员',
            modify: false
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
      .main-container
        margin: 0 20px
</style>
