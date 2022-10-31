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
        //this.addHeatmapPoints([{x:this.canvas.width*3/4, y:this.canvas.height/2}]);
    }
    static linkHeatmapCanvas(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        //DEBUG
        canvas.style.display = "block";
        canvas.style.border = "1px solid black";
    }
    static addHeatmapPoints(heatmapPoints){
        let ctx = this.canvas.getContext("2d");
        for(let i = 0; i < heatmapPoints.length; i++){
            let heatmapPoint = heatmapPoints[i];
            let grd = ctx.createRadialGradient(heatmapPoint.x, heatmapPoint.y, 1, heatmapPoint.x, heatmapPoint.y, 100); //implementation may vary
            console.log(heatmapPoint.x); console.log(heatmapPoint.y);
            grd.addColorStop(0, "red");
            grd.addColorStop(1, "rgba(255, 0, 0, 0)");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); 
        }
        //update globe
        this.updateGlobe();
    }
    static clearHeatmap(){
        let ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updateGlobe();
    }
    static updateGlobe(){
        let texture = new THREE.Texture(this.canvas);
        texture.needsUpdate = true;
        let material = new THREE.MeshBasicMaterial({map: texture, transparent: true});
        SurfaceData.scene.children[1].material = material;
    }
}