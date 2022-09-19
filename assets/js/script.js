var body = document.getElementsByTagName('body')[0];
var button = document.getElementById('btn-contrast');
button.addEventListener('click', function (e) {
    if (body.classList.contains('hide-images')) {
        body.classList.remove("hide-images");
        button.innerHTML = 'High Contrast';
    } else {
        body.classList.add("hide-images");
        button.innerHTML = 'Normal';
    }

});
// $("#btn-contrast").on("click", function () {
//     $("body").toggleClass("hide-images");
//     $(this).html(texts[i++ % 2])
// });

var sections = document.querySelectorAll('.section');
sections.forEach(function (elm) {
    elm.addEventListener('mouseover', function (e) {
        sections.forEach(function (elm) {
            elm.classList.remove('active');
        });
    });
});
// $(".section").hover(function () {
//     $(".section").removeClass("active");
// });

