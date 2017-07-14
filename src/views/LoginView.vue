<template>
  <div class="login-page">
     <Login class="login-main"></Login> 
  </div>
</template>

<script type="text/ecmascript-6">
  import Login from 'components/Login/Login'
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
    width: 100vw
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    background: #efeeee
</style>
