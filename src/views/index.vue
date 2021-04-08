<template>
  <div class="index">
    <banner />
    <topmenu />
    <search />
    <el-main>
      <el-divider content-position="center" class="pageTitle"
        ><h1>熱銷排行TOP10</h1>
        <span>流行趨勢及熱銷飲品</span>
      </el-divider>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="(i, index) in tea" class="infinite-list-item" v-if="index < dispalay">
          {{ i.name }}
        </li>
      </ul>
    </el-main>
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
    },
    data() {
      return {
        dispalay: 2,
        tea: [
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          },
          {
            name: 'tea1'
          }
        ]
      }
    },
    methods: {
      load() {
        let t = this.tea.length
        // console.log('t :>> ', t)
        if (this.dispalay < t) {
          this.dispalay += 2
        } else {
          alert('nodata')
        }
      }
    }
  }
</script>
<style lang="scss" scope>
  .pageTitle {
    margin: 30px 0;
    text-align: center;
    background-color: $border;
    h1 {
      font-size: 50px;
      margin-bottom: 0;
    }
    span {
      display: inline-block;
      margin: 0 0 30px 0;
      font-size: 28px;
      color: $sup;
    }
  }
  .infinite-list {
    padding: 0;
    height: 1200px;
  }
  .infinite-list-item {
    height: 300px;
    margin: 0 0 50px 0;
    list-style-type: none;
    background-color: khaki;
  }
</style>
