
function closeMenu(blurELement) {
  const blurElement = document.querySelector(blurELement);
  const btn = document.getElementById("btn");
  const bg = document.querySelector(".bg");
  const footer = document.querySelector("footer");
  const sound = new Audio("/sounds/bg-music.mp3");
  sound.volume = 0.05;
  const clickEvent = btn.addEventListener("click", () => {
    sound.play();
    bg.style.display = "none";
    blurElement.style.filter = "none";
    footer.style.filter = "none";
    removeEventListener("click", clickEvent);
  });
}

export default closeMenu;