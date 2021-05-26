<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

#app {
  width: 100%;
  height: 100%;
}
.el-input{
  width: 80%;
}

.el-menu-item.is-active{
  background: @asideFontBgColor;
  color: @asideFontColor;
}
.el-submenu__title{
  color: @asideFontColor;
}
.el-menu{
  background:#323C51;
  border-right: solid 0px #e6e6e6!important;
}

</style>
