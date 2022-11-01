import GlobeInput from "./GlobeInput";
import GlobeRenderer from "./GlobeRenderer";
import GlobeData from "../data/GlobeData";
import type GlobeInputData from "../data/GlobeInputData";
import GlobeDataManager from "./GlobeDataManager";

export default class Globe{
    static globeData: GlobeData;
    static init(globe: HTMLElement, x: number, y: number){
        this.globeData = new GlobeData();
        GlobeRenderer.init(globe, x, y);
        GlobeInput.handle(globe);
        this.update();
    }
    static update(){ 
        requestAnimationFrame(()=>{Globe.update()}); //have to use lambda to keep 'this' context
        let globeInputData = GlobeInput.update(this.globeData);
        this.updateData(globeInputData);
        GlobeRenderer.render(this.globeData);
    }
    static updateData(globeInputData: GlobeInputData){
        this.globeData.cameraRotation.x = globeInputData.rotation2d.x;
        this.globeData.cameraRotation.y = globeInputData.rotation2d.y;
        this.globeData.zoom = globeInputData.zoom;
    }
}