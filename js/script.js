
// $(document).ready(function(){
//     $("#main").mouseover(function(){
//         $("#maxmillan").show();
//     });
// });
// $(document).ready(function(){
//     $("#main").mouseout(function(){
//         $("maxmillan").hide();
//     });
// });
$(document).ready(function(){
    $(".image3").click(function(){
        $("#product").slideToggle();
        $("#prod-contentt").slideToggle();
    });
});
$(document).ready(function(){
    $(".image1").click(function(){
        $("#design1").slideToggle();
        $("#contentt").slideToggle();
    });
});
$(document).ready(function(){
    $(".image2").click(function(){
        $("#dev").slideToggle();
        $("#dev-contentt").slideToggle();
    });
});