<template>
  <div id="login">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">管理系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="red" type="primary" @click="onSubmit">{{ logintitle }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "../../utils/api";
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456",
      },
      logintitle: "登录",
    };
  },
  methods: {
    onSubmit() {
      // login({
      //   ip: "183.222.15.181",
      // }).then((res) => {
      //   console.log(res);
      // });

      this.$http.post("api/permission/getMenu", this.form).then((res) => {
      
        this.$store.commit("getUsername", this.form.username);  
        this.$store.commit("clearMenu");
        this.$store.commit("setMenu", res.data.data.menus);
        this.$store.commit("addMenu", this.$router);
        this.$router.push({
          name: "home",
        });
      })
    },
  },
};
</script>

<style lang="less">

</style>