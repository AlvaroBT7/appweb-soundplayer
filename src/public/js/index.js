import mouseClickSound from "/js/mouse-click.js";
import closeMenu from "/js/menu.js";+
closeMenu(".sec");
mouseClickSound();
const bntPlay = document.getElementById("btn-play");
const bntPause = document.getElementById("btn-pause");
const select = document.getElementById("select");
let element = select[select.options.selectedIndex];
let sound = new Audio(element.value);
select.addEventListener("change", () => {
    sound.load();
    element = select[select.options.selectedIndex];
    sound = new Audio(element.value);
    if (bntPause.style.backgroundColor !== "#fff") {
        bntPause.style.backgroundColor = "#fff";
    }
});

bntPlay.addEventListener("click", () => {
    sound.load();
    sound.play();
    bntPause.style.backgroundColor = "#0f0";
});

bntPause.addEventListener("click", () => {
    if (sound.ended) return
    if (sound.paused && !sound.ended) {
        sound.play();
        return bntPause.style.backgroundColor = "#0f0";
    }
    else if (!sound.paused && !sound.ended) {
        sound.pause();
        bntPause.style.backgroundColor = "#f00";
    }
});