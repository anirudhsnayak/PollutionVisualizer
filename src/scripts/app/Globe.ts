import GlobeActionHandler from "./GlobeActionHandler";
import GlobeRenderer from "./GlobeRenderer";
import GlobeData from "./GlobeData";

export default class Globe{
    static globeData: GlobeData;
    static init(globe: HTMLElement, x: number, y: number){
        this.globeData = new GlobeData();
        GlobeRenderer.init(globe, x, y);
        GlobeActionHandler.handle(globe);
        this.update();
    }
    static update(){ 
        requestAnimationFrame(()=>{Globe.update()}); //have to use lambda to keep 'this' context
        let temp = GlobeActionHandler.update();
        this.globeData.eulerRotation.x = temp.x;
        this.globeData.eulerRotation.y = temp.y;
        GlobeRenderer.render(this.globeData);
    }
}