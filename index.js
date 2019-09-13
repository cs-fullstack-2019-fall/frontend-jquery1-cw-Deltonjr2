// $(window).on("load", function(){
//     // alert("Locked and Loaded");
// });

// !! : set classes using JQuery 

$("#myElement").click(function(){
    alert("You clicked me!");

});

// !! : this does not meet an reuirement for exercise 1 
setInterval(function() {
$("#myElement").hide();
 setTimeout(function() {
        $("#myElement").fadeIn('normal');
    });
}, 4000);