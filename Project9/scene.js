//set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0, 8, 10);

const renderer = new THREE.WebGLRenderer({
	alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

//scene

const width = 20;

//street
const streetGeo = new THREE.PlaneGeometry(width, 5.8);
const streetMat = new THREE.MeshBasicMaterial({
	color: 0x636363,
	side: THREE.DoubleSide
});
const street = new THREE.Mesh(streetGeo, streetMat);
street.rotation.x = Math.PI * -0.5;
scene.add(street)

//sidewalk
for (let x = -width / 2; x < width / 2; x += 1) {
	const geo = new THREE.BoxGeometry(0.95, 0.1, 0.95);
	const mat = new THREE.MeshBasicMaterial({
		color: 0xbfbdbd
	});
	const sidewalk1 = new THREE.Mesh(geo, mat);
	sidewalk1.position.set(x + 0.5, 0.05, -2.4);
	scene.add(sidewalk1);



	const sidewalk2 = new THREE.Mesh(geo, mat);
	sidewalk2.position.set(x + 0.5, 0.05, 2.4);
	scene.add(sidewalk2);
}

//buildings 
for (let x = -width / 2; x < width / 2; x += 4) {
	const h = random(5, 8);
	const w = 3.5;
	const geo = new THREE.BoxGeometry(w, h, w);
	const mat = new THREE.MeshBasicMaterial({
		color: 0xaecce6
	});
	const building = new THREE.Mesh(geo, mat);
	building.position.set(x + w / 2, h / 2, -4.6);
	scene.add(building);
}

//trees
const numTrees = random(4, 6);
for (let i = 0; i < numTrees; i++) {
	const tree = new THREE.Group();
	const h = random(1, 3);

	//trunk
	const geo = new THREE.CylinderGeometry(0.125, 0.25, h, 5);
	const mat = new THREE.MeshBasicMaterial({color: 0x7a592b});
	const trunk = new THREE.Mesh (geo,mat);
	tree.add(trunk);
	
	//leaves
	const numLeaves = random(10,20);
	for (let j = 0; j < numLeaves; j++) {
		const leafGeo = new THREE.IcosahedronGeometry(random(0.25));
		const leafMat = new THREE.MeshBasicMaterial({color: 0x37a36a});
		const leaf = new THREE.Mesh(leafGeo,leafMat);
		
		let x = random(-0.5,0.5);
		let y = random(-0.25,0.25);
		let z = random(-0.5,0.5);
		leaf.position.set(x,h/2 + y,z)
		leaf.rotation.x = random(0,Math.PI *0.5);
		leaf.rotation.y = random(0,Math.PI *0.5);
		tree.add(leaf);
	}
	
	
	let x =random(-width/2, width/2);
	let y = h/2;
	let z =random(-2.2,-2.5);
	tree.position.set (x, y,z);
	scene.add(tree);
}


//random range function

function random(min, max) {
	return Math.random() * (max - min) + min;
}

//loader
const loader = new THREE.ObjectLoader();

loader.load('bench.json',onLoad);

function onLoad( bench){
	
	bench.scale.set(0.5,0.5,0.5);
	bench.position.set(0,0.1,-1.7);
	
	scene.add(bench);
	animate();
}
//anuimate
function animate() {

	controls.update();

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

