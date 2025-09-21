import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

var gltfloader = new GLTFLoader();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 9);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.cssText = "z-index:-1;position:fixed;top:0;width:100%";

function lerp(from, to, amount) {
	return from * (1 - amount) + to * amount;
}

function getScroll() {
	return window.scrollY / (document.body.scrollHeight - window.innerHeight);
}

gltfloader.load("/ass/muma/muma.glb", function (gltf) {
    let model = gltf.scene;

    const mixer = new THREE.AnimationMixer(model);
    mixer.clipAction(THREE.AnimationClip.findByName(gltf.animations, "idle")).play();

    scene.add(model);

    let clock = new THREE.Clock();
		let scroll = getScroll();
		let lastScroll = scroll;

		function render() {
        model.rotation.y = Date.now() / 32000;
				scroll = lerp(lastScroll, getScroll(), 0.5 * clock.getDelta());
				camera.rotation.x = 0 + (Math.PI / 32 * scroll);
				camera.position.z = 2 - scroll * 1.4;
				camera.position.y = 0.5 + scroll * 0.9;
				lastScroll = scroll;
        renderer.render(scene, camera);
        mixer.update(clock.getDelta() * 0.66);
        requestAnimationFrame(render);
    };
    render();
})
