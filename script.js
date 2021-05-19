$(".start").click(function() {
    $(".question1").show();
    $(".start").hide();
});
$(".outgoing").click(function() {
    let color = "red";
    $(".question").hide();
    $(".question2").show();

});
$(".shy").click(function() {
    let color = "blue";

    $(".question").hide();
    $(".question2").show();
});