import * as THREE from"https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import{OrbitControls}from"https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import{GLTFLoader}from"https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
function create_viewport(mesh,col){
const gltfloader=new GLTFLoader();
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(50,1,0.1,99);
const renderer=new THREE.WebGLRenderer();
const light=new THREE.PointLight(0xffffff);
const amblight=new THREE.AmbientLight(0xDDDDDD);
new OrbitControls(camera,renderer.domElement);
light.position.set(0,100,50);
renderer.setClearColor(col,1);
renderer.setSize(128,128);
renderer.outputEncoding=THREE.sRGBEncoding;
renderer.gammaFactor=2.2;
renderer.domElement.style.cssText="";
camera.position.z=5;
scene.add(light);
scene.add(amblight);
document.getElementById(mesh).appendChild(renderer.domElement);
gltfloader.load(`/${mesh}.gltf`,function(gltf){scene.add(gltf.scene);setInterval(function(){gltf.scene.rotation.y+=.01},10);});
var render=function(){requestAnimationFrame(render);renderer.render(scene,camera);};
render();}
create_viewport("Banan",0xCCCCFF);
create_viewport("BobaTea",0x5b224e);