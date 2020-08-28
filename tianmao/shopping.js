define([
    'require',
    'jquery',
    "jquery-cookie"
], function() {
    // 放大镜
    function bigimg(){
        // data()
        $("#main").on("mouseenter","#main_img_small",function(){
            $("#main_img_kz").add("#main_img_big").show()
        })
        $("#main").on("mouseleave","#main_img_small",function(){
            $("#main_img_kz").add("#main_img_big").hide()
        })
        $("#main").on("mousemove","#main_img_small",function(ev){
            var l=ev.clientX - $(this).offset().left-50
            l = Math.max(l,0)
            l =Math.min(318,l)
            var t=ev.clientY -$(this).offset().top-50
            t =Math.max(t,0)
             t =Math.min(318,t)
             $("#main_img_kz").css({
                 left:l,
                 top:t
             })
             $("#main_img_big img").css({
                 left: -2 * l,
                 top: -2 * t
             })
        })

    //    $("#main_img_small").mouseenter(function(){
    //        $("#main_img_kz").add("#main_img_big").show()
    //    }).mouseleave(function(){
    //     $("#main_img_kz").add("#main_img_big").hide()
    //    }).mousemove(function(ev){
    //        var l=ev.clientX - $(this).offset().left-50
    //        l = Math.max(l,0)
    //        l =Math.min(318,l)
    //        var t=ev.clientY -$(this).offset().top-50
    //        t =Math.max(t,0)
    //         t =Math.min(318,t)
    //         $("#main_img_kz").css({
    //             left:l,
    //             top:t
    //         })
    //         $("#main_img_big img").css({
    //             left: -2 * l,
    //             top: -2 * t
    //         })
    //    })
    }
    //页面数据
    function data(){
        var asd=location.search
        var add=asd.split("?",2)
        console.log(add[1])
        $.ajax({
            url:"../data/index.json",
            success:function(arr){
                var str=``
                // for(var i=0;i<arr.length;i++){
                    // if(arr[i].id=add[1]){
                        // console.log(arr[i].id)
                        var i =add[1]
                     str=`
                     <section id="main_right">
                    <div id="main_img_small">
                        <img src="${arr[i].img}" alt="">
                         <div id="main_img_kz"></div>
                    </div>
                    <div id="main_img_big">
                    <img src="${arr[i].img}" alt="">
                    </div>
            </section>
              <section id="main_left">
                   <section id="left_header">
                    <h1>${arr[i].main1}${arr[i].main2}</h1>
                    <h2>七夕特供,祝你们早日分手</h2>
                   </section>
                   <section id="left_price">
                       <span>价格</span>
                       <i class="priceCooke">${arr[i].price}</i>
                   </section>
                   <section id="left_city">
                       <span>运费</span>
                       <i>杭州…</i>
                   </section>
                   <section id="left_integral" >
                       <span>累积评价<i>${arr[i].pingjia}</i></span>
                       <span>|</span>
                       <span>送天猫积分<b>${arr[i].jifen}</b></span>
                   </section>
                   <section id="left_img">
                       <span>商品种类</span>
                       <img src="${arr[i].img}" alt="">
                   </section>
                   <section id="left_input">
                       <span>数量</span>
                       <input type="number" id="input" value="1">
                       <span>件</span>
                   </section>
                   <section id="left_button">
                   <a href="mycart.html"> <button>立即购买</button></a>
                       <button id="${arr[i].id}" class="sc_btn"><i class="iconfont">&#xe63e;&nbsp;</i>加入购物车</button>
                   </section>
              </section>
                     `
                //     } 
                // }
                $("#main").html(str)
            },
            error:function(){
                console.log(error)
            }
        })
    }

    // btn加入购物车 cookie
    function cookie(){
        $("#main").on("click",".sc_btn ",function(){
            var inputval=Number($("#input").val())
             if(inputval<=1){
                 inputval=1
             }else{
                inputval=Number($("#input").val())
             }
            var  price1=$(".priceCooke").html()
            var  price=Number(price1.split("￥")[1])
            // console.log(price2)
            var id = this.id; //点击按钮的这个商品的id
            //1、判定是否是第一次添加
            var first = $.cookie("goods") == null ? true : false;
            if(first){
              var arr = [{id:id,num:1,price:price}];
              $.cookie("goods", JSON.stringify(arr), {
                expires: 7
              })
            }else{
              //不是第一次，判定之前是否添加过
              var same = false; //假设之前没添加过
              var cookieArr = JSON.parse($.cookie("goods"));
              for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id === id){
                  cookieArr[i].num+=inputval
                  cookieArr[i].price=price
                  same = true;
                  break;
                }
              }
    
              if(!same){
                var obj = {id: id, num: 1,price:price};
                cookieArr.push(obj);
              }
      
              $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
              })
            }
            console.log($.cookie("goods"));
            alert("添加成功,您确认要购买这"+inputval+"件吗")
        })

        // $("#main").on("change","#input",function(){
        //     var cookieArr = JSON.parse($.cookie("goods"));
        //     // console.log(cookieArr)
        //     var asd=location.search
        //        var add=asd.split("?",2)
        //     //    console.log(add[1])
        //     var inputval=Number($("#input").val())
            
        //     console.log(inputval)
        //     for(var i=0;i<cookieArr.length;i++){
        //         if(cookieArr[i].id==add[1]){
        //             cookieArr[i].num=inputval+cookieArr[i].num
        //         }
        //     }
        //     //    console.log(cookieArr)
        //     $.cookie("goods", JSON.stringify(cookieArr), {
        //                 expires: 7
        //               })
        // })
    }
    return{
        bigimg,
        data,
        cookie
    } 
});