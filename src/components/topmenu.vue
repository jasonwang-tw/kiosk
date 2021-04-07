<template>
  <div class="topmenu">
    <div
      v-for="(item, index) in menu"
      class="menuItem"
      :class="{ active: active == index }"
      @click="active = index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topmenu',
    data() {
      return {
        active: 0,
        menu: [
          '熱銷排行TOP10',
          '優惠活動',
          '名人堂',
          '紅茶系列',
          '綠茶系列',
          '鮮奶茶系列',
          '水果茶系列',
          '珍珠奶茶系列',
          '抹茶系列'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .topmenu {
    font-size: 1.2rem;
    background-color: #f3f3f3;
    display: flex;
    padding: 0.8rem;
    overflow-x: auto;
    box-shadow: $shadow;
    .menuItem {
      flex-shrink: 0;
      background-color: $white;
      margin-right: 0.8rem;
      @include btn-md();
      @include animTime();
    }
    .active {
      color: $white;
      background-color: $success;
      @include animTime();
    }
  }
</style>
