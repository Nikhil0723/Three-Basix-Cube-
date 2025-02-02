console.log(THREE);

const canvas = document.querySelector('.webgl');

// scene
const scene = new THREE.Scene();

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = { width: innerWidth, height: innerHeight };

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 1;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);


renderer.render(scene, camera);