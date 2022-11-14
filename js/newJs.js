let mainVideo = document.getElementById("mainPageVideo");
let int = null;

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        /*mainVideo.classList.add("filter-blur");*/
        int = setInterval(blurring, 10);
    }
    else if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
    {
        mainVideo.style.position = "static";
    }
    else
    {
        mainVideo.style.position = "fixed";
        /*mainVideo.classList.remove("filter-blur");*/
        int = setInterval(blurring, 10);
        }
}


let load = 0;

function blurring() {
load++
if (load > 99) {
clearInterval(int);
}
mainVideo.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function unBlurring() {
load--
if (load > 15) {
clearInterval(int);
}
mainVideo.style.filter = `blur(${scale(load, 100, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}