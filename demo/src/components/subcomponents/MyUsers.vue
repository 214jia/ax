<template>
  <div>
    <h4 class="text-center">热点爆料</h4>
    <el-table :data="userlist" style="width: 100%;margin-bottom: 20px" row-key="id" border stripe>
      <el-table-column prop="date" label="新闻日期" width="200" align="center"/>
    <el-table-column prop="name" label="新闻简要" width="400" align="center"/>
    <el-table-column prop="level" label="热点程度" width="100" align="center"/>
    <el-table-column fixed="right" label="新闻详情" width="250" align="center">
      <template #default="scope">
      <router-link :to="'/home/users/' + scope.row.id">详情</router-link>
      </template>
    </el-table-column>
    </el-table>
  </div>
  </template>
  <script setup>
  import { useUsersStore } from '../../store/users';
  import { storeToRefs } from 'pinia';
  const users = useUsersStore()
  const {userlist} = storeToRefs(users)
  </script>