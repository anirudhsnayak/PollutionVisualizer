import * as THREE from '../../utils/three.js';
import type GlobeData from '../data/GlobeData';
import DataUtils from '../../utils/DataUtils';
import GlobeSurfaceRender from './surface/GlobeSurfaceRenderer.js';
import MathUtils from '../../utils/MathUtils.js';
export default class GlobeRenderer{
    static WIDTH: number; static HEIGHT: number; //TODO: change naming convention
    static get RADIUS(){return 1;}
    static get CAMERA_BASE_RADIUS(){return 3;}
    static scene = new THREE.Scene();
    static camera : THREE.PerspectiveCamera;
    static renderer = new THREE.WebGLRenderer();
    static globe: THREE.Mesh;
    
    static render(globeData: GlobeData){
        this.updateCameraPosition(globeData);
        this.renderer.render( this.scene, this.camera );
    }
     
    static init(attach: HTMLElement, width: number, height: number) {
        this.WIDTH = width; this.HEIGHT = height;
        this.camera = new THREE.PerspectiveCamera( 75, this.WIDTH/this.HEIGHT, 0.1, 1000 );
        this.renderer.setSize( this.WIDTH, this.HEIGHT );
        this.globe = this.createGlobe();
        this.scene.add( this.globe );
        attach.appendChild( this.renderer.domElement );
        GlobeSurfaceRender.init(this.RADIUS, this.scene);
    }

    static createGlobe(){
        let globe = new THREE.Mesh(
            new THREE.SphereGeometry(this.RADIUS, 64, 64),
            new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                wireframe: true
            })
        );
        let texture = new THREE.TextureLoader().load( 'data/textures/earth.jpg' );
        let material = new THREE.MeshBasicMaterial( { map: texture } );
        globe.material = material;
        return globe;
    }

    static updateCameraPosition(globeData: GlobeData){
        let cameraBasePosition = MathUtils.getPointOnSphere(-globeData.cameraRotation.x, globeData.cameraRotation.y, this.CAMERA_BASE_RADIUS);
        cameraBasePosition.multiplyScalar(globeData.zoom); //if expensive, then just change when zoom changes
        DataUtils.assignVector3(this.camera.position, cameraBasePosition);
        this.camera.lookAt(0, 0, 0);
    }

    static linkHeatmapCanvas(heatmapCanvas: HTMLCanvasElement){
        GlobeSurfaceRender.linkHeatmapCanvas(heatmapCanvas);
    }
}