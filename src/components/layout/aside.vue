<template>
  <div :class="{ 'min-widht': isCollapse, 'max-widht': !isCollapse }">
    <div class="aside-top">
      <i class="logo"></i>
      <p><span>经销商</span>管理系统</p>
    </div>
    <div class="menu">
      <el-menu
         :default-active="$route.path"
        unique-opened
        :router="true"
        class="el-menu-vertical-demo"
        active-text-color="#fff"
        :collapse="isCollapse"
        text-color="#fff"
      >
        <el-menu-item
          v-for="item in noChildren"
          :key="item.id"
          :index="item.path"
          @click="clickMenu(item)"
        >
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu
          v-for="item in hasChildren"
          :key="item.id"
          :index="item.id + ''"
        >
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="subItem.path"
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              @click="clickMenu(subItem,subItem.id)"
              >{{ subItem.label }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>

  </div>

</template>

<script>
import { mapState } from "vuex";
export default {

  data() {
    return {
      onRoutes:'/index/'
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.isCollapse,
    }),
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    menu(){
      return this.$store.state.menu
    },
    onRoutes(){
       const { name } = this.$route;
       switch(name) {
         case "index":
          return "/index"
         case "set":
           return "/set" 
       }
    },
    
  },
  created(){
     
  },
  methods: {
    clickMenu(item){
      this.$router.push({path:item.path})
      this.$store.commit("selectMenu", item);
    },
    
  },

  mounted(){
    this.onRoutes = window.location.pathname;
  },
};
</script>

<style lang="less">


.aside-top {
  height: 60px;
  width: auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.aside-top p {
  color: #fff;
  margin-left: 5px;
}
.aside-top p span {
  display: inline-block;
  font-size: 16px;
}
.logo {
  display: inline-block;
  width: 34px;
  height: 34px;
  /* background: url("../../assets/goldLogo2.png") no-repeat; */
  background-size: cover;
}
.max-widht {
  width: 200px;
}
.min-width {
  width: auto;
}
.min-widht .aside-top p {
  display: none;
}
.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{
  background: @asideFontBgColor;
}
.el-menu-item-group ul .el-menu-item {
  text-align: left;
}
.el-submenu .el-menu-item{
  padding-left: 70px!important;
}
.el-menu-item-group__title{
  padding: 0!important;
}
</style>
