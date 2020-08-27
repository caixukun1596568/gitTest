define(['jquery'],function($){
    function num(){
       $.ajax({
           url:"../data/number.json",
           success:function(arr){
               var str=``
               for(var i=0;i<arr.length;i++){
                   str+=`
                   <option >${arr[i].city}&nbsp;&nbsp;&nbsp;&nbsp;${arr[i].code}</option>
                   `

               }
              $("#select").html(str)
              console.log(arr)
            
           },
           error:function(){
               console.log(error)
           }
       })
    }
    
    function number(){
        $("#input1").focus(function(){
      $("#input_value").css("display","block")
        $("#input_value").css("color","#999")
        // console.log("adsasdasd")
   })
      $("#input1").blur(function(){
        var pvalue = $("#input1").val()
        if(!pvalue){
            $("#input_value").css("display","none")
        }else{
            if (/^1[3|4|5|8][0-9]\d{4,8}$/.test(pvalue)) {
                $("#input_value").css("display","none")
                $("#input_value").html("√该手机号可用")
                $("#input_value").css("color","green") 

            } else {
                $("#input_value").html("请填正确手机号,Thanks for you") 
                $("#input_value").css("color","red")
            }
        }
      })
    //   console.log(sum)
    }
    
    return{
        num:num,
        number:number,

    }
})