<template>
  <div class="search">
    <el-row :gutter="20" type="flex" align="middle">
      <el-col :span="18">
        <el-input placeholder="" v-model="searchKey" class="el-icon-search" placeholder="搜尋飲品編號"></el-input>
      </el-col>
      <el-col :span="6">
        <router-link to="" class="freeBtn"><i class="el-icon-coffee"></i>自配方</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data() {
      return {
        searchKey: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    padding: 1rem;
  }

  /deep/ .el-input__inner,
  .freeBtn {
    border-radius: 0.8rem;
    font-size: 36px;
    height: 80px;
    color: $border;
    border: 2px solid $border;
  }
  /deep/ .el-input__inner {
    padding: 1rem 80px;
  }
  .freeBtn {
    text-align: center;
    display: block;
    height: auto;
    padding: 14.5px 1rem;
    i{
      font-size: 42px;
      margin-right: 10px;
    }
  }
  .el-icon-search:before {
    position: absolute;
    font-size: 42px;
    color: $border;
    margin: 15px 0 0 20px;
  }
</style>
