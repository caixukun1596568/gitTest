require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        parabola:"parabola",
        zhuce:"zhuce",

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
      //各国手机号下拉列表
      zhuce.num()
      //判断手机号
    
      zhuce.number()
  })
  var oSlider = document.getElementById("slider");
      var oFull = document.getElementById("full");
      var oBlock = document.getElementById("block");

      //取出数据
      var L = localStorage.getItem("slide") || 0;
      oFull.style.width = L + 'px';
      oBlock.style.left = L + 'px';
      oBlock.onmousedown = function(ev){
        var e = ev || window.event;
        var offsetX = e.clientX - this.offsetLeft;
        document.onmousemove = function(ev){
          var e = ev || window.event;
          var l =  e.clientX - offsetX;
          if(l <= 0){
            l = 0;
          }
          if(l >= 270){
            l = 270;
            oSlider.innerHTML="验证成功"
            // oSlider
            $("#slider").css("background-color","#7AC23C")
            $("#btn").css("background-color","red")
            
          }
          oBlock.style.left = l + 'px';
          oFull.style.width = l + 'px';
          
          //记录滑动的位置
          localStorage.setItem("slide", l);
        //   oSlider .innerHTML="验证成功"
        }
        // oFull.innerHTML="验证成功"
      }
      document.onmouseup = function(){
        document.onmousemove = null;
      }
