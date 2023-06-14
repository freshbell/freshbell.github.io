import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// ----- 주제: 텍스쳐 이미지 로드

export default function example5(canvasRef) {
	// 텍스쳐 이미지 로드
	const loadingManager = new THREE.LoadingManager();
	loadingManager.onStart = () => {
		console.log('로드 시작');
	}
	loadingManager.onProgress = (img) => {
		console.log(img + '로드');
	}
	loadingManager.onLoad = () => {
		console.log('로드 완료');
	}
	loadingManager.onError = () => {
		console.log('에러');
	}

	const textureLoader = new THREE.TextureLoader(loadingManager);
	const texture = textureLoader.load('../../skull/Ground Skull_basecolor.jpg');

	// 텍스쳐 변환
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;

	// texture.offset.x = 0.3;
	// texture.offset.y = 0.3;

	// texture.repeat.x = 2;
	// texture.repeat.y = 2;

	// texture.rotation = Math.PI * 0.25;
	texture.rotation = THREE.MathUtils.degToRad(45);
	texture.center.x = 0.5;
	texture.center.y = 0.5;

	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas:canvasRef.current,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

	// Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color('white');

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

	// Light -- 빛이 있어야 Mesh에 색이 생김.
	const ambientLight = new THREE.AmbientLight('white', 0.5);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight('white', 1);
	directionalLight.position.x = 1;
	directionalLight.position.z = 2;
	scene.add(directionalLight);

	// Controls
	const controls = new OrbitControls(camera, renderer.domElement);

	// Mesh
	const geometry = new THREE.BoxGeometry(1,1,1);
	// 하이라이트, 반사광 재질 표현 가능.
	const material = new THREE.MeshBasicMaterial({ 
		// color: 'orangered',
		// roughness:0.2,
		// metalness: 0.3,
		// side:THREE.FrontSide
		// side:THREE.BackSide
		map: texture
	});
	const mesh = new THREE.Mesh(geometry, material);

	mesh.position.set(0,0,0);
	
	scene.add(mesh);

	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		const delta = clock.getDelta();

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
