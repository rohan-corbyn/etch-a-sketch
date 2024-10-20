
createCanvas();
createEvents();

function createCanvas() {
    const pixels = document.createDocumentFragment();

    for (let c = 0; c < 64; c++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let r = 0; r < 64; r++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
        pixels.appendChild(row);
    }
    document.getElementById("canvas").appendChild(pixels);
}

function createEvents() {
    document.querySelectorAll(".pixel").forEach(pixel => {
        pixel.addEventListener("mouseover", (event) => {event.target.classList.add("black")});
    });

    document.getElementById("reset-button").onclick = (event) => {
        document.querySelectorAll(".pixel").forEach(pixel => {pixel.classList.remove("black")})};
}