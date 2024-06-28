<template>
    <div>
      <h2 class="text-center">新闻类型</h2>
      <el-table :data="userlist" style="width: 100%;margin-bottom: 20px" row-key="id" border stripe>
        <el-table-column prop="name" label="新闻类型" width="250" align="center"/>
      <el-table-column prop="description" label="新闻详情" width="500" align="center"/>
      <el-table-column fixed="right" label="了解更多" width="250" align="center">
        <template #default="scope">
        <router-link :to="'/home/users1/' + scope.row.id">更多</router-link>
        </template>
      </el-table-column>
      </el-table>
    </div>
    </template>
    <script setup>
    import { useUsersStore } from '../../store/users1';
    import { storeToRefs } from 'pinia';
    const users1 = useUsersStore()
    const {userlist} = storeToRefs(users1)
    </script>