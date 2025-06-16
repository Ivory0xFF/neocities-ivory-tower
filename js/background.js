import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
const gltfloader = new GLTFLoader();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 99);
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0xffffff, 0);
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.cssText = "z-index:-1;position:fixed;top:0;width:100%";
camera.position.z = 2;
camera.position.y = .8;
let model;
gltfloader.load("/ass/muma/muma.glb", function (gltf) {
    model = gltf.scene;

    const mixer = new THREE.AnimationMixer(model);
    mixer.clipAction(THREE.AnimationClip.findByName(gltf.animations, "idle")).play();

    scene.add(model);
    function render() {
        model.rotation.y = Date.now() / 32000;
        renderer.render(scene, camera);
        mixer.update(Date.now());
        requestAnimationFrame(render);
    };
    render();
})