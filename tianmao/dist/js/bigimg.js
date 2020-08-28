define([
    'require',
    'jquery'
], function() {
    function bigimg(){
       $("#main_img_small").mouseenter(function(){
           $("#main_img_kz").add("#main_img_big").show()
       }).mouseleave(function(){
        $("#main_img_kz").add("#main_img_big").hide()
       })
    }
    return{
        bigimg
    } 
});