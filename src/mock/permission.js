import Mock from 'mockjs'

export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    if (username === 'admin' || username === 'wp') {
      // 判断账号和密码是否对应
      if (username === 'admin' && password === '123456') {
        return {
          code: 20000,
          data: {
            menus: [
                {
                  id: 1,
                  name: "index",
                  path: "/index",
                  label: "首页",
                  icon: "eleme",
                  webUrl:'index/index'
                },
                {
                  id: 2,
                  name: "issuedRun",
                  label: "发行管理",
                  icon: "eleme",
                  children: [
                    {
                      id: 2001,
                      path: "/issuedDataLook",
                      name: "issuedDataLook",
                      label: "发行数据查看",
                      icon: "setting",
                      webUrl:'issuedRun/issuedDataLook'
                    },
                    {
                      id: 2002,
                      path: "/issuedDevRun",
                      name: "issuedDevRun",
                      label: "发行设备管理",
                      icon: "setting",
                      webUrl:'issuedRun/issuedDevRun'
                    },
                    {
                      id: 2003,
                      path: "/boxRun",
                      name: "boxRun",
                      label: "箱标管理",
                      icon: "setting",
                      webUrl:'issuedRun/boxRun'
                    },
                    {
                      id: 2004,
                      path: "/setRun",
                      name: "setRun",
                      label: "套表管理",
                      icon: "setting",
                      webUrl:'issuedRun/setRun'
                    },
                  ],
                },
                {
                  id: 8001,
                  path: "/systemRun",
                  name: "systemRun",
                  label: "系统设置",
                  icon: "setting",
                  webUrl:'systemRun/systemRun'
                },
               
              ],
          
            // token: Mock.Random.guid(),
            message: '获取成功'
          }
        }
      } else if (username === 'wp' && password === '123456') {
        return {
          code: 20000,
          data: {
            menus: [
              {
                id: 1,
                path: '/index',
                name: 'index',
                label: '首页',
                icon: 's-home',
                url: 'index/index'
              },
             
            ],
          //  token: Mock.Random.guid(),
            message: '获取成功'
          }
        }
      } else {
        return {
          code: -999,
          data: {
            message: '密码错误'
          }
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '用户不存在'
        }
      }
    }
  }
}
