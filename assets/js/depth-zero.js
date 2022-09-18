

$(document).ready(function () {

    $.get("./assets/data/sea.json").then(function (data) {
        var rows = Math.floor(data.length / 3);
        var $grid = $(".sea-grid");
        for (var col = 0; col < 3; col++) {
            var $column = $('<div class="sea-grid-column"></div>');
            if (col == 2) {
                $column.addClass("sea-grid-column-large");
            }
            for (var row = 0; row < rows; row++) {
                var item = data[col * rows + row];
                var $row = $('<section class="sea"><img src="' + item.img + '"><h2><a href="' + item.url + '">' + item.title + '</a></h2><blockquote>' + item.text.trim() + '</blockquote></section>');
                $column.append($row);
            }
            $grid.append($column);
        }
    });

    var $container = $("#responsive-boxes");
    var text = $("#main-content").text();
    var words = text.split(' ');
    for (var i = 0; i < 500; i++) {
        var id = "id-" + i;
        var r = Math.random() * 254;
        var g = Math.random() * 254;
        var b = Math.random() * 254;
        var word = words[Math.ceil(Math.random() * words.length)];
        var $elm = $("<span id='" + id + "' style='width: auto; background:rgb(" + r + "," + g + "," + b + ")'>" + word + "</span>");
        $elm.addClass("responsive-boxes");
        $container.append($elm);
    }
});