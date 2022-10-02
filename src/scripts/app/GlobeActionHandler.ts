export default class GlobeActionHandler{
    static globe: HTMLElement;
    static dragMousePosStart = {x: 0, y: 0};
    static handle(globe: HTMLElement){
        this.globe = globe;
        globe.addEventListener('mousedown', (e)=>{GlobeActionHandler.onMouseDown(e)}, false);
        globe.addEventListener('mouseup', (e)=>{GlobeActionHandler.onMouseUp(e)}, false);
    }
    static update(){
        return this.dragMousePosStart; //TODO: make a new data object to return
    }
    static onMouseDown(event: MouseEvent){
        this.dragMousePosStart = {x: event.clientX, y: event.clientY};
        console.log("mouse down");
        //console.log(this.dragMousePosStart);
    }
    static onMouseUp(event: MouseEvent){
        console.log("mouse up");
    }
}