require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        parabola:"parabola",
        mycat:"mycat"

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
  require(['mycat'],function(mycat){
      //选择框
    mycat.input()
    //数量
    mycat.sum()
    //data数据
    mycat.data()
    //delect 删除
    mycat.delect()
    //   })
    //全部商品数量
    // mycat.sum()
  })