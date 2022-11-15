let mainVideo = document.getElementById("mainPageVideo");

window.onscroll(function() {
    let scroll = window.scrollTop();
    mainVideo.style.filter = "blur(" + (scroll) + "px"
})