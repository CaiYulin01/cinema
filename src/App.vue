<template>
  <div id="app">
    <Tabbar></Tabbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  components: { Tabbar }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  background-color: #f4f4f4;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

a.router-link-active {
  color: #f66;
}

</style>
