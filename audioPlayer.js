var _player = document.getElementById("player"),
    _playlist = document.getElementById("playlist"),
    _stop = document.getElementById("stop");

function playlistItemClick(clickedElement) {
    var selected = _playlist.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    clickedElement.classList.add("selected");

    _player.src = clickedElement.getAttribute("data-ogg");
    _player.play();
}

function playNext() {
    var selected = _playlist.querySelector("li.selected");
    if (selected && selected.nextSibling) {
        playlistItemClick(selected.nextSibling);
    }
}

_stop.addEventListener("click", function () {
    _player.pause();
});
_player.addEventListener("ended", playNext);
_playlist.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "LI") {
        playlistItemClick(e.target);
    }
});​
