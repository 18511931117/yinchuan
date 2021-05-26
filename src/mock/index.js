import Mock from "mockjs"
import permissionApi from './permission'
Mock.setup({
    timeout:'200-1000'
})

Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)