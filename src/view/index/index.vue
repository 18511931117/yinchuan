<template>
  <div>
    <div class="top-list">
      <div class="top-title">
        <p>经销商概括</p>
      </div>
      <div class="box-warp">
        <div class="box-list">
          <div class="box-list-left">
            <p class="list-text">总入库</p>
            <p class="count">66.66</p>
            <span>件</span>
          </div>
          <div class="box-list-right">
            <i class="instock"></i>
          </div>
        </div>
        <div class="box-list">
          <div class="box-list-left">
            <p class="list-text">总出库</p>
            <p class="count">66.66</p>
            <span>件</span>
          </div>
          <div class="box-list-right">
            <i class="outstock"></i>
          </div>
        </div>
        <div class="box-list">
          <div class="box-list-left">
            <p class="list-text">已发货</p>
            <p class="count">66.66</p>
            <span>件</span>
          </div>
          <div class="box-list-right">
            <i class="fahuo"></i>
          </div>
        </div>
        <div class="box-list" style="margin-right: 15px">
          <div class="box-list-left">
            <p class="list-text">总退货</p>
            <p class="count">66.66</p>
            <span>件</span>
          </div>
          <div class="box-list-right">
            <i class="tuihuo"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="echats-warp">
      <div class="echats-list">
        <div class="echats-title">
          <p>经销商统计</p>
        </div>
        <div class="day-warp">
          <ul class="data">
            <li :class="{active:lineDay == 1}"  @click="getlineYear">年</li>
            <li :class="{active:lineDay == 2}"  @click="getlineMount">月</li>
            <li :class="{active:lineDay == 3}" @click="getlineDay">日</li>
          </ul>
        </div>
      </div>
      <div class="echarts">
        <div id="box" ref="box" style="width: 100%; height: 340px">

        </div>
      </div>
    </div>
    <div class="bottom-table">
      <div class="top-title">
        <p>经销商数据列表</p>
      </div>
      <div class="datatable">
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="入库数"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="出库数">
      </el-table-column>
       <el-table-column
        prop="address"
        label="发货数">
      </el-table-column>
       <el-table-column
        prop="address"
        label="退货数">
      </el-table-column>
    </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lineDay:1,
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  created(){
    
    this.$nextTick(function(){
      this.drawLine()
    })
  },
  methods:{
    getlineYear(){
      this.lineDay = 1
    },
    getlineMount(){
      this.lineDay = 2
    },
    getlineDay(){
      this.lineDay = 3
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
      let myChart = this.$echarts.init(this.$refs.box);
      // 绘制图表
      myChart.setOption({
        // backgroundColor: "#fff",
        grid: {
          left: "5%",
          right: "5%",
          top: "20%",
          bottom: "10%",
          containLabel: true,
        },
        // tooltip: {
        //   show: true,
        //   trigger: "item",
        // },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#000",
            },
          },
        },
        legend: {
          show: true,

          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#000",
          },
          right: "10",
          top: "2%",
          data: ["出库数", "入库数","发货数","退货数"],
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              interval: 0,
              rotate: 40,
              color: "#000",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#e6e6e6",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "",
              },
            },
            data: ["2021-01","2021-02","2021-3","2021-4","2021-5","2021-6","2021-7","2021-8","2021-9","2021-10","2021-11","2021-12",],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(件)",
            nameTextStyle: {
              color: "#000",
            },
            // min: 0,
            // max: 500,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#000",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#e6e6e6",
                type: "dotted",
              },
            },
          },
        ],
        series: [
          {
            name: "出库数",
            type: "line",
            // stack: "总量",
            symbol: "circle",
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#1890ff",
                lineStyle: {
                  color: "#1890ff",
                  width: 1,
                },
              },
            },
            data: [78,85,369,147,789,456,12,45,789,2,68,7],
          },
          {
            name: "入库数",
            type: "line",
            // stack: "总量",
            symbol: "circle",
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#2FC25B",
                lineStyle: {
                  color: "#2FC25B",
                  width: 1,
                },
              },
            },
             data: [788,85,169,447,741,365,951,754,358,47,156,75],
          },
          {
            name: "发货数",
            type: "line",
            // stack: "总量",
            symbol: "circle",
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#d71345",
                lineStyle: {
                  color: "#d71345",
                  width: 1,
                },
              },
            },
             data: [788,885,69,347,241,365,951,754,358,47,156,75],
          },
          {
            name: "退货数",
            type: "line",
            // stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#6950a1",
                lineStyle: {
                  color: "#6950a1",
                  width: 1,
                },
              },
            },
             data: [488,985,769,547,741,365,951,754,358,47,156,75],
          },
        ],
      });
    },
  }
};
</script>

<style>
.top-list {
  width: 100%;
  height: 210px;
  background: #fff;
}
.top-title {
  font-size: 16px;
  padding: 0px 15px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e6e6e6;
}
.box-warp {
  display: flex;
  margin-top: 15px;
}
.box-list {
  flex: 1;
  height: 135px;
  margin-left: 15px;
  border: 1px solid #e6e6e6;
  display: flex;
  padding: 30px 15px;
  box-sizing: border-box;
}
.box-list-left {
  flex: 1;
}

.box-list-right {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-text {
  font-size: 14px;
  color: #000;
}
.count {
  font-size: 30px;
  color: #000;
  display: inline-block;
}
.instock {
  width: 54px;
  height: 54px;
  display: inline-block;
  background: url("../../assets/icon4_2.png") no-repeat;
  background-size: cover;
}
.outstock {
  width: 54px;
  height: 54px;
  display: inline-block;
  background: url("../../assets/icon3_2.png") no-repeat;
  background-size: cover;
}
.fahuo {
  width: 54px;
  height: 54px;
  display: inline-block;
  background: url("../../assets/icon2_2.png") no-repeat;
  background-size: cover;
}
.tuihuo {
  width: 54px;
  height: 54px;
  display: inline-block;
  background: url("../../assets/icon1.png") no-repeat;
  background-size: cover;
}
.echats-warp {
  margin-top: 20px;
  background: #fff;
}
.echats-list {
  font-size: 16px;
  padding: 0px 15px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
}
.day-warp {
}
.data {
  display: flex;
  height: 40px;
  line-height: 28px;
  padding: 5px 0;
  box-sizing: border-box;
}
.data li {
  width: 50px;
  text-align: center;
  border: 1px solid #e6e6e6;
}
.data li:first-child{
  border-radius: 5px 0 0 5px;
}
.data li:last-child{
  border-radius: 0 5px 5px 0;
}

.data li.active{
  border: 1px solid #1890ff;
    color: #1890ff;
}
.bottom-table{
  margin-top: 20px;
  background: #fff;
}
.top-title{
  
}
</style>