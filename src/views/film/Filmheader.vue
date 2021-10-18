<template>
  <ul class="film-header">
    <li>
      <router-link to="nowplaying">正在热映</router-link>
    </li>
    <li>
      <router-link to="comingsoon">即将上映</router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.film-header {
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  line-height: 90px;
  background-color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  font-size: 30px;
  border-bottom: 1px solid #ddd;
  margin: 10px 0;
}
</style>
