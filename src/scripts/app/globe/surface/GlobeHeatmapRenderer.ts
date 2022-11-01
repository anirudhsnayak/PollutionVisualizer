import SurfaceData from "./SurfaceData";
import * as THREE from "../../../utils/three.js";
export default class GlobeHeatmapRenderer{
    static heatmap = [];
    static canvas: HTMLCanvasElement;
    static mesh: THREE.Mesh;
    static init(){
        //project canvas onto globe
        this.createHeatmap();

        //DEBUG
        //this.addHeatmapPoints([{x:this.canvas.width*3/4, y:this.canvas.height/2}]);
    }
    static linkHeatmapCanvas(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        // //DEBUG
        // canvas.style.display = "block";
        // canvas.style.border = "1px solid black";
    }
    static addHeatmapPoints(heatmapPoints, color){
        let ctx = this.canvas.getContext("2d");
        //clear canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //draw heatmap points
        //console.log(heatmapPoints);
        for(let i = 0; i < heatmapPoints.length; i++){
            let heatmapPoint = heatmapPoints[i];
            let grd = ctx.createRadialGradient(heatmapPoint.x, heatmapPoint.y, 0.1, heatmapPoint.x, heatmapPoint.y, 3); //implementation may vary
            grd.addColorStop(0, color);
            grd.addColorStop(1, "rgba(255, 0, 0, 0)");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            //deal with overflow cases
            if(heatmapPoint.x < 10){
                ctx.fillRect(this.canvas.width-10, 0, 10, this.canvas.height);
            }
            if(heatmapPoint.x > this.canvas.width-10){
                ctx.fillRect(0, 0, 10, this.canvas.height);
            }
        }
        this.createHeatmap(); 
    }
    static clearHeatmap(){
        //delete mesh
        if(this.mesh==null){ return; }
        SurfaceData.scene.remove(this.mesh);
    }
    static createHeatmap(){
        let geometry = new THREE.SphereGeometry(SurfaceData.surfaceRadius, 64, 64);
        let heatmapTexture = new THREE.Texture(this.canvas);
        heatmapTexture.needsUpdate = true;
        let material = new THREE.MeshBasicMaterial({map: heatmapTexture, transparent: true});
        this.mesh = new THREE.Mesh(geometry, material);
        SurfaceData.scene.add(this.mesh);
    }
}