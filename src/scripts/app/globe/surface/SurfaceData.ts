import type * as THREE from "../../../utils/three.js";
export default class SurfaceData{
    static get SURFACE_RADIUS_OFFSET(){return 0.01;}
    static surfaceRadius: number;
    static scene: THREE.Scene;
    static init(globeRadius: number, scene: THREE.Scene){
        this.surfaceRadius = globeRadius + this.SURFACE_RADIUS_OFFSET;
        this.scene = scene;
    }
}