import Mock from 'mockjs'
import goods from './goods.json'

Mock.mock('/mock/getGoods','get',{
    code: 200,
    data: goods
})
