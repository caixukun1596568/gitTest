require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        // parabola:"parabola",
        shopping:"shopping"

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
  require(['shopping'],function(shopping){
      //放大镜
      shopping.bigimg()
       //data 数据 详情列表
       shopping.data()

       //button 添加cookie 事件
        shopping.cookie()

  })
    //  location.search 的妙用
//   var asd=location.search
//   console.log(asd.split("?",2))
//   var asd=location.search
//         var add=asd.split("?",2)
//         console.log(add[1])
  