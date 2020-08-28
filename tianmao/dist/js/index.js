define([
    'require',
    'jquery'
], function() {
    function  dhOrder(){
         var article= $("#dh").find("article")
        var oli = $(".dh_all_ul").find("li")
       oli.mouseover(function(){
           oli.attr("class","")
           article.css("display",'none').eq($(this).index()).css("display", 'block')
           $(this).attr("class","active")
           oli.mouseout(function(){
            article.css("display",'none')
            oli.attr("class","")
        })
       }) 
       
    }
    function posterThree_Card(){ 
        var i =1  
        var abtns=$("#posterThree_main_Card1").find("article")
        var oi=$("#posterThree_main_C1").find("i")
        var img=$("#posterThree_main_C2").find("img")
        abtns.mouseover(function(){
            abtns.attr("class", "");
            $(this).attr("class", 'active')
            oi.css("display",'none').eq($(this).index()).css("display", 'block')
            img.css("display",'none').eq($(this).index()).css("display", 'block')
        })
///  定时器↓
          start()
       $("#posterThree_main_Card").mouseover(function(){
        stop()
       })
       $("#posterThree_main_Card").mouseout(function(){
        start()
       })

     function stop(){
        clearInterval(timer)
     }
        function start(){
            timer=setInterval(function(){
                i++
                if(i%2==0){
                   prefect1()
    
                }else{
                    prefect2()
                }
            },1200)
        }
        function prefect1(){
           $("#ceshi2").attr("class", "");
           $("#ceshi1").attr("class", 'active')
           $(".iconfontceshi2").css("display",'none')
           $(".iconfontceshi1").css("display", 'block')
           $("#imgcishi2").css("display",'none')
           $("#imgcishi1").css("display", 'block')
        }
        function prefect2(){
            $("#ceshi1").attr("class", "");
               $("#ceshi2").attr("class", 'active')
               $(".iconfontceshi1").css("display",'none')
           $(".iconfontceshi2").css("display", 'block')
           $("#imgcishi1").css("display",'none')
           $("#imgcishi2").css("display", 'block')
         }

         // 定时器 ↑
    }
    function  shopping1(){
        $.ajax({
            url:"../data/index.json",
            success:function(arr){
                var str=``
                for(var i=0;i<2;i++){
                    str+=`
                    <section>
                    <img src="${arr[i].img}" alt="">
                        <i>${arr[i].main1}</i>
                        <i>${arr[i].main2}</i>
                          <span>${arr[i].price}</span>
                          </section>
                    `
                }
                $("#posterThree_main_shopping1").html(str)
            },
            error:function(){
                console.log(error)
            }
        })
    }
    function  shopping2(){
        $.ajax({
            url:"../data/index2.json",
            success:function(arr){
                var str=``
                for(var i=0;i<arr.length;i++){
                    str+=`
                          <section>
                    <img src="${arr[i].img}" alt="">
                        <i>${arr[i].main1}</i>
                        <i>${arr[i].main2}</i>
                          <span>${arr[i].price}</span>
                          </section>
                    `
                }
                $("#posterThree_main_rightTwo").html(str)
            },
            error:function(){
                console.log(error)
            }
        })
    }
   //    购买页面  购物车
   function  international(){
    $.ajax({
        url:"../data/index.json",
        success:function(arr){
            var str=``
            for(var i=2;i<arr.length;i++){
                str+=`
                <section>
                <img src="${arr[i].img}" alt="">
                <i>${arr[i].main1}</i>
                <i>${arr[i].main2}</i>
                  <span>${arr[i].price}</span>
                  <button><a href="shopping.html?${arr[i].id}" target="_blank">点击购买</a></button>
              </section>
              
                `
            }
            $("#posterFour_main_right").html(str)
        },
        error:function(){
            console.log(error)
        }
    })
}
    return{
        dhOrder,
        posterThree_Card,
        shopping1,
        shopping2,
        international
    }
});