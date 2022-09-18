var texts = ["High Contrast", "Normal"];
var i = 1;
$("button").on("click", function () {
    $("body").toggleClass("hide-images");
    $(this).html(texts[i++ % 2])
});

$(".section").hover(function () {
    $(".section").removeClass("active");
});