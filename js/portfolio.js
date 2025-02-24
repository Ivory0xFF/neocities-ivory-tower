import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
function create_viewport(mesh, col) {
	const gltfloader = new GLTFLoader();
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 99);
	const renderer = new THREE.WebGLRenderer();
	const light = new THREE.PointLight(0xffffff, 2);
	new OrbitControls(camera, renderer.domElement);
	light.position.set(0, 2, 0);
	renderer.setClearColor(col, 1);
	renderer.setSize(128, 128);
	renderer.domElement.style.cssText = "";
	document.getElementById(mesh).appendChild(renderer.domElement);
	camera.position.z = 5;
	scene.add(light);
	scene.add(new THREE.AmbientLight(0xffffff, 2));
	gltfloader.load(`/ass/${mesh}.gltf`, function (gltf) {
		scene.add(gltf.scene);
		setInterval(function () {
			gltf.scene.rotation.y += .01
		}, 10);
	});
	function render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
}
create_viewport("Banan", 0xbbccff);