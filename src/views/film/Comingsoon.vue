<template>
  <div>
    <Loading v-show="comingsoonIsShow"></Loading>
    <ul>
      <li
        v-for="data in this.comingsoonList"
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
    ...mapState(['comingsoonList']),
    ...mapState(['comingsoonIsShow'])
  },
  mounted () {
    if (this.comingsoonList.length === 0) {
      console.log('发起axios请求')
      this.$store.dispatch('getComingsoonListAction')
    } else {
      console.log('使用缓存数据', this.comingsoonList)
    }
  }
}
</script>

<style>

</style>
