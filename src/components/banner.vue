<template>
  <div class="banner">
    <el-carousel trigger="click" arrow="always" :autoplay="false" height="200px">
      <el-carousel-item v-for="(item, index) in bannerItem">
        <img :src="item.imgSrc" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    data() {
      return {
        bannerItem: [
          {
            imgSrc: require('../assets/banner.jpg')
          },
          {
            imgSrc: require('../assets/banner.jpg')
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped></style>
