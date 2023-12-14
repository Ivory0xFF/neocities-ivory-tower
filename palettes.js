window.onload = function () {
    var p = document.querySelectorAll(".palette");
    for (i = 0; i < p.length; i++) {
        var cols = p[i].getAttribute("alt").split(";");
        let div = document.createElement("div");
        let tag = document.createElement("div");
        tag.className = "tag";
        div.append(tag);
        var canv = document.createElement("canvas", {alpha: false});
        var ctx = canv.getContext("2d");
        canv.width = cols.length - 1;
        canv.height = 1;
        document.getElementById("palettes").append(div);
        // Setup done
        for (a = 1; a < cols.length; a++) { 
            ctx.fillStyle = "#" + cols[a];
            // Draw the image in parts, each color being 1 pixel tall and wide
            ctx.fillRect(a - 1, 0, 1, 1);
            let bloc = document.createElement("div");
            bloc.className = "color";
            // Make it selectable with the tab key
            bloc.tabIndex = "0";
            // Select the entire hexcode on click
            bloc.onclick ="window.getSelection().setBaseAndExtent(this,0,this,1)";
            p[i].append(bloc);
            // Fragment things into 3 2 character long parts
            var m = cols[a].match(/.{2}/g);
            // Inverted hex
            let ihex = "";
            for (l = 0; l < m.length; l++) {
                // Convert, invert, convert stuff from and back to base 16
                ihex += (255 - parseInt(m[l], 16)).toString(16);
                // Hex magic that prevents 5 character long hexcodes
                if (ihex.length % 2 != 0) {
                    ihex += "0";
                }
            }
            bloc.style.cssText = "background-color:#" + cols[a] + ";color:#" + ihex;
            bloc.innerText = cols[a];
        }
        var dataUrl = canv.toDataURL();
        // Use the name provided for the palette or a placeholder
        var name = (cols[0] != "") ? cols[0] : "palette";
        // If the name's a placeholder don't display it
        tag.innerHTML = (name == "palette") ? "" : name + "<br>";
        div.append(p[i]);
        tag.innerHTML += "<a href=" + dataUrl + " download=" + name + "><img class=pixelart src=" + dataUrl + "></a>"; // Combine it all
        // Remove unnecessary information to save that tiny bit of ram
        p[i].removeAttribute("alt");
    }
};