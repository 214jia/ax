<template>
    <div>
        <button @click="goBack">后退</button>
        <h4 v-if="userInfo">用户{{ id }}的详情页面</h4>
        <div v-if="userInfo">
        <table border="2px" align="center">
            <tr><th>姓名</th><td>{{ userInfo.name }}</td></tr>
            <tr><th>电话</th><td>{{ userInfo.phone }}</td></tr> 
            <tr><th>邮箱</th><td>{{ userInfo.email }}</td></tr>
            <tr><th>地址</th><td>{{ userInfo.address }}</td></tr>
        </table>
        </div>
        <div v-else>新闻信息加载中...</div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUsersStore } from '../../store/users';
import { computed } from 'vue';
//使用 props 获取用户编号值
const props = defineProps({
  id: String
})
//使用计算属性从store中调用getUserById方法获取当前用户信息
//使用路由实现回退
const userInfo = computed(() =>{
    const userStore = useUsersStore()
    return userStore.getUserById(props.id-1)
})
const router = useRouter()
const goBack = () =>{
    router.back()
}
</script>