<template>
  <div>
    <Filmswipe></Filmswipe>
    <Filmheader></Filmheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Filmswipe from '@/views/film/Filmswipe.vue'
import Filmheader from '@/views/film/Filmheader.vue'
export default {
  components: {
    Filmheader,
    Filmswipe
  }
}
</script>

<style lang="scss" scoped>

</style>
