define(["require","jquery","jquery-cookie"],function(){
    function data(){
      mathone()
      
        $.ajax({
            url:"../data/index.json",
         success:function(arr){
            //  console.log(arr)
            var cookieArr = JSON.parse($.cookie("goods"))
            //  console.log(cookieArr)
            var newArr = []
            for(var i=0;i<cookieArr.length;i++){
                for(var j=0;j<arr.length;j++){
                    if(arr[j].id == cookieArr[i].id){
                        arr[j].num = cookieArr[i].num;
                      newArr.push(arr[j]);
                     break;
                    }
                }
            }
            // console.log(newArr)
             let str=``
             for(var i=0;i<newArr.length;i++){
                 str+=`
                 <section id="card_one">
                 <section id="one_left">
                 <input class="input" type = "checkbox"/>
                 <img src="${newArr[i].img}" alt="">
                 <i>
                     <b>${newArr[i].main1}</b>
                    <b>${newArr[i].main2}</b>
                 </i>
             </section>
          <section id="one_right">
                <i>${newArr[i].price}</i>
                <aside>
                 <button class="btn_acc" id="${newArr[i].id}">-</button>
                       <b id="numer">${newArr[i].num}</b>
                     <button id="${newArr[i].id}" class="btn_add">+</button>
                </aside>
               <span class="money">￥${(cookieArr[i].num)*(cookieArr[i].price)}</span> 
                <button id="btn_move" class="btn_move">删除</button>
          </section>   
          </section> 
                 `  
             }
             $("#card_main").html(str)
         },
         error:function(){
            console.log(error)
         }
         })
     }
     // input框子
      function input(){
        $("#allCheck").click(function(){
            $(".input").prop("checked",this.checked);
        })
        $("#cart_all").on("change","input",function(){
            
            input1()
           })
      } 

      //input 单独函数
      function input1(){
        var sum=0
        $(".input").each(function(){
          if($(this).prop("checked")){
              var asd
          asd=$(this).parent().siblings("section").find('span').html()
          var b=asd.split("￥",2)
        var c=b[1]
          sum+=Number(c)
        }
        })
          $("#header_right span").html("￥"+sum)
      }
      //数量         
      function sum(){
          $("#card_main").on("click",".btn_add",function(){
            var money
            var cookieArr = JSON.parse($.cookie("goods"))
            var id = this.id; //获取当前ID
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                  cookieArr[i].num++;
                  $(this).siblings("#numer").html(cookieArr[i].num)
                  
                  var  money=(cookieArr[i].num)*(cookieArr[i].price)
                //   var asd=$(this).parent().siblings("span").html()
                //   var add=asd.split("￥")
                //   var only=Number(add[1])
                //  var  money=(cookieArr[i].num)*only
                //   console.log(money)
                  $(this).parent().siblings("span").html("￥"+money)
                  break;
                }
              }
              // console.log(cookieArr)
              $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
              })
              $(this).parent().parent().siblings("#one_left").find(".input").prop("checked",false)
              input1()
              mathone()
          })
          $("#card_main").on("click",".btn_acc",function(){
            var cookieArr = JSON.parse($.cookie("goods"))
            // var id = $(this).siblings(".btn_add") 
            var id = this.id; //获取当前ID
            console.log(id)
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    if(cookieArr[i].num<=1){
                        cookieArr[i].num=1
                    }else{
                        cookieArr[i].num--;
                    }
                    $(this).siblings("#numer").html(cookieArr[i].num)
                    var  money=(cookieArr[i].num)*(cookieArr[i].price)
                     $(this).parent().siblings("span").html("￥"+money)
                  break; 
                }
              }
              console.log(cookieArr)
              $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
              })   
              $(this).parent().parent().siblings("#one_left").find(".input").prop("checked",false)
              input1() 
              mathone()
        })
        // input()
      }
    //计算总量
    function mathone(){
      var cookieStr = $.cookie("goods");
      var mathtwo = 0
      if(cookieStr){
        var cookieArr = JSON.parse(cookieStr);
        for(var i = 0; i < cookieArr.length; i++){
          mathtwo += cookieArr[i].num;
        }
      }
      $("#header_left_math").html(mathtwo);
    }

   // 
   //删除
   function delect(){
       $("#card_main").on("click",".btn_move",function(){
         //搞定input框子
         $(this).parent().siblings("#one_left").find(".input").prop("checked",false)
              input1()
          // 删除页面 
        $(this).parent().parent().remove()
        //删除cookie
        var id=$(this).siblings("aside").find(".btn_add").attr("id")
        var cookieArr = JSON.parse($.cookie("goods"));
        var index = cookieArr.findIndex(item => item.id == id);
        //删除
        cookieArr.splice(index, 1);
        if(cookieArr.length){
          $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
          })
        }else{
          $.cookie("goods", null);
        }
        mathone()
        input()
       })
   }
    return{
        input,
        sum,
        data,
        delect,
    }
})