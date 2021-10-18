<template>
  <nav>
    <ul>
      <li>
        <router-link to="/film">
          <i class="iconfont icon-dianying"></i>
          电影
        </router-link>
      </li>
      <li>
        <router-link to="/cinema">
          <i class="iconfont icon-yingyuan"></i>
          影院
        </router-link>
      </li>
      <li>
        <router-link to="/news">
          <i class="iconfont icon-zixun"></i>
          资讯
        </router-link>
      </li>
      <li>
        <router-link to="/center">
          <i class="iconfont icon-mine"></i>
          我的
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: white;

  ul {
    height: 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin: 10px 0;

    li {
      a {
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
        align-items: center;
        font-size: 28px;

        i {
          font-size: 40px;
          padding: 2px 0;
        }
      }
    }
  }
}
</style>
