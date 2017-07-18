<template>
  <div class="login-form">
    <span v-if='isError' class="error chip label bg-red">
      {{errorText}}
      <i class="on-right">close</i>
    </span>
    <h3 class="title">NAP智能策略服务平台</h3>
    <div class="input-group">
      <input
        :autofocus="true"
        placeholder="请输入用户名"
        v-model="username">
    </div>
    <div class="input-group">
      <input
        placeholder="请输入密码"
        type="password"
        v-model="password">
    </div>
    <div class="input-group">
      <label>
        记住我&nbsp&nbsp
        <q-toggle
          v-model="rememberMe"
        ></q-toggle>
      </label>
    </div>
    <div class="input-group arrow-wrapper">
      <button class="primary" @click="login()">
        {{loginText}}
      </button>
      <div class="arrow" @click="toggleServer()">
        <i v-if="toggle==='retracting'">keyboard_arrow_down</i>
        <i v-else>keyboard_arrow_up</i>
      </div>
      <a class="link" href="#">忘记密码？</a>
    </div>
    <div class="input-server" v-show="toggle==='expanding'">
      登录地址
      <input
        class="server"
        placeholder="请输入登录地址"
        v-model="serverIP">
      端口
      <input
        class="port"
        type="number"
        v-model="port">
    </div>
  </div>
</template>

<script>
  import API from 'api/index'
  import CONF from 'src/config'
  export default {
    data () {
      return {
        username: '',
        password: '',
        serverIP: '',
        port: undefined,
        toggle: 'retracting',
        rememberMe: false,
        Loading: false,
        isError: false,
        errorText: ''
      }
    },
    computed: {
      loginText () {
        if (this.Loading) return '登录中...'
        return '登录'
      }
    },
    methods: {
      login () {
        if (!this.username) {
          this.isError = true
          this.errorText = '请填写用户名！！！'
          return
        }
        if (!this.password) {
          this.isError = true
          this.errorText = '请填写密码！！！'
        }
        let loginParams = {username: this.username, password: this.password}
        API.LoginAPI(loginParams).then(res => {
          // handle success
          sessionStorage.setItem(CONF.JWT_KEY, res.headers.authorization)
          sessionStorage.setItem(CONF.USER_KEY, JSON.stringify(res.data))
          this.$router.push('/main')
        }, response => {
          // handle failure
          this.$toasted.show('账号信息有误！！！', {
            theme: 'bubble',
            position: 'bottom-right',
            duration: 2500
          })
//          TODO (littlewin) Add error handlers process
//          if (response.status === 401) {
//            console.log('用户名或密码错误!')
//          }
//          else if (response.status > 500) {
//            console.log('内部错误，请联系管理员!')
//          }
        })
      },
      toggleServer () {
        this.toggle = (this.toggle === 'retracting' ? 'expanding' : 'retracting')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .login-form
    display: flex
    padding-bottom: 20px
    flex-direction: column
    align-items: center
    width: 400px
    border-radius: 10px
    background: white
    .error
      color: white
      position: fixed
      top: 10px;
      left: 50vw;
      transform: translateX(-50%);
    .title
      margin: 10px auto
      color: #20a0ff
      font-weight: bold
      font-size: 28px
      text-align: center
      line-height: 2.2
      font-family: sans-serif
    .arrow-wrapper
      position: relative
      font-size: 1rem
      .arrow
        display: inline-block
        position: absolute
        bottom: -20px
        left: 50%
        transform: translateX(-50%)
        cursor: pointer
      .link
        display: inline-block
        position: absolute
        bottom: -10px
        right: 0
        transform: translateY(100%)
        font-size: 12px
    .input-group
      margin-top: 20px
    .input-group
      width: 80%
      input
        width: 100%
      button
        width: 100%
    .input-server
      margin-top: 40px
      .server
        width: 200px
      .port
        width: 60px
</style>
