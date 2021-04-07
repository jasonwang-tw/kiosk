<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style lang="scss">
  // @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 1.75rem;
    color: $primary;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: $primary;
  }

  #app {
    // font-family: 'Noto Sans TC', sans-serif;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
      '微软雅黑', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  ::placeholder {
    font-weight: 300;
  }
  
</style>
