define(['jquery'],function($){
    function zhuce(){
     $("#btn").on("click",function(){
        $.ajax({
            url:"../php/insert.php",
            data:{
               username:$("#input1").val(),
               password:$("#input2").val(),
               repassword:$("#input3").val()
            },
            success:function(arr){
                console.log(arr)
            },
            error: function(msg){
                console.log(msg);
            }
        })
     })
    }
    return {
        zhuce,
    }
})