let obj={
  data: [{
    name:'首页',
    key:'0',
    path:'/admin/home'
  },
  {
    name:'商品管理',
    key:'1',
    path:'/admin/food/',
  },
  {
    name:'数据统计',
    key:'2',
    path:'/admin/echarts',
    children:[
      {
        name:'饼型统计',
        key:'2-0',
        path:'/admin/echarts/pie'
      },
      {
        name:'折线统计',
        key:'2-1',
        path:'/admin/echarts/line'
      }
    ]
  }
  ]
}
export default obj