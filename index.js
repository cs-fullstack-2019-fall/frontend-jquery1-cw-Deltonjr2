// $(window).on("load", function(){
//     // alert("Locked and Loaded");
// });

$("#myElement").click(function(){
    alert("You clicked me!");

});

setInterval(function() {
$("#myElement").hide();
 setTimeout(function() {
        $("#myElement").fadeIn('normal');
    });
}, 4000);