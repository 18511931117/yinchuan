import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menu: [],//菜单
        currentMenu: [],//点击菜单
        username: '',
        isCollapse: false,
        isIcon: false
    },
    mutations: {
        getUsername(state, val) {
            state.username = localStorage.setItem('username', val)
        },
        clearUsername(state, val) {
            localStorage.removeItem('username');
        },
        isUnfold(state) {
            state.isCollapse = !state.isCollapse
            state.isIcon = !state.isIcon
        },
        setMenu(state, val) { //设置菜单
            state.menu = val
            sessionStorage.setItem('menu', JSON.stringify(val))
        },
        selectMenu(state, val) {

            val.name === 'index' ? (state.currentMenu = []) : (state.currentMenu = val)
        },
        clearMenu(state, val) { //清除
            state.menu = []
            sessionStorage.removeItem('menu')
        },

        addMenu(state, router) { //动态添加
            if (!sessionStorage.getItem('menu')) {
                return
            }
            let menu = JSON.parse(sessionStorage.getItem('menu'))
            state.menu = menu

            let currentMenu = [
                {
                    path: '/',
                    component: () => import(`@/components/home/home`),
                    children: []
                }
            ]
            menu.forEach(item => {

                if (item.children) {
                    item.children = item.children.map(item => {

                        item.component = () => import(`@/view/${item.webUrl}`)
                        return item
                    })
                    currentMenu[0].children.push(...item.children)
                } else {

                    item.component = () => import(`@/view/${item.webUrl}`)
                    currentMenu[0].children.push(item)
                }
            })
            router.addRoutes(currentMenu)
        }
    }
})