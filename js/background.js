import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
const gltfloader = new GLTFLoader();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 99);
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0xffffff, 0);
renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.cssText = "z-index:-1;position:absolute;top:0%;width:100%";
camera.position.z = 4;
let model;
gltfloader.load("/ass/Banan.gltf", function (gltf) {
    model = gltf.scene
    scene.add(model);
    model.traverse((o) => {
        if (o.isMesh) o.material = new THREE.MeshNormalMaterial({wireframe: true});
    });
    function render() {
        model.rotation.y = Date.now() / 16000;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    render();
})