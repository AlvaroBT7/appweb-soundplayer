function mouseClickSound() {
    const mouse = new Audio("/sounds/click.mp3");
    addEventListener("click", () => {
        mouse.load()
        mouse.play();
    });
}

export default mouseClickSound