import SurfaceData from "./SurfaceData";
import * as THREE from "../../../utils/three.js";
export default class GlobeHeatmapRenderer{
    static heatmap = [];
    static canvas: HTMLCanvasElement;
    static init(){
        //project canvas onto globe
        let geometry = new THREE.SphereGeometry(SurfaceData.surfaceRadius, 64, 64);
        let texture = new THREE.Texture(this.canvas);
        texture.needsUpdate = true;
        let material = new THREE.MeshBasicMaterial({map: texture, transparent: true});
        let mesh = new THREE.Mesh(geometry, material);
        SurfaceData.scene.add(mesh);

        //DEBUG
        this.addHeatmapPoint(this.canvas.width*3/4, this.canvas.height/2, 100, "red");
    }
    static linkHeatmapCanvas(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        //DEBUG
        canvas.style.display = "block";
        canvas.style.border = "1px solid black";
    }
    static addHeatmapPoint(x: number, y: number, radius: number, color: string){
        let ctx = this.canvas.getContext("2d");
        let grd = ctx.createRadialGradient(x, y, 1, x, y, radius); //implementation may vary
        grd.addColorStop(0, color);
        grd.addColorStop(1, "rgba(255, 0, 0, 0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //may not work with more than one point
    }
}