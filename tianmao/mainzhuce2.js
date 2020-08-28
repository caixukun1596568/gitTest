require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        zhuce:"zhuce2",

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
  require(['zhuce'],function(zhuce){
       zhuce.zhuce()
  })