window.onload = function () {
    var p = document.getElementsByClassName("palette");
    for (i = 0; i < p.length; i++) {
        var ctx = p[i].getContext("2d");
        var colors = p[i].getAttribute("alt").split(";");
        p[i].width = colors.length * 64;
        p[i].height = 64;
        for (a = 0; a < colors.length; a++) {
            ctx.fillStyle = "#" + colors[a];
            ctx.fillRect(a * 64, 0, 64, 64);
            var m=colors[a].match(/.{2}/g);
            console.log(m);
            let ihex="";
            for (l=0;l<m.length;l++){
                if(m[l]!="ff"){ihex+=(255-parseInt(m[l],16)).toString(16);}else{ihex+="00"}
            }
            ctx.fillStyle="#"+ihex;
            ctx.font="32px Monospace";
            ctx.fillText("WOW",a*64,64);
        }
    }
};