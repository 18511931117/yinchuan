<template>
  <div class="warp">
    <div class="search-warp">
     <div class="btn-left">
        <div class="btn-list">
          <el-button type="primary" icon="el-icon-plus" size="small">新增</el-button>
        </div>
         <div class="btn-list">
          <el-button type="primary" icon="el-icon-plus" size="small">导入数据</el-button>
        </div>
     </div>
     <div class="search-right">
       <div class="input-list">
         <el-input v-model="input" placeholder="请输入内容" size="medium"></el-input><el-button type="primary" size="small">查询</el-button>
       </div>
     </div>
    </div>
    <div class="table-warp">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="province" label="省份"> </el-table-column>
        <el-table-column prop="city" label="市区"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="zip" label="邮编"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template>
            <el-button type="text" size="small"> 移除 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      currentPage3: 5,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style>
.warp{
  background: #fff;
}
.search-warp {
  display: flex;
  padding: 15px;
}
.search-right{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.btn-left{
  display: flex;
}
.btn-list{
  margin-right: 15px;
}
.input-list{
  display: flex;
}
.search {
  flex: 1;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search label {
  display: inline;
}
.block{
  text-align: right;
  font: 800;
  color: red;
  padding: 15px 0;
}
</style>