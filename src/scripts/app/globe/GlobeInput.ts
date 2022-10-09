import type GlobeData from "../data/GlobeData";
import GlobeInputData from "../data/GlobeInputData";
export default class GlobeInput{
    static globe: HTMLElement;
    static globeData: GlobeData;

    static mouseDown = false;
    static dragMousePos = {x: 0, y: 0};
    static curMousePos = {x: 0, y: 0};
    static originalGlobeRotation = {x: 0, y: 0};
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
        let globeRotation2d = {x: this.originalGlobeRotation.x, y: this.originalGlobeRotation.y};
        if(this.mouseDown){
            let globeRotationDelta = {x: this.curMousePos.y - this.dragMousePos.y, y: this.curMousePos.x - this.dragMousePos.x}; //swapped x and y to coincide with mouse movement
            globeRotationDelta.x *= this.DRAG_COEFF*this.zoom*this.ZOOM_ACTION_COEFF; 
            globeRotationDelta.y *= this.DRAG_COEFF*this.zoom*this.ZOOM_ACTION_COEFF;
            globeRotation2d.x += globeRotationDelta.x; globeRotation2d.y += globeRotationDelta.y;
        } 
        globeInputData.rotation2d = globeRotation2d;
        return globeInputData;
    }
    static onMouseDown(event: MouseEvent){
        this.dragMousePos = {x: event.clientX, y: event.clientY};
        this.originalGlobeRotation =  {x: this.globeData.rotation.x, y: this.globeData.rotation.y};
        this.mouseDown = true;
    }
    static onMouseUp(event: MouseEvent){
        this.originalGlobeRotation =  {x: this.globeData.rotation.x, y: this.globeData.rotation.y};
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