<template>
  <div>
    <el-button type="primary" style="margin-bottom: 10px;" @click="getGoods">显示新闻</el-button>
    <el-dialog v-model="dialogVisible" :title="修改商品" :before-close="handleBeforeClose">
      <GoodsEdit ref="goodsForm" :id="id" @success="editSuccess" />
    </el-dialog>
    <el-table :data="goodList.list" style="width: 100%; margin-bottom: 20px" row-key="id" border>
      <el-table-column prop="id" label="热点排行榜" width="100" align="center"/>
      <el-table-column prop="description" label="热点内容" width="400" align="center"/>
      <el-table-column prop="picture" label="新闻图片" width="300" align="center">
        <template #default="{ row }">
          <el-image v-if="row.picture != ''" :src="row.picture" fit="contain"
            style="display: flex; align-items: center; height: 60px;" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="新闻详情" width="200" align="center">
        <template #default="{ row }">
        <el-button type="warning" @click="editRow(row)">编辑</el-button>
        <el-button type="danger" @click="delRow(row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model="page"
      background layout="prev, pager, next"
      :total="total"
      :page-size="pagesize"
      @current-change="handleCurrentChange"
      style="margin-bottom: 50px;"
    />
  </div>
</template>
<script setup>
import {ref,reactive}from'vue'
import request from '../../axios/request.js'
import{ElMessageBox}from'element-plus'
const goodList = reactive({
  list:[]
})
const page = ref(1)
const pagesize = ref(3)
const total = ref(0)
const id = ref()
const dialogVisible = ref(false)
const goodsForm = ref()
const getGoods = function() {
  request({
    url:'/mock/getGoods',
    method:'get'
  }).then(res => {
    console.log(res.data.data)
    goodList.list=res.data.data
    console.log(res.data)
  }).catch(error=>{
    console.log(error)
  })
}
const editRow = row => {
if (goodsForm.value) {
  goodsForm.value.resetForm(row.id)
}
id.value = row.id
dialogVisible.value = true
}
const delRow = row => {
ElMessageBox.confirm('确定要删除此商品吗？', {
  closeOnClickModal: false,
  confirmButtonText: '确定',
  cancelButtonText: '取消',
}).then(async () => {
  if (await delGoods({ id: row.id })) {
    loadGoodsList()
  }
}).catch(() => {})
}
const handleBeforeClose  = () => {
ElMessageBox.confirm('确定关闭对话框吗？', {
  showClose: false,
  closeOnClickModal: false,
  confirmButtonText: '确定',
  cancelButtonText: '取消',
}).then(() => {
  dialogVisible.value = false
  setTimeout(() => {
    goodsForm.value.resetForm()
  }, 500)
}).catch(() => {})
}
</script>