<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
  >
    <van-swipe-item
      v-for="data in filmswipeList"
      :key="data.bannerId"
    >
      <img :src="data.imgUrl">
    </van-swipe-item>

  </van-swipe>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: { ...mapState(['filmswipeList']) },
  mounted () {
    if (this.filmswipeList.length === 0) {
      this.$store.dispatch('getFilmswipeListAction')
    } else {
      console.log('filmswipe-使用缓存数据', this.filmswipeList)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 420px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
