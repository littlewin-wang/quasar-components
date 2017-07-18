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
    <div class="input-group">
      <button class="primary" @click="login()">
        {{loginText}}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .login-form
    display: flex
    flex-direction: column
    align-items: center
    width: 580px
    height: 420px
    border-radius: 10px
    background: white
    border: 1px #eaeaea solid
    box-shadow: 0px 0px 25px #cac6c6

    .error
      color: white
      position: fixed
      top: 10px;
      left: 50vw;
      transform: translateX(-50%);

    .title
      color: #20a0ff
      font-weight: bold
      font-size: 36px
      text-align: center
      line-height: 2.2
      font-family: sans-serif

    .input-group
      margin-top: 30px
      width: 70%
      input
        width: 100%
      button
        width: 100%
</style>
