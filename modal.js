let modal=document.getElementById("modal");
let img=document.getElementById("img0");
let caption=document.getElementById("caption");
var close=document.getElementById("close");
let showcases=document.getElementsByClassName("showcase");
for(var i=0;i<showcases.length;i++){
var imgs=showcases[i].getElementsByTagName("img");
for(var x=0;x<imgs.length;x++){
imgs[x].setAttribute("tabindex","0");
imgs[x].setAttribute("loading","lazy");
imgs[x].onclick=function(){img.src=this.src;
caption.innerText=this.alt;
modal.style.display="block";};
imgs[x].onkeydown=function(k){if(k.key=="Enter"){img.src=this.src;
caption.innerText=this.alt;
modal.style.display="block";}}}}
close.onclick=function(){modal.style.display="none";};
close.onkeydown=function(k){if(k.key=="Enter"){modal.style.display="none";}};