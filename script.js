$(document).ready(function() {
    $(".section2").hide();
    $(".section3").hide();
});

$(".chris").click(function() {
    $(".section2").show();
    $(".pic1").hide();
    $(".section3").hide();

});

$(".firstb").click(function() {
    $(".pic1").show();
    $(".section2").hide();
});

$(".secondb").click(function() {
    $(".section3").show();
    $("pic1").hide();
    $(".section2").hide();

});