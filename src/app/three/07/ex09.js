import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// ----- 주제: 텍스쳐 이미지 로드

export default function example5(canvasRef) {
	
	// Texture 설정
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

	// CanvasTexture
	const texCanvas = document.createElement('canvas');
	const texContext = texCanvas.getContext('2d');
	texCanvas.width = 500;
	texCanvas.height = 500;
	const canvasTexture = new THREE.CanvasTexture(texCanvas);

	// texture loader
	const textureLoader = new THREE.TextureLoader(loadingManager);

	const ambientOccTex = textureLoader.load('../../brick/Terracotta_Tiles_002_ambientOcclusion.jpg');
	const baseColorTex = textureLoader.load('../../brick/Terracotta_Tiles_002_Base_Color.jpg');
	const heightTex = textureLoader.load('../../brick/Terracotta_Tiles_002_Height.png');
	const normalTex = textureLoader.load('../../brick/Terracotta_Tiles_002_Normal.jpg');
	const roughnessTex = textureLoader.load('../../brick/Terracotta_Tiles_002_Roughness.jpg');

	const topTexture = textureLoader.load('../../mcstyle/top.png');
	const bottomTexture = textureLoader.load('../../mcstyle/bottom.png');
	const backTexture = textureLoader.load('../../mcstyle/back.png');
	const frontTexture = textureLoader.load('../../mcstyle/front.png');
	const leftTexture = textureLoader.load('../../mcstyle/left.png');
	const rightTexture = textureLoader.load('../../mcstyle/right.png');

	const gradianTexture = textureLoader.load('../../gradient.png');


	// hdr -> cube
	const cubeTextureLoader = new THREE.CubeTextureLoader();
	const envTex_box = cubeTextureLoader
		.setPath('../../Standard-Cube-Map/')
		.load([
			// + - 순서
			'px.png', 'nx.png',
			'py.png', 'ny.png',
			'pz.png', 'nz.png'			
		]);

	const envTex_sky = cubeTextureLoader


	// Material 설정
	const materials = [
		new THREE.MeshBasicMaterial({map:rightTexture}),
		new THREE.MeshBasicMaterial({map:leftTexture}),
		new THREE.MeshBasicMaterial({map:topTexture}),
		new THREE.MeshBasicMaterial({map:bottomTexture}),
		new THREE.MeshBasicMaterial({map:frontTexture}),
		new THREE.MeshBasicMaterial({map:backTexture}),
	];

	// pixel
	rightTexture.magFilter = THREE.NearestFilter;
	topTexture.magFilter = THREE.NearestFilter;
	bottomTexture.magFilter = THREE.NearestFilter;
	frontTexture.magFilter = THREE.NearestFilter;
	leftTexture.magFilter = THREE.NearestFilter;
	backTexture.magFilter = THREE.NearestFilter;

	gradianTexture.magFilter = THREE.NearestFilter;

	// Renderer 설정
	const renderer = new THREE.WebGLRenderer({
		canvas:canvasRef.current,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

	// Scene
	const scene = new THREE.Scene();
	// scene.background = new THREE.Color('white');

	// background를 cubeTextureLoade로 꾸미기
	scene.background = cubeTextureLoader
		.setPath('../../Standard-Cube-Map/')
		.load([
			// + - 순서
			'px.png', 'nx.png',
			'py.png', 'ny.png',
			'pz.png', 'nz.png'			
		]);

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
	const ambientLight = new THREE.AmbientLight('white', 0.1);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight('white', 0.1);
	directionalLight.position.x = 0;
	directionalLight.position.z = 1;
	scene.add(directionalLight);

	// Controls 설정
	const controls = new OrbitControls(camera, renderer.domElement);

	// Mesh 설정
	const geometry = new THREE.BoxGeometry(1,1,1);
	const coneGeometry = new THREE.ConeGeometry(1,2,128);
	const sphereGeometry = new THREE.SphereGeometry(1);
	const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
	

	// Material 설정
	// 하이라이트, 반사광 재질 표현 가능.
	const toonMaterial = new THREE.MeshToonMaterial({ 
		color: 'plum',
		gradientMap: gradianTexture
		// roughness:0.2,
		// metalness: 0.3,
		// side:THREE.FrontSide
		// side:THREE.BackSide
		// map: texture
	});

	const normalMaterial = new THREE.MeshNormalMaterial({ });
	const material = new THREE.MeshNormalMaterial({ });
	const normalGeometry = new THREE.BoxGeometry(10, 5, 0.5);
	// 하이라이트, 반사광 재질 표현 가능.
	const materialBasic = new THREE.MeshStandardMaterial({ 
		// color: 'orangered',
		// roughness:0.2,
		// metalness: 0.3,
		// side:THREE.FrontSide
		// side:THREE.BackSide

		map: baseColorTex,
		roughness:0.3,
		metalness:0.3,
		normalMap: normalTex,
	});

	const hdrMaterial = new THREE.MeshBasicMaterial({
		// metalness:2,
		// roughness:8.1,
		// color:'gold'
		envMap: envTex_box
	});

	// canvas material
	const canvasMaterial = new THREE.MeshBasicMaterial({
		map: canvasTexture
	})
	
	// Mesh 등록
	const mesh = new THREE.Mesh(normalGeometry, materialBasic);
	const mesh1 = new THREE.Mesh(geometry, materials);
	const mesh2 = new THREE.Mesh(coneGeometry, toonMaterial);
	const mesh3 = new THREE.Mesh(sphereGeometry, normalMaterial);
	const mesh4 = new THREE.Mesh(sphereGeometry, material);
	const mesh5 = new THREE.Mesh(boxGeometry, hdrMaterial);
	const mesh6 = new THREE.Mesh(boxGeometry, canvasMaterial);

	mesh.position.set(0, 0, -5);
	mesh1.position.set(3,2,0);
	mesh2.position.set(-3,0,0);
	mesh3.position.set(-5,0,0);
	mesh4.position.set(5,0,0);
	mesh5.position.set(0,0,0);
	mesh6.position.set(0,3,0);
	
	scene.add(mesh);
	scene.add(mesh1);
	scene.add(mesh2);
	scene.add(mesh3);
	scene.add(mesh4);
	scene.add(mesh5);
	scene.add(mesh6)
	// 그리기
	const clock = new THREE.Clock();

	let cumsum = 0;
	function draw() {
		const delta = clock.getDelta();
		
		canvasMaterial.map.needsUpdate = true;

		texContext.fillStyle = 'green';
		texContext.fillRect(0, 0, 500, 500);
		texContext.fillStyle='white';
		texContext.fillRect(cumsum * 50, 100, 50, 50);
		texContext.font = 'bold 50px sans-serif';
		texContext.fillText('FRESHBELL', 200, 200);
		cumsum += delta;
		if (cumsum * 50 > 500)
			cumsum = 0;
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
