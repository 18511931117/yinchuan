<template>
  <div class="layout">
    <el-container>
      <el-aside width="200">
        <xdAside></xdAside>
      </el-aside>
      <el-container>
        <el-header>
          <xdHeader></xdHeader>
        </el-header>
        <el-main>
          <div class="bg-w">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import xdAside from '../layout/aside'
import xdHeader from '../layout/header'
export default {
    components:{
        xdAside,
        xdHeader
    }
}
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #323C51;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
/* .warp{
  background: #fff;
} */

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>