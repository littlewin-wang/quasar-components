<template>
  <div class="login-page">
    <div class="login-background">
      <div class="background">
        <a href="#">
          <img src="./img/default.png">
        </a>
      </div>
    </div>
    <div class="login-wrapper">
      <Login class="login-main"></Login>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Login from './components/Login'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      Login
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
    position: relative
    width: 100vw
    height: 100vh
    .login-background
      float: left
      position: relative
      width: 65%
      height: 100%
      background: #00a7f2
      .background
        width: 700px
        height: 500px
        position: absolute
        left: 50%
        top: 50%
        margin-top: -250px
        margin-left: -350px
        a
          display: block
          width: 100%
          height: 100%
          img
            max-width: 100%
            width: auto
            height: auto
            vertical-align: middle
            border: 0
    .login-wrapper
      float: right
      position: relative
      width: 35%
      height: 100%
      .login-main
        position: absolute
        top: 20%
        left: 50%
        transform: translateX(-50%)
</style>
