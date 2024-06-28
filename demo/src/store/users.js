import { defineStore} from 'pinia'
export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      userlist: [
        { date:'2024年5月18日', name:'东北虎豹国家公园野生东北虎达70只左右',level:'热',phone:'13682672108',email:'johndoe@example.com',address:'北京市朝阳区建国路8号院3单元201室'},
        { date:'2024年5月20日', name:'伊朗6月28日将举行总统选举',level:'热',phone:'13912345678',email:'janesmith@mail.com',address:'上海市浦东新区世纪大道100号17楼A座'},
        { date:'2024年5月20日', name:'亚洲象从重庆到长春约会',level:'热',phone:'2025551234',email:'testuser@fakemail.com',address:'广州市天河区中山大道西50号大厦B座16层'},
        { date:'2024年5月20日', name:'辽宁男篮总决赛3比0领先',level:'热',phone:'7911123456 ',email:'exampleperson@email.net',address:'成都市武侯区人民南路二段100号小区1栋2单元'}
      ]}
  },
  getters: {
  },
  actions: { 
    getUserById(id){
      return this.userlist[id] || null;
    }
  }
})