import { defineStore} from 'pinia'
export const useUsersStore = defineStore('users1', {
  state: () => {
    return {
      userlist: [
        { name:'政治新闻',description :'美国肯塔基和俄勒冈两州总统选举初选于21日结束，2024年美国总统选举初选阶段随之接近尾声。当天公布的一项民意调查结果显示，民主党推定总统候选人'},
        { name:'军事新闻', description:'5月8日，福建舰圆满完成首次航行试验任务。近距离航拍福建舰有多帅？'},
        { name:'科技新闻', description:'2024年22日下午，习近平总书记在山东省日照市考察调研。他来到日照港，了解当地推进港口智慧化绿色化建设、扩大对外开放等情况。自2021年10月9日建成启用以来，这个全球领先的顺岸开放式全自动化集装箱码头拥有多项创新技术，创下了一系列纪录。'},
        { name:'文化新闻', description:'2024年5月21日，九室楚墓逐渐揭开神秘面纱，已清理完五室；出土3000余件（组）文物，其中青铜器150多件（组）；大量动植物遗存以及琴瑟等乐器，生动展现当年旨趣……'}
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