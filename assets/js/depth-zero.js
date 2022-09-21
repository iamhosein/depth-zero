var body = document.querySelector('body');

function randomRGB() {
    return "rgb(" + Math.random() * 254 + "," + Math.random() * 254 + "," + Math.random() * 254 + ")";
}

fetch('./assets/data/sea.json')
    .then((response) => response.json())
    .then((data) => {
        var rows = Math.floor(data.length / 3);
        var $grid = document.getElementsByClassName('sea-grid')[0];

        for (var col = 0; col < 3; col++) {
            var $column = document.createElement('div');
            $column.classList.add('sea-grid-column');
            if (col == 2) {
                $column.classList.add("sea-grid-column-large");
            }
            for (var row = 0; row < rows; row++) {
                var item = data[col * rows + row];

                let $seaLink = document.createElement('a');
                $seaLink.href = item.url;
                $seaLink.innerHTML = item.title;

                let $seaImage = document.createElement('img');
                $seaImage.src = item.img;

                let $seaHeader = document.createElement('h2');
                $seaHeader.appendChild($seaLink);

                let $seaBlockquote = document.createElement('blockquote');
                $seaBlockquote.innerHTML = item.text.trim();

                var $row = document.createElement('section');
                $row.classList.add('sea');
                $row.appendChild($seaImage);
                $row.appendChild($seaHeader);
                $row.appendChild($seaBlockquote);

                $column.appendChild($row);
            }

            $grid.appendChild($column);
        }
    });



var $container = document.getElementById('responsive-boxes'); // $("#responsive-boxes");
var text = document.getElementById('main-content').innerText; // $("#main-content").text();
var words = text.split(' ');
for (var i = 0; i < 500; i++) {
    var id = "id-" + i;

    var word = words[Math.ceil(Math.random() * words.length)];
    if (!word || !word.length) {
        continue;
    }
    word = "<span>" + word.split('').join("</span><span>") + "</span>";

    var $elm = document.createElement('span');
    $elm.classList.add('happy-color');
    $elm.classList.add('responsive-boxes');
    $elm.id = id;
    $elm.style.background = randomRGB();
    $elm.innerHTML = word;

    $container.appendChild($elm);
}

const state = {
    left: 50,
    top: 30,
    directionX: 1,
    directionY: 1,
    speed: 10,
    movingByMouse: false,
    containerWidth: window.innerWidth,
    containerHeight: window.innerHeight,
    interval: {},
    animation: null,
    movingByMouseTimer: {},
    ball: document.querySelector('#ball')
};

function mover() {
    if (state.movingByMouse) {
        return;
    }

    state.left += state.directionX * state.speed;
    state.top += state.directionY * state.speed;
    state.ball.style.left = `${state.left}px`;
    state.ball.style.top = `${state.top}px`;
    if (!state.animation) {
        state.animation = requestAnimationFrame(mover);
    }
    if (state.left > state.containerWidth - state.ball.clientWidth || state.left < 0) {
        state.directionX *= -1;
    }
    if (state.top > state.containerHeight - state.ball.clientHeight || state.top < 0) {
        state.directionY *= -1;
    }

}

// state.interval = setInterval(mover, 50);
state.animation = requestAnimationFrame(mover);

function moveCircle(e) {
    state.movingByMouse = true;
    cancelAnimationFrame(state.animation);
    if (state.movingByMouseTimer) {
        clearTimeout(state.movingByMouseTimer);
    }
    let x = e.clientX;
    let y = e.clientY;
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
}

document.addEventListener('mousemove', moveCircle);
document.addEventListener('mouseout', () => {

    state.movingByMouseTimer = setTimeout(() => {
        state.movingByMouse = false;
        state.animation = requestAnimationFrame(mover);
    }, 1000);
});


/*$(document).ready(function () {

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

    function randomRGB() {
        return "rgb(" + Math.random() * 254 + "," + Math.random() * 254 + "," + Math.random() * 254 + ")";
    }

    var $container = $("#responsive-boxes");
    var text = $("#main-content").text();
    var words = text.split(' ');
    for (var i = 0; i < 500; i++) {
        var id = "id-" + i;

        var r = Math.random() * 254;
        var g = Math.random() * 254;
        var b = Math.random() * 254;

        var word = words[Math.ceil(Math.random() * words.length)];
        if (!word || !word.length) {
            continue;
        }

        word = "<span>" + word.split('').join("</span><span>") + "</span>";

        var $elm = $("<span class='happy-color' id='" + id + "' style='width: auto; background:rgb(" + r + "," + g + "," + b + ")'>" + word + "</span>");
        $elm.addClass("responsive-boxes");
        $container.append($elm);
    }
}); */