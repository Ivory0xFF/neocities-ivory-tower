let modal = document.getElementById("modal");
let img = document.getElementById("img0");
let caption = document.getElementById("caption");
let imgs = document.querySelectorAll(".showcase img");

for (var i = 0; i < imgs.length; i++) {
    let c = imgs[i];
    c.tabIndex = "0";
    c.onclick = function () {
        img.src = c.src;
        caption.innerText = c.alt;
        modal.style.display = "flex";
        (c.parentElement.classList.contains("pixelart")) || c.classList.contains("pixelart") ? img.className = "pixelart" : img.className = "";    
    };
    c.addEventListener("keydown", function onEvent(k) {
        if (k.key === "Enter") {
            c.click();
        }
    });
}

modal.onclick = function () {
    modal.style.display = "none";
};

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        modal.style.display = "none";
    }
});