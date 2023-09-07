window.onload=function(){
var p=document.getElementsByClassName("palette");
for (i=0;i<p.length;i++){
var colors=p[i].getAttribute("alt").split(";");
for (a=0;a<colors.length;a++){
let div=document.createElement("div");
p[i].append(div);
var m=colors[a].match(/.{2}/g);
let ihex="";
for (l=0;l<m.length;l++){if(m[l]!="ff"){ihex+=(255-parseInt(m[l],16)).toString(16);}else{ihex+="00"}}
div.style.cssText="background-color:#"+colors[a]+";color:#"+ihex;
div.className="color";
div.innerText=colors[a];
div.setAttribute("onclick",`navigator.clipboard.writeText("${colors[a]}")`);
}}};