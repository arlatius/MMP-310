//set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0, 8, 10);

const renderer = new THREE.WebGLRenderer({
	alpha: true
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

//lighting
const ambientLight = new THREE.AmbientLight(0xfff5ba, 0.1); // (color, intensity)
scene.add(ambientLight);

const hemLight = new THREE.HemisphereLight(0xffc9e8, 0x006887, 0.7); //sky color, ground color, intensity
scene.add(hemLight);

const directionalLight = new THREE.DirectionalLight(0xff2676, 0.5);
scene.add(directionalLight);
directionalLight.position.set(-20, 10, 10);
directionalLight.castShadow = true;

//Set up shadow properties for the light
directionalLight.shadow.mapSize.width = 512; // default
directionalLight.shadow.mapSize.height = 512; // default
directionalLight.shadow.camera.near = 0.5; // default
directionalLight.shadow.camera.far = 500; // default

//scene

const width = 20;

//street
const streetGeo = new THREE.PlaneGeometry(width, 5.8);
const streetMat = new THREE.MeshStandardMaterial({
	color: 0x636363,
	side: THREE.DoubleSide
});
streetMat.metalness = 0.5;
const street = new THREE.Mesh(streetGeo, streetMat);
street.rotation.x = Math.PI * -0.5;
street.receiveShadow = true;
scene.add(street); 

const noiseTexture = new THREE.TextureLoader().load( 'textures/noise.png' );

//sidewalk
for (let x = -width / 2; x < width / 2; x += 1) {
	const geo = new THREE.BoxGeometry(0.95, 0.1, 0.95);
	const mat = new THREE.MeshStandardMaterial({
		color: 0xffffff,
		map: noiseTexture
	});
	mat.metalness = 0.5;

	const sidewalk1 = new THREE.Mesh(geo, mat);
	sidewalk1.position.set(x + 0.5, 0.05, -2.4);
	sidewalk1.receiveShadow = true;
	scene.add(sidewalk1);
	
	const sidewalk3 = new THREE.Mesh(geo, mat);
	sidewalk3.position.set(x + 0.5, 0.05, -3.4);
	sidewalk3.receiveShadow = true;
	scene.add(sidewalk3);
	
	const sidewalk4 = new THREE.Mesh(geo, mat);
	sidewalk4.position.set(x + 0.5, 0.05, -4.4);
	sidewalk4.receiveShadow = true;
	scene.add(sidewalk4);



	const sidewalk2 = new THREE.Mesh(geo, mat);
	sidewalk2.position.set(x + 0.5, 0.05, 2.4);
	sidewalk2.receiveShadow = true;
	scene.add(sidewalk2);
}

//street lamps
for (let x = -width / 2; x < width; x += 5) {
	const light = new THREE.PointLight(0xfbff26, 0.4, 10);
	light.position.set(x, 2, -1);
	scene.add(light);

	light.castShadow = true;

	light.shadow.mapSize.width = 512; // default
	light.shadow.mapSize.height = 512; // default
	light.shadow.camera.near = 0.5; // default
	light.shadow.camera.far = 500; // default

	const geo = new THREE.CylinderGeometry(0.1, 0.15, 2, 5);
	const mat = new THREE.MeshStandardMaterial({
		color: 0x454545,
		metalness: 1,
		roughness: 0.5
	});

	const post = new THREE.Mesh(geo, mat);
	post.position.set(x, 1, -2.2)
	post.castShadow = true;
	post.receiveShadow = true; 
	scene.add(post);

	const lampGeo = new THREE.IcosahedronGeometry(0.4);
	const lampMat = new THREE.MeshStandardMaterial({
		color: 0xfbff26,
		metalness: 0.5,
		roughness: 0,
		emissive: new THREE.Color(0xfbff26),
		emissiveIntensity: 0.5
	});


	const lamp = new THREE.Mesh(lampGeo, lampMat);
	lampMat.transparent = true;
	lampMat.opacity = 0.7
	lamp.position.set(x, 2.1, -2.2);
	lamp.castShadow = true;
	scene.add(lamp);
}


//buildings 
for (let x = -width / 2; x < width / 2; x += 4) {
	const h = random(5, 8);
	const w = 3.5;
	const geo = new THREE.BoxGeometry(w, h, w);
	const mat = new THREE.MeshStandardMaterial({
		color: 0xaecce6
	});
	const building = new THREE.Mesh(geo, mat);
	building.position.set(x + w / 2, h / 2, -6.6);
	building.castShadow = true;
	building.receiveShadow = true; 
	scene.add(building);
}

//trees
const numTrees = random(4, 6);
for (let i = 0; i < numTrees; i++) {
	const tree = new THREE.Group();
	const h = random(2, 4);

	//trunk
	const geo = new THREE.CylinderGeometry(0.125, 0.25, h, 5);
	const mat = new THREE.MeshStandardMaterial({
		color: 0x7a592b,
		metalness: 0.5
	});
	const trunk = new THREE.Mesh(geo, mat);
	trunk.castShadow = true;
	trunk.receiveShadow = true; 
	tree.add(trunk);

	//leaves
	const numLeaves = random(10, 20);
	for (let j = 0; j < numLeaves; j++) {
		const leafGeo = new THREE.IcosahedronGeometry(random(0.25));
		const leafMat = new THREE.MeshStandardMaterial({
			color: 0xc2000a,
			emissive: new THREE.Color(0xd44a00),
			emissiveIntensity: 0.1

		});
		const leaf = new THREE.Mesh(leafGeo, leafMat);

		let x = random(-0.5, 0.5);
		let y = random(-0.25, 0.25);
		let z = random(-0.5, 0.5);
		leaf.position.set(x, h / 2 + y, z)
		leaf.rotation.x = random(0, Math.PI * 0.5);
		leaf.rotation.y = random(0, Math.PI * 0.5);
		
		leaf.castShadow = true;
	leaf.receiveShadow = true; 
		tree.add(leaf);
	}


	let x = random(-width / 2, width / 2);
	let y = h / 2;
	let z = random(-3.2, -3.5);
	tree.position.set(x, y, z);
	scene.add(tree);
}


//random range function

function random(min, max) {
	return Math.random() * (max - min) + min;
}

//loader
const loader = new THREE.ObjectLoader();

loader.load('bench.json', onLoad);

function onLoad(bench) {

	bench.scale.set(0.5, 0.5, 0.5);
	bench.position.set(2, 0.1, -2);


	scene.add(bench);
	animate();
}
//anuimate
function animate() {

	controls.update();

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
