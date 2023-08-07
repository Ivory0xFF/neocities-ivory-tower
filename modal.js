let modal=document.getElementsByClassName("modal")[0];
let showcases=document.getElementsByClassName("showcase");
var close=document.getElementsByClassName("close")[0];
for(var i=0;i<showcases.length;i++){
var imgs=showcases[i].getElementsByTagName("img");
for(var x=0;x<imgs.length;x++){
imgs[x].setAttribute("tabindex","0");
imgs[x].setAttribute("loading","lazy");
imgs[x].onclick=function(){modal.style.display="block";
document.getElementsByClassName("img0")[0].src=this.src;
document.getElementsByClassName("caption")[0].innerHTML=this.alt;};
imgs[x].onkeydown=function(k){if(k.key=="Enter"){modal.style.display="block";
document.getElementsByClassName("img0")[0].src=this.src;
document.getElementsByClassName("caption")[0].innerHTML=this.alt;}}}}
close.onclick=function(){modal.style.display="none";};
close.onkeydown=function(k){if(k.key=="Enter"){modal.style.display="none";}};