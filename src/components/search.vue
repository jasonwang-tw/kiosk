<template>
  <div class="search">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-input placeholder="" class="searchDrink"></el-input>
      </el-col>
      <el-col :span="4">
        <router-link to="">自配方</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .searchDrink {
    /deep/ input {
      border-radius: 99px;
    }
  }
</style>
