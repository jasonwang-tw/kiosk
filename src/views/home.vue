<template>
  <div class="home">
    <div class="starBtn">
      <router-link to="/index" class="btn-lg">開始點餐</router-link>
      <router-link to="/order" class="btn-lg">兌換訂單</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {}
  }
</script>
<style lang="scss" scope>
  .home {
    height: 100%;
    background-image: url('../assets/index.jpg');
    background-repeat: no-repeat;
    @include flex-center();
  }
  .starBtn {
    a {
      display: block;
      background-color: white;
      margin-bottom: 1rem;
      box-shadow: $shadow;
      @include btn-lg();
    }
  }
</style>
