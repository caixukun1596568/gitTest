require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        parabola:"parabola",
        index:"index"

    },
    //juqery-cookie 依赖于jque
    shim:{
        "jquery-cookie": ["jquery"],
        //某一个模块，不遵从AMD
        parabola:{
            exports:"_"
        },
    },
})
  require(['index'],function(index){
      //侧边栏
     index.dhOrder()
     //posterThree_card  天猫超市选项卡
     index.posterThree_Card()
     //天猫超市 数据
     index.shopping1()
     index.shopping2()
     //购物详情页面
     index.international()

     
  })

  //baner 轮播
//   var mySwiper = new Swiper ('.swiper-container', {
//     //   direction: 'vertical', // 垂直切换选项 
//       loop: true, // 循环模式选项
//       autoplay:true,
//       // 如果需要分页器
//       pagination: {
//         el: '.swiper-pagination',
//       },
      
//       // 如果需要前进后退按钮
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
      
//       // 如果需要滚动条
//     //   scrollbar: {
//     //     el: '.swiper-scrollbar',
//     //   },
//     })     