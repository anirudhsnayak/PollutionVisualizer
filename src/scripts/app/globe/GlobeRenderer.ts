import * as THREE from '../../utils/three.js';
import type GlobeData from '../data/GlobeData';
import type GlobeInputData from '../data/GlobeInputData';
import DataUtils from '../../utils/DataUtils';
export default class GlobeRenderer{
    static WIDTH: number; static HEIGHT: number;
    static RADIUS: number = 2;
    static scene = new THREE.Scene();
    static camera : THREE.PerspectiveCamera;
    static renderer = new THREE.WebGLRenderer();
    static globe: THREE.Mesh;
    
    static cameraBasePosition = new THREE.Vector3(0, 0, 5);
    

    static render(globeData: GlobeData){
        this.renderer.render( this.scene, this.camera );
        DataUtils.assignVector3(this.globe.rotation, globeData.rotation);
        let cameraPosition = this.cameraBasePosition.clone().multiplyScalar(globeData.zoom); //if expensive, then just change when zoom changes
        DataUtils.assignVector3(this.camera.position, cameraPosition);
    }
     
    static init(attach: HTMLElement, width: number, height: number) {
        this.WIDTH = width; this.HEIGHT = height;
        this.camera = new THREE.PerspectiveCamera( 75, this.WIDTH/this.HEIGHT, 0.1, 1000 );
        this.renderer.setSize( this.WIDTH, this.HEIGHT );
        this.globe = this.createGlobe();
        this.scene.add( this.globe );
        attach.appendChild( this.renderer.domElement );
    }

    static createGlobe(){
        let globe = new THREE.Mesh(
            new THREE.SphereGeometry(this.RADIUS, 64, 64),
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