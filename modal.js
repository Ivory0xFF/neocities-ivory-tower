let modal = document.getElementById("modal");
let img = document.getElementById("img0");
let caption = document.getElementById("caption");
let x = document.getElementById("close");
let imgs = document.querySelectorAll(".showcase img");

for (var i = 0; i < imgs.length; i++) {
    let c = imgs[i];
    c.tabIndex = "0";
    c.onclick = function () {
        img.src = c.src;
        caption.innerText = c.alt;
        modal.style.display = "flex";
        (c.classList.contains("pixelart")) ? img.className = "pixelart" : img.className = "";    
    };
    c.addEventListener("keydown", function onEvent(k) {
        if (k.key === "Enter") {
            c.click();
        }
    });
}

x.onclick = function () {
    modal.style.display = "none";
};
x.onkeydown = function (k) {
    if (k.key == "Enter") {
        modal.style.display = "none";
    }
};