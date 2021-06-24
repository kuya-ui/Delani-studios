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
$(document).ready(function() {
    $(".image3").click(function() {
        $("#product").slideToggle();
        $("#prod-content").slideToggle();
    });
});
$(document).ready(function() {
    $(".image1").click(function() {
        $("#design1").slideToggle();
        $("#content").slideToggle();
    });
});
$(document).ready(function() {
    $(".image2").click(function() {
        $("#dev").slideToggle();
        $("#dev-content").slideToggle();
    });
});

function max() {
    let control = document.getElementById('controls').value;
    if (control == "") {
        alert("invalid response");
    } else {
        alert("We have received your message. Thank you fro reaching out to us")
    };
};