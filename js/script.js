//$("#col").hover(function){
    //$(#text).fadeTo("slow1");
  //  $(.img-fluid).fadeTo("slow" 0.4);
//}function(){
    //$("#text").fadeTo("slow", 0);
  //  $(".img-fluid").fadeTo("slow", 1);
//}
$(document).ready(function){
    $("div#design").click(function){
        $("div#content").toggle();
        $("div#design").toggle();
    }
});
$("div#content").click(function){
    $("div#content").toggle();
    $("div#design").toggle();s
}