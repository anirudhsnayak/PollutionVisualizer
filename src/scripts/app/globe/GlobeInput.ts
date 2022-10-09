import type GlobeData from "../data/GlobeData";
import GlobeInputData from "../data/GlobeInputData";
export default class GlobeInput{
    static globe: HTMLElement;
    static globeData: GlobeData;

    static mouseDown = false;
    static dragMousePos = {x: 0, y: 0};
    static curMousePos = {x: 0, y: 0};
    static originalCameraRotation = {x: 0, y: 0};
    static get DRAG_COEFF(){return 0.003;} //budget const

    static zoom = 1;
    static get ZOOM_COEFF() {return 0.001;}
    static get ZOOM_MIN(){return 0.5;}
    static get ZOOM_MAX() {return 2;}

    static get ZOOM_ACTION_COEFF(){return 1}; //input sensitivity proportional to zoom

    static handle(globe: HTMLElement){
        this.globe = globe;
        globe.addEventListener('mousedown', (e)=>{GlobeInput.onMouseDown(e)}, false);
        globe.addEventListener('mouseup', (e)=>{GlobeInput.onMouseUp(e)}, false);
        globe.addEventListener('mousemove', (e)=>{GlobeInput.onMouseMove(e)}, false);
        globe.addEventListener('wheel', (e)=>{GlobeInput.onMouseWheel(e)}, false);
    }
    static update(globeData: GlobeData){ 
        this.globeData = globeData;
        let globeInputData = new GlobeInputData();
        globeInputData.zoom = this.zoom;
        let cameraRotation2d = {x: this.originalCameraRotation.x, y: this.originalCameraRotation.y};
        if(this.mouseDown){
            let cameraRotationDelta = {x: this.curMousePos.x - this.dragMousePos.x, y: this.curMousePos.y - this.dragMousePos.y}; 
            cameraRotationDelta.x *= this.DRAG_COEFF*this.zoom*this.ZOOM_ACTION_COEFF; 
            cameraRotationDelta.y *= this.DRAG_COEFF*this.zoom*this.ZOOM_ACTION_COEFF;
            cameraRotation2d.x += cameraRotationDelta.x; cameraRotation2d.y += cameraRotationDelta.y;
            cameraRotation2d.y = Math.min(Math.max(cameraRotation2d.y, -Math.PI/2), Math.PI/2);
        } 
        globeInputData.rotation2d = cameraRotation2d;
        return globeInputData;
    }
    static onMouseDown(event: MouseEvent){
        this.dragMousePos = {x: event.clientX, y: event.clientY};
        this.originalCameraRotation =  {x: this.globeData.cameraRotation.x, y: this.globeData.cameraRotation.y};
        this.mouseDown = true;
    }
    static onMouseUp(event: MouseEvent){
        this.originalCameraRotation =  {x: this.globeData.cameraRotation.x, y: this.globeData.cameraRotation.y};
        this.mouseDown = false;
    }
    static onMouseMove(event: MouseEvent){
        this.curMousePos = {x: event.clientX, y: event.clientY};
    }
    static onMouseWheel(event: WheelEvent){
        this.zoom += event.deltaY*this.ZOOM_COEFF*this.zoom*this.ZOOM_ACTION_COEFF;
        this.zoom = Math.min(Math.max(this.zoom, this.ZOOM_MIN), this.ZOOM_MAX);
        //console.log(this.zoom);
    }
}