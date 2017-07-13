<template>
  <div class="card state-box" style="min-width: 150px; max-width: 350px;">
    <div class="state-title">
      <h3>{{state.title}}状态</h3>
    </div>
    <div class="state-container">
      <q-knob
        v-model="state.model"
        :min="state.min"
        :max="state.max"
        :color="state.model === state.max ? '#13ce66' : (state.model < (state.max - state.min) / 2) ? '#ff4949' : '#F7BA2A'"
        class="state-knob"
      ></q-knob>
      <div class="state-text">
        <div>当前运行 <span class="num-font">{{state.max}}</span> {{state.title}}</div>
        <div><span class="num-font">{{state.model}}</span> 台正常</div>
        <div><span class="num-font err-font">{{state.max - state.model}}</span> 台异常</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      state: Object
    }
  }
</script>

<style lang="stylus" scoped>
  .state-title
    margin-left: 2rem
    h3
      font-size: 1rem
  .state-container
    margin: 0 2rem 2rem 2rem
    .state-knob,
    .state-text
      display: inline-block
    .state-text
      margin-left: 1rem
      font-size: 0.85rem
      .num-font
        color: #06c290
        font-weight: bold
        font-size: 1.5rem
      .err-font
        color: #ff4949
</style>
