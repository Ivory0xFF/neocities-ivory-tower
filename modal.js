let modal = document.getElementById("modal");
let img = document.getElementById("img0");
let caption = document.getElementById("caption");
let imgs = document.querySelectorAll(".showcase img");

for (var i = 0; i < imgs.length; i++) {
    let c = imgs[i];
    c.tabIndex = "0";
    c.id = c.alt.split(",")[0].replace(/ |, /g, "-");
    c.onclick = function () {
        img.src = c.src;
        caption.innerHTML = c.alt;
        modal.style.display = "flex";
        window.location.hash = c.id;
        (c.parentElement.classList.contains("pixelart")) || c.classList.contains("pixelart") ? img.className = "pixelart" : img.className = ""; 
    };
    if ("#" + c.id == window.location.hash) {
        c.click();
    }
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
