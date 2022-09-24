import * as THREE from '../../scripts/utils/three.js';
export default class GlobeRenderer{
    static WIDTH: number; static HEIGHT: number;
    static scene = new THREE.Scene();
    static camera : THREE.PerspectiveCamera;
    static renderer = new THREE.WebGLRenderer();
    static globe: THREE.Mesh;

    static render() {
        this.renderer.render( this.scene, this.camera );
        //this.globe.rotation.x += 0.001;
        this.globe.rotation.y += -0.01;
    }
    
    static init(attach: HTMLElement, width: number, height: number) {
        this.WIDTH = width; this.HEIGHT = height;
        this.camera = new THREE.PerspectiveCamera( 75, this.WIDTH/this.HEIGHT, 0.1, 1000 );
        this.renderer.setSize( this.WIDTH, this.HEIGHT );
        this.globe = this.createGlobe();
        this.scene.add( this.globe );
        attach.appendChild( this.renderer.domElement );
        this.camera.position.z = 5;
    }

    static createGlobe(){
        let globe = new THREE.Mesh(
            new THREE.SphereGeometry(2, 64, 64),
            new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                wireframe: true
            })
        );
        //add globe texture to globe
        let texture = new THREE.TextureLoader().load( 'data/textures/earth.jpg' );
        let material = new THREE.MeshBasicMaterial( { map: texture } );
        globe.material = material;
        return globe;
    }
}