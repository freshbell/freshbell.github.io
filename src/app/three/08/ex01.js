import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';

export default function example(canvasRef) {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas:canvasRef.current,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
	renderer.shadowMap.enabled = true; // 그림자 설정 -> light도 설정해야함
	renderer.shadowMap.type = THREE.BasicShadowMap;
	// Scene
	const scene = new THREE.Scene();

	// Camera
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.y = 1.5;
	camera.position.z = 4;
	scene.add(camera);

	// Light
	// 똑같이 은은하게 비춰줌 - 단독으로 사용하지 않고 다른 조명이랑 함꼐
	const ambientLight = new THREE.AmbientLight('white', 0.5);
	scene.add(ambientLight);

	// 태양광 같은 조명
	const light = new THREE.DirectionalLight('red', 0.5);
	light.position.y = 3;
	scene.add(light);

	// 그림자 설정 -> 메쉬도 설정해야함.
	light.castShadow = true;
	
	// 그림자 해상도
	light.shadow.mapSize.width = 512;
	light.shadow.mapSize.height = 512;
	light.shadow.radius = 5;
	// light helper
	const lightHelper = new THREE.DirectionalLightHelper(light);
	scene.add(lightHelper);

	// Controls
	const controls = new OrbitControls(camera, renderer.domElement);

	// geometry
	const planeGeometry = new THREE.PlaneGeometry(10, 10);
	const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
	const sphereGeometry = new THREE.SphereGeometry(0.7, 16, 16);
	
	// material
	const material1 = new THREE.MeshStandardMaterial({color: 'white'});
	const material2 = new THREE.MeshStandardMaterial({color: 'royalblue'});
	const material3 = new THREE.MeshStandardMaterial({color: 'gold'});

	// mesh
	const plane = new THREE.Mesh(planeGeometry, material1);
	const box = new THREE.Mesh(boxGeometry, material2);
	const sphere = new THREE.Mesh(sphereGeometry, material3);

	// set
	plane.rotation.x = -Math.PI * 0.5;
	box.position.set(1, 1, 0);
	sphere.position.set(-1, 1, 0);

	// 그림자 설정
	plane.receiveShadow = true;
	box.castShadow = true;
	box.receiveShadow = true;
	sphere.castShadow = true;
	sphere.receiveShadow = true;

	scene.add(plane, box, sphere);

	// AxesHelper
	const axesHelper = new THREE.AxesHelper(3);
	scene.add(axesHelper);

	// Dat GUI
	const gui = new dat.GUI();
	gui.add(camera.position, 'x', -5, 5, 0.1).name('카메라 X');
	gui.add(camera.position, 'y', -5, 5, 0.1).name('카메라 Y');
	gui.add(camera.position, 'z', 2, 10, 0.1).name('카메라 Z');

	gui.add(light.position, 'x', -5, 5, 0.1).name('라이트 X');
	gui.add(light.position, 'y', -5, 5, 0.1).name('라이트 Y');
	gui.add(light.position, 'z', -5, 5, 0.1).name('라이트 Z');

	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		// const delta = clock.getDelta();
		const time = clock.getElapsedTime();

		// light.position.x = Math.cos(time) * 5;
		// light.position.z = Math.sin(time) * 5;

		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);
	}

	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	window.addEventListener('resize', setSize);

	draw();
}
