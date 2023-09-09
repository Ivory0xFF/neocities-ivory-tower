let modal=document.getElementById("modal");
let img=document.getElementById("img0");
let caption=document.getElementById("caption");
let x=document.getElementById("close");
let showcases=document.getElementsByClassName("showcase");
for(var i=0;i<showcases.length;i++){
var imgs=showcases[i].getElementsByTagName("img");
for(var z=0;z<imgs.length;z++){
imgs[z].tabIndex="0";
imgs[z].loading="lazy";
imgs[z].onclick=function(){img.src=this.src;
caption.innerText=this.alt;
modal.style.display="block";};
imgs[z].onkeydown=function(k){if(k.key=="Enter"){img.src=this.src;
caption.innerText=this.alt;
modal.style.display="block";}}}}
x.onclick=function(){modal.style.display="none";};
x.onkeydown=function(k){if(k.key=="Enter"){modal.style.display="none";}};