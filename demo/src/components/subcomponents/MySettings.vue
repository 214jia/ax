<template>
  <div class="personal-info">
    <h2>个人信息</h2>
    <div>
      <p><strong>姓名:</strong> {{ userInfo.name }}</p >
      <p><strong>邮箱:</strong> {{ userInfo.email }}</p >
      <p><strong>电话:</strong> {{ userInfo.phone }}</p >
      <p><strong>浏览量:</strong> {{ userInfo.viewCount }}</p >
      <p><strong>关注:</strong> {{ userInfo.followCount }}</p >
    </div>
    <button @click="editInfo">编辑信息</button>
    <form v-if="isEditing" @submit.prevent="saveInfo">
      <div>
        <label for="name">姓名:</label>
        <input type="text" id="name" v-model="editInfo.name" required>
      </div>
      <div>
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="editInfo.email" required>
      </div>
      <div>
        <label for="phone">手机号码:</label>
        <input type="tel" id="phone" v-model="editInfo.phone" required>
      </div>
      <div>
        <label for="viewCount ">浏览量:</label>
        <input type="tel" id="viewCount " v-model="editInfo.viewCount " required>
      </div>
      <div>
        <label for="followCount">关注:</label>
        <input type="tel" id="followCount" v-model="editInfo.followCount" required>
      </div>
      <button type="submit">保存</button>
      <button type="button" @click="cancelEdit">取消</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: 'xx',
        email: 'xxx@example.com',
        phone: '1235678910',
        viewCount :'3.7万',
        followCount:'365'
      },
      editInfo: {
        name: '',
        email: '',
        phone: '',
        viewCount :'',
        followCount:''
      },
      isEditing: false
    };
  },
  methods: {
    editInfo() {
      this.isEditing = true;
      this.editInfo = { ...this.userInfo };
    },
    saveInfo() {
      this.userInfo = { ...this.editInfo };
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
    }
  },
  created() {
  }
};
</script>
