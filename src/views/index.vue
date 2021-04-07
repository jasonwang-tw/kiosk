<template>
  <div class="index">
    <banner />
    <topmenu />
    <search />
  </div>
</template>

<script>
  import banner from '@/components/banner.vue'
  import topmenu from '@/components/topmenu.vue'
  import search from '@/components/search.vue'

  export default {
    name: 'index',
    components: {
      banner,
      topmenu,
      search
    }
  }
</script>
<style lang="scss" scope></style>
