<template>
  <div>
    <Loading v-show="nowplayingIsShow"></Loading>
    <ul>
      <li
        v-for="data in this.nowplayingList"
        :key="data.filmId"
      >
        {{data.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/Loading.vue'
export default {
  components: { Loading },
  computed: {
    ...mapState(['nowplayingList']),
    ...mapState(['nowplayingIsShow'])
  },
  mounted () {
    if (this.nowplayingList.length === 0) {
      console.log('发起axios请求')
      this.$store.dispatch('getNowplayingListAction')
    } else {
      console.log('使用缓存数据', this.nowplayingList)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
