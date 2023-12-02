window.onload = function () {
    var b = document.getElementsByClassName("palette");
    var p = Array.from(b);
    var s = document.getElementById("palettes");
    for (i = 0; i < p.length; i += 1) {
        var colors = p[i].getAttribute("alt").split(";");
        let div = document.createElement("div");
        let tag = document.createElement("div");
        div.append(tag);
        tag.className = "tag";
        tag.innerHTML = (colors[0] != "") ? colors[0] + "<br>" : "";
        let img = document.createElement("img");
        img.className = "pixelart";
        var canv = document.createElement("canvas", {alpha: false});
        var ctx = canv.getContext("2d");
        canv.width = colors.length - 1;
        canv.height = 1;
        s.append(div);
        for (a = 1; a < colors.length; a += 1) {
            ctx.fillStyle = "#" + colors[a];
            ctx.fillRect(a - 1, 0, a + 1, 1);
            let bloc = document.createElement("div");
            bloc.className = "color";
            bloc.tabIndex = "0";
            bloc.setAttribute("onclick", "window.getSelection().setBaseAndExtent(this,0,this,1)");
            p[i].append(bloc);
            var m = colors[a].match(/.{2}/g);
            let ihex = "";
            for (l = 0; l < m.length; l += 1) {
                ihex += (255 - parseInt(m[l], 16)).toString(16);
                if (ihex.length % 2 != 0) {
                    ihex += "0"
                }
            }
            bloc.style.cssText = "background-color:#" + colors[a] + ";color:#" + ihex;
            bloc.innerText = colors[a]
        }
        img.src = canv.toDataURL();
        div.append(p[i]);
        tag.append(img);
        p[i].removeAttribute("alt")
    }
};